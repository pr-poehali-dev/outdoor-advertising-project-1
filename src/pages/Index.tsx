import { useState, useEffect, useRef } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMAGE = "https://cdn.poehali.dev/projects/b84c7ab7-04b6-41e2-afe7-60a0b48f32aa/files/7347c5b6-148d-4149-93ea-ab4dfa2ef6de.jpg";
const LIGHTBOX_IMAGE = "https://cdn.poehali.dev/projects/b84c7ab7-04b6-41e2-afe7-60a0b48f32aa/files/f0dd7f87-fe4e-4b29-ae2c-4205517d8f38.jpg";
const WORKSHOP_IMAGE = "https://cdn.poehali.dev/projects/b84c7ab7-04b6-41e2-afe7-60a0b48f32aa/files/6a6cb52f-5456-4cea-9376-b41ae76bef40.jpg";

const SERVICES = [
  { id: 1, num: "01", title: "Объёмные буквы", category: "буквы", material: "металл", priceFrom: 3000, size: "от 10 см", description: "Металлические, акриловые буквы с подсветкой или без. Любые шрифты и масштабы.", details: ["Высота от 10 до 200 см", "Нержавейка, акрил, ПВХ", "LED-подсветка изнутри или контровая", "Монтаж на любую поверхность"] },
  { id: 2, num: "02", title: "Плоские буквы", category: "буквы", material: "акрил", priceFrom: 800, size: "от 5 см", description: "Лазерная резка букв из акрила, металла или ПВХ. Бюджетное и стильное решение.", details: ["Высота от 5 до 150 см", "Акрил, ПВХ, алюминий", "Самоклеящиеся или крепёжные", "Широкая палитра"] },
  { id: 3, num: "03", title: "Баннер", category: "печать", material: "ткань", priceFrom: 300, size: "любой", description: "Широкоформатная печать на банерной ткани, сетке или ПВХ. Срочно от 1 дня.", details: ["Любые размеры", "Баннерная ткань, сетка", "Люверсы, карманы, растяжки", "Срочно от 1 дня"] },
  { id: 4, num: "04", title: "Световые короба", category: "световые", material: "акрил", priceFrom: 5000, size: "от 20×30 см", description: "Лайтбоксы с равномерной LED-подсветкой. Одно- и двустороннее свечение.", details: ["От 20×30 до 3000×2000 мм", "Односторонний / двусторонний", "LED-подсветка", "Установка по городу"] },
  { id: 5, num: "05", title: "Штендер", category: "носители", material: "металл", priceFrom: 2500, size: "стандарт", description: "Переносные уличные стенды. Металл с порошковым покрытием, устойчивы к погоде.", details: ["Стандарт: 60×90 см", "Сталь, алюминий", "Сменные вставки", "Двусторонний формат"] },
  { id: 6, num: "06", title: "Адресные таблички", category: "таблички", material: "акрил", priceFrom: 600, size: "стандарт", description: "Номерные и адресные таблички. Нержавейка, акрил, пластик, гравировка.", details: ["Любые размеры и формы", "Гравировка и УФ-печать", "Нержавеющая сталь, акрил", "Индивидуальный дизайн"] },
  { id: 7, num: "07", title: "Гибкий неон", category: "световые", material: "неон", priceFrom: 4000, size: "от 50 см", description: "Вывески из гибкого LED-неона. Любые формы и логотипы. Эффект настоящей трубки.", details: ["Длина от 50 см", "16+ цветов свечения", "В 5× меньше потребление", "Срок службы 50 000 ч"] },
  { id: 8, num: "08", title: "Услуги дизайнера", category: "дизайн", material: "цифровой", priceFrom: 1500, size: "—", description: "Разработка макетов вывесок, логотипов, фирменного стиля. Все форматы под печать.", details: ["Логотип и фирменный стиль", "Макет под производство", "3D-визуализация", "Правки в стоимости"] },
  { id: 9, num: "09", title: "3D-печать по фото", category: "3d", material: "пластик", priceFrom: 2000, size: "от 5 см", description: "Объёмные фигуры, логотипы, сувениры по фото или 3D-модели. FDM и фотополимер.", details: ["Фигуры от 5 до 500 мм", "FDM и фотополимер", "Постобработка и окраска", "Тираж от 1 шт."] },
];

const PORTFOLIO_ITEMS = [
  { id: 1, title: "Ресторан «Восток»", year: "2024", category: "световые", img: HERO_IMAGE, tags: ["Световые буквы", "Подсветка"] },
  { id: 2, title: "Бутик одежды VERA", year: "2024", category: "буквы", img: LIGHTBOX_IMAGE, tags: ["Объёмные буквы", "Нержавейка"] },
  { id: 3, title: "Автосервис ProDrive", year: "2023", category: "печать", img: WORKSHOP_IMAGE, tags: ["Баннер", "Широкоформат"] },
  { id: 4, title: "Кофейня BREW", year: "2024", category: "световые", img: HERO_IMAGE, tags: ["Неон", "Лофт-интерьер"] },
  { id: 5, title: "ТЦ «Меркурий»", year: "2023", category: "буквы", img: LIGHTBOX_IMAGE, tags: ["Объёмные буквы", "LED"] },
  { id: 6, title: "Салон красоты Lux", year: "2024", category: "световые", img: WORKSHOP_IMAGE, tags: ["Неон", "Дизайн"] },
];

const TEAM = [
  { name: "Артём Власов", role: "Руководитель студии", exp: "12 лет", emoji: "👨‍💼" },
  { name: "Ксения Миронова", role: "Главный дизайнер", exp: "8 лет", emoji: "👩‍🎨" },
  { name: "Дмитрий Соколов", role: "Мастер производства", exp: "10 лет", emoji: "👨‍🔧" },
  { name: "Анна Лебедева", role: "Менеджер проектов", exp: "5 лет", emoji: "👩‍💻" },
];

const NAV_LINKS = [
  { label: "Главная", href: "#home" },
  { label: "Услуги", href: "#catalog" },
  { label: "Работы", href: "#portfolio" },
  { label: "Студия", href: "#about" },
  { label: "Контакт", href: "#contacts" },
];

const CATEGORIES = ["все", "буквы", "световые", "печать", "носители", "таблички", "дизайн", "3d"];
const MATERIALS = ["все", "металл", "акрил", "ткань", "неон", "пластик", "цифровой"];

type Service = typeof SERVICES[0];

function useReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -50px 0px" }
    );

    const elements = document.querySelectorAll(".reveal, .reveal-left, .reveal-right, .reveal-scale");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}

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
  const [scrolled, setScrolled] = useState(false);
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);

  useReveal();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = ["home", "catalog", "portfolio", "about", "contacts"];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(id);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMouseX(((e.clientX - rect.left) / rect.width - 0.5) * 20);
        setMouseY(((e.clientY - rect.top) / rect.height - 0.5) * 20);
      }
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
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

  const heroTitle = "ЗНАК";
  const heroLetters = heroTitle.split("");

  return (
    <div className="min-h-screen bg-[#F5F0E8] text-[#1A1816] overflow-x-hidden">

      {/* ─── NAVBAR ─── */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-[#F5F0E8]/95 backdrop-blur-md border-b border-[#1A1816]/8 py-3" : "py-5"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-8 flex items-center justify-between">
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); scrollTo("#home"); }}
            className="flex items-center gap-3"
          >
            <div className="w-9 h-9 border border-[#1A1816] flex items-center justify-center font-display italic">
              <span className="text-lg">з</span>
            </div>
            <span className="font-display text-xl font-medium tracking-wider">ЗНАК · студия</span>
          </a>

          <div className="hidden lg:flex items-center gap-10">
            {NAV_LINKS.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                className={`nav-link ${activeSection === link.href.replace("#", "") ? "active" : ""}`}
              >
                <span className="section-num mr-2">0{i + 1}</span>
                {link.label}
              </a>
            ))}
          </div>

          <button className="hidden lg:inline-flex btn-primary !py-3 !px-6" onClick={() => scrollTo("#contacts")}>
            <span>Связаться</span>
            <Icon name="ArrowUpRight" size={14} />
          </button>

          <button className="lg:hidden text-[#1A1816]" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <Icon name={mobileMenuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#F5F0E8] border-t border-[#1A1816]/8 px-8 py-6 flex flex-col gap-5 animate-fade-in">
            {NAV_LINKS.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                className="nav-link"
              >
                <span className="section-num mr-2">0{i + 1}</span>
                {link.label}
              </a>
            ))}
            <button className="btn-primary mt-2 self-start" onClick={() => scrollTo("#contacts")}>
              <span>Связаться</span>
              <Icon name="ArrowUpRight" size={14} />
            </button>
          </div>
        )}
      </nav>

      {/* ─── HERO ─── */}
      <section
        id="home"
        ref={heroRef}
        className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden"
      >
        <div className="absolute inset-0 -z-10">
          <div
            className="absolute top-1/3 right-0 w-[500px] h-[500px] rounded-full bg-[#E8A78F]/30 blur-3xl float"
            style={{ transform: `translate(${mouseX}px, ${mouseY}px)` }}
          />
          <div
            className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#B8915A]/20 blur-3xl"
            style={{ transform: `translate(${-mouseX}px, ${-mouseY}px)` }}
          />
        </div>

        <div className="max-w-[1400px] mx-auto px-8 w-full">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            {/* Left rail */}
            <div className="hidden lg:flex lg:col-span-1 flex-col items-center gap-8">
              <div className="w-px h-20 bg-[#1A1816]/20" />
              <span className="vertical-text section-label">с 2010</span>
            </div>

            {/* Main content */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-4 mb-10 animate-fade-up">
                <span className="section-num">— 01</span>
                <span className="section-label">Авторская наружная реклама</span>
              </div>

              <h1 className="font-display text-[clamp(4rem,12vw,11rem)] leading-[0.92] font-light tracking-tight mb-2 letter-reveal">
                {heroLetters.map((l, i) => (
                  <span key={i} style={{ animationDelay: `${0.1 + i * 0.08}s` }}>{l}</span>
                ))}
                <span className="accent-text font-display italic font-light" style={{ animationDelay: "0.5s" }}> ·</span>
              </h1>
              <h2 className="font-display italic text-[clamp(2rem,5vw,4rem)] font-light leading-tight mb-10 animate-fade-up delay-300">
                <span className="accent-text">наружная</span> реклама,<br />
                которую <span className="underline-grow">помнят</span>
              </h2>

              <p className="font-golos text-[#2C2825]/80 text-lg max-w-md leading-relaxed mb-10 animate-fade-up delay-400">
                Объёмные буквы, световые короба, гибкий неон, баннеры, штендеры и&nbsp;3D-печать.
                От эскиза до монтажа — под одной крышей.
              </p>

              <div className="flex flex-wrap gap-4 animate-fade-up delay-500">
                <button className="btn-primary" onClick={() => scrollTo("#catalog")}>
                  <span>Смотреть услуги</span>
                  <Icon name="ArrowDown" size={14} />
                </button>
                <button className="btn-outline" onClick={() => scrollTo("#contacts")}>
                  <span>Запросить расчёт</span>
                  <Icon name="ArrowUpRight" size={14} />
                </button>
              </div>
            </div>

            {/* Right rail with portrait image */}
            <div className="lg:col-span-4 relative animate-fade-up delay-600">
              <div className="relative aspect-[3/4] grain overflow-hidden">
                <img src={HERO_IMAGE} alt="Знак" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-[#F5F0E8] border border-[#1A1816]/10 px-5 py-3 hidden md:block">
                <span className="section-num">— studio №01</span>
              </div>
              <div className="absolute -top-4 -right-4 bg-[#C44D2C] text-[#F5F0E8] px-4 py-2 text-xs font-mono-label hidden md:block">
                Est. 2010
              </div>
            </div>
          </div>

          {/* Stats bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24 pt-12 border-t border-[#1A1816]/15 animate-fade-up delay-700">
            {[
              ["500+", "реализованных проектов"],
              ["14", "лет на рынке"],
              ["3 дня", "минимальный срок"],
              ["50+", "видов материалов"],
            ].map(([num, label]) => (
              <div key={label}>
                <div className="font-display text-5xl font-light mb-1">{num}</div>
                <div className="font-mono-label text-[10px] text-[#2C2825]/60">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── MARQUEE ─── */}
      <div className="py-6 border-y border-[#1A1816]/10 overflow-hidden bg-[#F5F0E8]">
        <div className="marquee">
          <div className="marquee-track font-display italic text-4xl text-[#1A1816]/70">
            {Array(2).fill(null).map((_, i) => (
              <span key={i}>
                {" Объёмные буквы · Световые короба · Гибкий неон · Баннеры · Штендеры · Адресные таблички · 3D-печать · Дизайн · "}
                <span className="accent-text">★</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ─── CATALOG ─── */}
      <section id="catalog" className="py-32 bg-[#F5F0E8]">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="grid lg:grid-cols-12 gap-8 mb-20">
            <div className="lg:col-span-3 reveal">
              <span className="section-num">— 02</span>
              <p className="section-label mt-2">Каталог</p>
            </div>
            <div className="lg:col-span-9">
              <h2 className="font-display text-[clamp(3rem,7vw,6rem)] font-light leading-[0.95] reveal">
                Что мы<br />
                <span className="font-display italic accent-text">создаём</span>
              </h2>
            </div>
          </div>

          {/* Filters */}
          <div className="grid lg:grid-cols-12 gap-8 mb-12">
            <div className="lg:col-span-3 reveal-left">
              <p className="section-label mb-3">Фильтры</p>
              <div className="ornate-line mb-4" />
              <p className="font-display italic text-lg text-[#2C2825]/70">
                Выберите услугу,<br />материал и бюджет
              </p>
            </div>

            <div className="lg:col-span-9 space-y-8 reveal-right">
              <div>
                <p className="section-label mb-4">— Тип услуги</p>
                <div className="flex flex-wrap gap-2">
                  {CATEGORIES.map((c) => (
                    <button
                      key={c}
                      className={`filter-chip ${filterCategory === c ? "active" : ""}`}
                      onClick={() => setFilterCategory(c)}
                    >
                      {c}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <p className="section-label mb-4">— Материал</p>
                <div className="flex flex-wrap gap-2">
                  {MATERIALS.map((m) => (
                    <button
                      key={m}
                      className={`filter-chip ${filterMaterial === m ? "active" : ""}`}
                      onClick={() => setFilterMaterial(m)}
                    >
                      {m}
                    </button>
                  ))}
                </div>
              </div>
              <div className="price-slider">
                <div className="flex items-baseline justify-between mb-4">
                  <p className="section-label">— Бюджет до</p>
                  <p className="font-display text-3xl">
                    <span className="accent-text italic">{priceRange.toLocaleString("ru")}</span> ₽
                  </p>
                </div>
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
          </div>

          {/* Services Grid */}
          {filteredServices.length === 0 ? (
            <div className="text-center py-20">
              <p className="font-display italic text-3xl text-[#2C2825]/40">Ничего не найдено</p>
              <p className="section-label mt-3">Попробуйте изменить параметры</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredServices.map((service) => (
                <div
                  key={service.id}
                  className="editorial-card p-8 cursor-pointer reveal-scale"
                  onClick={() => setSelectedService(service)}
                >
                  <div className="flex items-start justify-between mb-8">
                    <span className="section-num">— {service.num}</span>
                    <Icon name="ArrowUpRight" size={18} className="text-[#1A1816]/40 transition-transform group-hover:translate-x-1" />
                  </div>
                  <h3 className="font-display text-3xl font-medium mb-3 leading-tight">{service.title}</h3>
                  <p className="font-golos text-[#2C2825]/65 text-sm leading-relaxed mb-8">{service.description}</p>
                  <div className="pt-5 border-t border-[#1A1816]/10 flex items-baseline justify-between">
                    <div>
                      <p className="section-label text-[10px] mb-1">от</p>
                      <p className="font-display text-2xl">
                        <span className="accent-text italic">{service.priceFrom.toLocaleString("ru")}</span> ₽
                      </p>
                    </div>
                    <p className="section-label text-[10px]">{service.size}</p>
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
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1A1816]/70 backdrop-blur-sm animate-fade-in"
          onClick={() => setSelectedService(null)}
        >
          <div
            className="bg-[#F5F0E8] max-w-xl w-full p-10 relative animate-fade-up"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-5 right-5 text-[#1A1816]/40 hover:text-[#C44D2C] transition-colors"
              onClick={() => setSelectedService(null)}
            >
              <Icon name="X" size={22} />
            </button>
            <span className="section-num">— {selectedService.num}</span>
            <h3 className="font-display text-4xl font-medium mt-3 mb-4">{selectedService.title}</h3>
            <div className="ornate-line mb-6" />
            <p className="font-golos text-[#2C2825]/75 mb-8 leading-relaxed">{selectedService.description}</p>
            <ul className="space-y-3 mb-10">
              {selectedService.details.map((d) => (
                <li key={d} className="flex items-start gap-3 font-golos text-sm">
                  <span className="accent-text font-display italic mt-0.5">·</span>
                  <span className="text-[#2C2825]/80">{d}</span>
                </li>
              ))}
            </ul>
            <div className="flex items-baseline justify-between pt-6 border-t border-[#1A1816]/10">
              <div>
                <p className="section-label text-[10px] mb-1">от</p>
                <p className="font-display text-3xl">
                  <span className="accent-text italic">{selectedService.priceFrom.toLocaleString("ru")}</span> ₽
                </p>
              </div>
              <button
                className="btn-primary"
                onClick={() => { setSelectedService(null); scrollTo("#contacts"); }}
              >
                <span>Заказать</span>
                <Icon name="ArrowRight" size={14} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ─── PORTFOLIO ─── */}
      <section id="portfolio" className="py-32 bg-[#EAE2D4]">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="grid lg:grid-cols-12 gap-8 mb-16">
            <div className="lg:col-span-3 reveal">
              <span className="section-num">— 03</span>
              <p className="section-label mt-2">Работы</p>
            </div>
            <div className="lg:col-span-6">
              <h2 className="font-display text-[clamp(3rem,7vw,6rem)] font-light leading-[0.95] reveal">
                Наше<br />
                <span className="font-display italic accent-text">портфолио</span>
              </h2>
            </div>
            <div className="lg:col-span-3 flex lg:items-end reveal">
              <p className="font-golos text-[#2C2825]/70 text-sm leading-relaxed">
                Каждый проект — это история бренда, рассказанная средствами материала, света и формы.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-10 reveal">
            {portfolioCategories.map((c) => (
              <button
                key={c}
                className={`filter-chip ${portfolioFilter === c ? "active" : ""}`}
                onClick={() => setPortfolioFilter(c)}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPortfolio.map((item, i) => (
              <div
                key={item.id}
                className={`portfolio-item reveal-scale ${
                  i % 5 === 0 ? "lg:row-span-2 aspect-[3/4]" : "aspect-[4/5]"
                }`}
              >
                <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
                <div className="caption">
                  <p className="section-label text-[10px] mb-2 opacity-80">— {item.year}</p>
                  <h4 className="font-display text-2xl mb-3">{item.title}</h4>
                  <div className="flex gap-2 flex-wrap">
                    {item.tags.map((tag) => (
                      <span key={tag} className="font-mono-label text-[10px] border border-[#F5F0E8]/40 px-2 py-1">
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
      <section className="py-24 bg-[#F5F0E8]">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-12">
            {[
              { num: "01", title: "Скорость", desc: "Минимальный срок производства — 3 дня. Срочное изготовление за 24 часа." },
              { num: "02", title: "Гарантия", desc: "Два года гарантии на всю продукцию и монтажные работы. Без оговорок." },
              { num: "03", title: "Под ключ", desc: "Концепт, дизайн, производство, доставка и монтаж — один подрядчик." },
              { num: "04", title: "Доставка", desc: "Доставим и установим по всему региону. Свой парк техники." },
            ].map((item) => (
              <div key={item.num} className="reveal">
                <span className="section-num">— {item.num}</span>
                <h4 className="font-display text-3xl font-medium mt-3 mb-3">{item.title}</h4>
                <div className="ornate-line mb-4" />
                <p className="font-golos text-[#2C2825]/70 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ABOUT ─── */}
      <section id="about" className="py-32 bg-[#1A1816] text-[#F5F0E8]">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 reveal-left">
              <div className="relative aspect-[4/5] grain overflow-hidden">
                <img src={WORKSHOP_IMAGE} alt="Производство" className="w-full h-full object-cover" />
              </div>
              <div className="hidden lg:flex items-baseline gap-3 mt-6 ml-auto justify-end">
                <span className="font-display italic text-7xl text-[#C44D2C]">14</span>
                <span className="section-label text-[#F5F0E8]/60">лет<br />на рынке</span>
              </div>
            </div>

            <div className="lg:col-span-7 lg:pl-12 reveal-right">
              <span className="section-num">— 04</span>
              <p className="section-label mt-2 text-[#F5F0E8]/60">Студия</p>
              <h2 className="font-display text-[clamp(2.5rem,6vw,5rem)] font-light leading-[1.05] mt-4 mb-10">
                Мы делаем <span className="font-display italic accent-text">знаки</span>,<br />
                которые <span className="underline-grow">работают</span>
              </h2>
              <div className="space-y-5 font-golos text-[#F5F0E8]/75 text-base leading-relaxed mb-12 max-w-xl">
                <p>
                  С 2010 года мы помогаем бизнесу выделяться на улицах города. За 14 лет —
                  более 500 реализованных проектов: от компактных адресных табличек
                  до масштабных фасадных вывесок торговых центров.
                </p>
                <p>
                  У нас собственное производство площадью 800 м². Дизайн, лазерная резка,
                  гибка металла, сварка и монтаж — всё под одной крышей. Без посредников,
                  без переплат, с прямым контролем качества на каждом этапе.
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                {[["800 м²", "цех"], ["50+", "материалов"], ["2 года", "гарантия"], ["24/7", "поддержка"]].map(([num, label]) => (
                  <div key={label} className="border-l border-[#C44D2C]/60 pl-4">
                    <div className="font-display italic text-3xl">{num}</div>
                    <div className="font-mono-label text-[10px] text-[#F5F0E8]/50 mt-1">{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Team */}
          <div className="mt-32 reveal">
            <div className="flex items-baseline gap-6 mb-12">
              <span className="section-num">— 04 / команда</span>
              <div className="flex-1 h-px bg-[#F5F0E8]/15" />
            </div>
            <h3 className="font-display text-4xl font-light mb-12">
              Люди, которые делают <span className="italic accent-text">бренды видимыми</span>
            </h3>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {TEAM.map((member) => (
                <div key={member.name} className="reveal-scale">
                  <div className="aspect-[3/4] bg-[#2C2825] flex items-center justify-center mb-5 grain relative">
                    <span className="text-7xl">{member.emoji}</span>
                  </div>
                  <p className="section-num mb-2">— {member.exp}</p>
                  <h4 className="font-display text-2xl mb-1">{member.name}</h4>
                  <p className="font-mono-label text-[10px] text-[#F5F0E8]/50">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA BANNER ─── */}
      <section className="relative py-32 overflow-hidden bg-[#EAE2D4]">
        <div className="max-w-[1400px] mx-auto px-8 text-center reveal">
          <span className="section-num">— 05</span>
          <h2 className="font-display text-[clamp(3rem,8vw,7rem)] font-light leading-[0.95] mt-4 mb-6">
            Готовы<br />
            <span className="italic accent-text">начать?</span>
          </h2>
          <p className="font-golos text-[#2C2825]/70 text-lg mb-10 max-w-md mx-auto">
            Расчёт стоимости за&nbsp;30 минут. Эскиз — в&nbsp;течение дня.
          </p>
          <button className="btn-primary !px-10 !py-5" onClick={() => scrollTo("#contacts")}>
            <span>Получить расчёт</span>
            <Icon name="ArrowUpRight" size={16} />
          </button>
        </div>
      </section>

      {/* ─── CONTACTS ─── */}
      <section id="contacts" className="py-32 bg-[#F5F0E8]">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5 reveal-left">
              <span className="section-num">— 06</span>
              <p className="section-label mt-2">Контакт</p>
              <h2 className="font-display text-[clamp(2.5rem,6vw,5rem)] font-light leading-[0.95] mt-4 mb-10">
                Давайте<br />
                <span className="italic accent-text">поговорим</span>
              </h2>

              <div className="space-y-7">
                {[
                  { icon: "Phone", label: "Телефон", value: "+7 (900) 000-00-00" },
                  { icon: "Mail", label: "Почта", value: "info@znak-reklama.ru" },
                  { icon: "MapPin", label: "Адрес", value: "г. Ваш город, ул. Производственная, 1" },
                  { icon: "Clock", label: "Часы работы", value: "Пн–Пт: 9:00–18:00 · Сб: 10:00–15:00" },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-5 group">
                    <div className="w-10 h-10 border border-[#1A1816]/20 flex items-center justify-center shrink-0 group-hover:border-[#C44D2C] group-hover:bg-[#C44D2C] group-hover:text-[#F5F0E8] transition-all duration-500">
                      <Icon name={item.icon as "Phone"} size={14} fallback="Info" />
                    </div>
                    <div>
                      <p className="section-label text-[10px] mb-1">— {item.label}</p>
                      <p className="font-display text-xl">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-7 lg:pl-12 reveal-right">
              <div className="bg-[#EAE2D4] p-10 border border-[#1A1816]/8">
                {formSent ? (
                  <div className="h-full flex flex-col items-center justify-center text-center py-16 animate-fade-up">
                    <div className="w-16 h-16 border border-[#C44D2C] flex items-center justify-center mb-6">
                      <Icon name="Check" size={28} className="accent-text" />
                    </div>
                    <h3 className="font-display text-3xl mb-3">Заявка отправлена</h3>
                    <p className="font-golos text-[#2C2825]/60">Мы свяжемся с вами в течение 30 минут</p>
                  </div>
                ) : (
                  <>
                    <span className="section-num">— оставить заявку</span>
                    <h3 className="font-display text-3xl mt-3 mb-8">
                      Расскажите о&nbsp;<span className="italic">проекте</span>
                    </h3>
                    <form onSubmit={handleFormSubmit} className="space-y-6">
                      {[
                        { name: "name", label: "Имя", type: "text", placeholder: "Ваше имя", required: true },
                        { name: "phone", label: "Телефон", type: "tel", placeholder: "+7 (___) ___-__-__", required: true },
                      ].map((field) => (
                        <div key={field.name}>
                          <label className="section-label text-[10px] block mb-3">— {field.label}</label>
                          <input
                            type={field.type}
                            required={field.required}
                            value={formData[field.name as keyof typeof formData]}
                            onChange={(e) => setFormData({ ...formData, [field.name]: e.target.value })}
                            className="w-full bg-transparent border-b border-[#1A1816]/20 py-3 font-display text-xl focus:outline-none focus:border-[#C44D2C] transition-colors placeholder:text-[#1A1816]/30"
                            placeholder={field.placeholder}
                          />
                        </div>
                      ))}
                      <div>
                        <label className="section-label text-[10px] block mb-3">— Описание задачи</label>
                        <textarea
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          rows={3}
                          className="w-full bg-transparent border-b border-[#1A1816]/20 py-3 font-golos text-base focus:outline-none focus:border-[#C44D2C] transition-colors resize-none placeholder:text-[#1A1816]/30"
                          placeholder="Размеры, материалы, сроки, бюджет..."
                        />
                      </div>
                      <div className="pt-4">
                        <button type="submit" className="btn-primary w-full justify-center">
                          <span>Отправить заявку</span>
                          <Icon name="ArrowRight" size={14} />
                        </button>
                      </div>
                      <p className="font-golos text-[10px] text-[#2C2825]/50 text-center">
                        Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                      </p>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="py-12 bg-[#1A1816] text-[#F5F0E8]">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 border border-[#F5F0E8]/30 flex items-center justify-center font-display italic">
                <span className="text-lg">з</span>
              </div>
              <span className="font-display text-xl tracking-wider">ЗНАК · студия</span>
            </div>
            <p className="font-golos text-[#F5F0E8]/40 text-xs text-center">
              © 2024 ЗНАК — Авторская наружная реклама.<br />Все права защищены.
            </p>
            <div className="flex gap-5 md:justify-end flex-wrap">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                  className="font-mono-label text-[10px] text-[#F5F0E8]/50 hover:text-[#C44D2C] transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
