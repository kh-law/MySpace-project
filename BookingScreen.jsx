const MONTH_NAMES = ["січня", "лютого", "березня", "квітня", "травня", "червня", "липня", "серпня", "вересня", "жовтня", "листопада", "грудня"];
const MONTH_TITLES = ["Січень", "Лютий", "Березень", "Квітень", "Травень", "Червень", "Липень", "Серпень", "Вересень", "Жовтень", "Листопад", "Грудень"];
const WEEKDAYS = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Нд"];
const OPEN_FROM = 10, OPEN_TO = 24;
const RATE_FIRST = 1600, RATE_NEXT = 900, RATE_EXTRA_GUEST = 250, BASE_GUESTS = 8;

const POPCORN_FLAVOURS = ["Солоний", "Сирний", "Карамельний"];
const POPCORN_SIZES = [{ id: "S", vol: "0,75 л", price: 75 }, { id: "M", vol: "1 л", price: 125 }, { id: "L", vol: "2,5 л", price: 175 }];
const DRINKS = [{ id: "pepsi", label: "Pepsi 0,33 л", price: 50 }, { id: "cola", label: "Coca-Cola 0,33 л", price: 50 }];

// Заповни після налаштування — див. integrations.md
const APPS_SCRIPT_URL = ""; // Web app URL з Google Apps Script (Sheets + Telegram)
const LIQPAY_URL = "";      // платіжне посилання LiqPay

const TODAY = new Date();
const MONTHS = [
  { y: TODAY.getFullYear(), m: TODAY.getMonth() },
  { y: TODAY.getMonth() === 11 ? TODAY.getFullYear() + 1 : TODAY.getFullYear(), m: (TODAY.getMonth() + 1) % 12 }
];

const hh = (h) => String(h % 24).padStart(2, "0") + ":00";
const hhEnd = (h) => (h === 24 ? "24:00" : hh(h));
const key = (y, m, d) => y + "-" + m + "-" + d;

// Зайняті години приходять з Google Sheets через Apps Script (JSONP — обхід CORS).
// Формат відповіді: { "2026-8-14": [18,19,20], ... }  (місяць 0-індексований)
function fetchBooked() {
  return new Promise((resolve) => {
    if (!APPS_SCRIPT_URL) { resolve({}); return; }
    const cb = "msBooked" + Date.now();
    const s = document.createElement("script");
    const done = (data) => { try { delete window[cb]; } catch (e) {} s.remove(); resolve(data && typeof data === "object" ? data : {}); };
    window[cb] = done;
    s.src = APPS_SCRIPT_URL + (APPS_SCRIPT_URL.indexOf("?") === -1 ? "?" : "&") + "action=booked&callback=" + cb;
    s.onerror = () => done({});
    document.head.appendChild(s);
    setTimeout(() => { if (window[cb]) done({}); }, 8000);
  });
}

function localBooked() {
  try { return JSON.parse(localStorage.getItem("myspace:booked") || "{}"); } catch (e) { return {}; }
}

function saveLocalBooked(k, from, to) {
  const all = localBooked();
  const arr = new Set(all[k] || []);
  for (let h = from; h < to; h++) arr.add(h);
  all[k] = [...arr].sort((a, b) => a - b);
  try { localStorage.setItem("myspace:booked", JSON.stringify(all)); } catch (e) {}
  return all;
}

function priceFor(hours) {
  if (hours <= 0) return 0;
  return RATE_FIRST + (hours - 1) * RATE_NEXT;
}

function Calendar({ mi, setMi, sel, onPick }) {
  const { y, m } = MONTHS[mi];
  const first = new Date(y, m, 1);
  const offset = (first.getDay() + 6) % 7;
  const days = new Date(y, m + 1, 0).getDate();
  const todayKey = key(TODAY.getFullYear(), TODAY.getMonth(), TODAY.getDate());
  const cells = [];
  for (let i = 0; i < offset; i++) cells.push(null);
  for (let d = 1; d <= days; d++) cells.push(d);

  return (
    <Card padding="var(--space-8)">
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "var(--space-6)" }}>
        <IconButton label="Попередній місяць" onClick={() => setMi(Math.max(0, mi - 1))}><i data-lucide="chevron-left"></i></IconButton>
        <span style={{ font: "var(--type-h4)", fontFamily: "var(--font-display)", color: "var(--text-display)" }}>{MONTH_TITLES[m]} {y}</span>
        <IconButton label="Наступний місяць" onClick={() => setMi(Math.min(MONTHS.length - 1, mi + 1))}><i data-lucide="chevron-right"></i></IconButton>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(7,1fr)", gap: "var(--space-2)" }}>
        {WEEKDAYS.map((w) => <Label key={w} style={{ color: "var(--text-faint)", textAlign: "center", paddingBottom: "var(--space-2)" }}>{w}</Label>)}
        {cells.map((d, i) => {
          if (d === null) return <span key={"e" + i} />;
          const k = key(y, m, d);
          const past = new Date(y, m, d) < new Date(TODAY.getFullYear(), TODAY.getMonth(), TODAY.getDate());
          const active = sel === k;
          const isToday = k === todayKey;
          return (
            <button key={k} type="button" disabled={past} onClick={() => onPick(y, m, d)}
              style={{ height: 46, borderRadius: "var(--radius-sm)", border: "1px solid " + (active ? "var(--white)" : isToday ? "var(--border-strong)" : "var(--border-hairline)"), background: active ? "var(--surface-invert)" : "transparent", color: past ? "var(--text-faint)" : active ? "var(--text-on-invert)" : "var(--text-body)", font: "var(--type-body-sm)", fontFamily: "var(--font-mono)", cursor: past ? "default" : "pointer", opacity: past ? .35 : 1, transition: "var(--transition-control)" }}>{d}</button>
          );
        })}
      </div>
      <div style={{ marginTop: "var(--space-6)", display: "flex", gap: "var(--space-6)", flexWrap: "wrap" }}>
        {[["Вибрано", "var(--white)"], ["Сьогодні", "var(--border-strong)"]].map(([t, c]) => (
          <span key={t} style={{ display: "flex", alignItems: "center", gap: "var(--space-2)" }}>
            <span style={{ width: 12, height: 12, borderRadius: 3, border: "1px solid " + c }} />
            <Label style={{ color: "var(--text-faint)" }}>{t}</Label>
          </span>
        ))}
      </div>
    </Card>
  );
}

function HourGrid({ y, m, d, from, to, setRange, booked }) {
  const busy = new Set(booked || []);
  const hours = [];
  for (let h = OPEN_FROM; h < OPEN_TO; h++) hours.push(h);

  const click = (h) => {
    if (busy.has(h)) return;
    if (from === null) { setRange(h, h + 1); return; }
    if (h === from && to === from + 1) { setRange(null, null); return; }
    const lo = Math.min(h, from), hi = Math.max(h, from);
    for (let x = lo; x <= hi; x++) if (busy.has(x)) { setRange(h, h + 1); return; }
    setRange(lo, hi + 1);
  };

  const inRange = (h) => from !== null && to !== null && h >= from && h < to;

  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "var(--space-2)" }}>
      {hours.map((h) => {
        const isBusy = busy.has(h);
        const on = inRange(h);
        return (
          <button key={h} type="button" onClick={() => click(h)} disabled={isBusy}
            style={{ height: 42, borderRadius: "var(--radius-sm)", border: "1px solid " + (on ? "var(--white)" : "var(--border-default)"), background: on ? "var(--surface-invert)" : "transparent", color: isBusy ? "var(--text-faint)" : on ? "var(--text-on-invert)" : "var(--text-body)", fontFamily: "var(--font-mono)", fontSize: 13, cursor: isBusy ? "default" : "pointer", textDecoration: isBusy ? "line-through" : "none", opacity: isBusy ? .4 : 1, transition: "var(--transition-control)" }}>{hh(h)}</button>
        );
      })}
    </div>
  );
}

function Stepper({ value, onChange }) {
  const b = { width: 28, height: 28, borderRadius: "var(--radius-sm)", border: "1px solid var(--border-default)", background: "transparent", color: "var(--text-body)", cursor: "pointer", font: "var(--type-body-sm)", lineHeight: 1, transition: "var(--transition-control)" };
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "var(--space-3)" }}>
      <button type="button" style={b} onClick={() => onChange(Math.max(0, value - 1))} aria-label="Менше">−</button>
      <span style={{ fontFamily: "var(--font-mono)", fontSize: 13, color: value ? "var(--white)" : "var(--text-faint)", minWidth: 14, textAlign: "center" }}>{value}</span>
      <button type="button" style={b} onClick={() => onChange(value + 1)} aria-label="Більше">+</button>
    </div>
  );
}

function Snacks({ popcorn, setPopcorn, drinks, setDrinks }) {
  const [flavour, setFlavour] = React.useState(POPCORN_FLAVOURS[0]);
  const rowStyle = { display: "flex", alignItems: "center", justifyContent: "space-between", gap: "var(--space-4)", paddingBottom: "var(--space-3)", borderBottom: "1px solid var(--border-hairline)" };
  const setQty = (id, q) => setPopcorn((p) => { const n = { ...p }; if (q <= 0) delete n[id]; else n[id] = q; return n; });
  return (
    <Card padding="var(--space-8)">
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-6)" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
          <Label>Попкорн</Label>
          <div style={{ display: "flex", gap: "var(--space-2)", flexWrap: "wrap" }}>
            {POPCORN_FLAVOURS.map((f) => <Tag key={f} selected={flavour === f} onClick={() => setFlavour(f)}>{f}</Tag>)}
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
            {POPCORN_SIZES.map((s) => {
              const id = flavour + " " + s.id;
              return (
                <div key={s.id} style={rowStyle}>
                  <span style={{ display: "flex", alignItems: "baseline", gap: "var(--space-3)" }}>
                    <span style={{ font: "var(--type-body)", color: "var(--text-display)" }}>{s.id}</span>
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--text-faint)" }}>{s.vol} · {s.price} грн</span>
                  </span>
                  <Stepper value={popcorn[id] || 0} onChange={(q) => setQty(id, q)} />
                </div>
              );
            })}
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
          <Label>Напої</Label>
          {DRINKS.map((d) => (
            <div key={d.id} style={rowStyle}>
              <span style={{ display: "flex", alignItems: "baseline", gap: "var(--space-3)" }}>
                <span style={{ font: "var(--type-body)", color: "var(--text-display)" }}>{d.label}</span>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--text-faint)" }}>{d.price} грн</span>
              </span>
              <Stepper value={drinks[d.id] || 0} onChange={(q) => setDrinks((p) => { const n = { ...p }; if (q <= 0) delete n[d.id]; else n[d.id] = q; return n; })} />
            </div>
          ))}
        </div>
        <span style={{ font: "var(--type-body-sm)", fontSize: 13, color: "var(--text-faint)" }}>Снеки додаються до суми бронювання і чекають вас у залі.</span>
      </div>
    </Card>
  );
}

function BookingScreen({ onBooked }) {
  const [mi, setMi] = React.useState(0);
  const [sel, setSel] = React.useState(key(TODAY.getFullYear(), TODAY.getMonth(), TODAY.getDate()));
  const [from, setFrom] = React.useState(null);
  const [to, setTo] = React.useState(null);
  const [guests, setGuests] = React.useState("4");
  const [bigGroup, setBigGroup] = React.useState("9");
  const [booked, setBooked] = React.useState(localBooked());
  const [popcorn, setPopcorn] = React.useState({});
  const [drinks, setDrinks] = React.useState({});
  const [loading, setLoading] = React.useState(!!APPS_SCRIPT_URL);

  React.useEffect(() => {
    let alive = true;
    fetchBooked().then((remote) => {
      if (!alive) return;
      const local = localBooked();
      const merged = { ...remote };
      Object.keys(local).forEach((k) => { merged[k] = [...new Set([...(merged[k] || []), ...local[k]])]; });
      setBooked(merged);
      setLoading(false);
    });
    return () => { alive = false; };
  }, []);
  const [contact, setContact] = React.useState({ name: "", phone: "", telegram: "", film: "" });
  const [err, setErr] = React.useState({});

  const [sy, sm, sd] = sel.split("-").map(Number);
  const hours = from !== null && to !== null ? to - from : 0;
  const people = guests === "8+" ? Math.max(9, Number(bigGroup) || 9) : Number(guests);
  const extra = Math.max(0, people - BASE_GUESTS) * RATE_EXTRA_GUEST;
  const snackItems = [
    ...Object.keys(popcorn).map((id) => {
      const size = POPCORN_SIZES.find((s) => s.id === id.split(" ").pop());
      return { label: "Попкорн " + id.toLowerCase(), qty: popcorn[id], price: size ? size.price : 0 };
    }),
    ...Object.keys(drinks).map((id) => {
      const d = DRINKS.find((x) => x.id === id);
      return { label: d.label, qty: drinks[id], price: d.price };
    })
  ];
  const snacksTotal = snackItems.reduce((s, i) => s + i.qty * i.price, 0);
  const total = hours ? priceFor(hours) + extra + snacksTotal : 0;
  const setRange = (a, b) => { setFrom(a); setTo(b); };
  const pickDay = (y, m, d) => { setSel(key(y, m, d)); setRange(null, null); };
  const set = (k) => (e) => setContact((c) => ({ ...c, [k]: e.target.value }));

  const pay = () => {
    const e = {};
    if (!contact.name.trim()) e.name = "Вкажи ім'я";
    if (!contact.phone.trim() && !contact.telegram.trim()) e.phone = "Потрібен телефон або Telegram";
    setErr(e);
    if (Object.keys(e).length || !hours) return;
    const payload = {
      date: sd + " " + MONTH_NAMES[sm] + " " + sy,
      time: hh(from) + "–" + hhEnd(to),
      hours, guests: people, total, dayKey: sel,
      name: contact.name, phone: contact.phone, telegram: contact.telegram, film: contact.film,
      snacks: snackItems.map((i) => i.label + " ×" + i.qty).join(", "),
      status: "очікує оплати", createdAt: new Date().toISOString()
    };
    try { const q = JSON.parse(localStorage.getItem("myspace:bookings") || "[]"); q.push(payload); localStorage.setItem("myspace:bookings", JSON.stringify(q)); } catch (x) {}
    const all = saveLocalBooked(sel, from, to);
    setBooked((b) => ({ ...b, [sel]: [...new Set([...(b[sel] || []), ...all[sel]])] }));
    setRange(null, null);
    if (APPS_SCRIPT_URL) {
      fetch(APPS_SCRIPT_URL, { method: "POST", mode: "no-cors", headers: { "Content-Type": "text/plain;charset=utf-8" }, body: JSON.stringify(payload) }).catch(() => {});
    }
    onBooked && onBooked(payload);
    if (LIQPAY_URL) {
      const sep = LIQPAY_URL.indexOf("?") === -1 ? "?" : "&";
      window.location.href = LIQPAY_URL + sep + "amount=" + total + "&info=" + encodeURIComponent(payload.date + " " + payload.time + " · " + payload.name);
    }
  };

  const rows = [
    ["Дата", sd + " " + MONTH_NAMES[sm]],
    ["Час", hours ? hh(from) + "–" + hhEnd(to) : "не вибрано"],
    ["Тривалість", hours ? hours + (hours === 1 ? " година" : hours < 5 ? " години" : " годин") : "—"],
    ["Гостей", people],
    ...(extra ? [["Доплата за гостей", "+" + extra + " грн"]] : []),
    ...(snacksTotal ? [["Снеки", "+" + snacksTotal + " грн"]] : []),
    ["Фільм", contact.film.trim() || "оберемо на місці"]
  ];

  return (
    <Section tight>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "var(--space-12)" }}>
        <SectionHeading align="center" eyebrow="Бронювання" title="Виберіть дату та час" description="Зал відкритий з 10:00 до 24:00, мінімум — одна година. Викреслені години вже зайняті." />
        <div style={{ display: "grid", gridTemplateColumns: "1.25fr 1fr", gap: "var(--grid-gap)", width: "100%", alignItems: "start" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--grid-gap)" }}>
            <Calendar mi={mi} setMi={setMi} sel={sel} onPick={pickDay} />
            <Card padding="var(--space-8)">
              <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-5)" }}>
                <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: "var(--space-4)" }}>
                  <Label>{sd} {MONTH_NAMES[sm]} · вільні години</Label>                  <span style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--text-faint)" }}>{loading ? "синхронізація…" : hh(OPEN_FROM) + "–" + hhEnd(OPEN_TO)}</span>
                </div>
                <HourGrid y={sy} m={sm} d={sd} from={from} to={to} setRange={setRange} booked={booked[sel]} />
                <span style={{ font: "var(--type-body-sm)", fontSize: 13, color: "var(--text-faint)" }}>Один клік — година, другий клік — кінець сеансу. Потрібний час поза {hh(OPEN_FROM)}–{hhEnd(OPEN_TO)} — напиши нам у <a href="https://instagram.com/myspacerv" target="_blank" rel="noreferrer" style={{ color: "var(--white)", textDecoration: "underline" }}>Instagram</a> або <a href="https://t.me/myspacerv" target="_blank" rel="noreferrer" style={{ color: "var(--white)", textDecoration: "underline" }}>Telegram</a>.</span>
              </div>
            </Card>
            <Snacks popcorn={popcorn} setPopcorn={setPopcorn} drinks={drinks} setDrinks={setDrinks} />
          </div>
          <Card variant="raised" padding="var(--space-8)">
            <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-6)" }}>
              <Select label="Кількість гостей" value={guests} onChange={(e) => setGuests(e.target.value)}
                options={["1", "2", "3", "4", "5", "6", "7", "8"].map((n) => ({ value: n, label: n + (n === "1" ? " особа" : Number(n) < 5 ? " особи" : " осіб") })).concat([{ value: "8+", label: "Більше вісьми" }])} />
              {guests === "8+" ? (
                <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-2)" }}>
                  <Input label="Скільки саме осіб" type="number" min="9" value={bigGroup} onChange={(e) => setBigGroup(e.target.value)} />
                  <span style={{ font: "var(--type-body-sm)", fontSize: 13, color: "var(--text-faint)" }}>За кожну людину понад вісьми — {RATE_EXTRA_GUEST} грн.</span>
                </div>
              ) : null}
              <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)", paddingTop: "var(--space-5)", borderTop: "1px solid var(--border-hairline)" }}>
                <Input label="Ім'я" placeholder="Як до тебе звертатися" value={contact.name} onChange={set("name")} error={err.name} />
                <Input label="Телефон" placeholder="+38 0__ ___ __ __" value={contact.phone} onChange={set("phone")} error={err.phone} />
                <Input label="Telegram або Instagram" placeholder="@nickname" value={contact.telegram} onChange={set("telegram")} />
                <Input label="Фільм" placeholder="Що будете дивитись" value={contact.film} onChange={set("film")} />
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)", paddingTop: "var(--space-5)", borderTop: "1px solid var(--border-hairline)" }}>
                {rows.map(([k, v]) => (
                  <div key={k} style={{ display: "flex", justifyContent: "space-between", gap: "var(--space-4)" }}>
                    <span style={{ font: "var(--type-body-sm)", color: "var(--text-muted)" }}>{k}</span>
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: 13, color: "var(--white)" }}>{v}</span>
                  </div>
                ))}
                <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", paddingTop: "var(--space-3)" }}>
                  <span style={{ font: "var(--type-body)", color: "var(--text-body)" }}>До оплати</span>
                  <span style={{ display: "flex", alignItems: "baseline", gap: "var(--space-2)" }}>
                    <span style={{ fontFamily: "var(--font-display)", fontWeight: "var(--fw-extralight)", fontSize: "var(--fs-h1)", lineHeight: 1, color: "var(--white)" }}>{total || "—"}</span>
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: 12, letterSpacing: "var(--ls-label)", textTransform: "uppercase", color: "var(--text-faint)" }}>грн</span>
                  </span>
                </div>
                <span style={{ font: "var(--type-body-sm)", fontSize: 13, color: "var(--text-faint)" }}>Перша година {RATE_FIRST} грн, кожна наступна {RATE_NEXT} грн. Кожна людина понад вісьми — +{RATE_EXTRA_GUEST} грн.</span>
              </div>
              <Button fullWidth variant="primary" size="lg" disabled={!hours} onClick={pay}>Оплатити {total ? total + " грн" : ""}</Button>
              <span style={{ font: "var(--type-body-sm)", fontSize: 13, color: "var(--text-faint)", textAlign: "center" }}>Оплата повною сумою через LiqPay. Підтвердження надійде у Telegram або Instagram.<br />Надсилаючи форму, ви погоджуєтесь на обробку персональних даних.</span>
            </div>
          </Card>
        </div>
      </div>
    </Section>
  );
}
Object.assign(window, { BookingScreen, Calendar, HourGrid, Snacks, Stepper, priceFor, fetchBooked });
