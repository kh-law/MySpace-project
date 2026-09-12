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

function Header({ route, go, scrolled, onCta }) {
  return (
    <div style={{ position: "sticky", top: 0, zIndex: 30 }}>
      <NavBar items={NAV} active={route} onNavigate={go} assetBase={ASSETS} transparent={!scrolled} cta="Забронювати час" onCta={onCta} />
    </div>
  );
}

function Section({ children, tight, style, id }) {
  return (
    <section id={id} style={{ padding: (tight ? "var(--space-20)" : "var(--space-32)") + " var(--gutter-page)", ...style }}>
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
  return (
    <Card interactive padding="var(--space-5)" media={<PosterSlot label="Постер" />} style={{ cursor: "pointer" }}>
      <div onClick={onClick} style={{ display: "flex", flexDirection: "column", gap: "var(--space-2)" }}>
        <span style={{ fontFamily: "var(--font-display)", fontWeight: "var(--fw-light)", fontSize: "var(--fs-h4)", lineHeight: 1.15, color: "var(--text-display)", textWrap: "balance" }}>{film.title}</span>
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
  const row = { display: "flex", alignItems: "center", gap: "var(--space-3)", font: "var(--type-body)", color: "var(--text-body)" };
  return (
    <footer style={{ borderTop: "1px solid var(--border-hairline)", padding: "var(--space-16) var(--gutter-page) var(--space-8)" }}>
      <div style={{ maxWidth: "var(--container-max)", margin: "0 auto", display: "flex", flexDirection: "column", alignItems: "center", gap: "var(--space-10)", textAlign: "center" }}>
        <img src={ASSETS + "/logo-lockup-dark.png"} alt="MySpace" style={{ height: 108, width: "auto" }} />
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "var(--space-10)" }}>
          <a href="https://instagram.com/myspacerv" target="_blank" rel="noreferrer" style={row}>
            <i data-lucide="instagram" style={{ width: 18, height: 18 }}></i>
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
        <div style={{ display: "flex", gap: "var(--space-8)" }}>
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
        style={{ position: "fixed", right: "var(--gutter-page)", bottom: "var(--space-10)", zIndex: 20, display: "flex", alignItems: "center", gap: "var(--space-3)", height: 52, padding: "0 var(--space-6) 0 var(--space-5)", borderRadius: "var(--radius-pill)", border: "1px solid var(--border-default)", background: "var(--glass-bg)", backdropFilter: "var(--blur-md)", color: "var(--white)", cursor: ready ? "pointer" : "default", transition: "var(--transition-control)", opacity: veil > 0.5 ? 0 : (ready ? 1 : 0.5), pointerEvents: veil > 0.5 ? "none" : "auto" }}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          {mode === "idle"
            ? <polygon points="6 3 20 12 6 21 6 3" />
            : <><path d="M3 12a9 9 0 1 0 3-6.7" /><path d="M3 4v5h5" /></>}
        </svg>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "var(--ls-label)", textTransform: "uppercase" }}>{mode === "idle" ? "Подивитись зал" : "Назад"}</span>
      </button>
    </>
  );
}

Object.assign(window, { NAV, ASSETS, HALL, Header, Section, Label, PosterSlot, FilmCard, SiteFooter, ScrollVideo, NavBar, Button, ArrowLink, Badge, Tag, Card, SectionHeading, Stat, Input, Textarea, Select, Checkbox, Radio, Switch, Tabs, Dialog, Toast, Tooltip, IconButton, Logo });
