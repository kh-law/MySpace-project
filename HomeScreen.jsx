const AFISHA = [
  { title: "Дюна: Частина друга", genre: "Sci-fi", year: "2024", duration: "2 год 46 хв", badge: "Прем'єра" },
  { title: "Сяйво", genre: "Хорор", year: "1980", duration: "2 год 26 хв" },
  { title: "Ла-Ла Ленд", genre: "Мюзикл", year: "2016", duration: "2 год 08 хв" },
  { title: "Втеча з Шоушенка", genre: "Драма", year: "1994", duration: "2 год 22 хв" }
];

const FEATURES = ["Dolby Surround", "Якість 4K", "Можна зі своєю їжею", "До 8-ми осіб"];

function Hero({ go }) {
  const { mobile } = useBP();
  return (
    <section style={{ position: "relative", minHeight: mobile ? "88vh" : "min(100vh, 900px)", marginTop: mobile ? -108 : -84, display: "flex", alignItems: "flex-end", overflow: "hidden" }}>
      <div style={{ position: "relative", width: "100%", maxWidth: "var(--container-max)", margin: "0 auto", padding: "0 var(--gutter-page) var(--space-16)", display: "flex", flexDirection: "column", alignItems: "flex-start", gap: mobile ? "var(--space-4)" : "var(--space-6)" }}>
        {mobile ? null : <span style={{ font: "var(--type-label)", letterSpacing: "0.24em", textTransform: "uppercase", color: "var(--text-body)" }}>Твій унікальний простір</span>}
        <h1 style={{ margin: 0, fontFamily: "var(--font-display)", fontWeight: "var(--fw-extralight)", fontSize: mobile ? "clamp(40px, 11vw, 52px)" : "clamp(56px, 13vw, 184px)", lineHeight: .95, letterSpacing: "-0.04em", color: "var(--white)" }}>MySpace</h1>
        <div style={{ display: "flex", alignItems: mobile ? "flex-start" : "center", flexDirection: mobile ? "column" : "row", gap: mobile ? "var(--space-5)" : "var(--space-8)", flexWrap: "wrap", marginTop: "var(--space-4)" }}>
          <Button variant="primary" size={mobile ? "md" : "lg"} onClick={() => go("booking")}>Забронювати час</Button>
          {mobile
            ? <PlainLink onClick={(e) => { e.preventDefault(); go("films"); }}>Обрати фільм</PlainLink>
            : <ArrowLink onClick={(e) => { e.preventDefault(); go("films"); }}>Обрати фільм</ArrowLink>}
        </div>
      </div>
    </section>
  );
}

function FeatureRow() {
  const { mobile } = useBP();
  return (
    <div style={{ display: "grid", gridTemplateColumns: mobile ? "repeat(2,1fr)" : "repeat(4,1fr)", gap: "var(--grid-gap)" }}>
      {FEATURES.map((t) => (
        <Card key={t} interactive padding={mobile ? "var(--space-5)" : "var(--space-6)"} style={{ display: "flex" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", minHeight: mobile ? 40 : 48, width: "100%", textAlign: "center" }}>
            <span style={{ font: "var(--type-h4)", fontFamily: "var(--font-display)", fontSize: mobile ? 17 : undefined, lineHeight: 1.2, color: "var(--text-display)", textWrap: "balance" }}>{t}</span>
          </div>
        </Card>
      ))}
    </div>
  );
}

function HallSection() {
  const { mobile } = useBP();
  const items = [
    ["armchair", "Комфортний диван", "Пледи, подушки, регульоване світло."],
    ["volume-2", "Dolby Surround", "Калібрований звук, який не тисне на вуха."],
    ["utensils", "Можна зі своєю їжею", "Можете взяти з собою або замовити в кафе."]
  ];
  return (
    <Section>
      <div style={{ display: "grid", gridTemplateColumns: mobile ? "1fr" : "1fr 1fr", gap: mobile ? "var(--space-8)" : "var(--space-16)", alignItems: "center" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-8)" }}>
          <SectionHeading eyebrow="Зал" title="Один сеанс — тільки твої люди" description="Зал ваш цілком: ніхто не зайде, не зашумить і не сяде поруч." />
          <div style={{ display: "flex", gap: mobile ? "var(--space-8)" : "var(--space-12)" }}>
            <Stat value="8" label="Осіб" />
            <Stat value="4K" label="Проєктор" />
            <Stat value="5.0" label="Звук" />
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
          {items.map(([ic, t, d]) => (
            <Card key={t} interactive padding="var(--space-6)">
              <div style={{ display: "flex", gap: "var(--space-5)", alignItems: "flex-start" }}>
                <i data-lucide={ic} style={{ width: 22, height: 22, color: "var(--chrome-bright)", flex: "0 0 22px", marginTop: 2 }}></i>
                <span style={{ display: "flex", flexDirection: "column", gap: "var(--space-1)" }}>
                  <span style={{ font: "var(--type-h4)", fontFamily: "var(--font-display)", color: "var(--text-display)" }}>{t}</span>
                  <span style={{ font: "var(--type-body-sm)", color: "var(--text-muted)" }}>{d}</span>
                </span>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
}

function PricesSection({ go }) {
  const { mobile } = useBP();
  const rows = [["Перша година", "1600"], ["Кожна наступна", "900"]];
  return (
    <Section tight id="prices" style={{ paddingTop: 0 }}>
      <div style={{ display: "grid", gridTemplateColumns: mobile ? "1fr" : "1fr 1fr", gap: mobile ? "var(--space-8)" : "var(--space-16)", alignItems: "center" }}>
        <SectionHeading eyebrow="Ціни" title="Платиш за час, а не за місця" description="Можлива доплата, якщо потрібно вмістити більше вісьми осіб." />
        <Card variant="raised" padding={mobile ? "var(--space-6)" : "var(--space-10)"}>
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-6)" }}>
            {rows.map(([k, v], i) => (
              <div key={k} style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: "var(--space-4)", paddingBottom: i === 0 ? "var(--space-6)" : 0, borderBottom: i === 0 ? "1px solid var(--border-hairline)" : "none" }}>
                <span style={{ font: "var(--type-body)", fontSize: mobile ? 14 : undefined, color: "var(--text-body)" }}>{k}</span>
                <span style={{ display: "flex", alignItems: "baseline", gap: "var(--space-2)" }}>
                  <span style={{ fontFamily: "var(--font-display)", fontWeight: "var(--fw-extralight)", fontSize: mobile ? 40 : "var(--fs-display-2)", lineHeight: 1, color: "var(--white)" }}>{v}</span>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: 12, letterSpacing: "var(--ls-label)", textTransform: "uppercase", color: "var(--text-faint)" }}>грн</span>
                </span>
              </div>
            ))}
            <Button variant="primary" size={mobile ? "md" : "lg"} fullWidth onClick={() => go("booking")}>Забронювати час</Button>
          </div>
        </Card>
      </div>
    </Section>
  );
}

function AfishaSection({ go }) {
  const { mobile } = useBP();
  return (
    <Section tight style={{ paddingTop: 0 }}>
      <SectionHeading eyebrow="Афіша" title="Що дивляться цього тижня" action={mobile ? null : <ArrowLink onClick={(e) => { e.preventDefault(); go("films"); }}>Вся колекція</ArrowLink>} />
      <div style={{ marginTop: mobile ? "var(--space-6)" : "var(--space-10)", display: "grid", gridTemplateColumns: mobile ? "repeat(2,1fr)" : "repeat(4,1fr)", gap: "var(--grid-gap)" }}>
        {AFISHA.map((f) => <FilmCard key={f.title} film={f} onClick={() => go("booking")} />)}
      </div>
      {mobile ? <div style={{ marginTop: "var(--space-6)" }}><PlainLink onClick={(e) => { e.preventDefault(); go("films"); }}>Вся колекція</PlainLink></div> : null}
    </Section>
  );
}

function HomeScreen({ go, onSent }) {
  return (
    <>
      <Hero go={go} />
      <Section tight><FeatureRow /></Section>
      <HallSection />
      <PricesSection go={go} />
      <AfishaSection go={go} />
      <Section tight style={{ paddingTop: 0 }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "var(--space-10)" }}>
          <SectionHeading align="center" eyebrow="Зворотній зв'язок" title="Залиште свої контакти" description="Ми зв'яжемося з тобою найближчим часом і підберемо вільний час." />
          <div style={{ width: "100%" }}><ContactForm onSent={onSent} /></div>
        </div>
      </Section>
    </>
  );
}
Object.assign(window, { HomeScreen, Hero, FeatureRow, HallSection, PricesSection, AfishaSection, AFISHA, FEATURES });
