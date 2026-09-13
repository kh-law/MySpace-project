function ContactForm({ onSent }) {
  const [form, setForm] = React.useState({ name: "", phone: "", social: "", note: "" });
  const [err, setErr] = React.useState(null);
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));
  const submit = () => {
    if (!form.phone.trim() && !form.social.trim()) { setErr("Залиш хоча б один спосіб зв'язку"); return; }
    setErr(null);
    onSent && onSent();
    setForm({ name: "", phone: "", social: "", note: "" });
  };
  return (
    <Card variant="raised" padding="var(--space-10)" style={{ maxWidth: 720, margin: "0 auto" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-5)" }}>
        <Input label="Ім'я" placeholder="Як до тебе звертатися" value={form.name} onChange={set("name")} />
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--space-4)" }}>
          <Input label="Телефон" placeholder="+38 0__ ___ __ __" value={form.phone} onChange={set("phone")} error={err} />
          <Input label="Соцмережі" placeholder="@instagram / telegram" value={form.social} onChange={set("social")} />
        </div>
        <Textarea label="Повідомлення" rows={3} placeholder="Дата, час, кількість гостей, побажання…" value={form.note} onChange={set("note")} />
        <div style={{ display: "flex", gap: "var(--space-6)", alignItems: "center", paddingTop: "var(--space-2)" }}>
          <Button variant="primary" size="lg" onClick={submit}>Надіслати</Button>
        </div>
        <span style={{ font: "var(--type-body-sm)", fontSize: 13, color: "var(--text-faint)" }}>Надсилаючи форму, ви погоджуєтесь на обробку персональних даних.</span>
      </div>
    </Card>
  );
}

function ContactScreen({ onSent }) {
  const rows = [
    ["map-pin", "Адреса", "Київська 47, БЦ «Skyliner» · Секція С · 7-й поверх · № 704"],
    ["phone", "Зв'язок", null],
    ["clock", "Години", "Щодня · 10:00–24:00"]
  ];
  return (
    <Section tight>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--space-16)", alignItems: "start" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-10)" }}>
          <SectionHeading eyebrow="Контакти" title="Ми на сьомому поверсі" description="Вхід через головний лобі «Skyliner» секції С, ліфтом до 7-го поверху." />
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-5)" }}>
            {rows.map(([ic, k, v]) => (
              <div key={k} style={{ display: "flex", gap: "var(--space-5)", alignItems: "flex-start", paddingBottom: "var(--space-5)", borderBottom: "1px solid var(--border-hairline)" }}>
                {ic === "telegram" ? <span style={{ color: "var(--chrome-bright)", flex: "0 0 20px", marginTop: 2, display: "flex" }}><TelegramIcon size={20} /></span>
                  : ic === "instagram" ? <span style={{ color: "var(--chrome-bright)", flex: "0 0 20px", marginTop: 2, display: "flex" }}><InstagramIcon size={20} /></span>
                  : <i data-lucide={ic} style={{ width: 20, height: 20, color: "var(--chrome-bright)", flex: "0 0 20px", marginTop: 2 }}></i>}
                <span style={{ display: "flex", flexDirection: "column", gap: "var(--space-1)" }}>
                  <Label style={{ color: "var(--text-faint)" }}>{k}</Label>
                  {v ? <span style={{ font: "var(--type-body)", color: "var(--text-display)" }}>{v}</span> : (
                    <span style={{ display: "flex", alignItems: "center", gap: "var(--space-4)", flexWrap: "nowrap" }}>
                      <a href="tel:+380992889872" style={{ font: "var(--type-body)", color: "var(--text-display)", whiteSpace: "nowrap" }}>+38 099 288 98 72</a>
                      <a href={IG_URL} target="_blank" rel="noreferrer" aria-label="Instagram myspacerv" title="Instagram myspacerv" style={{ display: "flex", color: "var(--text-body)" }}><InstagramIcon size={18} /></a>
                      <a href={TG_URL} target="_blank" rel="noreferrer" aria-label="Telegram myspacerv" title="Telegram myspacerv" style={{ display: "flex", color: "var(--text-body)" }}><TelegramIcon size={18} /></a>
                    </span>
                  )}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-8)" }}>
          <SectionHeading eyebrow="Зворотній зв'язок" title="Напиши нам" />
          <ContactForm onSent={onSent} />
        </div>
      </div>
    </Section>
  );
}
Object.assign(window, { ContactScreen, ContactForm });
