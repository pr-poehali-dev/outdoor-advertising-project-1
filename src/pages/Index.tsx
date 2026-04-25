import { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMAGE = "https://cdn.poehali.dev/projects/b84c7ab7-04b6-41e2-afe7-60a0b48f32aa/files/7347c5b6-148d-4149-93ea-ab4dfa2ef6de.jpg";
const LIGHTBOX_IMAGE = "https://cdn.poehali.dev/projects/b84c7ab7-04b6-41e2-afe7-60a0b48f32aa/files/f0dd7f87-fe4e-4b29-ae2c-4205517d8f38.jpg";
const WORKSHOP_IMAGE = "https://cdn.poehali.dev/projects/b84c7ab7-04b6-41e2-afe7-60a0b48f32aa/files/6a6cb52f-5456-4cea-9376-b41ae76bef40.jpg";

const SERVICES = [
  {
    id: 1,
    title: "Объёмные буквы",
    category: "буквы",
    material: "металл",
    priceFrom: 3000,
    size: "от 10 см",
    emoji: "🔠",
    description: "Металлические, пластиковые и акриловые объёмные буквы с подсветкой или без. Любые шрифты, любые размеры.",
    details: ["Высота от 10 до 200 см", "Материал: нержавейка, акрил, ПВХ", "Подсветка LED изнутри или контровая", "Монтаж на любую поверхность"],
  },
  {
    id: 2,
    title: "Плоские буквы",
    category: "буквы",
    material: "акрил",
    priceFrom: 800,
    size: "от 5 см",
    emoji: "🅰️",
    description: "Вырезанные буквы из акрила, металла или ПВХ. Бюджетное и стильное решение для вывески.",
    details: ["Высота от 5 до 150 см", "Материал: акрил, ПВХ, алюминий", "Самоклеящиеся или крепёжные", "Широкая палитра цветов"],
  },
  {
    id: 3,
    title: "Баннер",
    category: "печать",
    material: "ткань",
    priceFrom: 300,
    size: "любой",
    emoji: "🪧",
    description: "Широкоформатная печать баннеров на банерной ткани, сетке или ПВХ. Срочное изготовление от 1 дня.",
    details: ["Любые размеры", "Материал: баннерная ткань, сетка", "Люверсы, карманы, растяжки", "Срочно от 1 дня"],
  },
  {
    id: 4,
    title: "Световые короба",
    category: "световые",
    material: "акрил",
    priceFrom: 5000,
    size: "от 20×30 см",
    emoji: "💡",
    description: "Лайтбоксы с равномерной LED-подсветкой. Одно- и двустороннее свечение. Для фасадов и интерьеров.",
    details: ["Размер от 20×30 до 3000×2000 мм", "Односторонний / двусторонний", "LED-подсветка, энергосберегающая", "Установка по всему городу"],
  },
  {
    id: 5,
    title: "Штендер",
    category: "носители",
    material: "металл",
    priceFrom: 2500,
    size: "стандарт",
    emoji: "📋",
    description: "Переносные уличные стенды с вашей рекламой. Металл с порошковым покрытием, устойчивы к погоде.",
    details: ["Стандарт: 60×90 см", "Материал: сталь, алюминий", "Сменные вставки", "Двусторонний формат"],
  },
  {
    id: 6,
    title: "Адресные таблички",
    category: "таблички",
    material: "акрил",
    priceFrom: 600,
    size: "стандарт",
    emoji: "📍",
    description: "Номерные и адресные таблички для офисов, квартир и учреждений. Нержавейка, акрил, пластик.",
    details: ["Любые размеры и формы", "Гравировка и УФ-печать", "Нержавеющая сталь, акрил", "Индивидуальный дизайн"],
  },
  {
    id: 7,
    title: "Гибкий неон",
    category: "световые",
    material: "неон",
    priceFrom: 4000,
    size: "от 50 см",
    emoji: "⚡",
    description: "Яркие вывески из гибкого LED-неона. Любые формы, логотипы, надписи. Эффект настоящей неоновой трубки.",
    details: ["Длина от 50 см", "16+ цветов свечения", "Потребление в 5× меньше газового неона", "Срок службы 50 000 ч"],
  },
  {
    id: 8,
    title: "Услуги дизайнера",
    category: "дизайн",
    material: "цифровой",
    priceFrom: 1500,
    size: "–",
    emoji: "✏️",
    description: "Разработка макетов вывесок, логотипов и фирменного стиля. Все форматы для производства и печати.",
    details: ["Логотип и фирменный стиль", "Макет вывески под производство", "3D-визуализация", "Правки входят в стоимость"],
  },
  {
    id: 9,
    title: "3D-печать по фото",
    category: "3d",
    material: "пластик",
    priceFrom: 2000,
    size: "от 5 см",
    emoji: "🖨️",
    description: "Объёмные фигуры, логотипы, сувениры и макеты по вашему фото или 3D-модели. FDM и фотополимер.",
    details: ["Фигуры от 5 до 500 мм", "FDM и фотополимерная печать", "Постобработка и окраска", "Тираж от 1 шт."],
  },
];

const PORTFOLIO_ITEMS = [
  { id: 1, title: "Ресторан «Восток»", category: "световые", img: HERO_IMAGE, tags: ["Световые буквы", "Подсветка"] },
  { id: 2, title: "Бутик одежды VERA", category: "буквы", img: LIGHTBOX_IMAGE, tags: ["Объёмные буквы", "Нержавейка"] },
  { id: 3, title: "Автосервис ProDrive", category: "печать", img: WORKSHOP_IMAGE, tags: ["Баннер", "Широкоформат"] },
  { id: 4, title: "Кофейня BREW", category: "световые", img: HERO_IMAGE, tags: ["Неон", "Лофт-интерьер"] },
  { id: 5, title: "ТЦ «Меркурий»", category: "буквы", img: LIGHTBOX_IMAGE, tags: ["Объёмные буквы", "LED"] },
  { id: 6, title: "Салон красоты Lux", category: "световые", img: WORKSHOP_IMAGE, tags: ["Неон", "Дизайн"] },
];

const TEAM = [
  { name: "Артём Власов", role: "Руководитель", exp: "12 лет опыта", emoji: "👨‍💼" },
  { name: "Ксения Миронова", role: "Главный дизайнер", exp: "8 лет опыта", emoji: "👩‍🎨" },
  { name: "Дмитрий Соколов", role: "Мастер производства", exp: "10 лет опыта", emoji: "👨‍🔧" },
  { name: "Анна Лебедева", role: "Менеджер проектов", exp: "5 лет опыта", emoji: "👩‍💻" },
];

const NAV_LINKS = [
  { label: "Главная", href: "#home" },
  { label: "Каталог", href: "#catalog" },
  { label: "Портфолио", href: "#portfolio" },
  { label: "О нас", href: "#about" },
  { label: "Контакты", href: "#contacts" },
];

const CATEGORIES = ["все", "буквы", "световые", "печать", "носители", "таблички", "дизайн", "3d"];
const MATERIALS = ["все", "металл", "акрил", "ткань", "неон", "пластик", "цифровой"];

type Service = typeof SERVICES[0];

export default function Index() {
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [filterCategory, setFilterCategory] = useState("все");
  const [filterMaterial, setFilterMaterial] = useState("все");
  const [priceRange, setPriceRange] = useState(10000);
  const [portfolioFilter, setPortfolioFilter] = useState("все");
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [formData, setFormData] = useState({ name: "", phone: "", message: "" });
  const [formSent, setFormSent] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "catalog", "portfolio", "about", "contacts"];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(id);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const filteredServices = SERVICES.filter((s) => {
    const catOk = filterCategory === "все" || s.category === filterCategory;
    const matOk = filterMaterial === "все" || s.material === filterMaterial;
    const priceOk = s.priceFrom <= priceRange;
    return catOk && matOk && priceOk;
  });

  const portfolioCategories = ["все", ...Array.from(new Set(PORTFOLIO_ITEMS.map((p) => p.category)))];
  const filteredPortfolio = portfolioFilter === "все"
    ? PORTFOLIO_ITEMS
    : PORTFOLIO_ITEMS.filter((p) => p.category === portfolioFilter);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSent(true);
  };

  const scrollTo = (href: string) => {
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#0D0D0D] text-white">

      {/* ─── NAVBAR ─── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0D0D0D]/90 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
          <a href="#home" onClick={(e) => { e.preventDefault(); scrollTo("#home"); }}
            className="font-oswald font-bold text-2xl tracking-widest">
            <span className="neon-text">ЗН</span>АК
          </a>

          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                className={`nav-link text-sm ${activeSection === link.href.replace("#", "") ? "!text-[#FFD700]" : ""}`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <button
            className="hidden md:block neon-btn px-5 py-2 text-sm"
            onClick={() => scrollTo("#contacts")}
          >
            Заказать расчёт
          </button>

          <button
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Icon name={mobileMenuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-[#141414] border-t border-white/5 px-6 py-4 flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href}
                onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                className="font-oswald text-white/70 text-sm uppercase tracking-widest hover:text-[#FFD700]">
                {link.label}
              </a>
            ))}
            <button className="neon-btn px-5 py-2 text-sm mt-2" onClick={() => scrollTo("#contacts")}>
              Заказать расчёт
            </button>
          </div>
        )}
      </nav>

      {/* ─── HERO ─── */}
      <section id="home" className="relative min-h-screen flex items-center overflow-hidden grid-bg noise-bg pt-16">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25"
          style={{ backgroundImage: `url(${HERO_IMAGE})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D0D0D] via-[#0D0D0D]/80 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6 animate-fade-up">
              <div className="section-line" />
              <span className="font-golos text-[#FFD700] text-sm uppercase tracking-widest">
                Производство с 2010 года
              </span>
            </div>

            <h1 className="font-oswald font-bold text-6xl md:text-8xl leading-none mb-6 animate-fade-up delay-100">
              ТВОЯ<br />
              <span className="neon-text">НАРУЖНАЯ</span><br />
              РЕКЛАМА
            </h1>

            <p className="font-golos text-white/60 text-lg md:text-xl mb-10 max-w-lg animate-fade-up delay-200">
              Объёмные буквы, световые короба, неон, баннеры — всё под ключ.
              От дизайна до монтажа за 3 дня.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-up delay-300">
              <button className="neon-btn px-8 py-4 text-base" onClick={() => scrollTo("#catalog")}>
                Смотреть каталог
              </button>
              <button
                className="border border-white/20 px-8 py-4 text-base font-oswald uppercase tracking-wider hover:border-[#FFD700] hover:text-[#FFD700] transition-all"
                onClick={() => scrollTo("#contacts")}
              >
                Рассчитать стоимость
              </button>
            </div>

            <div className="flex gap-12 mt-16 animate-fade-up delay-400">
              {[["500+", "проектов"], ["14", "лет на рынке"], ["3 дня", "срок от заявки"]].map(([num, label]) => (
                <div key={label}>
                  <div className="font-oswald text-3xl font-bold neon-text">{num}</div>
                  <div className="font-golos text-white/50 text-sm mt-1">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" size={28} className="text-[#FFD700] opacity-60" />
        </div>
      </section>

      {/* ─── CATALOG ─── */}
      <section id="catalog" className="py-24 bg-[#0D0D0D]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-14">
            <div className="flex items-center gap-3 mb-4">
              <div className="section-line" />
              <span className="font-golos text-[#FFD700] text-sm uppercase tracking-widest">Что мы делаем</span>
            </div>
            <h2 className="font-oswald text-5xl md:text-6xl font-bold">КАТАЛОГ УСЛУГ</h2>
          </div>

          {/* Filters */}
          <div className="bg-[#141414] border border-white/8 p-6 mb-10 space-y-5">
            <div>
              <p className="font-golos text-white/40 text-xs uppercase tracking-widest mb-3">Тип услуги</p>
              <div className="flex flex-wrap gap-2">
                {CATEGORIES.map((c) => (
                  <button
                    key={c}
                    className={`tag-filter ${filterCategory === c ? "active" : ""}`}
                    onClick={() => setFilterCategory(c)}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <p className="font-golos text-white/40 text-xs uppercase tracking-widest mb-3">Материал</p>
              <div className="flex flex-wrap gap-2">
                {MATERIALS.map((m) => (
                  <button
                    key={m}
                    className={`tag-filter ${filterMaterial === m ? "active" : ""}`}
                    onClick={() => setFilterMaterial(m)}
                  >
                    {m}
                  </button>
                ))}
              </div>
            </div>
            <div className="price-slider">
              <p className="font-golos text-white/40 text-xs uppercase tracking-widest mb-3">
                Цена до: <span className="text-[#FFD700] ml-2 font-semibold">{priceRange.toLocaleString("ru")} ₽</span>
              </p>
              <input
                type="range"
                min={500}
                max={10000}
                step={500}
                value={priceRange}
                onChange={(e) => setPriceRange(Number(e.target.value))}
              />
            </div>
          </div>

          {/* Services Grid */}
          {filteredServices.length === 0 ? (
            <div className="text-center py-16 text-white/30 font-golos">Ничего не найдено — попробуй изменить фильтры</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredServices.map((service, i) => (
                <div
                  key={service.id}
                  className="card-dark p-7 cursor-pointer"
                  style={{ animationDelay: `${i * 0.07}s` }}
                  onClick={() => setSelectedService(service)}
                >
                  <div className="text-4xl mb-4">{service.emoji}</div>
                  <h3 className="font-oswald text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="font-golos text-white/50 text-sm mb-5 leading-relaxed">{service.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="font-oswald text-[#FFD700] font-semibold">
                      от {service.priceFrom.toLocaleString("ru")} ₽
                    </span>
                    <span className="font-golos text-white/30 text-xs">{service.size}</span>
                  </div>
                  <div className="flex items-center gap-2 mt-4 text-[#FFD700] opacity-60">
                    <span className="font-golos text-sm">Подробнее</span>
                    <Icon name="ArrowRight" size={14} />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ─── SERVICE MODAL ─── */}
      {selectedService && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setSelectedService(null)}
        >
          <div
            className="bg-[#141414] border border-white/10 max-w-lg w-full p-8 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-white/40 hover:text-white"
              onClick={() => setSelectedService(null)}
            >
              <Icon name="X" size={20} />
            </button>
            <div className="text-5xl mb-5">{selectedService.emoji}</div>
            <h3 className="font-oswald text-3xl font-bold mb-3">{selectedService.title}</h3>
            <p className="font-golos text-white/60 mb-6 leading-relaxed">{selectedService.description}</p>
            <ul className="space-y-2 mb-8">
              {selectedService.details.map((d) => (
                <li key={d} className="flex items-start gap-3">
                  <span className="text-[#FFD700] mt-1"><Icon name="Check" size={14} /></span>
                  <span className="font-golos text-white/70 text-sm">{d}</span>
                </li>
              ))}
            </ul>
            <div className="flex items-center justify-between">
              <span className="font-oswald text-2xl neon-text font-bold">
                от {selectedService.priceFrom.toLocaleString("ru")} ₽
              </span>
              <button
                className="neon-btn px-6 py-3 text-sm"
                onClick={() => { setSelectedService(null); scrollTo("#contacts"); }}
              >
                Заказать
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ─── PORTFOLIO ─── */}
      <section id="portfolio" className="py-24 bg-[#141414]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-14">
            <div className="flex items-center gap-3 mb-4">
              <div className="section-line" />
              <span className="font-golos text-[#FFD700] text-sm uppercase tracking-widest">Наши работы</span>
            </div>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <h2 className="font-oswald text-5xl md:text-6xl font-bold">ПОРТФОЛИО</h2>
              <div className="flex flex-wrap gap-2">
                {portfolioCategories.map((c) => (
                  <button
                    key={c}
                    className={`tag-filter ${portfolioFilter === c ? "active" : ""}`}
                    onClick={() => setPortfolioFilter(c)}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredPortfolio.map((item) => (
              <div key={item.id} className="portfolio-img aspect-[4/3] cursor-pointer">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
                <div className="overlay flex flex-col justify-end p-5">
                  <h4 className="font-oswald text-xl font-bold">{item.title}</h4>
                  <div className="flex gap-2 mt-2 flex-wrap">
                    {item.tags.map((tag) => (
                      <span key={tag} className="font-golos text-xs bg-[#FFD700] text-[#0D0D0D] px-2 py-0.5">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHY US ─── */}
      <section className="py-20 bg-[#0D0D0D] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: "Zap", title: "Быстро", desc: "Срок от 3 дней. Срочное изготовление за 24 часа" },
              { icon: "Shield", title: "Надёжно", desc: "Гарантия 2 года на всю продукцию и монтаж" },
              { icon: "Layers", title: "Под ключ", desc: "Дизайн, производство, монтаж — один подрядчик" },
              { icon: "Truck", title: "Доставка", desc: "Доставим и установим по всему региону" },
            ].map((item) => (
              <div key={item.title} className="flex gap-4 items-start">
                <div className="w-10 h-10 flex items-center justify-center border border-[#FFD700]/40 shrink-0">
                  <Icon name={item.icon as "Zap"} size={18} className="text-[#FFD700]" fallback="Check" />
                </div>
                <div>
                  <h4 className="font-oswald text-lg font-semibold mb-1">{item.title}</h4>
                  <p className="font-golos text-white/50 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ABOUT ─── */}
      <section id="about" className="py-24 bg-[#141414]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="section-line" />
                <span className="font-golos text-[#FFD700] text-sm uppercase tracking-widest">О компании</span>
              </div>
              <h2 className="font-oswald text-5xl font-bold mb-6">
                МЫ ДЕЛАЕМ<br /><span className="neon-text">ЗНАКИ</span> КОТОРЫЕ<br />РАБОТАЮТ
              </h2>
              <p className="font-golos text-white/60 leading-relaxed mb-6">
                С 2010 года мы помогаем бизнесу выделяться. За 14 лет выполнили более 500 проектов —
                от небольших адресных табличек до масштабных фасадных вывесок торговых центров.
              </p>
              <p className="font-golos text-white/60 leading-relaxed mb-10">
                У нас собственное производство площадью 800 м². Все этапы — дизайн, резка, монтаж —
                под одной крышей. Никаких посредников, только прямая цена и контроль качества.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {[["800 м²", "производство"], ["50+", "видов материалов"], ["2 года", "гарантия"], ["24/7", "поддержка"]].map(([num, label]) => (
                  <div key={label} className="border-l-2 border-[#FFD700] pl-4">
                    <div className="font-oswald text-2xl font-bold neon-text">{num}</div>
                    <div className="font-golos text-white/40 text-sm">{label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img src={WORKSHOP_IMAGE} alt="Производство" className="w-full h-[500px] object-cover" />
              <div className="absolute -bottom-6 -left-6 bg-[#FFD700] p-6 hidden lg:block">
                <div className="font-oswald text-[#0D0D0D] font-bold text-4xl">14</div>
                <div className="font-golos text-[#0D0D0D]/70 text-sm">лет опыта</div>
              </div>
            </div>
          </div>

          {/* Team */}
          <div className="mt-24">
            <h3 className="font-oswald text-3xl font-bold mb-10">НАША КОМАНДА</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {TEAM.map((member) => (
                <div key={member.name} className="card-dark p-6 text-center">
                  <div className="text-5xl mb-4">{member.emoji}</div>
                  <h4 className="font-oswald text-lg font-semibold mb-1">{member.name}</h4>
                  <p className="font-golos text-[#FFD700] text-sm mb-1">{member.role}</p>
                  <p className="font-golos text-white/40 text-xs">{member.exp}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA BANNER ─── */}
      <section className="relative py-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${LIGHTBOX_IMAGE})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D0D0D] to-[#0D0D0D]/90" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <h2 className="font-oswald text-4xl md:text-6xl font-bold mb-4">
            ГОТОВЫ НАЧАТЬ?<br />
            <span className="neon-text">РАСЧЁТ ЗА 30 МИНУТ</span>
          </h2>
          <p className="font-golos text-white/50 mb-8 text-lg">Отправьте заявку — ответим быстро и без воды</p>
          <button className="neon-btn px-10 py-4 text-base" onClick={() => scrollTo("#contacts")}>
            Получить расчёт
          </button>
        </div>
      </section>

      {/* ─── CONTACTS ─── */}
      <section id="contacts" className="py-24 bg-[#0D0D0D]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="section-line" />
                <span className="font-golos text-[#FFD700] text-sm uppercase tracking-widest">Контакты</span>
              </div>
              <h2 className="font-oswald text-5xl font-bold mb-8">СВЯЖИТЕСЬ<br />С НАМИ</h2>

              <div className="space-y-6">
                {[
                  { icon: "Phone", label: "Телефон", value: "+7 (900) 000-00-00" },
                  { icon: "Mail", label: "Email", value: "info@znak-reklama.ru" },
                  { icon: "MapPin", label: "Адрес", value: "г. Ваш город, ул. Производственная, 1" },
                  { icon: "Clock", label: "Режим работы", value: "Пн–Пт: 9:00–18:00, Сб: 10:00–15:00" },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="w-10 h-10 flex items-center justify-center border border-[#FFD700]/30 shrink-0 mt-0.5">
                      <Icon name={item.icon as "Phone"} size={16} className="text-[#FFD700]" fallback="Info" />
                    </div>
                    <div>
                      <p className="font-golos text-white/40 text-xs uppercase tracking-wider mb-0.5">{item.label}</p>
                      <p className="font-golos text-white">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#141414] border border-white/8 p-8">
              {formSent ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-12">
                  <div className="text-5xl mb-4">✅</div>
                  <h3 className="font-oswald text-2xl font-bold mb-2">Заявка отправлена!</h3>
                  <p className="font-golos text-white/50">Свяжемся с вами в течение 30 минут</p>
                </div>
              ) : (
                <>
                  <h3 className="font-oswald text-2xl font-bold mb-6">ОСТАВИТЬ ЗАЯВКУ</h3>
                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    <div>
                      <label className="font-golos text-white/40 text-xs uppercase tracking-wider block mb-2">Ваше имя</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-[#1E1E1E] border border-white/10 px-4 py-3 font-golos text-white focus:outline-none focus:border-[#FFD700] transition-colors"
                        placeholder="Иван Иванов"
                      />
                    </div>
                    <div>
                      <label className="font-golos text-white/40 text-xs uppercase tracking-wider block mb-2">Телефон</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-[#1E1E1E] border border-white/10 px-4 py-3 font-golos text-white focus:outline-none focus:border-[#FFD700] transition-colors"
                        placeholder="+7 (___) ___-__-__"
                      />
                    </div>
                    <div>
                      <label className="font-golos text-white/40 text-xs uppercase tracking-wider block mb-2">Описание задачи</label>
                      <textarea
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        rows={4}
                        className="w-full bg-[#1E1E1E] border border-white/10 px-4 py-3 font-golos text-white focus:outline-none focus:border-[#FFD700] transition-colors resize-none"
                        placeholder="Что хотите сделать? Размеры, материалы, сроки..."
                      />
                    </div>
                    <button type="submit" className="neon-btn w-full py-4 text-base">
                      Отправить заявку
                    </button>
                    <p className="font-golos text-white/20 text-xs text-center">
                      Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="py-8 border-t border-white/5 bg-[#0D0D0D]">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-oswald text-xl tracking-widest">
            <span className="neon-text">ЗН</span>АК
          </span>
          <p className="font-golos text-white/30 text-sm">© 2024 ЗНАК — Наружная реклама. Все права защищены.</p>
          <div className="flex gap-6">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                className="font-golos text-white/30 hover:text-[#FFD700] text-xs transition-colors uppercase tracking-wider"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
