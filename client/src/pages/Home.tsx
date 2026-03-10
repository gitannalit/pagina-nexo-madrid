/*
 * NEXO DUBÁI - MADRID — Landing Page
 * Design: Neo-Luxury Premium Dark (Negro profundo + Dorado cálido)
 * Fonts: Geist (misma tipografía que evento-nexodubai.com) — weight 900 headings, -0.03em letter-spacing
 * Colors: #0a0a0a background, #C9A84C/#D4AF37 gold accents, #F5F5F5 text
 * Event: Sábado 26 y Domingo 27 de Abril 2026 — Madrid
 */

import { useState, useEffect, useRef } from "react";
import {
  ChevronDown,
  ChevronUp,
  Star,
  Check,
  X,
  ArrowRight,
  Users,
  TrendingUp,
  Shield,
  Zap,
  Building2,
  Globe,
  Award,
  Clock,
  MapPin,
  Calendar,
  Heart,
} from "lucide-react";

// ─── Image URLs ────────────────────────────────────────────────────────────────
const IMAGES = {
  hero1: "https://d2xsxph8kpxj0f.cloudfront.net/310519663302271654/LX9svCg6s9iPetjh8LdbMh/hero_madrid_dubai_1-UFTHGQRZU6E7ewAka6yAUH.webp",
  hero2: "https://d2xsxph8kpxj0f.cloudfront.net/310519663302271654/LX9svCg6s9iPetjh8LdbMh/hero_dubai_skyline-BEy6aiZodRjdnuT9rBnBV2.webp",
  hero3: "https://d2xsxph8kpxj0f.cloudfront.net/310519663302271654/LX9svCg6s9iPetjh8LdbMh/hero_networking_exclusive-mTqSbadu5DVkboi8FbTqBL.webp",
  hero4: "https://d2xsxph8kpxj0f.cloudfront.net/310519663302271654/LX9svCg6s9iPetjh8LdbMh/hero_fiscal_optimization-YmGvwJCUdY6S3sXAA3qZxN.webp",
  networking: "https://d2xsxph8kpxj0f.cloudfront.net/310519663302271654/LX9svCg6s9iPetjh8LdbMh/luxury_network_event_4bf4120a.jpg",
  realEstate: "https://d2xsxph8kpxj0f.cloudfront.net/310519663302271654/LX9svCg6s9iPetjh8LdbMh/dubai_luxury_real_estate_5fa98f3e.jpg",
  skyline: "https://d2xsxph8kpxj0f.cloudfront.net/310519663302271654/LX9svCg6s9iPetjh8LdbMh/dubai_skyline_sunset_75aef38f.jpg",
  corporate: "https://d2xsxph8kpxj0f.cloudfront.net/310519663302271654/LX9svCg6s9iPetjh8LdbMh/luxury_corporate_event_f361aa77.jpg",
  fiscal: "https://d2xsxph8kpxj0f.cloudfront.net/310519663302271654/LX9svCg6s9iPetjh8LdbMh/hero_fiscal_optimization-YmGvwJCUdY6S3sXAA3qZxN.webp",
};

// ─── Ticker Component ──────────────────────────────────────────────────────────
function Ticker() {
  const items = [
    "💎 OPTIMIZACIÓN FISCAL 40-50%",
    "🚀 PAGA MENOS IMPUESTOS LEGALMENTE",
    "🏗️ INVIERTE EN DUBÁI DESDE MADRID",
    "🌍 CREA TU EMPRESA INTERNACIONAL",
    "⚡ NETWORKING CON +200 EMPRESARIOS",
    "🎯 PLAN FISCAL PERSONALIZADO",
    "💰 AHORRA HASTA 50% EN IMPUESTOS",
    "🏆 EVENTO EXCLUSIVO EN MADRID",
  ];
  const doubled = [...items, ...items];

  return (
    <div className="bg-[#C9A84C] text-[#0a0a0a] py-2 overflow-hidden">
      <div className="ticker-track">
        {doubled.map((item, i) => (
          <span key={i} className="inline-block px-8 font-bold text-sm tracking-wider whitespace-nowrap">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

// ─── Hero Carousel ─────────────────────────────────────────────────────────────
function HeroCarousel() {
  const slides = [
    { img: IMAGES.hero1, caption: "Evento exclusivo en Madrid" },
    { img: IMAGES.hero2, caption: "Invierte en el mercado más dinámico del mundo" },
    { img: IMAGES.hero3, caption: "Networking con +200 empresarios de alto nivel" },
    { img: IMAGES.hero4, caption: "Optimiza tu fiscalidad legalmente" },
  ];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-full rounded-xl overflow-hidden border border-[#C9A84C]/20 shadow-2xl">
      {slides.map((slide, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-1000"
          style={{ opacity: i === current ? 1 : 0 }}
        >
          <img
            src={slide.img}
            alt={slide.caption}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-4 right-4">
            <p className="text-white text-sm font-medium bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full inline-block">
              {slide.caption}
            </p>
          </div>
        </div>
      ))}
      {/* Dots */}
      <div className="absolute bottom-3 right-4 flex gap-1.5 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-2 rounded-full transition-all duration-300 ${i === current ? "bg-[#C9A84C] w-5" : "bg-white/40 w-2"}`}
          />
        ))}
      </div>
    </div>
  );
}

// ─── FAQ Item ──────────────────────────────────────────────────────────────────
function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-[#C9A84C]/20 rounded-xl overflow-hidden transition-all duration-300 hover:border-[#C9A84C]/40">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start justify-between p-5 text-left bg-[#111111] hover:bg-[#161616] transition-colors gap-4"
      >
        <span className="font-semibold text-white text-sm leading-snug">{q}</span>
        {open ? <ChevronUp className="text-[#C9A84C] shrink-0 w-5 h-5 mt-0.5" /> : <ChevronDown className="text-[#C9A84C] shrink-0 w-5 h-5 mt-0.5" />}
      </button>
      {open && (
        <div className="px-5 pb-5 pt-3 bg-[#0f0f0f] text-gray-300 text-sm leading-relaxed border-t border-[#C9A84C]/10">
          {a}
        </div>
      )}
    </div>
  );
}

// ─── Countdown Timer ─────────────────────────────────────────────────────────
function CountdownTimer() {
  const eventDate = new Date('2026-04-26T09:00:00');
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calc = () => {
      const now = new Date();
      const diff = eventDate.getTime() - now.getTime();
      if (diff <= 0) return;
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((diff % (1000 * 60)) / 1000),
      });
    };
    calc();
    const timer = setInterval(calc, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex items-center gap-2 justify-center">
      {[
        { val: timeLeft.days, label: 'DÍAS' },
        { val: timeLeft.hours, label: 'HORAS' },
        { val: timeLeft.minutes, label: 'MIN' },
        { val: timeLeft.seconds, label: 'SEG' },
      ].map((unit, i) => (
        <div key={i} className="flex items-center gap-2">
          <div className="text-center">
            <div className="bg-[#111111] border border-[#C9A84C]/30 rounded-lg px-3 py-2 min-w-[52px]">
              <span className="text-[#C9A84C] font-black text-2xl block tracking-tight">
                {String(unit.val).padStart(2, '0')}
              </span>
            </div>
            <span className="text-gray-500 text-[9px] font-bold tracking-widest mt-1 block">{unit.label}</span>
          </div>
          {i < 3 && <span className="text-[#C9A84C] font-black text-xl mb-4">:</span>}
        </div>
      ))}
    </div>
  );
}

// ─── Animated Number ───────────────────────────────────────────────────────────
function AnimatedNumber({ value, suffix = "" }: { value: string; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <span
      ref={ref}
      className={`transition-all duration-700 ${visible ? "opacity-100 scale-100" : "opacity-0 scale-75"}`}
    >
      {value}{suffix}
    </span>
  );
}

// ─── Main Page ─────────────────────────────────────────────────────────────────
export default function Home() {
  const [activeTab, setActiveTab] = useState<"conseguiras" | "incluye">("conseguiras");
  const [placasOcupadas] = useState(13);
  const [totalPlazas] = useState(20);
  const progressPct = Math.round((placasOcupadas / totalPlazas) * 100);

  const scrollToForm = () => {
    document.getElementById("solicitar")?.scrollIntoView({ behavior: "smooth" });
  };

  const faqData = [
    {
      q: "¿Por qué Madrid para este evento sobre Dubái?",
      a: "Madrid es el punto de encuentro perfecto para empresarios hispanohablantes que quieren acceder al ecosistema de Dubái sin necesidad de viajar. En este evento intensivo te traemos a los expertos, inversores y fiscalistas directamente a ti. Podrás conocer el ecosistema, las oportunidades reales y tomar decisiones con información de primera mano, todo en un entorno exclusivo en la capital española."
    },
    {
      q: "¿Qué incluye exactamente el evento?",
      a: "El evento incluye: sesiones con expertos fiscales internacionales especializados en Dubái, consultoría 1:1 personalizada sobre tu situación fiscal y empresarial, networking con +200 empresarios de alto nivel, presentaciones de oportunidades de inversión inmobiliaria verificadas en Dubái con ROI del 8-12%, acceso al grupo VIP de inversión, y materiales exclusivos del evento. Todo en un venue premium en Madrid."
    },
    {
      q: "¿Es legal pagar menos impuestos con Dubái?",
      a: "Completamente legal, siempre que se haga correctamente. En el evento verás exactamente qué se puede hacer y qué NO se puede hacer, con ejemplos reales de empresarios españoles que ya lo están implementando. Trabajarás con asesores legales y fiscales especializados que te mostrarán las estructuras legales que mejor se adaptan a tu situación particular."
    },
    {
      q: "¿Necesito ser millonario para participar?",
      a: "No necesariamente. Si bien es un evento premium, lo que necesitas es ser empresario o profesional con ingresos estables y mentalidad de acción. Hay opciones de inversión desde importes razonables y también caminos para preparar tu entrada futura. Lo importante es que tengas la visión y el compromiso de llevar tu negocio al siguiente nivel."
    },
    {
      q: "¿Puedo invertir en Dubái sin ser residente?",
      a: "Sí. Existen fórmulas específicas para no residentes que explicamos en detalle durante el evento, con sus pros y contras. Los bancos y promotoras en Dubái están acostumbrados a trabajar con inversores internacionales y hay opciones de inversión disponibles para tu caso."
    },
    {
      q: "¿Por qué hay proceso de selección?",
      a: "Porque queremos que el grupo sea homogéneo, que puedas aportar y recibir valor, y que el evento tenga sentido financiero y personal para ti. No buscamos llenar plazas; buscamos crear resultados y relaciones a largo plazo. Trabajamos con un grupo reducido para garantizar atención personalizada y networking de calidad."
    },
    {
      q: "¿Cuáles son las fechas exactas?",
      a: "El evento se celebra el último fin de semana de abril 2026: sábado 26 y domingo 27 de abril. Dos días intensivos en un venue exclusivo en Madrid. Te recomendamos reservar tu plaza lo antes posible ya que las plazas son muy limitadas."
    },
    {
      q: "¿Qué diferencia hay con una formación online?",
      a: "La diferencia es abismal. Una formación online te da información genérica. Este evento te pone frente a fiscalistas reales, inversores activos y empresarios que ya operan desde Dubái. Tienes acceso directo a deals de inversión que no están disponibles públicamente, consultoría personalizada para tu caso específico, y una red de contactos que puede transformar tu negocio."
    },
  ];

  // 2 días: sábado y domingo
  const agendaData = [
    {
      dia: "Sábado 26",
      titulo: "Optimización Fiscal y Estructura Internacional",
      items: [
        "Bienvenida exclusiva y networking inicial con los +200 asistentes",
        "Sesión magistral con expertos fiscales: cómo pagar 40-50% menos impuestos legalmente",
        "Residencia fiscal vs empresa en Dubái: qué te conviene según tu situación",
        "Free Zone vs Mainland: ventajas y desventajas reales para españoles",
        "Sesiones Q&A personalizadas sobre tu caso específico",
        "Cena de networking de alto nivel con el grupo",
      ],
      icon: <Shield className="w-5 h-5" />,
      img: IMAGES.fiscal,
    },
    {
      dia: "Domingo 27",
      titulo: "Inversión, Estrategia y Plan de Acción",
      items: [
        "Presentación de oportunidades inmobiliarias verificadas con ROI 8-12% anual",
        "Estrategias de diversificación patrimonial y apalancamiento inteligente",
        "Sesiones 1:1 con consultores especializados en tu caso",
        "Networking con inversores activos en el mercado de Dubái",
        "Tu plan de acción personalizado para los próximos 90 días",
      ],
      icon: <TrendingUp className="w-5 h-5" />,
      img: IMAGES.realEstate,
    },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white overflow-x-hidden">

      {/* ── Ticker ── */}
      <Ticker />

      {/* ── Sticky Nav ── */}
      <nav className="sticky top-0 z-50 bg-[#0a0a0a]/95 backdrop-blur-md border-b border-[#C9A84C]/10 py-3">
        <div className="container flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-full bg-[#C9A84C] flex items-center justify-center shrink-0">
              <span className="text-[#0a0a0a] font-black text-xs">N</span>
            </div>
            <div>
              <div className="font-black text-white text-base leading-none tracking-tight">NEXO DUBÁI</div>
              <div className="text-[#C9A84C] text-[9px] font-bold tracking-widest leading-none mt-0.5">MADRID</div>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-2 text-xs text-gray-400">
            <Calendar className="w-3.5 h-3.5 text-[#C9A84C]" />
            <span>26-27 Abril 2026</span>
            <span className="mx-2 text-[#C9A84C]">·</span>
            <MapPin className="w-3.5 h-3.5 text-[#C9A84C]" />
            <span>Madrid</span>
          </div>
          <button
            onClick={scrollToForm}
            className="btn-gold rounded-lg px-4 py-2.5 text-xs font-black tracking-wider"
          >
            SOLICITAR PLAZA
          </button>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="relative min-h-[88vh] flex items-center py-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#0f0f0f] to-[#0a0a0a]" />
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-5"
          style={{ background: 'radial-gradient(ellipse at top right, #C9A84C 0%, transparent 70%)' }} />

        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            {/* Left: Text */}
            <div className="space-y-5">
              <div className="inline-flex items-center gap-2 bg-[#C9A84C]/10 border border-[#C9A84C]/30 rounded-full px-4 py-2">
                <Award className="w-4 h-4 text-[#C9A84C]" />
                <span className="text-[#C9A84C] text-xs font-bold tracking-wider">EVENTO VALIDADO POR +50 EMPRESARIOS EXITOSOS</span>
              </div>

              <div className="flex items-center gap-2 text-[#C9A84C] text-sm font-semibold">
                <Calendar className="w-4 h-4" />
                <span>26 Y 27 DE ABRIL DE 2026 · MADRID</span>
              </div>

              <h1 className="text-4xl md:text-5xl xl:text-6xl font-black leading-[1.05] tracking-tight">
                El evento más exclusivo para{" "}
                <span className="text-gradient-gold">optimizar tu fiscalidad</span>{" "}
                e invertir en Dubái
              </h1>

              <p className="text-gray-300 text-lg leading-relaxed">
                Un fin de semana intensivo donde aprendes a{" "}
                <span className="text-[#C9A84C] font-semibold">ahorrar 40-50% en impuestos</span>,{" "}
                <span className="text-[#C9A84C] font-semibold">invertir en Dubái</span> y{" "}
                <span className="text-[#C9A84C] font-semibold">hacer networking con +200 empresarios</span> de alto nivel.
              </p>

              <div className="flex flex-wrap gap-2.5">
                {[
                  { icon: <Clock className="w-4 h-4" />, label: "2 días intensivos" },
                  { icon: <Users className="w-4 h-4" />, label: "+200 empresarios" },
                  { icon: <Award className="w-4 h-4" />, label: "6 expertos" },
                ].map((stat, i) => (
                  <div key={i} className="flex items-center gap-2 bg-[#111111] border border-[#C9A84C]/20 rounded-full px-4 py-2 text-sm">
                    <span className="text-[#C9A84C]">{stat.icon}</span>
                    <span className="text-gray-200 font-medium">{stat.label}</span>
                  </div>
                ))}
              </div>

              {/* Price badge */}
              <div className="flex items-center gap-3 bg-[#111111] border border-[#C9A84C]/30 rounded-2xl px-5 py-4 w-fit">
                <div className="text-center">
                  <div className="text-gray-500 text-xs font-bold tracking-wider line-through">150€</div>
                  <div className="text-[#C9A84C] text-3xl font-black tracking-tight leading-none">97€</div>
                  <div className="text-[#C9A84C] text-[10px] font-black tracking-widest mt-0.5">OFERTA EXCLUSIVA</div>
                </div>
                <div className="h-10 w-px bg-[#C9A84C]/20" />
                <div className="text-sm">
                  <div className="text-white font-bold">Precio de lanzamiento</div>
                  <div className="text-gray-400 text-xs">Ahorra 53€ · Plazas limitadas</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-1">
                <button
                  onClick={scrollToForm}
                  className="btn-gold-outline rounded-xl px-8 py-5 text-base font-black tracking-widest inline-flex items-center justify-center gap-2"
                >
                  <Zap className="w-5 h-5" />
                  SOLICITAR MI PLAZA AHORA
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>

              <div className="flex flex-wrap items-center gap-4 text-xs text-gray-400">
                <div className="flex items-center gap-1.5">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 text-[#C9A84C] fill-[#C9A84C]" />)}
                  </div>
                  <span>4.9/5 (27 reseñas)</span>
                </div>
                <span className="text-[#C9A84C]">·</span>
                <span>Solo {totalPlazas - placasOcupadas} plazas disponibles</span>
                <span className="text-[#C9A84C]">·</span>
                <span>Proceso de selección</span>
              </div>
            </div>

            {/* Right: Carousel */}
            <div className="relative">
              <div className="aspect-video w-full">
                <HeroCarousel />
              </div>
              <div className="absolute -bottom-5 -left-5 bg-[#111111] border border-[#C9A84C]/30 rounded-xl p-4 shadow-2xl hidden md:block">
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    {["C", "M", "A", "R"].map((l, i) => (
                      <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-[#C9A84C] to-[#8B7536] flex items-center justify-center text-[#0a0a0a] text-xs font-black border-2 border-[#0a0a0a]">
                        {l}
                      </div>
                    ))}
                  </div>
                  <div>
                    <div className="text-white text-sm font-bold">+50 empresarios</div>
                    <div className="text-gray-400 text-xs">ya han confirmado plaza</div>
                  </div>
                  <div className="ml-2 text-right">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 text-[#C9A84C] fill-[#C9A84C]" />)}
                    </div>
                    <div className="text-gray-400 text-xs">4.9/5</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUST BAR / COUNTDOWN ── */}
      <section className="py-8 bg-[#111111] border-y border-[#C9A84C]/10">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <div className="text-[#C9A84C] text-xs font-bold tracking-widest mb-1">CUENTA ATRÁS PARA EL EVENTO</div>
              <div className="text-white text-sm font-semibold">26 de Abril 2026 · Madrid</div>
            </div>
            <CountdownTimer />
            <div className="flex flex-col items-center md:items-end gap-2">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#C9A84C] animate-pulse" />
                <span className="text-[#C9A84C] text-sm font-bold">Solo {totalPlazas - placasOcupadas} plazas disponibles</span>
              </div>
              <button onClick={scrollToForm} className="btn-gold rounded-lg px-5 py-2.5 text-xs font-black tracking-wider">
                RESERVAR AHORA
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── BENEFICIOS ── */}
      <section className="py-14 bg-[#0f0f0f]">
        <div className="container">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-black mb-3 tracking-tight">
              Todo Lo Que Vas a Conseguir
            </h2>
            <p className="text-gray-400 text-base">Un fin de semana intensivo, estrategia real y acceso a oportunidades exclusivas</p>
          </div>

          {/* Tabs */}
          <div className="flex justify-center gap-3 mb-8">
            {[
              { id: "conseguiras", label: "Lo Que Conseguirás" },
              { id: "incluye", label: "Qué Incluye El Evento" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-5 py-2.5 rounded-full text-sm font-bold tracking-wide transition-all duration-300 ${
                  activeTab === tab.id
                    ? "bg-[#C9A84C] text-[#0a0a0a]"
                    : "border border-[#C9A84C]/30 text-gray-300 hover:border-[#C9A84C]/60"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {activeTab === "conseguiras" && (
            <div className="grid md:grid-cols-3 gap-5">
              {[
                {
                  badge: "EXCLUSIVO",
                  title: "Ahorro Fiscal 40-50%",
                  metric: "40-50% AHORRO",
                  desc: "Estrategias legales probadas para reducir tu carga fiscal hasta un 50% y proteger tu patrimonio de forma completamente legal.",
                  img: IMAGES.fiscal,
                  icon: <Shield className="w-6 h-6" />,
                },
                {
                  badge: "EXCLUSIVO",
                  title: "Inversión Inmobiliaria en Dubái",
                  metric: "8-12% ROI",
                  desc: "Acceso directo a propiedades verificadas con ROI del 8-12% anual y oportunidades de inversión que no están disponibles públicamente.",
                  img: IMAGES.realEstate,
                  icon: <Building2 className="w-6 h-6" />,
                },
                {
                  badge: "EXCLUSIVO",
                  title: "Networking de Alto Impacto",
                  metric: "+200 EMPRESARIOS",
                  desc: "Conecta con empresarios e inversores de alto nivel que multiplican patrimonios. Una red de contactos valorada en más de €15.000/año.",
                  img: IMAGES.networking,
                  icon: <Users className="w-6 h-6" />,
                },
              ].map((card, i) => (
                <div key={i} className="card-dark overflow-hidden group">
                  <div className="relative h-44 overflow-hidden">
                    <img src={card.img} alt={card.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent" />
                    <div className="absolute top-3 right-3 bg-[#C9A84C] text-[#0a0a0a] text-xs font-black px-3 py-1 rounded-full tracking-wider">
                      {card.badge}
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-2 text-[#C9A84C] mb-2">
                      {card.icon}
                      <span className="text-xs font-bold tracking-wider">{card.title}</span>
                    </div>
                    <div className="text-3xl font-black text-[#C9A84C] mb-2 tracking-tight">
                      {card.metric}
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed">{card.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === "incluye" && (
            <div className="grid md:grid-cols-2 gap-3 max-w-3xl mx-auto">
              {[
                "Sesiones magistrales con expertos fiscales internacionales",
                "Consultoría 1:1 personalizada sobre tu situación fiscal",
                "Presentación de oportunidades inmobiliarias verificadas en Dubái",
                "Networking exclusivo con +200 empresarios de alto nivel",
                "Acceso al Grupo VIP de Inversión (valor €15.000/año)",
                "Plan de acción personalizado para los próximos 90 días",
                "Materiales exclusivos del evento y documentación legal",
                "Sesiones Q&A con fiscalistas especializados en España-Dubái",
                "Acceso de por vida al contenido grabado del evento",
                "Consultoría post-evento personalizada (valor €2.500)",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 bg-[#111111] border border-[#C9A84C]/15 rounded-xl p-4">
                  <div className="w-5 h-5 rounded-full bg-[#C9A84C]/20 border border-[#C9A84C]/40 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-[#C9A84C]" />
                  </div>
                  <span className="text-gray-200 text-sm">{item}</span>
                </div>
              ))}
            </div>
          )}

          <div className="text-center mt-8">
            {/* Price reminder */}
            <div className="inline-flex items-center gap-3 bg-[#111111] border border-[#C9A84C]/30 rounded-full px-6 py-3 mb-5">
              <span className="text-gray-500 text-sm line-through">150€</span>
              <span className="text-[#C9A84C] text-2xl font-black tracking-tight">97€</span>
              <span className="bg-[#C9A84C] text-[#0a0a0a] text-xs font-black px-3 py-1 rounded-full tracking-wider">OFERTA EXCLUSIVA</span>
            </div>
            <div className="block">
              <button onClick={scrollToForm} className="btn-gold-outline rounded-xl px-8 py-4 text-sm font-black tracking-widest inline-flex items-center gap-2">
                <Zap className="w-4 h-4" />
                SOLICITAR PLAZA AHORA
              </button>
            </div>
            <p className="text-gray-500 text-xs mt-3">Una experiencia valorada en más de 10.000€ · Plazas muy limitadas</p>
          </div>
        </div>
      </section>

      {/* ── BONOS EXCLUSIVOS ── */}
      <section className="py-14 bg-[#0a0a0a]">
        <div className="container">
          <div className="flex items-center justify-center gap-2 mb-8">
            <div className="h-px flex-1 bg-[#C9A84C]/20" />
            <div className="bg-[#C9A84C]/10 border border-[#C9A84C]/30 rounded-full px-5 py-2 text-[#C9A84C] text-sm font-bold tracking-wider whitespace-nowrap">
              🎁 BONOS EXCLUSIVOS INCLUIDOS
            </div>
            <div className="h-px flex-1 bg-[#C9A84C]/20" />
          </div>

          <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto">
            {/* Bono 1 */}
            <div className="card-dark p-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-[#C9A84C] text-[#0a0a0a] text-xs font-black px-4 py-1.5 rounded-bl-xl tracking-wider">
                SOLO PRIMEROS 20
              </div>
              <div className="w-11 h-11 rounded-xl bg-[#C9A84C]/10 border border-[#C9A84C]/30 flex items-center justify-center mb-4">
                <Star className="w-5 h-5 text-[#C9A84C]" />
              </div>
              <h3 className="text-xl font-black text-white mb-2 tracking-tight">Acceso EXCLUSIVO al Grupo VIP de Inversión</h3>
              <p className="text-[#C9A84C] font-bold text-sm mb-4">Valor: €15.000/año — <span className="text-white">GRATIS para ti</span></p>
              <ul className="space-y-2 mb-5">
                {[
                  "Deals inmobiliarios verificados con ROI del 8-12% anual",
                  "Oportunidades de inversión privadas no disponibles públicamente",
                  "Optimización fiscal de 30-40% con estrategias legales probadas",
                  "Network de alto nivel con inversores que mueven 6-7 cifras",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-300 text-sm">
                    <Check className="w-4 h-4 text-[#C9A84C] shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="bg-[#1a1a1a] rounded-full p-3 border border-[#C9A84C]/20">
                <div className="flex justify-between text-xs text-gray-400 mb-2">
                  <span>Plazas ocupadas:</span>
                  <span className="text-[#C9A84C] font-bold">{progressPct}%</span>
                </div>
                <div className="h-2 bg-[#222] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-[#C9A84C] to-[#D4AF37] rounded-full progress-fill"
                    style={{ width: `${progressPct}%` }}
                  />
                </div>
                <div className="flex justify-between text-xs mt-2">
                  <span className="text-gray-400">{placasOcupadas} de {totalPlazas} plazas</span>
                  <span className="text-[#C9A84C] font-bold">¡Solo quedan {totalPlazas - placasOcupadas}!</span>
                </div>
              </div>

              <button onClick={scrollToForm} className="btn-gold-outline rounded-xl w-full py-4 text-sm font-black tracking-widest mt-5 flex items-center justify-center gap-2">
                <Zap className="w-4 h-4" />
                ¡QUIERO MI ACCESO VIP!
              </button>
            </div>

            {/* Bono 2 */}
            <div className="card-dark p-6">
              <div className="inline-flex items-center gap-2 bg-[#C9A84C]/10 border border-[#C9A84C]/30 rounded-full px-3 py-1.5 mb-4">
                <Award className="w-3.5 h-3.5 text-[#C9A84C]" />
                <span className="text-[#C9A84C] text-xs font-bold tracking-wider">BONO ADICIONAL</span>
              </div>
              <h3 className="text-xl font-black text-white mb-2 tracking-tight">Consultoría Personalizada Post-Evento</h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                Sesión privada exclusiva donde diseñamos tu estrategia personalizada de inversión y estructura fiscal internacional. Implementamos todo lo aprendido directamente en tu caso real y te damos la hoja de ruta exacta para tu éxito.
              </p>
              <div className="bg-[#1a1a1a] rounded-xl p-4 border border-[#C9A84C]/20 mb-5">
                <div className="text-2xl font-black text-[#C9A84C] tracking-tight">Valor: €2.500</div>
                <div className="text-white font-bold">GRATIS para asistentes</div>
              </div>
              <div className="space-y-2.5">
                {[
                  "Análisis de tu situación fiscal actual",
                  "Estructura óptima para tu caso específico",
                  "Hoja de ruta para los próximos 90 días",
                  "Seguimiento post-evento incluido",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-gray-300 text-sm">
                    <Check className="w-4 h-4 text-[#C9A84C] shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
              <button onClick={scrollToForm} className="mt-5 w-full border border-[#C9A84C]/40 text-[#C9A84C] rounded-xl py-3.5 text-sm font-bold tracking-wide hover:bg-[#C9A84C]/10 transition-colors flex items-center justify-center gap-2">
                Reservar Mi Plaza →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIOS ── */}
      <section className="py-14 bg-[#0f0f0f]">
        <div className="container">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-black mb-3 tracking-tight">
              Historias De Éxito Reales
            </h2>
            <p className="text-gray-400">Más de 50 empresarios hispanohablantes ya han transformado su patrimonio con Nexo</p>
          </div>

          <div className="grid md:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {[
              {
                name: "Carlos Mendoza",
                role: "CEO de Software Company",
                origin: "España → Dubái",
                quote: "Vine pensando que Dubái no era para mí. Después del evento entendí cómo estructurar mi empresa para pagar 0% en impuestos legalmente. Pasé de pagar 47% en España a tener una estructura 100% legal que me ahorra más de 80.000€ al año.",
                stats: [
                  { label: "Ahorro fiscal anual", value: "+80.000€" },
                  { label: "Impuestos antes", value: "47%" },
                  { label: "Impuestos ahora", value: "0-9%" },
                ],
              },
              {
                name: "María González",
                role: "Fundadora de E-commerce",
                origin: "México → Dubái",
                quote: "Gracias a las estrategias del evento pude reducir mi carga fiscal en un 45% y acceder a una inversión inmobiliaria con un ROI del 11% anual. La red de contactos que construí vale más que cualquier formación que haya hecho.",
                stats: [
                  { label: "Reducción fiscal", value: "45%" },
                  { label: "ROI inversión", value: "11%" },
                  { label: "Contactos clave", value: "+30" },
                ],
              },
              {
                name: "Alejandro Ruiz",
                role: "Director de Consultoría",
                origin: "España → Internacional",
                quote: "El evento me abrió los ojos sobre las posibilidades reales de estructurar mi negocio internacionalmente. En 6 meses implementé las estrategias y ya estoy ahorrando más de 60.000€ anuales en impuestos de forma completamente legal.",
                stats: [
                  { label: "Ahorro anual", value: "+60.000€" },
                  { label: "Tiempo implementación", value: "6 meses" },
                  { label: "ROI del evento", value: "10X" },
                ],
              },
            ].map((t, i) => (
              <div key={i} className="card-dark p-6 flex flex-col">
                <div className="inline-flex items-center gap-2 bg-[#C9A84C]/10 border border-[#C9A84C]/20 rounded-full px-3 py-1 mb-4 self-start">
                  <Check className="w-3 h-3 text-[#C9A84C]" />
                  <span className="text-[#C9A84C] text-xs font-bold">Verificado — Cliente Real</span>
                </div>
                <div className="flex mb-3">
                  {[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 text-[#C9A84C] fill-[#C9A84C]" />)}
                </div>
                <p className="text-gray-300 text-sm leading-relaxed mb-5 flex-1">"{t.quote}"</p>
                <div className="grid grid-cols-3 gap-2 mb-4">
                  {t.stats.map((s, j) => (
                    <div key={j} className="bg-[#1a1a1a] rounded-lg p-2 text-center">
                      <div className="text-[#C9A84C] font-black text-base tracking-tight">{s.value}</div>
                      <div className="text-gray-500 text-[10px] leading-tight mt-0.5">{s.label}</div>
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-3 pt-3 border-t border-[#C9A84C]/10">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#C9A84C] to-[#8B7536] flex items-center justify-center text-[#0a0a0a] font-black text-sm">
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="text-white font-bold text-sm">{t.name}</div>
                    <div className="text-gray-500 text-xs">{t.role} · {t.origin}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <div className="flex items-center justify-center gap-2 mb-4">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 text-[#C9A84C] fill-[#C9A84C]" />)}
              <span className="text-gray-400 text-sm ml-1">4.9/5 (basado en +50 experiencias reales)</span>
            </div>
            <button onClick={scrollToForm} className="btn-gold-outline rounded-xl px-8 py-4 text-sm font-black tracking-widest inline-flex items-center gap-2">
              <Zap className="w-4 h-4" />
              QUIERO MI HISTORIA DE ÉXITO
            </button>
          </div>
        </div>
      </section>

      {/* ── MÉTRICAS ── */}
      <section className="py-14 bg-[#0a0a0a]">
        <div className="container">
          <div className="max-w-4xl mx-auto card-dark p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
              <div>
                <div className="inline-flex items-center gap-2 bg-[#C9A84C]/10 border border-[#C9A84C]/30 rounded-full px-4 py-2 mb-4">
                  <Check className="w-4 h-4 text-[#C9A84C]" />
                  <span className="text-[#C9A84C] text-xs font-bold">VERIFICADO</span>
                </div>
                <h3 className="text-2xl font-black text-white mb-3 tracking-tight">Tu inversión se multiplica con estrategias elite</h3>
                <div className="space-y-2">
                  {[
                    "Ahorro fiscal inmediato de hasta 40-50%",
                    "Acceso a deals con ROI del 8-12% anual",
                    "Red de inversores elite valorada en €15K/año",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-gray-300 text-sm">
                      <Check className="w-4 h-4 text-[#C9A84C] shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative w-36 h-36">
                  <div className="absolute inset-0 rounded-full border-4 border-[#C9A84C]/20" />
                  <div className="absolute inset-2 rounded-full border-4 border-[#C9A84C]/40" />
                  <div className="absolute inset-4 rounded-full bg-[#C9A84C]/10 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-4xl font-black text-[#C9A84C] tracking-tight">
                        <AnimatedNumber value="10" suffix="X" />
                      </div>
                      <div className="text-xs text-gray-400 font-bold tracking-wider">ROI POTENCIAL</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "40-50%", label: "Ahorro Fiscal", desc: "Reducción de carga tributaria" },
                { value: "8-12%", label: "ROI Inmobiliario", desc: "Rentabilidad anual verificada" },
              ].map((metric, i) => (
                <div key={i} className="bg-[#1a1a1a] rounded-xl p-5 text-center border border-[#C9A84C]/10">
                  <div className="text-4xl font-black text-[#C9A84C] mb-1 tracking-tight">
                    <AnimatedNumber value={metric.value} />
                  </div>
                  <div className="text-white font-bold text-base mb-1">{metric.label}</div>
                  <div className="text-gray-400 text-xs">{metric.desc}</div>
                </div>
              ))}
            </div>

              <div className="text-center mt-6">
              {/* Price in metrics section */}
              <div className="flex items-center justify-center gap-3 mb-4">
                <span className="text-gray-500 text-base line-through">150€</span>
                <span className="text-[#C9A84C] text-3xl font-black tracking-tight">97€</span>
                <span className="bg-[#C9A84C] text-[#0a0a0a] text-xs font-black px-3 py-1.5 rounded-full tracking-wider">OFERTA EXCLUSIVA</span>
              </div>
              <button onClick={scrollToForm} className="btn-gold-outline rounded-xl px-10 py-5 text-base font-black tracking-widest inline-flex items-center gap-2">
                <Zap className="w-5 h-5" />
                ASEGURA TU PLAZA POR 97€
              </button>
              <div className="flex items-center justify-center gap-4 mt-3 text-xs text-gray-400">
                <span className="flex items-center gap-1"><Check className="w-3.5 h-3.5 text-[#C9A84C]" /> Solo {totalPlazas} plazas disponibles</span>
                <span className="flex items-center gap-1"><Check className="w-3.5 h-3.5 text-[#C9A84C]" /> Evento verificado</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROCESO DE ADMISIÓN ── */}
      <section className="py-14 bg-[#0f0f0f]">
        <div className="container">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="bg-[#C9A84C]/10 border border-[#C9A84C]/30 rounded-full px-4 py-2 text-[#C9A84C] text-xs font-bold tracking-wider">
              SOLO {totalPlazas} PLAZAS DISPONIBLES
            </div>
          </div>
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-black mb-3 tracking-tight">
              Proceso de Admisión
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-sm">
              Simple y directo. Solicita tu plaza, confirmamos por email y nos vemos en Madrid.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-3 mb-8">
            {[
              {
                num: "01",
                title: "Solicitud Online",
                desc: "Completa el formulario con tu perfil empresarial y objetivos. Solo tarda 2 minutos.",
                icon: <Globe className="w-5 h-5 text-[#C9A84C]" />,
              },
              {
                num: "02",
                title: "Confirmación por Email",
                desc: "Recibirás confirmación de tu plaza y todos los detalles del evento directamente en tu correo.",
                icon: <Check className="w-5 h-5 text-[#C9A84C]" />,
              },
              {
                num: "03",
                title: "Asistencia al Evento",
                desc: "Preséntate el sábado 26 de abril en el venue exclusivo en Madrid. Todo está incluido.",
                icon: <Award className="w-5 h-5 text-[#C9A84C]" />,
              },
              {
                num: "04",
                title: "Asesoramiento Post-Evento Individual (Opcional)",
                desc: "Tras el evento, si lo deseas, te ofrecemos una sesión de asesoramiento individual personalizado para profundizar en tu caso concreto y evaluar los siguientes pasos.",
                icon: <Users className="w-5 h-5 text-[#C9A84C]" />,
              },
            ].map((step, i) => (
              <div key={i} className="flex items-start gap-5 card-dark p-5">
                <div className="w-12 h-12 rounded-full bg-[#C9A84C]/10 border-2 border-[#C9A84C]/40 flex items-center justify-center shrink-0">
                  <span className="text-[#C9A84C] font-black text-sm">{step.num}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    {step.icon}
                    <h4 className="font-black text-white">{step.title}</h4>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button onClick={scrollToForm} className="btn-gold-outline rounded-xl px-10 py-5 text-base font-black tracking-widest inline-flex items-center gap-2">
              <Zap className="w-5 h-5" />
              SOLICITAR MI PLAZA AHORA
            </button>
            <p className="text-gray-500 text-xs mt-3">Completa el formulario y te contactaremos en máximo 48 horas</p>
          </div>
        </div>
      </section>

      {/* ── AGENDA 2 DÍAS ── */}
      <section className="py-14 bg-[#0a0a0a]">
        <div className="container">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-black mb-3 tracking-tight">
              2 Días Que Cambiarán{" "}
              <span className="text-gradient-gold">Tu Visión Del Dinero</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-sm">
              No es una conferencia genérica. Es una inmersión total en el ecosistema empresarial y fiscal más avanzado. Cada día está diseñado para que salgas con claridad, contactos y estrategia real.
            </p>
          </div>

          <div className="space-y-5 max-w-4xl mx-auto">
            {agendaData.map((day, i) => (
              <div key={i} className={`grid md:grid-cols-2 gap-0 overflow-hidden rounded-2xl border border-[#C9A84C]/15 ${i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""}`}>
                <div className="relative h-56 md:h-auto">
                  <img src={day.img} alt={day.titulo} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#111111]/80" />
                  <div className="absolute bottom-4 left-4 flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-[#C9A84C] flex items-center justify-center text-[#0a0a0a]">
                      {day.icon}
                    </div>
                    <span className="text-white font-black text-lg tracking-tight">{day.dia}</span>
                  </div>
                </div>
                <div className="bg-[#111111] p-6">
                  <h3 className="text-xl font-black text-white mb-4 tracking-tight">{day.titulo}</h3>
                  <ul className="space-y-2.5">
                    {day.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-2.5 text-gray-300 text-sm">
                        <div className="w-5 h-5 rounded-full bg-[#C9A84C]/10 border border-[#C9A84C]/30 flex items-center justify-center shrink-0 mt-0.5">
                          <ArrowRight className="w-3 h-3 text-[#C9A84C]" />
                        </div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <div className="inline-flex items-center gap-2 bg-[#C9A84C]/10 border border-[#C9A84C]/30 rounded-full px-5 py-2.5 mb-5">
              <Check className="w-4 h-4 text-[#C9A84C]" />
              <span className="text-[#C9A84C] text-sm font-bold">TODO INCLUIDO EN EL EVENTO</span>
            </div>
            {/* Price inline */}
            <div className="flex items-center justify-center gap-3 mb-5">
              <span className="text-gray-500 text-base line-through">150€</span>
              <span className="text-[#C9A84C] text-3xl font-black tracking-tight">97€</span>
              <span className="bg-[#C9A84C] text-[#0a0a0a] text-xs font-black px-3 py-1.5 rounded-full tracking-wider">OFERTA EXCLUSIVA</span>
            </div>
            <div className="block">
              <button onClick={scrollToForm} className="btn-gold-outline rounded-xl px-10 py-5 text-base font-black tracking-widest inline-flex items-center gap-2">
                <Zap className="w-5 h-5" />
                QUIERO MI PLAZA POR 97€
              </button>
            </div>
            <p className="text-gray-500 text-xs mt-3">Solo {totalPlazas} plazas disponibles · Proceso de selección</p>
          </div>
        </div>
      </section>

      {/* ── PARA QUIÉN ES ── */}
      <section className="py-14 bg-[#0f0f0f]">
        <div className="container">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-black mb-3 tracking-tight">
              ¿Este Evento Es Para Ti?
            </h2>
            <p className="text-gray-400 text-sm">Descubre si este evento se adapta a tu perfil</p>
          </div>

          <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto">
            {/* Para ti */}
            <div className="card-dark p-6">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-8 rounded-full bg-[#C9A84C]/20 border border-[#C9A84C]/40 flex items-center justify-center">
                  <Check className="w-4 h-4 text-[#C9A84C]" />
                </div>
                <h3 className="text-lg font-black text-white tracking-tight">Este Evento Es Para Ti Si...</h3>
              </div>
              <ul className="space-y-2.5">
                {[
                  "Eres empresario, emprendedor o profesional con ingresos estables",
                  "Sientes que estás pagando demasiados impuestos y quieres alternativas legales",
                  "Quieres invertir mejor, con datos reales, y evitar errores caros",
                  "Estás abierto a crear empresa o vehículo de inversión fuera de tu país",
                  "Tienes mentalidad de acción: quieres ver, entender y decidir",
                  "Buscas una red de contactos de alto nivel que multiplique tus oportunidades",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-gray-300 text-sm">
                    <Check className="w-4 h-4 text-[#C9A84C] shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Tono inclusivo / empático */}
            <div className="card-dark p-6">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-8 rounded-full bg-[#C9A84C]/10 border border-[#C9A84C]/30 flex items-center justify-center">
                  <Heart className="w-4 h-4 text-[#C9A84C]" />
                </div>
                <h3 className="text-lg font-black text-white tracking-tight">Si Aún Tienes Dudas...</h3>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed mb-5">
                Entendemos que dar el paso hacia la optimización fiscal internacional puede generar preguntas. Si no estás seguro de si este evento es para ti, <span className="text-[#C9A84C] font-semibold">te queremos igual</span> y queremos ayudarte a decidir con información real.
              </p>
              <ul className="space-y-2.5 mb-5">
                {[
                  "Escríbenos y te explicamos sin compromiso si encaja con tu situación",
                  "Hablamos contigo antes de que tomes ninguna decisión",
                  "Si no es el momento adecuado, te lo diremos con honestidad",
                  "Nuestro objetivo es que salgas con valor real, no solo con información",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-gray-300 text-sm">
                    <div className="w-4 h-4 rounded-full bg-[#C9A84C]/20 flex items-center justify-center shrink-0 mt-0.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#C9A84C]" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="mailto:info@nexomadrid.com"
                className="inline-flex items-center gap-2 text-[#C9A84C] font-bold text-sm hover:text-[#D4AF37] transition-colors"
              >
                Escríbenos directamente →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-14 bg-[#0a0a0a]">
        <div className="container">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="bg-[#C9A84C]/10 border border-[#C9A84C]/30 rounded-full px-4 py-2 text-[#C9A84C] text-xs font-bold tracking-wider">
              RESOLVEMOS TODAS TUS DUDAS
            </div>
          </div>
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-black mb-3 tracking-tight">
              Preguntas Frecuentes
            </h2>
            <p className="text-gray-400 text-sm">Haz clic en cada pregunta para ver la respuesta completa</p>
          </div>

          <div className="max-w-3xl mx-auto space-y-2.5">
            {faqData.map((faq, i) => (
              <FAQItem key={i} q={faq.q} a={faq.a} />
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-400 text-sm mb-3">¿Tienes más preguntas?</p>
            <a
              href="mailto:info@nexomadrid.com"
              className="text-[#C9A84C] font-bold hover:text-[#D4AF37] transition-colors underline underline-offset-4 text-sm"
            >
              Escríbenos directamente →
            </a>
          </div>
        </div>
      </section>

      {/* ── FORMULARIO / CTA FINAL ── */}
      <section id="solicitar" className="py-14 bg-[#0f0f0f]">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-black mb-3 tracking-tight">
                Madrid No Espera
              </h2>
              <p className="text-gray-300 text-base leading-relaxed">
                Mientras otros siguen pagando impuestos de más, tú puedes estar dentro del ecosistema, con información real, contactos reales y decisiones que cambian tu patrimonio.
              </p>
            </div>

            {/* Price block above form */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6 bg-[#111111] border border-[#C9A84C]/30 rounded-2xl px-6 py-5">
              <div className="text-center">
                <div className="text-gray-500 text-sm font-bold tracking-wider line-through">150€</div>
                <div className="text-[#C9A84C] text-5xl font-black tracking-tight leading-none">97€</div>
                <div className="text-[#C9A84C] text-xs font-black tracking-widest mt-1">OFERTA EXCLUSIVA</div>
              </div>
              <div className="hidden sm:block h-14 w-px bg-[#C9A84C]/20" />
              <div>
                <div className="text-white font-black text-lg">Precio de lanzamiento</div>
                <div className="text-gray-400 text-sm">Ahorra 53€ · Solo {totalPlazas - placasOcupadas} plazas disponibles</div>
                <div className="flex flex-wrap gap-2 mt-2">
                  {["✓ 2 días intensivos", "✓ +200 empresarios", "✓ Bonos incluidos"].map((f, i) => (
                    <span key={i} className="text-[#C9A84C] text-xs font-semibold">{f}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="card-dark p-7">
              <div className="flex items-center justify-between mb-5">
                <h3 className="text-xl font-black text-white tracking-tight">Solicitar Plaza Ahora</h3>
                <div className="bg-[#C9A84C]/10 border border-[#C9A84C]/30 rounded-full px-3 py-1 text-[#C9A84C] text-xs font-bold">
                  Solo {totalPlazas - placasOcupadas} plazas
                </div>
              </div>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("¡Solicitud enviada! Te contactaremos en menos de 48 horas con la confirmación de tu plaza y todos los detalles del evento.");
                }}
                className="space-y-4"
              >
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-gray-400 text-xs font-bold tracking-wider block mb-1.5">NOMBRE COMPLETO *</label>
                    <input
                      type="text"
                      required
                      placeholder="Tu nombre"
                      className="w-full bg-[#1a1a1a] border border-[#C9A84C]/20 rounded-lg px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-[#C9A84C]/60 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-gray-400 text-xs font-bold tracking-wider block mb-1.5">EMAIL *</label>
                    <input
                      type="email"
                      required
                      placeholder="tu@email.com"
                      className="w-full bg-[#1a1a1a] border border-[#C9A84C]/20 rounded-lg px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-[#C9A84C]/60 transition-colors"
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-gray-400 text-xs font-bold tracking-wider block mb-1.5">TELÉFONO *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+34 600 000 000"
                      className="w-full bg-[#1a1a1a] border border-[#C9A84C]/20 rounded-lg px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-[#C9A84C]/60 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-gray-400 text-xs font-bold tracking-wider block mb-1.5">SECTOR / NEGOCIO *</label>
                    <input
                      type="text"
                      required
                      placeholder="Ej: E-commerce, Consultoría..."
                      className="w-full bg-[#1a1a1a] border border-[#C9A84C]/20 rounded-lg px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-[#C9A84C]/60 transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-gray-400 text-xs font-bold tracking-wider block mb-1.5">FACTURACIÓN ANUAL APROXIMADA *</label>
                  <select
                    required
                    className="w-full bg-[#1a1a1a] border border-[#C9A84C]/20 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-[#C9A84C]/60 transition-colors"
                    defaultValue=""
                  >
                    <option value="" disabled className="text-gray-600">Selecciona un rango</option>
                    <option value="50-100k">50.000€ - 100.000€</option>
                    <option value="100-250k">100.000€ - 250.000€</option>
                    <option value="250-500k">250.000€ - 500.000€</option>
                    <option value="500k-1m">500.000€ - 1.000.000€</option>
                    <option value="+1m">Más de 1.000.000€</option>
                  </select>
                </div>
                <div>
                  <label className="text-gray-400 text-xs font-bold tracking-wider block mb-1.5">¿CUÁL ES TU PRINCIPAL OBJETIVO? *</label>
                  <textarea
                    required
                    rows={3}
                    placeholder="Ej: Reducir mi carga fiscal, invertir en Dubái, hacer networking con empresarios de alto nivel..."
                    className="w-full bg-[#1a1a1a] border border-[#C9A84C]/20 rounded-lg px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-[#C9A84C]/60 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-gold-outline rounded-xl w-full py-5 text-base font-black tracking-widest flex items-center justify-center gap-2"
                >
                  <Zap className="w-5 h-5" />
                  QUIERO APLICAR PARA UNA PLAZA EN NEXO DUBÁI - MADRID
                  <ArrowRight className="w-5 h-5" />
                </button>

                <p className="text-gray-500 text-xs text-center leading-relaxed">
                  Completa el formulario y recibirás confirmación por email en máximo 48 horas con todos los detalles del evento.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-[#0a0a0a] border-t border-[#C9A84C]/10 py-8">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#C9A84C] flex items-center justify-center">
                <span className="text-[#0a0a0a] font-black">N</span>
              </div>
              <div>
                <div className="font-black text-white text-lg tracking-tight">NEXO DUBÁI - MADRID</div>
                <div className="text-[#C9A84C] text-xs font-bold tracking-widest">26-27 ABRIL 2026</div>
              </div>
            </div>
            <div className="text-center text-gray-500 text-xs">
              <p>Solo {totalPlazas - placasOcupadas} plazas disponibles · Hotel 5★ · Networking exclusivo</p>
              <p className="mt-1">© 2026 Nexo Dubái - Madrid · Todos los derechos reservados</p>
            </div>
            <button onClick={scrollToForm} className="btn-gold rounded-lg px-6 py-3 text-sm font-black tracking-wider">
              RESERVAR MI PLAZA
            </button>
          </div>
        </div>
      </footer>

      {/* ── STICKY BOTTOM BAR ── */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#0a0a0a]/95 backdrop-blur-md border-t border-[#C9A84C]/20 py-3 shadow-2xl">
        <div className="container flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-8 h-8 rounded-full bg-[#C9A84C] flex items-center justify-center shrink-0">
              <span className="text-[#0a0a0a] font-black text-xs">N</span>
            </div>
            <div className="min-w-0">
              <div className="text-white font-bold text-sm truncate">Nexo Dubái - Madrid · 26-27 Abril 2026</div>
              <div className="text-gray-400 text-xs hidden sm:block truncate">
                Solo {totalPlazas - placasOcupadas} plazas · Optimización fiscal · Networking +200 empresarios
              </div>
            </div>
          </div>
          <button
            onClick={scrollToForm}
            className="btn-gold rounded-lg px-5 py-2.5 text-xs font-black tracking-wider shrink-0 flex items-center gap-1.5"
          >
            <Zap className="w-3.5 h-3.5" />
            RESERVAR MI PLAZA AHORA
          </button>
        </div>
      </div>

      {/* Bottom padding for sticky bar */}
      <div className="h-16" />
    </div>
  );
}
