function App() {
  const [route, setRoute] = React.useState("home");
  const [scrolled, setScrolled] = React.useState(false);
  const [toast, setToast] = React.useState(null);

  const go = (id) => {
    if (id === "prices") {
      const jump = () => { const el = document.getElementById("prices"); if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 84, behavior: "smooth" }); };
      if (route === "home") jump(); else { setRoute("home"); requestAnimationFrame(() => requestAnimationFrame(jump)); }
      return;
    }
    setRoute(id); window.scrollTo({ top: 0 });
  };

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  });

  React.useEffect(() => { if (window.lucide) window.lucide.createIcons(); });
  React.useEffect(() => { if (!toast) return; const t = setTimeout(() => setToast(null), 4000); return () => clearTimeout(t); }, [toast]);

  return (
    <div style={{ position: "relative", minHeight: "100vh", background: route === "home" ? "transparent" : "var(--bg-page)" }}>
      {route === "home" ? <ScrollVideo /> : null}
      <div style={{ position: "relative", zIndex: 1 }}>
      <Header route={route} go={go} scrolled={scrolled || route !== "home"} onCta={() => go("booking")} />
      {route === "home" ? <HomeScreen go={go} onSent={() => setToast("Дякуємо — ми зв'яжемося з тобою найближчим часом.")} /> : null}
      {route === "films" ? <FilmsScreen go={go} /> : null}
      {route === "booking" ? <BookingScreen onBooked={(b) => setToast("Заявка на " + b.date + ", " + b.time + " створена — переходимо до оплати " + b.total + " грн.")} /> : null}
      {route === "contact" ? <ContactScreen onSent={() => setToast("Дякуємо — ми зв'яжемося з тобою найближчим часом.")} /> : null}
      <SiteFooter go={go} />
      </div>
      {toast ? <div style={{ position: "fixed", bottom: "var(--space-8)", left: "50%", transform: "translateX(-50%)", zIndex: 60 }}><Toast message={toast} onDismiss={() => setToast(null)} /></div> : null}
    </div>
  );
}
ReactDOM.createRoot(document.getElementById("root")).render(<App />);
Object.assign(window, { App });
