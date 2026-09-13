const { NavBar, Button, ArrowLink, Badge, Tag, Card, SectionHeading, Stat, Input, Textarea, Select, Checkbox, Radio, Switch, Tabs, Dialog, Toast, Tooltip, IconButton, Logo } = window.MySpaceDesignSystem_5ece30;

const ASSETS = "assets/ds";
const HALL = "assets/hall-projection.png";

const NAV = [
  { id: "home", label: "Головна" },
  { id: "films", label: "Фільми" },
  { id: "prices", label: "Ціни" },
  { id: "booking", label: "Бронювання" },
  { id: "contact", label: "Контакти" }
];

const TG_URL = "https://t.me/myspacerv";
const IG_URL = "https://instagram.com/myspacerv";

function TelegramIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21.5 4.3 2.9 11.2c-.7.3-.7 1.2 0 1.4l4.7 1.5 1.8 5.3c.2.6 1 .8 1.4.3l2.5-2.6 4.6 3.4c.5.4 1.3.1 1.4-.6l2.6-14.4c.1-.7-.6-1.3-1.4-1z" />
      <path d="m7.6 14.1 10.3-7.2-7.7 8.2" />
    </svg>
  );
}

function InstagramIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.3" cy="6.7" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function SocialIcons({ size = 18, gap = "var(--space-4)" }) {
  const a = { display: "flex", alignItems: "center", justifyContent: "center", width: 34, height: 34, borderRadius: "var(--radius-sm)", color: "var(--text-body)", transition: "var(--transition-control)" };
  return (
    <div style={{ display: "flex", alignItems: "center", gap }}>
      <a href={TG_URL} target="_blank" rel="noreferrer" aria-label="Telegram" title="Telegram @myspacerv" style={a}><TelegramIcon size={size} /></a>
      <a href={IG_URL} target="_blank" rel="noreferrer" aria-label="Instagram" title="Instagram @myspacerv" style={a}><InstagramIcon size={size} /></a>
    </div>
  );
}

function useBP() {
  const [w, setW] = React.useState(typeof window === "undefined" ? 1280 : window.innerWidth);
  React.useEffect(() => {
    const on = () => setW(window.innerWidth);
    window.addEventListener("resize", on);
    window.addEventListener("orientationchange", on);
    return () => { window.removeEventListener("resize", on); window.removeEventListener("orientationchange", on); };
  }, []);
  return { w, mobile: w < 900, narrow: w < 560 };
}

function BurgerIcon({ open }) {
  const bar = { display: "block", height: 1, background: "currentColor", borderRadius: 1, transition: "var(--transition-control)" };
  return open
    ? <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M6 6l12 12M18 6L6 18" /></svg>
    : <span style={{ display: "flex", flexDirection: "column", gap: 5, width: 20 }}><span style={bar} /><span style={bar} /><span style={bar} /></span>;
}

function MobileMenu({ open, onClose, route, go }) {
  React.useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = prev; };
  }, [open]);
  return (
    <>
      <div onClick={onClose} style={{ position: "fixed", inset: 0, zIndex: 48, background: "rgba(5,5,5,.72)", backdropFilter: "var(--blur-sm)", opacity: open ? 1 : 0, pointerEvents: open ? "auto" : "none", transition: "opacity 240ms var(--ease-standard)" }} />
      <aside aria-hidden={!open} style={{ position: "fixed", top: 0, right: 0, bottom: 0, zIndex: 49, width: "min(320px, 86vw)", display: "flex", flexDirection: "column", gap: "var(--space-8)", padding: "var(--space-6) var(--space-6) var(--space-8)", background: "var(--surface-card)", borderLeft: "1px solid var(--border-default)", boxShadow: "var(--shadow-panel)", transform: open ? "translateX(0)" : "translateX(103%)", transition: "transform 320ms var(--ease-out-soft)" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "var(--space-4)" }}>
          <Logo variant="wordmark" height={16} assetBase={ASSETS} />
          <button type="button" onClick={onClose} aria-label="Закрити меню" style={{ width: 44, height: 44, marginRight: -10, display: "flex", alignItems: "center", justifyContent: "center", background: "none", border: "none", color: "var(--white)", cursor: "pointer" }}><BurgerIcon open /></button>
        </div>
        <nav style={{ display: "flex", flexDirection: "column" }}>
          {NAV.map((n) => (
            <a key={n.id} href="#" onClick={(e) => { e.preventDefault(); onClose(); go(n.id); }}
              style={{ display: "flex", alignItems: "center", minHeight: 52, fontFamily: "var(--font-display)", fontWeight: "var(--fw-light)", fontSize: 22, letterSpacing: "-0.015em", color: route === n.id ? "var(--white)" : "var(--text-body)", textDecoration: "none", borderBottom: "1px solid var(--border-hairline)" }}>{n.label}</a>
          ))}
        </nav>
        <div style={{ marginTop: "auto", display: "flex", flexDirection: "column", gap: "var(--space-5)" }}>
          <SocialIcons size={20} gap="var(--space-2)" />
          <a href="tel:+380992889872" style={{ fontFamily: "var(--font-mono)", fontSize: 13, color: "var(--text-body)", textDecoration: "none" }}>+38 099 288 98 72</a>
        </div>
      </aside>
    </>
  );
}

function Header({ route, go, scrolled, onCta }) {
  const { mobile } = useBP();
  const [open, setOpen] = React.useState(false);
  React.useEffect(() => { if (!mobile) setOpen(false); }, [mobile]);
  const link = (on) => ({ font: "var(--type-body-sm)", fontFamily: "var(--font-display)", fontSize: "14px", color: on ? "var(--white)" : "var(--text-body)", textDecoration: "none", paddingBottom: "2px", borderBottom: "1px solid " + (on ? "var(--alpha-white-40)" : "transparent"), transition: "var(--transition-control)", whiteSpace: "nowrap" });
  if (mobile) return (
    <div style={{ position: "sticky", top: 0, zIndex: 30 }}>
      <header style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "var(--space-4)", padding: "12px var(--gutter-page)", background: scrolled ? "var(--glass-bg)" : "transparent", backdropFilter: scrolled ? "var(--blur-md)" : "none", borderBottom: "1px solid " + (scrolled ? "var(--border-hairline)" : "transparent") }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 10, minWidth: 0 }}>
          <a href="#" onClick={(e) => { e.preventDefault(); go("home"); }} style={{ display: "flex", flexDirection: "column", gap: 3, minWidth: 0, textDecoration: "none" }}>
            <Logo variant="wordmark" height={15} assetBase={ASSETS} />
            <span style={{ fontFamily: "var(--font-mono)", fontSize: 9, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--text-muted)", whiteSpace: "nowrap" }}>твій унікальний простір</span>
          </a>
          <Button variant="secondary" size="sm" onClick={onCta}>Забронювати</Button>
        </div>
        <button type="button" onClick={() => setOpen(true)} aria-label="Меню" aria-expanded={open}
          style={{ flex: "0 0 44px", width: 44, height: 44, marginRight: -10, display: "flex", alignItems: "center", justifyContent: "center", background: "none", border: "none", color: "var(--white)", cursor: "pointer" }}><BurgerIcon /></button>
      </header>
      <MobileMenu open={open} onClose={() => setOpen(false)} route={route} go={go} />
    </div>
  );
  return (
    <div style={{ position: "sticky", top: 0, zIndex: 30 }}>
      <header style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "var(--space-8)", padding: "var(--space-6) var(--gutter-page)", background: scrolled ? "var(--glass-bg)" : "transparent", backdropFilter: scrolled ? "var(--blur-md)" : "none", borderBottom: "1px solid " + (scrolled ? "var(--border-hairline)" : "transparent") }}>
        <a href="#" onClick={(e) => { e.preventDefault(); go("home"); }} style={{ display: "flex", alignItems: "center", flex: "0 0 auto" }}>
          <Logo variant="wordmark" height={20} assetBase={ASSETS} />
        </a>
        <nav style={{ display: "flex", alignItems: "center", gap: "var(--space-8)", flexWrap: "wrap", justifyContent: "center" }}>
          {NAV.map((n) => (
            <a key={n.id} href="#" onClick={(e) => { e.preventDefault(); go(n.id); }} style={link(route === n.id)}>{n.label}</a>
          ))}
        </nav>
        <div style={{ display: "flex", alignItems: "center", gap: "var(--space-4)", flex: "0 0 auto" }}>
          <SocialIcons gap="var(--space-1)" />
          <Button variant="secondary" size="md" onClick={onCta}>Забронювати час</Button>
        </div>
      </header>
    </div>
  );
}

function PlainLink({ children, onClick }) {
  return (
    <a href="#" onClick={onClick} style={{ font: "var(--type-body)", fontFamily: "var(--font-display)", fontSize: 16, color: "var(--white)", textDecoration: "none", paddingBottom: 2, borderBottom: "1px solid var(--alpha-white-40)" }}>{children}</a>
  );
}

function Section({ children, tight, style, id }) {
  const { mobile } = useBP();
  const pad = mobile ? (tight ? "var(--space-10)" : "var(--space-12)") : (tight ? "var(--space-20)" : "var(--space-32)");
  return (
    <section id={id} style={{ padding: pad + " var(--gutter-page)", ...style }}>
      <div style={{ maxWidth: "var(--container-max)", margin: "0 auto" }}>{children}</div>
    </section>
  );
}

function Label({ children, style }) {
  return <span style={{ font: "var(--type-label)", letterSpacing: "var(--ls-label)", textTransform: "uppercase", color: "var(--text-muted)", ...style }}>{children}</span>;
}

function PosterSlot({ label, note }) {
  return (
    <div style={{ position: "relative", height: "100%", background: "var(--surface-inset)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "var(--space-2)", borderBottom: "1px solid var(--border-hairline)" }}>
      <i data-lucide="image" style={{ width: 20, height: 20, color: "var(--text-faint)" }}></i>
      <Label style={{ color: "var(--text-faint)", fontSize: 10 }}>{label}</Label>
      {note ? <span style={{ font: "var(--type-body-sm)", fontSize: 12, color: "var(--text-faint)" }}>{note}</span> : null}
    </div>
  );
}

function FilmCard({ film, onClick }) {
  const { mobile } = useBP();
  return (
    <Card interactive padding={mobile ? "var(--space-4)" : "var(--space-5)"} media={<PosterSlot label="Постер" />} style={{ cursor: "pointer" }}>
      <div onClick={onClick} style={{ display: "flex", flexDirection: "column", gap: "var(--space-2)" }}>
        <span style={{ fontFamily: "var(--font-display)", fontWeight: "var(--fw-light)", fontSize: mobile ? 17 : "var(--fs-h4)", lineHeight: 1.2, color: "var(--text-display)", textWrap: "balance" }}>{film.title}</span>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--text-faint)", whiteSpace: "nowrap" }}>{film.year} · {(film.duration || "").replace(/(\d+)\s*год\s*(\d+)\s*хв/, "$1:$2")}</span>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--space-2)", marginTop: "var(--space-2)" }}>
          <Badge>{film.genre}</Badge>
          {film.badge ? <Badge tone="solid">{film.badge}</Badge> : null}
        </div>
      </div>
    </Card>
  );
}

function SiteFooter({ go }) {
  const { mobile, narrow } = useBP();
  const row = { display: "flex", alignItems: "center", gap: "var(--space-3)", font: "var(--type-body)", fontSize: mobile ? 14 : undefined, color: "var(--text-body)", textDecoration: "none" };
  if (mobile) return (
    <footer style={{ borderTop: "1px solid var(--border-hairline)", padding: "var(--space-10) var(--gutter-page) var(--space-16)" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-7)" }}>
        <img src={ASSETS + "/logo-lockup-dark.png"} alt="MySpace" style={{ height: 58, width: "auto", maxWidth: "100%", alignSelf: "center" }} />
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "var(--space-4)" }}>
          <a href="tel:+380992889872" style={{ ...row, fontSize: 15, color: "var(--white)" }}>+38 099 288 98 72</a>
          <SocialIcons size={20} gap="var(--space-1)" />
        </div>
        <div style={{ ...row, alignItems: "flex-start", fontSize: 13, color: "var(--text-muted)", paddingTop: "var(--space-5)", borderTop: "1px solid var(--border-hairline)" }}>
          <i data-lucide="map-pin" style={{ width: 16, height: 16, marginTop: 3, flex: "0 0 16px" }}></i>
          <span>Київська 47, БЦ «Skyliner» · Секція С · 7-й поверх · № 704</span>
        </div>
        <Label style={{ color: "var(--text-faint)" }}>© 2026 MySpace</Label>
      </div>
    </footer>
  );
  return (
    <footer style={{ borderTop: "1px solid var(--border-hairline)", padding: (mobile ? "var(--space-10)" : "var(--space-16)") + " var(--gutter-page) " + (mobile ? "var(--space-16)" : "var(--space-8)") }}>
      <div style={{ maxWidth: "var(--container-max)", margin: "0 auto", display: "flex", flexDirection: "column", alignItems: "center", gap: mobile ? "var(--space-7)" : "var(--space-10)", textAlign: "center" }}>
        <img src={ASSETS + "/logo-lockup-dark.png"} alt="MySpace" style={{ height: mobile ? 68 : 108, width: "auto", maxWidth: "100%" }} />
        <div style={{ display: "flex", flexDirection: narrow ? "column" : "row", flexWrap: "wrap", justifyContent: "center", alignItems: narrow ? "flex-start" : "center", gap: mobile ? "var(--space-4)" : "var(--space-10)", width: "100%", maxWidth: 520 }}>
          <a href={IG_URL} target="_blank" rel="noreferrer" style={row}>
            <InstagramIcon />
            <span>myspacerv</span>
          </a>
          <a href={TG_URL} target="_blank" rel="noreferrer" style={row}>
            <TelegramIcon />
            <span>myspacerv</span>
          </a>
          <a href="tel:+380992889872" style={row}>
            <i data-lucide="phone" style={{ width: 18, height: 18 }}></i>
            <span>+38 099 288 98 72</span>
          </a>
          <div style={{ ...row, maxWidth: 460, textAlign: "left", alignItems: "flex-start" }}>
            <i data-lucide="map-pin" style={{ width: 18, height: 18, marginTop: 4, flex: "0 0 18px" }}></i>
            <span>Київська 47, БЦ «Skyliner» · Секція С · 7-й поверх · № 704</span>
          </div>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: mobile ? "var(--space-4)" : "var(--space-8)" }}>
          {NAV.map((n) => <ArrowLink key={n.id} muted size="sm" onClick={(e) => { e.preventDefault(); go(n.id); }}>{n.label}</ArrowLink>)}
        </div>
        <div style={{ width: "100%", paddingTop: "var(--space-6)", borderTop: "1px solid var(--border-hairline)", display: "flex", justifyContent: "center" }}>
          <Label style={{ color: "var(--text-faint)" }}>© 2026 MySpace</Label>
        </div>
      </div>
    </footer>
  );
}

function ScrollVideo() {
  const { mobile } = useBP();
  const canvas = React.useRef(null);
  const frames = React.useRef([]);
  const idx = React.useRef(0);
  const raf = React.useRef(0);
  const [veil, setVeil] = React.useState(0);
  const [ready, setReady] = React.useState(false);
  const [mode, setMode] = React.useState("idle"); // idle | forward | held | reverse
  const [shown, setShown] = React.useState(false);

  const N = 48, FPS = 16;

  // Frame sequence instead of a video element: seeking an mp4 backwards stalls on every
  // keyframe, decoded JPEGs reverse as smoothly as they play.
  React.useEffect(() => {
    let alive = true, loaded = 0;
    const imgs = new Array(N);
    for (let i = 0; i < N; i++) {
      const im = new Image();
      im.src = "assets/hall-frames/f" + String(i).padStart(2, "0") + ".jpg";
      im.onload = () => { if (alive && ++loaded === N) { setReady(true); } };
      imgs[i] = im;
    }
    frames.current = imgs;
    return () => { alive = false; };
  }, []);

  const draw = React.useCallback(() => {
    const c = canvas.current, im = frames.current[Math.round(idx.current)];
    if (!c || !im || !im.naturalWidth) return;
    const dpr = Math.min(2, window.devicePixelRatio || 1);
    const w = window.innerWidth, h = window.innerHeight;
    if (c.width !== Math.round(w * dpr) || c.height !== Math.round(h * dpr)) { c.width = Math.round(w * dpr); c.height = Math.round(h * dpr); }
    const ctx = c.getContext("2d");
    const s = Math.max((w * dpr) / im.naturalWidth, (h * dpr) / im.naturalHeight);
    const dw = im.naturalWidth * s, dh = im.naturalHeight * s;
    ctx.drawImage(im, (c.width - dw) / 2, (c.height - dh) / 2, dw, dh);
  }, []);

  React.useEffect(() => {
    const onScroll = () => {
      const max = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      const p = Math.min(1, Math.max(0, window.scrollY / max));
      setVeil(Math.min(0.82, p * 2.2));
    };
    const onResize = () => { onScroll(); draw(); };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    return () => { window.removeEventListener("scroll", onScroll); window.removeEventListener("resize", onResize); };
  }, [draw]);

  React.useEffect(() => {
    cancelAnimationFrame(raf.current);
    if (mode !== "forward" && mode !== "reverse") return;
    const dir = mode === "forward" ? 1 : -1;
    if (dir > 0) setShown(true);
    let last = performance.now();
    const step = (now) => {
      const dt = (now - last) / 1000; last = now;
      idx.current += dir * FPS * Math.min(dt, 0.1);
      if (dir > 0 && idx.current >= N - 1) { idx.current = N - 1; draw(); setMode("held"); return; }
      if (dir < 0 && idx.current <= 0) { idx.current = 0; draw(); setShown(false); setMode("idle"); return; }
      draw();
      raf.current = requestAnimationFrame(step);
    };
    raf.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf.current);
  }, [mode, draw]);

  const toggle = () => setMode((m) => (m === "forward" || m === "held" ? "reverse" : "forward"));

  return (
    <>
      <div style={{ position: "fixed", inset: 0, zIndex: 0, background: "var(--ink-1000)", pointerEvents: "none" }}>
        <img src="assets/hall-hero.jpg" alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", filter: "saturate(.45) contrast(1.05)" }} />
        <canvas ref={canvas} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", filter: "saturate(.45) contrast(1.05)", opacity: shown ? 1 : 0, transition: "opacity 420ms var(--ease-out-soft)" }} />
        <div style={{ position: "absolute", inset: 0, background: "var(--ink-1000)", opacity: veil, transition: "opacity 160ms linear" }} />
        <div style={{ position: "absolute", inset: 0, background: "var(--wash-protect-bottom)" }} />
      </div>
      <button type="button" onClick={toggle} disabled={!ready} aria-label={mode === "idle" ? "Подивитись зал" : "Відмотати назад"}
        style={{ position: "fixed", left: mobile ? "var(--gutter-page)" : "auto", right: mobile ? "auto" : "var(--gutter-page)", bottom: mobile ? "var(--space-16)" : "var(--space-10)", zIndex: 20, display: "flex", alignItems: "center", gap: "var(--space-3)", height: mobile ? 44 : 52, padding: mobile ? "0 var(--space-4)" : "0 var(--space-6) 0 var(--space-5)", borderRadius: "var(--radius-pill)", border: "1px solid var(--border-default)", background: "var(--glass-bg)", backdropFilter: "var(--blur-md)", color: "var(--white)", cursor: ready ? "pointer" : "default", transition: "var(--transition-control)", opacity: veil > 0.5 ? 0 : (ready ? 1 : 0.5), pointerEvents: veil > 0.5 ? "none" : "auto" }}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          {mode === "idle"
            ? <polygon points="6 3 20 12 6 21 6 3" />
            : <><path d="M3 12a9 9 0 1 0 3-6.7" /><path d="M3 4v5h5" /></>}
        </svg>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: mobile ? 10 : 11, letterSpacing: "var(--ls-label)", textTransform: "uppercase", whiteSpace: "nowrap" }}>{mode === "idle" ? "Подивитись зал" : "Назад"}</span>
      </button>
    </>
  );
}

Object.assign(window, { useBP, BurgerIcon, MobileMenu, PlainLink, NAV, ASSETS, HALL, TG_URL, IG_URL, TelegramIcon, InstagramIcon, SocialIcons, Header, Section, Label, PosterSlot, FilmCard, SiteFooter, ScrollVideo, NavBar, Button, ArrowLink, Badge, Tag, Card, SectionHeading, Stat, Input, Textarea, Select, Checkbox, Radio, Switch, Tabs, Dialog, Toast, Tooltip, IconButton, Logo });
