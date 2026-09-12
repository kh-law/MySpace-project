const AFISHA = [
  { title: "Дюна: Частина друга", genre: "Sci-fi", year: "2024", duration: "2 год 46 хв", badge: "Прем'єра" },
  { title: "Сяйво", genre: "Хорор", year: "1980", duration: "2 год 26 хв" },
  { title: "Ла-Ла Ленд", genre: "Мюзикл", year: "2016", duration: "2 год 08 хв" },
  { title: "Втеча з Шоушенка", genre: "Драма", year: "1994", duration: "2 год 22 хв" }
];

const FEATURES = ["Dolby Surround", "Якість 4K", "Можна зі своєю їжею", "До 8-ми осіб"];

function Hero({ go }) {
  const [hover, setHover] = React.useState(false);
  return (
    <section style={{ position: "relative", minHeight: "min(100vh, 900px)", marginTop: -84, display: "flex", alignItems: "flex-end", overflow: "hidden" }}>
      <div style={{ position: "relative", width: "100%", maxWidth: "var(--container-max)", margin: "0 auto", padding: "0 var(--gutter-page) var(--space-16)", display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "var(--space-6)" }}>
        <span style={{ font: "var(--type-label)", letterSpacing: "0.24em", textTransform: "uppercase", color: "var(--text-body)" }}>Твій унікальний простір</span>
        <h1 style={{ margin: 0, fontFamily: "var(--font-display)", fontWeight: "var(--fw-extralight)", fontSize: "clamp(64px, 13vw, 184px)", lineHeight: .92, letterSpacing: "-0.04em", color: "var(--white)" }}>MySpace</h1>
        <div style={{ display: "flex", alignItems: "center", gap: "var(--space-8)", flexWrap: "wrap", marginTop: "var(--space-4)" }}
          onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
          <Button variant="primary" size="lg" onClick={() => go("booking")}>Забронювати час</Button>
          <ArrowLink onClick={(e) => { e.preventDefault(); go("films"); }}>Обрати фільм</ArrowLink>
        </div>
      </div>
    </section>
  );
}

function FeatureRow() {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "var(--grid-gap)" }}>
      {FEATURES.map((t) => (
        <Card key={t} interactive padding="var(--space-6)" style={{ display: "flex" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", minHeight: 48, width: "100%", textAlign: "center" }}>
            <span style={{ font: "var(--type-h4)", fontFamily: "var(--font-display)", color: "var(--text-display)", textWrap: "balance" }}>{t}</span>
          </div>
        </Card>
      ))}
    </div>
  );
}

function HallSection() {
  const items = [
    ["armchair", "Комфортний диван", "Пледи, подушки, регульоване світло."],
    ["volume-2", "Dolby Surround", "Калібрований звук, який не тисне на вуха."],
    ["utensils", "Можна зі своєю їжею", "Можете взяти з собою або замовити в кафе."]
  ];
  return (
    <Section>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--space-16)", alignItems: "center" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-8)" }}>
          <SectionHeading eyebrow="Зал" title="Один сеанс — тільки твої люди" description="Зал ваш цілком: ніхто не зайде, не зашумить і не сяде поруч." />
          <div style={{ display: "flex", gap: "var(--space-12)" }}>
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
  const rows = [["Перша година", "1600"], ["Кожна наступна", "900"]];
  return (
    <Section tight id="prices" style={{ paddingTop: 0 }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--space-16)", alignItems: "center" }}>
        <SectionHeading eyebrow="Ціни" title="Платиш за час, а не за місця" description="Можлива доплата, якщо потрібно вмістити більше вісьми осіб." />
        <Card variant="raised" padding="var(--space-10)">
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-6)" }}>
            {rows.map(([k, v], i) => (
              <div key={k} style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: "var(--space-6)", paddingBottom: i === 0 ? "var(--space-6)" : 0, borderBottom: i === 0 ? "1px solid var(--border-hairline)" : "none" }}>
                <span style={{ font: "var(--type-body)", color: "var(--text-body)" }}>{k}</span>
                <span style={{ display: "flex", alignItems: "baseline", gap: "var(--space-2)" }}>
                  <span style={{ fontFamily: "var(--font-display)", fontWeight: "var(--fw-extralight)", fontSize: "var(--fs-display-2)", lineHeight: 1, color: "var(--white)" }}>{v}</span>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: 12, letterSpacing: "var(--ls-label)", textTransform: "uppercase", color: "var(--text-faint)" }}>грн</span>
                </span>
              </div>
            ))}
            <Button variant="primary" size="lg" fullWidth onClick={() => go("booking")}>Забронювати час</Button>
          </div>
        </Card>
      </div>
    </Section>
  );
}

function AfishaSection({ go }) {
  return (
    <Section tight style={{ paddingTop: 0 }}>
      <SectionHeading eyebrow="Афіша" title="Що дивляться цього тижня" action={<ArrowLink onClick={(e) => { e.preventDefault(); go("films"); }}>Вся колекція</ArrowLink>} />
      <div style={{ marginTop: "var(--space-10)", display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "var(--grid-gap)" }}>
        {AFISHA.map((f) => <FilmCard key={f.title} film={f} onClick={() => go("booking")} />)}
      </div>
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
