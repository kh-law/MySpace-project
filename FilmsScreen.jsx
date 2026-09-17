const CATALOGUE = [
  { title: "Гладіатор 2", genre: "Історична драма", year: "2024", duration: "2 год 28 хв", mood: "Епічне", poster: "films/hladiator-2-2024.jpg" },
  { title: "Дюна Частина друга", genre: "Sci-fi", year: "2024", duration: "2 год 46 хв", mood: "Епічне", poster: "films/diuna-chastyna-druha-2024.jpg" },
  { title: "Дюна", genre: "Sci-fi", year: "2021", duration: "2 год 35 хв", mood: "Епічне", poster: "films/diuna-2021.jpg" },
  { title: "Інтерстеллар", genre: "Sci-fi", year: "2014", duration: "2 год 49 хв", mood: "Епічне", poster: "films/interstellar-2014.jpg" },
  { title: "Хобіт Несподівана подорож", genre: "Фентезі", year: "2012", duration: "2 год 49 хв", mood: "Епічне", poster: "films/khobit-nespodivana-podorozh-2012.jpg" },
  { title: "Аватар", genre: "Sci-fi", year: "2009", duration: "2 год 42 хв", mood: "Епічне", poster: "films/avatar-2009.jpg" },
  { title: "300 спартанців", genre: "Історична драма", year: "2006", duration: "1 год 57 хв", mood: "Епічне", poster: "films/300-spartantsiv-2006.jpg" },
  { title: "Троя", genre: "Історична драма", year: "2004", duration: "2 год 43 хв", mood: "Епічне", poster: "films/troia-2004.jpg" },
  { title: "Володар перснів Повернення короля", genre: "Фентезі", year: "2003", duration: "3 год 21 хв", mood: "Епічне", poster: "films/volodar-persniv-povernennia-korolia-2003.jpg" },
  { title: "Володар перснів Дві вежі", genre: "Фентезі", year: "2002", duration: "2 год 59 хв", mood: "Епічне", poster: "films/volodar-persniv-dvi-vezhi-2002.jpg" },
  { title: "Володар перснів Братство персня", genre: "Фентезі", year: "2001", duration: "2 год 58 хв", mood: "Епічне", poster: "films/volodar-persniv-bratstvo-persnia-2001.jpg" },
  { title: "Гладіатор", genre: "Історична драма", year: "2000", duration: "2 год 35 хв", mood: "Епічне", poster: "films/hladiator-2000.jpg" },
  { title: "Титанік", genre: "Драма", year: "1997", duration: "3 год 14 хв", mood: "Епічне", poster: "films/tytanik-1997.jpg" },
  { title: "Хоробре серце", genre: "Історична драма", year: "1995", duration: "2 год 58 хв", mood: "Епічне", poster: "films/khorobre-sertse-1995.jpg" },
  { title: "Король Лев", genre: "Мультфільм", year: "1994", duration: "1 год 28 хв", mood: "Епічне", poster: "films/korol-lev-1994.jpg" },
  { title: "Список Шиндлера", genre: "Драма", year: "1993", duration: "3 год 15 хв", mood: "Епічне", poster: "films/spysok-shyndlera-1993.jpg" },
  { title: "Зоряні війни Епізод 4 Нова надія", genre: "Sci-fi", year: "1977", duration: "2 год 01 хв", mood: "Епічне", poster: "films/zoriani-viiny-epizod-4-nova-nadiia-1977.jpg" },
  { title: "Лоуренс Аравійський", genre: "Історична драма", year: "1962", duration: "3 год 42 хв", mood: "Епічне", poster: "films/lourens-araviiskyi-1962.jpg" },
  { title: "Спартак", genre: "Історична драма", year: "1960", duration: "3 год 17 хв", mood: "Епічне", poster: "films/spartak-1960.jpg" },
  { title: "Бен-Гур", genre: "Історична драма", year: "1959", duration: "3 год 32 хв", mood: "Епічне", poster: "films/ben-hur-1959.jpg" },
  { title: "Паразит", genre: "Трилер", year: "2019", duration: "2 год 12 хв", mood: "Напруга", poster: "films/parazyt-2019.jpg" },
  { title: "Джокер", genre: "Трилер", year: "2019", duration: "2 год 02 хв", mood: "Напруга", poster: "films/dzhoker-2019.jpg" },
  { title: "Тихе місце", genre: "Хорор", year: "2018", duration: "1 год 30 хв", mood: "Напруга", poster: "films/tykhe-mistse-2018.jpg" },
  { title: "Тікай!", genre: "Хорор", year: "2017", duration: "1 год 44 хв", mood: "Напруга", poster: "films/tikai-2017.jpg" },
  { title: "Воно", genre: "Хорор", year: "2017", duration: "2 год 15 хв", mood: "Напруга", poster: "films/vono-2017.jpg" },
  { title: "Прибуття", genre: "Sci-fi", year: "2016", duration: "1 год 56 хв", mood: "Напруга", poster: "films/prybuttia-2016.jpg" },
  { title: "Зникла", genre: "Трилер", year: "2014", duration: "2 год 29 хв", mood: "Напруга", poster: "films/znykla-2014.jpg" },
  { title: "Заклинання", genre: "Хорор", year: "2013", duration: "1 год 52 хв", mood: "Напруга", poster: "films/zaklynannia-2013.jpg" },
  { title: "Дівчина з татуюванням дракона", genre: "Трилер", year: "2011", duration: "2 год 38 хв", mood: "Напруга", poster: "films/divchyna-z-tatuiuvanniam-drakona-2011.jpg" },
  { title: "Острів проклятих", genre: "Трилер", year: "2010", duration: "2 год 18 хв", mood: "Напруга", poster: "films/ostriv-prokliatykh-2010.jpg" },
  { title: "Малхолланд драйв", genre: "Трилер", year: "2001", duration: "2 год 27 хв", mood: "Напруга", poster: "films/malkholland-draiv-2001.jpg" },
  { title: "Реквієм за мрією", genre: "Драма", year: "2000", duration: "1 год 42 хв", mood: "Напруга", poster: "films/rekviiem-za-mriieiu-2000.jpg" },
  { title: "Сім", genre: "Трилер", year: "1995", duration: "2 год 07 хв", mood: "Напруга", poster: "films/sim-1995.jpg" },
  { title: "Мовчання ягнят", genre: "Трилер", year: "1991", duration: "1 год 58 хв", mood: "Напруга", poster: "films/movchannia-iahniat-1991.jpg" },
  { title: "Термінатор 2 Судний день", genre: "Екшн", year: "1991", duration: "2 год 17 хв", mood: "Напруга", poster: "films/terminator-2-sudnyi-den-1991.jpg" },
  { title: "Хижак", genre: "Екшн", year: "1987", duration: "1 год 47 хв", mood: "Напруга", poster: "films/khyzhak-1987.jpg" },
  { title: "Чужі", genre: "Екшн", year: "1986", duration: "2 год 17 хв", mood: "Напруга", poster: "films/chuzhi-1986.jpg" },
  { title: "Сяйво", genre: "Хорор", year: "1980", duration: "2 год 26 хв", mood: "Напруга", poster: "films/siaivo-1980.jpg" },
  { title: "Чужий", genre: "Хорор", year: "1979", duration: "1 год 57 хв", mood: "Напруга", poster: "films/chuzhyi-1979.jpg" },
  { title: "Психо", genre: "Хорор", year: "1960", duration: "1 год 49 хв", mood: "Напруга", poster: "films/psykho-1960.jpg" },
  { title: "Красуня і чудовисько", genre: "Мюзикл", year: "2017", duration: "2 год 09 хв", mood: "Романтика", poster: "films/krasunia-i-chudovysko-2017.jpg" },
  { title: "Ла-Ла Ленд", genre: "Мюзикл", year: "2016", duration: "2 год 08 хв", mood: "Романтика", poster: "films/la-la-lend-2016.jpg" },
  { title: "П'ятдесят відтінків сірого", genre: "Драма", year: "2015", duration: "2 год 05 хв", mood: "Романтика", poster: "films/p-iatdesiat-vidtinkiv-siroho-2015.jpg" },
  { title: "Її", genre: "Драма", year: "2013", duration: "2 год 06 хв", mood: "Романтика", poster: "films/ii-2013.jpg" },
  { title: "Опівночі в Парижі", genre: "Комедія", year: "2011", duration: "1 год 34 хв", mood: "Романтика", poster: "films/opivnochi-v-paryzhi-2011.jpg" },
  { title: "Валентинів день", genre: "Комедія", year: "2010", duration: "2 год 05 хв", mood: "Романтика", poster: "films/valentyniv-den-2010.jpg" },
  { title: "500 днів літа", genre: "Комедійна драма", year: "2009", duration: "1 год 35 хв", mood: "Романтика", poster: "films/500-dniv-lita-2009.jpg" },
  { title: "Дорога змін", genre: "Драма", year: "2008", duration: "1 год 59 хв", mood: "Романтика", poster: "films/doroha-zmin-2008.jpg" },
  { title: "Спокута", genre: "Драма", year: "2007", duration: "2 год 03 хв", mood: "Романтика", poster: "films/spokuta-2007.jpg" },
  { title: "Гордість і упередження", genre: "Драма", year: "2005", duration: "2 год 09 хв", mood: "Романтика", poster: "films/hordist-i-uperedzhennia-2005.jpg" },
  { title: "Щоденник пам'яті", genre: "Драма", year: "2004", duration: "2 год 03 хв", mood: "Романтика", poster: "films/shchodennyk-pam-iati-2004.jpg" },
  { title: "Реальна любов", genre: "Комедія", year: "2003", duration: "2 год 15 хв", mood: "Романтика", poster: "films/realna-liubov-2003.jpg" },
  { title: "Щоденник Бріджит Джонс", genre: "Комедія", year: "2001", duration: "1 год 37 хв", mood: "Романтика", poster: "films/shchodennyk-bridzhyt-dzhons-2001.jpg" },
  { title: "Амелі", genre: "Драма", year: "2001", duration: "2 год 02 хв", mood: "Романтика", poster: "films/ameli-2001.jpg" },
  { title: "Ноттінг Хілл", genre: "Комедія", year: "1999", duration: "2 год 04 хв", mood: "Романтика", poster: "films/nottinh-khill-1999.jpg" },
  { title: "Життя прекрасне", genre: "Драма", year: "1997", duration: "1 год 56 хв", mood: "Романтика", poster: "films/zhyttia-prekrasne-1997.jpg" },
  { title: "Ромео + Джульєтта", genre: "Драма", year: "1996", duration: "2 год 00 хв", mood: "Романтика", poster: "films/romeo-dzhulietta-1996.jpg" },
  { title: "Красуня", genre: "Комедія", year: "1990", duration: "1 год 59 хв", mood: "Романтика", poster: "films/krasunia-1990.jpg" },
  { title: "Коли Гаррі зустрів Саллі", genre: "Комедія", year: "1989", duration: "1 год 36 хв", mood: "Романтика", poster: "films/koly-harri-zustriv-salli-1989.jpg" },
  { title: "Зелена книга", genre: "Драма", year: "2018", duration: "2 год 10 хв", mood: "Тепле", poster: "films/zelena-knyha-2018.jpg" },
  { title: "Диво", genre: "Драма", year: "2017", duration: "1 год 53 хв", mood: "Тепле", poster: "films/dyvo-2017.jpg" },
  { title: "Головоломка", genre: "Мультфільм", year: "2015", duration: "1 год 35 хв", mood: "Тепле", poster: "films/holovolomka-2015.jpg" },
  { title: "Життя Пі", genre: "Драма", year: "2012", duration: "2 год 07 хв", mood: "Тепле", poster: "films/zhyttia-pi-2012.jpg" },
  { title: "Місячне королівство", genre: "Комедійна драма", year: "2012", duration: "1 год 34 хв", mood: "Тепле", poster: "films/misiachne-korolivstvo-2012.jpg" },
  { title: "Історія іграшок 3", genre: "Мультфільм", year: "2010", duration: "1 год 43 хв", mood: "Тепле", poster: "films/istoriia-ihrashok-3-2010.jpg" },
  { title: "Вгору", genre: "Мультфільм", year: "2009", duration: "1 год 36 хв", mood: "Тепле", poster: "films/vhoru-2009.jpg" },
  { title: "Хатіко Найвірніший друг", genre: "Драма", year: "2009", duration: "1 год 33 хв", mood: "Тепле", poster: "films/khatiko-naivirnishyi-druh-2009.jpg" },
  { title: "Пошуки Немо", genre: "Мультфільм", year: "2003", duration: "1 год 40 хв", mood: "Тепле", poster: "films/poshuky-nemo-2003.jpg" },
  { title: "Зелена миля", genre: "Драма", year: "1999", duration: "3 год 09 хв", mood: "Тепле", poster: "films/zelena-mylia-1999.jpg" },
  { title: "Патч Адамс", genre: "Драма", year: "1998", duration: "1 год 55 хв", mood: "Тепле", poster: "films/patch-adams-1998.jpg" },
  { title: "Форрест Гамп", genre: "Драма", year: "1994", duration: "2 год 22 хв", mood: "Тепле", poster: "films/forrest-hamp-1994.jpg" },
  { title: "Втеча з Шоушенка", genre: "Драма", year: "1994", duration: "2 год 22 хв", mood: "Тепле", poster: "films/vtecha-z-shoushenka-1994.jpg" },
  { title: "Пробудження", genre: "Драма", year: "1990", duration: "2 год 01 хв", mood: "Тепле", poster: "films/probudzhennia-1990.jpg" },
  { title: "Клуб Мертвих поетів", genre: "Драма", year: "1989", duration: "2 год 08 хв", mood: "Тепле", poster: "films/klub-mertvykh-poetiv-1989.jpg" },
  { title: "Мій сусід Тоторо", genre: "Мультфільм", year: "1988", duration: "1 год 26 хв", mood: "Тепле", poster: "films/mii-susid-totoro-1988.jpg" },
  { title: "Клуб сніданок", genre: "Драма", year: "1985", duration: "1 год 37 хв", mood: "Тепле", poster: "films/klub-snidanok-1985.jpg" },
  { title: "Крамер проти Крамера", genre: "Драма", year: "1979", duration: "1 год 45 хв", mood: "Тепле", poster: "films/kramer-proty-kramera-1979.jpg" },
  { title: "Пролітаючи над гніздом зозулі", genre: "Драма", year: "1975", duration: "2 год 13 хв", mood: "Тепле", poster: "films/prolitaiuchy-nad-hnizdom-zozuli-1975.jpg" },
  { title: "Це чудове життя", genre: "Драма", year: "1946", duration: "2 год 10 хв", mood: "Тепле", poster: "films/tse-chudove-zhyttia-1946.jpg" },
  { title: "Джуманджі Наступний рівень", genre: "Пригоди", year: "2019", duration: "2 год 03 хв", mood: "Легке", poster: "films/dzhumandzhi-nastupnyi-riven-2019.jpg" },
  { title: "Тор Рагнарок", genre: "Екшн-комедія", year: "2017", duration: "2 год 10 хв", mood: "Легке", poster: "films/tor-rahnarok-2017.jpg" },
  { title: "Дедпул", genre: "Екшн-комедія", year: "2016", duration: "1 год 48 хв", mood: "Легке", poster: "films/dedpul-2016.jpg" },
  { title: "Стажер", genre: "Комедія", year: "2015", duration: "2 год 01 хв", mood: "Легке", poster: "films/stazher-2015.jpg" },
  { title: "Паддінгтон", genre: "Сімейне", year: "2014", duration: "1 год 35 хв", mood: "Легке", poster: "films/paddinhton-2014.jpg" },
  { title: "Тачки", genre: "Мультфільм", year: "2006", duration: "1 год 57 хв", mood: "Легке", poster: "films/tachky-2006.jpg" },
  { title: "Диявол носить Prada", genre: "Комедія", year: "2006", duration: "1 год 49 хв", mood: "Легке", poster: "films/dyiavol-nosyt-prada-2006.jpg" },
  { title: "Мадагаскар", genre: "Мультфільм", year: "2005", duration: "1 год 26 хв", mood: "Легке", poster: "films/madahaskar-2005.jpg" },
  { title: "Секретний агент Джонні Інгліш", genre: "Комедія", year: "2003", duration: "1 год 27 хв", mood: "Легке", poster: "films/sekretnyi-ahent-dzhonni-inhlish-2003.jpg" },
  { title: "Шрек", genre: "Мультфільм", year: "2001", duration: "1 год 30 хв", mood: "Легке", poster: "films/shrek-2001.jpg" },
  { title: "Великий Лебовскі", genre: "Комедія", year: "1998", duration: "1 год 57 хв", mood: "Легке", poster: "films/velykyi-lebovski-1998.jpg" },
  { title: "Люди в чорному", genre: "Sci-fi комедія", year: "1997", duration: "1 год 38 хв", mood: "Легке", poster: "films/liudy-v-chornomu-1997.jpg" },
  { title: "Джуманджі", genre: "Пригоди", year: "1995", duration: "1 год 44 хв", mood: "Легке", poster: "films/dzhumandzhi-1995.jpg" },
  { title: "Історія іграшок", genre: "Мультфільм", year: "1995", duration: "1 год 21 хв", mood: "Легке", poster: "films/istoriia-ihrashok-1995.jpg" },
  { title: "Маска", genre: "Комедія", year: "1994", duration: "1 год 41 хв", mood: "Легке", poster: "films/maska-1994.jpg" },
  { title: "Тупий і ще тупіший", genre: "Комедія", year: "1994", duration: "1 год 47 хв", mood: "Легке", poster: "films/tupyi-i-shche-tupishyi-1994.jpg" },
  { title: "Один вдома", genre: "Комедія", year: "1990", duration: "1 год 43 хв", mood: "Легке", poster: "films/odyn-vdoma-1990.jpg" },
  { title: "Голий пістолет", genre: "Комедія", year: "1988", duration: "1 год 25 хв", mood: "Легке", poster: "films/holyi-pistolet-1988.jpg" },
  { title: "Мисливці за привидами", genre: "Комедія", year: "1984", duration: "1 год 45 хв", mood: "Легке", poster: "films/myslyvtsi-za-pryvydamy-1984.jpg" },
  { title: "Продюсери", genre: "Комедія", year: "1968", duration: "1 год 28 хв", mood: "Легке", poster: "films/prodiusery-1968.jpg" },
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
        <div style={{ display: "flex", gap: "var(--space-2)", flexWrap: mobile ? "nowrap" : "wrap", overflowX: mobile ? "auto" : "visible", width: mobile ? "calc(100% + 2 * var(--gutter-page))" : undefined, maxWidth: mobile ? "100vw" : undefined, flex: mobile ? "0 0 auto" : undefined, paddingBottom: mobile ? 4 : 0, margin: mobile ? "0 calc(-1 * var(--gutter-page))" : 0, paddingInline: mobile ? "var(--gutter-page)" : 0, scrollbarWidth: "none" }}>
          {MOODS.map((m) => <Tag key={m} selected={mood === m} onClick={() => setMood(m)}>{m}</Tag>)}
        </div>
        <div style={{ marginLeft: mobile ? 0 : "auto", display: "flex", gap: "var(--space-3)", minWidth: mobile ? 0 : 420, width: mobile ? "100%" : undefined }}>
          <Input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Знайти фільм" fullWidth iconLeft={<i data-lucide="search" style={{ width: 16, height: 16 }}></i>} />
          <Select value={sort} onChange={(e) => setSort(e.target.value)} options={["Спочатку нові", "За назвою"]} />
        </div>
      </div>
      <div style={{ margin: (mobile ? "var(--space-6)" : "var(--space-8)") + " 0", borderTop: "1px solid var(--border-hairline)" }} />
      <div style={mobile
        ? { display: "flex", gap: "var(--space-3)", overflowX: "auto", scrollSnapType: "x mandatory", WebkitOverflowScrolling: "touch", margin: "0 calc(-1 * var(--gutter-page))", padding: "0 var(--gutter-page) var(--space-3)", scrollbarWidth: "none" }
        : { display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: "var(--grid-gap)" }}>
        {list.map((f) => mobile
          ? <div key={f.title} style={{ flex: "0 0 64%", maxWidth: 240, scrollSnapAlign: "start" }}><FilmCard film={f} onClick={() => go("booking")} /></div>
          : <FilmCard key={f.title} film={f} onClick={() => go("booking")} />)}
      </div>
      {mobile ? <Label style={{ display: "block", marginTop: "var(--space-4)", color: "var(--text-faint)" }}>Гортай убік · {list.length} фільмів</Label> : null}
      {!list.length ? <p style={{ font: "var(--type-body)", color: "var(--text-muted)" }}>Нічого не знайшли — напиши нам, підберемо вручну.</p> : null}
    </Section>
  );
}
Object.assign(window, { FilmsScreen, CATALOGUE, MOODS });
