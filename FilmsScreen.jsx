const CATALOGUE = [
  { title: "Дюна: Частина друга", genre: "Sci-fi", year: "2024", duration: "2 год 46 хв", badge: "Прем'єра", mood: "Епічне" },
  { title: "Сяйво", genre: "Хорор", year: "1980", duration: "2 год 26 хв", mood: "Напруга" },
  { title: "Ла-Ла Ленд", genre: "Мюзикл", year: "2016", duration: "2 год 08 хв", mood: "Романтика" },
  { title: "Втеча з Шоушенка", genre: "Драма", year: "1994", duration: "2 год 22 хв", mood: "Тепле" },
  { title: "Хижак", genre: "Екшн", year: "1987", duration: "1 год 47 хв", mood: "Епічне" },
  { title: "Великий Лебовскі", genre: "Комедія", year: "1998", duration: "1 год 57 хв", mood: "Легке" },
  { title: "Прибуття", genre: "Sci-fi", year: "2016", duration: "1 год 56 хв", mood: "Напруга" },
  { title: "Амелі", genre: "Драма", year: "2001", duration: "2 год 02 хв", mood: "Тепле" },
  { title: "Місто гріхів", genre: "Трилер", year: "2005", duration: "2 год 04 хв", mood: "Напруга" },
  { title: "Тачки", genre: "Сімейне", year: "2006", duration: "1 год 57 хв", mood: "Легке" }
];
const MOODS = ["Всі", "Епічне", "Напруга", "Романтика", "Тепле", "Легке"];

function FilmsScreen({ go }) {
  const { mobile, narrow } = useBP();
  const [mood, setMood] = React.useState("Всі");
  const [q, setQ] = React.useState("");
  const [sort, setSort] = React.useState("Спочатку нові");
  let list = CATALOGUE.filter((f) => (mood === "Всі" || f.mood === mood) && f.title.toLowerCase().includes(q.toLowerCase()));
  if (sort === "Спочатку нові") list = [...list].sort((a, b) => b.year - a.year);
  if (sort === "За назвою") list = [...list].sort((a, b) => a.title.localeCompare(b.title, "uk"));

  return (
    <Section tight>
      <SectionHeading eyebrow="Колекція" title="Обери настрій, не жанр" description="Не знаєш, що дивитись — напиши нам настрій, і ми зберемо вечір за тебе." />
      <div style={{ marginTop: mobile ? "var(--space-6)" : "var(--space-10)", display: "flex", alignItems: mobile ? "stretch" : "flex-end", flexDirection: mobile ? "column" : "row", gap: mobile ? "var(--space-4)" : "var(--space-8)", flexWrap: "wrap" }}>
        <div style={{ display: "flex", gap: "var(--space-2)", flexWrap: mobile ? "nowrap" : "wrap", overflowX: mobile ? "auto" : "visible", paddingBottom: mobile ? 4 : 0, margin: mobile ? "0 calc(-1 * var(--gutter-page))" : 0, paddingInline: mobile ? "var(--gutter-page)" : 0, scrollbarWidth: "none" }}>
          {MOODS.map((m) => <Tag key={m} selected={mood === m} onClick={() => setMood(m)}>{m}</Tag>)}
        </div>
        <div style={{ marginLeft: mobile ? 0 : "auto", display: "flex", gap: "var(--space-3)", minWidth: mobile ? 0 : 420, width: mobile ? "100%" : undefined }}>
          <Input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Знайти фільм" fullWidth iconLeft={<i data-lucide="search" style={{ width: 16, height: 16 }}></i>} />
          <Select value={sort} onChange={(e) => setSort(e.target.value)} options={["Спочатку нові", "За назвою"]} />
        </div>
      </div>
      <div style={{ margin: (mobile ? "var(--space-6)" : "var(--space-8)") + " 0", borderTop: "1px solid var(--border-hairline)" }} />
      <div style={{ display: "grid", gridTemplateColumns: mobile ? "repeat(2,1fr)" : "repeat(5,1fr)", gap: "var(--grid-gap)" }}>
        {list.map((f) => <FilmCard key={f.title} film={f} onClick={() => go("booking")} />)}
      </div>
      {!list.length ? <p style={{ font: "var(--type-body)", color: "var(--text-muted)" }}>Нічого не знайшли — напиши нам, підберемо вручну.</p> : null}
    </Section>
  );
}
Object.assign(window, { FilmsScreen, CATALOGUE, MOODS });
