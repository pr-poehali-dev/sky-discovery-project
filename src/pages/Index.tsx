export default function Index() {
  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-white border-b border-black">
        <div className="container mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
          <a href="/" className="text-sm font-bold tracking-tighter uppercase">
            Курсовая работа · 2026
          </a>
          <div className="flex space-x-8">
            <a href="#research" className="text-sm uppercase tracking-widest hover:text-red-600 transition-colors">
              Исследование
            </a>
            <a href="#characteristics" className="text-sm uppercase tracking-widest hover:text-red-600 transition-colors">
              Характеристика
            </a>
            <a href="#quality" className="text-sm uppercase tracking-widest hover:text-red-600 transition-colors">
              Оценка качества
            </a>
            <a href="#conclusions" className="text-sm uppercase tracking-widest hover:text-red-600 transition-colors">
              Выводы
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 md:px-8 container mx-auto">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-8 mb-8 md:mb-0">
            <p className="text-sm uppercase tracking-widest text-red-600 mb-4">Товароведение и экспертиза товаров</p>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-none mb-6">
              ТОВАРОВЕДНАЯ
              <br />
              ХАРАКТЕРИСТИКА
              <br />
              <span className="text-red-600">И ОЦЕНКА</span>
              <br />
              КАЧЕСТВА
            </h1>
            <p className="text-xl max-w-2xl mt-6">
              Колбасные изделия полукопчёные в розничной сети — исследование, анализ и экспертиза качества в соответствии с ГОСТ Р 53588-2009
            </p>
          </div>
          <div className="col-span-12 md:col-span-4 flex flex-col justify-center items-end gap-4">
            <div className="w-full aspect-square bg-red-600 flex items-center justify-center relative">
              <span className="text-white text-6xl font-bold tracking-tighter text-center leading-tight px-4">ПОЛУ­КОП­ЧЁНЫЕ</span>
              <div className="absolute -bottom-3 -right-3 w-16 h-16 bg-black"></div>
            </div>
          </div>
        </div>

        {/* Meta info strip */}
        <div className="mt-16 pt-8 border-t border-black grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <p className="text-sm uppercase tracking-widest text-neutral-500 mb-1">Дисциплина</p>
            <p className="font-bold">Товароведение</p>
          </div>
          <div>
            <p className="text-sm uppercase tracking-widest text-neutral-500 mb-1">Объект</p>
            <p className="font-bold">Полукопчёные колбасы</p>
          </div>
          <div>
            <p className="text-sm uppercase tracking-widest text-neutral-500 mb-1">Стандарт</p>
            <p className="font-bold">ГОСТ Р 53588-2009</p>
          </div>
          <div>
            <p className="text-sm uppercase tracking-widest text-neutral-500 mb-1">Год</p>
            <p className="font-bold">2026</p>
          </div>
        </div>
      </section>

      {/* Research Section */}
      <section id="research" className="py-20 px-4 md:px-8 bg-black text-white">
        <div className="container mx-auto">
          <h2 className="text-6xl font-bold tracking-tighter mb-4">ИССЛЕДОВАНИЕ</h2>
          <p className="text-neutral-400 mb-12 text-lg">Объекты и методы исследования</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Sample 1 */}
            <div className="group border border-neutral-800 p-6 hover:border-red-600 transition-colors duration-300">
              <div className="aspect-square bg-neutral-900 mb-4 overflow-hidden flex items-center justify-center group-hover:bg-red-600 transition-colors duration-300">
                <span className="text-white text-7xl font-bold">01</span>
              </div>
              <h3 className="text-xl font-bold mb-2">«Краковская»</h3>
              <p className="text-neutral-400">Полукопчёная колбаса высшего сорта. Содержание мышечной ткани не менее 40%</p>
              <p className="text-red-600 text-sm mt-3 uppercase tracking-widest">Высший сорт</p>
            </div>

            {/* Sample 2 */}
            <div className="group border border-neutral-800 p-6 hover:border-red-600 transition-colors duration-300">
              <div className="aspect-square bg-neutral-900 mb-4 overflow-hidden flex items-center justify-center group-hover:bg-red-600 transition-colors duration-300">
                <span className="text-white text-7xl font-bold">02</span>
              </div>
              <h3 className="text-xl font-bold mb-2">«Одесская»</h3>
              <p className="text-neutral-400">Полукопчёная колбаса первого сорта. Характерный пряный аромат копчения</p>
              <p className="text-red-600 text-sm mt-3 uppercase tracking-widest">Первый сорт</p>
            </div>

            {/* Sample 3 */}
            <div className="group border border-neutral-800 p-6 hover:border-red-600 transition-colors duration-300">
              <div className="aspect-square bg-neutral-900 mb-4 overflow-hidden flex items-center justify-center group-hover:bg-red-600 transition-colors duration-300">
                <span className="text-white text-7xl font-bold">03</span>
              </div>
              <h3 className="text-xl font-bold mb-2">«Украинская»</h3>
              <p className="text-neutral-400">Полукопчёная колбаса первого сорта со свининой и говядиной</p>
              <p className="text-red-600 text-sm mt-3 uppercase tracking-widest">Первый сорт</p>
            </div>
          </div>
        </div>
      </section>

      {/* Characteristics Section */}
      <section id="characteristics" className="py-20 px-4 md:px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 md:col-span-5">
              <h2 className="text-6xl font-bold tracking-tighter mb-8">ХАРАК­ТЕРИС­ТИКА</h2>
              <div className="aspect-[4/5] bg-neutral-100 relative mb-8 md:mb-0 flex items-center justify-center">
                <div className="absolute top-0 left-0 w-full h-2 bg-red-600"></div>
                <div className="text-center p-8">
                  <p className="text-8xl font-bold text-red-600 mb-2">60°C</p>
                  <p className="text-sm uppercase tracking-widest text-neutral-500">Температура копчения</p>
                  <div className="my-6 border-t border-black"></div>
                  <p className="text-5xl font-bold mb-2">35%</p>
                  <p className="text-sm uppercase tracking-widest text-neutral-500">Max влажность</p>
                  <div className="my-6 border-t border-black"></div>
                  <p className="text-5xl font-bold mb-2">6 мес.</p>
                  <p className="text-sm uppercase tracking-widest text-neutral-500">Срок хранения</p>
                </div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-7 md:pt-24">
              <p className="text-xl mb-6">
                Полукопчёные колбасы — продукты, в процессе производства которых применяется осадка, обжарка, варка, горячее копчение и сушка. Эти операции обеспечивают продукту особый вкус, аромат и длительный срок хранения.
              </p>
              <p className="mb-6">
                Производство регламентируется ГОСТ Р 53588-2009 «Колбасы полукопчёные». Стандарт устанавливает технические требования, правила приёмки, методы контроля, требования к маркировке и хранению готовой продукции.
              </p>
              <p className="mb-6">
                Ассортимент полукопчёных колбас в розничной сети формируется из продукции разных производителей, что обусловливает существенную вариативность органолептических и физико-химических показателей.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-12">
                <div>
                  <h3 className="text-sm uppercase tracking-widest mb-3 text-red-600">Показатели качества</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2"><span className="w-2 h-2 bg-red-600 inline-block"></span>Органолептические</li>
                    <li className="flex items-center gap-2"><span className="w-2 h-2 bg-black inline-block"></span>Физико-химические</li>
                    <li className="flex items-center gap-2"><span className="w-2 h-2 bg-black inline-block"></span>Микробиологические</li>
                    <li className="flex items-center gap-2"><span className="w-2 h-2 bg-black inline-block"></span>Безопасность</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm uppercase tracking-widest mb-3 text-red-600">Методы оценки</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2"><span className="w-2 h-2 bg-red-600 inline-block"></span>Органолептический</li>
                    <li className="flex items-center gap-2"><span className="w-2 h-2 bg-black inline-block"></span>Химический анализ</li>
                    <li className="flex items-center gap-2"><span className="w-2 h-2 bg-black inline-block"></span>Дегустация</li>
                    <li className="flex items-center gap-2"><span className="w-2 h-2 bg-black inline-block"></span>Маркировка</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Assessment Section */}
      <section id="quality" className="py-20 px-4 md:px-8 bg-black text-white">
        <div className="container mx-auto">
          <h2 className="text-6xl font-bold tracking-tighter mb-4">ОЦЕНКА КАЧЕСТВА</h2>
          <p className="text-neutral-400 mb-12 text-lg">Результаты экспертизы образцов</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Organoleptic */}
            <div className="border border-neutral-800 p-8">
              <h3 className="text-red-600 text-sm uppercase tracking-widest mb-6">01 · Органолептические показатели</h3>
              <div className="space-y-4">
                {[
                  { param: "Внешний вид", value: "Соответствует", score: "100%" },
                  { param: "Цвет на разрезе", value: "Розово-красный", score: "100%" },
                  { param: "Консистенция", value: "Упругая", score: "95%" },
                  { param: "Запах и вкус", value: "Характерный", score: "90%" },
                ].map((item) => (
                  <div key={item.param} className="flex items-center justify-between border-b border-neutral-800 pb-4">
                    <div>
                      <p className="font-bold">{item.param}</p>
                      <p className="text-neutral-400 text-sm">{item.value}</p>
                    </div>
                    <span className="text-red-600 font-bold text-xl">{item.score}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Physicochemical */}
            <div className="border border-neutral-800 p-8">
              <h3 className="text-red-600 text-sm uppercase tracking-widest mb-6">02 · Физико-химические показатели</h3>
              <div className="space-y-4">
                {[
                  { param: "Массовая доля влаги", value: "ГОСТ: ≤ 52%", score: "✓" },
                  { param: "Массовая доля жира", value: "ГОСТ: ≤ 45%", score: "✓" },
                  { param: "Массовая доля белка", value: "ГОСТ: ≥ 13%", score: "✓" },
                  { param: "Массовая доля соли", value: "ГОСТ: ≤ 4,5%", score: "✓" },
                ].map((item) => (
                  <div key={item.param} className="flex items-center justify-between border-b border-neutral-800 pb-4">
                    <div>
                      <p className="font-bold">{item.param}</p>
                      <p className="text-neutral-400 text-sm">{item.value}</p>
                    </div>
                    <span className="text-green-400 font-bold text-xl">{item.score}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Summary Table */}
          <div className="border border-neutral-700">
            <div className="grid grid-cols-4 bg-red-600 p-4">
              <p className="text-sm uppercase tracking-widest font-bold">Образец</p>
              <p className="text-sm uppercase tracking-widest font-bold">Сорт</p>
              <p className="text-sm uppercase tracking-widest font-bold">Соответствие ГОСТ</p>
              <p className="text-sm uppercase tracking-widest font-bold">Итог</p>
            </div>
            {[
              { name: "«Краковская»", grade: "Высший", gost: "Полное", result: "Отлично" },
              { name: "«Одесская»", grade: "Первый", gost: "Полное", result: "Хорошо" },
              { name: "«Украинская»", grade: "Первый", gost: "Частичное", result: "Удовл." },
            ].map((row, i) => (
              <div key={row.name} className={`grid grid-cols-4 p-4 border-t border-neutral-700 ${i % 2 === 1 ? "bg-neutral-900" : ""}`}>
                <p className="font-bold">{row.name}</p>
                <p className="text-neutral-400">{row.grade}</p>
                <p className="text-neutral-400">{row.gost}</p>
                <p className="text-red-600 font-bold">{row.result}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conclusions Section */}
      <section id="conclusions" className="py-20 px-4 md:px-8 bg-red-600 text-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-6xl font-bold tracking-tighter mb-8">ВЫВОДЫ</h2>
              <p className="text-xl mb-8 text-white/90">
                По результатам товароведной экспертизы полукопчёных колбасных изделий в розничной сети были сделаны следующие выводы:
              </p>
              <div className="space-y-6">
                {[
                  {
                    num: "01",
                    text: "Все исследуемые образцы прошли органолептическую оценку и соответствуют требованиям ГОСТ Р 53588-2009 по внешнему виду и цвету.",
                  },
                  {
                    num: "02",
                    text: "Физико-химические показатели образцов высшего сорта полностью соответствуют нормативной документации.",
                  },
                  {
                    num: "03",
                    text: "Образец «Украинская» показал частичное несоответствие по показателю влажности — требует дополнительного контроля.",
                  },
                  {
                    num: "04",
                    text: "Маркировка всех образцов соответствует требованиям ТР ТС 022/2011 «Пищевая продукция в части её маркировки».",
                  },
                ].map((item) => (
                  <div key={item.num} className="flex gap-6 border-t border-white/30 pt-6">
                    <span className="text-white/40 font-bold text-2xl flex-shrink-0">{item.num}</span>
                    <p>{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col justify-between">
              <div className="bg-black p-8">
                <h3 className="text-sm uppercase tracking-widest mb-6 text-red-600">Рекомендации</h3>
                <ul className="space-y-4">
                  <li className="flex gap-4 border-b border-neutral-800 pb-4">
                    <span className="text-red-600 font-bold">→</span>
                    <p>Усилить входной контроль влажности полукопчёных изделий первого сорта</p>
                  </li>
                  <li className="flex gap-4 border-b border-neutral-800 pb-4">
                    <span className="text-red-600 font-bold">→</span>
                    <p>Расширить ассортимент продукции высшего сорта в розничной сети</p>
                  </li>
                  <li className="flex gap-4">
                    <span className="text-red-600 font-bold">→</span>
                    <p>Проводить регулярный мониторинг качества поставляемой продукции</p>
                  </li>
                </ul>
              </div>

              <div className="bg-black p-8 mt-6">
                <h3 className="text-sm uppercase tracking-widest mb-4 text-neutral-500">Нормативная база</h3>
                <ul className="space-y-2 text-sm">
                  <li>· ГОСТ Р 53588-2009 — Колбасы полукопчёные</li>
                  <li>· ГОСТ Р 9792-73 — Методы отбора проб</li>
                  <li>· ТР ТС 021/2011 — Безопасность пищевой продукции</li>
                  <li>· ТР ТС 022/2011 — Маркировка пищевой продукции</li>
                  <li>· ГОСТ Р 51074-2003 — Информация для потребителя</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 md:px-8 border-t border-black">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm uppercase tracking-widest font-bold">Курсовая работа · 2026</p>
          <p className="text-sm text-neutral-500 text-center">
            Товароведная характеристика и оценка качества копчёностей: колбасные изделия полукопчёные в розничной сети
          </p>
          <p className="text-sm text-neutral-500">ГОСТ Р 53588-2009</p>
        </div>
      </footer>
    </main>
  );
}
