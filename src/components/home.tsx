"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  CheckCircle,
  ChevronDown,
  Clock,
  Compass,
  FileCheck2,
  FileSearch,
  FileText,
  HelpCircle,
  Mail,
  MapPin,
  Phone,
  Scale,
  Send,
  Shield,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { fullName, lawyer } from "@/lib/lawyer";
import { areas } from "@/lib/areas";
import { articles } from "@/lib/articles";
import { FadeIn, SectionBadge, SpotlightCard } from "./motion";

/* ================= 1. BARO VE YETKİ BANDI ================= */
export function BarAccreditationBar() {
  const credentials = [
    { label: "Kayıtlı Baro", val: lawyer.bar },
    { label: "Çalışma Esası", val: "Randevulu Danışmanlık" },
    { label: "Yetki Çevresi", val: `${lawyer.city} & Tüm Türkiye` },
    { label: "Meslek İlkesi", val: "TBB Reklam Yasağı m.7 Uyumlu" },
  ];

  return (
    <section className="border-b border-card-border bg-bg-alt/40 py-5 sm:py-7">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <div className="grid grid-cols-2 gap-4 sm:gap-6 sm:grid-cols-4">
          {credentials.map((c) => (
            <div key={c.label} className="border-l border-line pl-3 sm:pl-4">
              <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.16em] sm:tracking-[0.2em] text-fg-muted">
                {c.label}
              </span>
              <p className="mt-1 font-serif text-base sm:text-lg font-medium text-fg">{c.val}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================= 2. ÇALIŞMA ALANLARI (FİLTRELİ & FOTOĞRAFLI BENTO GRID) ================= */
export function BentoPracticeAreas() {
  const [selectedCategory, setSelectedCategory] = useState<string>("Tümü");

  const categories = ["Tümü", "Ceza & Yargılama", "Özel Hukuk", "Şirket & Ticaret", "Kamu Hukuku"];

  const filteredAreas =
    selectedCategory === "Tümü"
      ? areas
      : areas.filter((a) => a.category === selectedCategory);

  return (
    <section id="calisma-alanlari" className="scroll-mt-20 py-16 sm:py-24 lg:py-32 bg-bg">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-line">
          <div>
            <SectionBadge number="01">Faaliyet Alanları</SectionBadge>
            <h2 className="mt-4 font-serif text-3xl font-normal sm:text-4xl lg:text-5xl text-fg">
              Hukuki <span className="italic text-accent">Çalışma Konuları</span>
            </h2>
            <p className="mt-3 text-sm text-fg-muted max-w-xl">
              Fiilen takip edilen dava türleri, hukuki danışmanlık ve arabuluculuk süreçleri.
            </p>
          </div>

          {/* Filtre Sekmeleri */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`rounded-full px-4 py-2 text-xs font-semibold tracking-wider transition-all duration-300 ${
                  selectedCategory === cat
                    ? "bg-accent text-white shadow-xs"
                    : "border border-card-border bg-card/80 text-fg-muted hover:border-accent hover:text-fg"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Alanlar Kartları */}
        <motion.div layout className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence>
            {filteredAreas.map((area, idx) => (
              <motion.div
                key={area.slug}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
              >
                <Link
                  href={`/calisma-alanlari/${area.slug}`}
                  className="group relative flex h-[380px] flex-col justify-between overflow-hidden rounded-2xl border border-card-border bg-card p-7 shadow-xs transition-all duration-500 hover:-translate-y-1 hover:border-accent/60 hover:shadow-2xl"
                >
                  {/* Arka Plan Fotoğrafı */}
                  <div className="absolute inset-0 -z-10 overflow-hidden">
                    <Image
                      src={area.image}
                      alt={area.title}
                      fill
                      sizes="(min-width: 1024px) 33vw, 100vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-15 dark:opacity-25"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/90 to-card/75" />
                  </div>

                  {/* Üst Bilgi */}
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="rounded-full bg-accent-subtle px-3 py-1 text-[11px] font-semibold text-accent">
                        {area.category}
                      </span>
                      <span className="font-mono text-xs text-fg-muted">0{idx + 1}</span>
                    </div>

                    <h3 className="mt-5 font-serif text-2xl font-normal text-fg transition-colors group-hover:text-accent">
                      {area.title}
                    </h3>

                    <p className="mt-3 text-xs leading-relaxed text-fg-muted line-clamp-2">
                      {area.lead}
                    </p>

                    <div className="mt-5 border-t border-line/60 pt-4">
                      <ul className="space-y-1.5">
                        {area.topics.slice(0, 3).map((topic) => (
                          <li key={topic} className="flex items-center gap-2 text-xs text-fg/80">
                            <span className="h-1.5 w-1.5 rounded-full bg-accent/70" />
                            <span className="truncate">{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Alt Eylem */}
                  <div className="flex items-center justify-between border-t border-line/60 pt-4 text-xs font-semibold text-accent">
                    <span>Mevzuat ve Dava Süreci</span>
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

/* ================= 3. METODOLOJİ (İNTERAKTİF ÇALIŞMA PROTOKOLÜ) ================= */
export function ProcessTimeline() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      num: "01",
      title: "Hukuki Teşhis ve Ön İnceleme",
      lead: "Müvekkilin ilettiği maddi vakıalar ve evraklar ayrıntılı olarak incelenir.",
      details:
        "Tarafımıza aktarılan uyuşmazlığın hukuki dayanağı, tarafların sıfatları ve sunulan deliller ilk görüşmede değerlendirilir. Hak kayıplarının önüne geçebilmek adına varsa derhal itiraz ve başvuru süreleri tespit edilir.",
      icon: FileSearch,
    },
    {
      num: "02",
      title: "Mevzuat ve Yargıtay İçtihat Taraması",
      lead: "Kanun hükümleri ve emsal yargı kararları ışığında risk analizi yapılır.",
      details:
        "İlgili hukuki alana özgü güncel kanun maddeleri, Yargıtay Hukuk Genel Kurulu ve ilgili daire kararları taranarak davanın veya takibin başarı şansı, zaman maliyeti ve olası riskleri objektif olarak tespit edilir.",
      icon: Scale,
    },
    {
      num: "03",
      title: "Stratejik Eylem ve Dava Planı",
      lead: "Dava şartı arabuluculuk veya doğrudan dava yolları belirlenir.",
      details:
        "Müvekkilin en yüksek menfaatine hizmet edecek strateji kurgulanır. İhtilafın sulh veya arabuluculuk yoluyla çözümü mümkünse öncelikle bu mekanizma işletilir; aksi takdirde titizlikle hazırlanmış dava dilekçesi yetkili mahkemeye sunulur.",
      icon: Compass,
    },
    {
      num: "04",
      title: "Şeffaf Takip ve Düzenli Raporlama",
      lead: "Her resmi tebligat, duruşma tutanağı ve karar düzenli olarak müvekkile bildirilir.",
      details:
        "UYAP sistemi üzerinden dosyadaki tüm gelişmeler anlık olarak denetlenir. Duruşma sonuçları, bilirkişi raporları ve ara kararlar hakkında müvekkile anlaşılır bir dille düzenli bilgilendirme yapılır.",
      icon: CheckCircle,
    },
  ];

  return (
    <section className="border-y border-card-border bg-bg-alt/50 py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <div className="max-w-2xl">
          <SectionBadge number="02">Çalışma İlkeleri</SectionBadge>
          <h2 className="mt-4 font-serif text-3xl font-normal sm:text-4xl lg:text-5xl text-fg">
            Temsilde <span className="italic text-accent">4 Aşamalı Metodoloji</span>
          </h2>
          <p className="mt-3 text-base text-fg-muted">
            Her dosya, adil yargılanma ve şeffaf bilgilendirme esasıyla sistematik bir süreçle yönetilir.
          </p>
        </div>

        <div className="mt-10 sm:mt-14 grid gap-6 sm:gap-8 lg:grid-cols-12 lg:items-center">
          {/* Sol: Adım Seçici Butonlar */}
          <div className="lg:col-span-5 space-y-2.5 sm:space-y-3">
            {steps.map((s, idx) => (
              <button
                key={s.num}
                onClick={() => setActiveStep(idx)}
                className={`w-full text-left rounded-2xl p-4 sm:p-5 border transition-all duration-300 ${
                  activeStep === idx
                    ? "border-accent bg-card shadow-lg"
                    : "border-card-border bg-card/60 hover:bg-card text-fg-muted"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span
                      className={`font-mono text-xs font-bold rounded-lg px-2.5 py-1 ${
                        activeStep === idx ? "bg-accent text-white" : "bg-bg-alt text-fg-muted"
                      }`}
                    >
                      {s.num}
                    </span>
                    <h4 className="font-serif text-base sm:text-lg font-medium text-fg">{s.title}</h4>
                  </div>
                  <s.icon
                    className={`h-4 w-4 sm:h-5 sm:w-5 ${
                      activeStep === idx ? "text-accent" : "text-fg-muted/40"
                    }`}
                  />
                </div>
                <p className="mt-2 text-xs text-fg-muted pl-8 sm:pl-10">{s.lead}</p>
              </button>
            ))}
          </div>

          {/* Sağ: Aktif Adım Detay Paneli */}
          <div className="lg:col-span-7">
            <div className="relative overflow-hidden rounded-3xl border border-card-border bg-card p-6 sm:p-12 shadow-xl">
              <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
                <Scale className="h-40 w-40 text-accent" />
              </div>

              <div className="flex items-center gap-3">
                <span className="font-mono text-3xl font-bold text-accent">
                  {steps[activeStep].num}
                </span>
                <span className="h-4 w-px bg-line" />
                <span className="text-xs uppercase tracking-[0.2em] text-fg-muted font-semibold">
                  Aşama Rehberi
                </span>
              </div>

              <h3 className="mt-6 font-serif text-3xl font-normal text-fg">
                {steps[activeStep].title}
              </h3>

              <p className="mt-4 text-base leading-relaxed text-fg-muted">
                {steps[activeStep].details}
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4 border-t border-line pt-6">
                <div className="flex items-center gap-2 text-xs font-semibold text-accent">
                  <FileCheck2 className="h-4 w-4" />
                  <span>Avukatlık Kanunu & TBB Meslek Kuralları Güvencesi</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================= 4. MİMARİ VE HUKUK FOTOĞRAF GALERİSİ ================= */
export function ArchitecturalGallery() {
  const images = [
    {
      src: "/images/library.jpg",
      title: "Hukuk Kütüphanesi",
      sub: "Mevzuat ve Doktrin Arşivi",
    },
    {
      src: "/images/columns-shadow.jpg",
      title: "Adalet Sütunları",
      sub: "Hukukun Evrensel İlkeleri",
    },
    {
      src: "/images/stairs.jpg",
      title: "Adliye Mimarisi",
      sub: "Yargılama ve Dava Süreçleri",
    },
    {
      src: "/images/old-books.jpg",
      title: "İçtihat Derlemeleri",
      sub: "Yerleşik Yargı Kararları",
    },
  ];

  return (
    <section className="py-24 sm:py-32 bg-bg overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <SectionBadge number="03">Kurumsal Atmosfer</SectionBadge>
          <h2 className="mt-4 font-serif text-3xl font-normal sm:text-4xl text-fg">
            Hukukun <span className="italic text-accent">Ağırlığı ve Ciddiyeti</span>
          </h2>
          <p className="mt-3 text-sm text-fg-muted">
            Çalışmalarımızda klasik hukuk prensiplerinin vakarı ile çağdaş hukuk tekniğini bir arada uyguluyoruz.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {images.map((item, idx) => (
            <FadeIn key={item.title} delay={idx * 0.1}>
              <div className="group relative aspect-[3/4] overflow-hidden rounded-2xl border border-card-border bg-card shadow-md">
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian/90 via-obsidian/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                  <p className="font-serif text-lg font-normal">{item.title}</p>
                  <p className="text-[11px] text-slate-300 tracking-wider mt-0.5">{item.sub}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================= 5. ANİMASYONLU İMZA VE MESLEK BEYANI ================= */
export function SignatureQuote() {
  return (
    <section className="relative overflow-hidden bg-obsidian py-16 sm:py-24 lg:py-32 text-white">
      <div className="pointer-events-none absolute inset-0 opacity-15">
        <Image
          src="/images/sketch.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover mix-blend-screen invert"
        />
      </div>

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-8">
        <span className="mx-auto block h-12 w-px bg-accent" />
        <h3 className="mt-8 font-serif text-xl font-light italic sm:text-4xl text-slate-100 leading-snug">
          “Hukuki meseleler, yüzeysel yaklaşımlarla değil; her bir belgenin, her bir sürenin ve her bir içtihadın dikkatle tahlil edilmesiyle neticeye kavuşturulur.”
        </h3>

        {/* Vektörel İmza Çizimi */}
        <div className="mx-auto mt-8 max-w-xs">
          <svg viewBox="0 0 300 80" fill="none" className="w-full" aria-label={`Av. ${fullName} İmza`}>
            <motion.path
              d="M20 50 C30 20 45 10 55 18 C65 26 40 60 35 65 C50 45 70 25 80 32 C90 40 75 58 85 58 C95 58 105 38 115 38 C125 38 118 55 128 55 C140 55 150 25 160 25 C170 25 165 52 175 52 C188 52 198 18 208 18 C220 18 210 50 225 50 C240 50 255 28 275 22"
              stroke="#c59b27"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2.8, ease: "easeInOut" }}
            />
            <motion.path
              d="M30 68 C100 64 190 65 270 60"
              stroke="#c59b27"
              strokeWidth="1.2"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 0.8 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 2.5 }}
            />
          </svg>
        </div>

        <p className="mt-4 font-serif text-lg font-medium text-white">Av. {fullName}</p>
        <p className="text-xs uppercase tracking-[0.25em] text-accent mt-1">
          {lawyer.bar}
        </p>
      </div>
    </section>
  );
}

/* ================= 6. SIKÇA SORULAN HUKUKİ SORULAR (AKORDİYON) ================= */
export function LegalFaqAccordion() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: "Avukatlık görüşmesi ve randevu süreci nasıl işler?",
      a: "Büromuzda görüşmeler ön randevu usulüyle kabul edilmektedir. İlk görüşmede uyuşmazlığa dair mevcut belge, sözleşme ve yazışmalar incelenir. İletişim sayfamızdan veya doğrudan telefonla arayarak uygun gün ve saat belirlenebilir.",
    },
    {
      q: "Dava açmadan önce arabuluculuk sürecine başvurmak zorunlu mudur?",
      a: "Kira ilişkilerinden doğan uyuşmazlıklar, işçilik alacakları ve belirli ticari davalarda arabuluculuk kanunen zorunlu dava şartıdır. Arabulucuya başvurulmadan doğrudan dava açılması halinde mahkeme davayı usulden reddeder.",
    },
    {
      q: "Avukatlık vekaletnamesi nasıl ve nereden çıkartılır?",
      a: "Vekaletname, herhangi bir Noterlik kanalıyla düzenlenir. Şirketler için imza sirküleri ve yetki belgesi, şahıslar için kimlik belgesi yeterlidir. Boşanma ve taşınmaz satış vekaletnameleri için iki adet vesikalık fotoğraf gerekmektedir.",
    },
    {
      q: "Avukatlık ücreti ve yargılama giderleri nasıl belirlenir?",
      a: "Avukatlık ücretleri, Türkiye Barolar Birliği ve yerel Baronun belirlediği Asgari Ücret Tarifesi esas alınarak, uyuşmazlığın mahiyeti, dava değeri ve harcanacak mesaiye göre sözleşme ile belirlenir.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-bg border-b border-card-border">
      <div className="mx-auto max-w-4xl px-4 sm:px-8">
        <div className="text-center">
          <SectionBadge number="04">Bilgilendirme</SectionBadge>
          <h2 className="mt-4 font-serif text-3xl font-normal sm:text-4xl text-fg">
            Sıkça Sorulan <span className="italic text-accent">Hukuki Sorular</span>
          </h2>
          <p className="mt-3 text-sm text-fg-muted">
            Avukatlık vekaleti ve adli süreçlere ilişkin temel usul kuralları.
          </p>
        </div>

        <div className="mt-12 space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={faq.q}
              className="rounded-2xl border border-card-border bg-card overflow-hidden transition-colors"
            >
              <button
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="flex w-full items-center justify-between p-6 text-left"
              >
                <span className="font-serif text-lg font-medium text-fg pr-4">{faq.q}</span>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-accent transition-transform duration-300 ${
                    openIdx === idx ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {openIdx === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-sm leading-relaxed text-fg-muted border-t border-line/60 pt-4">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================= 7. HUKUKİ BİLGİLER (MAKALELER) ================= */
export function InsightsSection() {
  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-bg">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-line">
          <div>
            <SectionBadge number="05">Güncel Hukuk</SectionBadge>
            <h2 className="mt-4 font-serif text-3xl font-normal sm:text-4xl lg:text-5xl text-fg">
              Bilgilendirici <span className="italic text-accent">Hukuki Makaleler</span>
            </h2>
          </div>
          <Link
            href="/hukuki-bilgiler"
            className="group inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-accent transition-colors hover:text-fg"
          >
            <span>Tüm Makaleleri Oku</span>
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {articles.map((art, idx) => (
            <FadeIn key={art.slug} delay={idx * 0.1}>
              <Link
                href={`/hukuki-bilgiler/${art.slug}`}
                className="group flex h-full flex-col justify-between rounded-2xl border border-card-border bg-card p-8 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-fg-muted">
                    <span className="font-semibold text-accent">{art.category}</span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {art.readTime}
                    </span>
                  </div>

                  <h3 className="mt-4 font-serif text-xl font-normal text-fg transition-colors group-hover:text-accent">
                    {art.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-fg-muted">
                    {art.excerpt}
                  </p>
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-line pt-4 text-xs">
                  <span className="text-fg-muted">{art.date}</span>
                  <span className="font-semibold text-accent group-hover:underline">
                    Yazıyı Oku &rarr;
                  </span>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================= 8. HIZLI RANDEVU VE İLETİŞİM FORMU ================= */
export function ContactCtaBanner() {
  const [formSent, setFormSent] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState(areas[0]?.title || "");
  const [note, setNote] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSent(true);
  };

  return (
    <section className="relative overflow-hidden border-t border-card-border bg-bg-alt/70 py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
          {/* Sol Kolon: Doğrudan İletişim */}
          <div className="lg:col-span-5">
            <SectionBadge number="06">Randevu Talebi</SectionBadge>
            <h2 className="mt-4 font-serif text-3xl font-normal sm:text-4xl lg:text-5xl text-fg">
              Büromuzla <br />
              <span className="italic text-accent">İletişime Geçin</span>
            </h2>
            <p className="mt-4 text-base text-fg-muted">
              Görüşmeler randevu esasına tabidir. Uyuşmazlığınıza dair belgeler ile birlikte ön görüşme talep edebilirsiniz.
            </p>

            <div className="mt-8 space-y-4">
              <a
                href={lawyer.phoneHref}
                className="flex items-center gap-4 rounded-2xl border border-card-border bg-card p-4 transition-all hover:border-accent hover:shadow-md"
              >
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-accent-subtle text-accent">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-fg-muted">Telefon</p>
                  <p className="font-serif text-lg font-medium text-fg">{lawyer.phoneDisplay}</p>
                </div>
              </a>

              <a
                href={`mailto:${lawyer.email}`}
                className="flex items-center gap-4 rounded-2xl border border-card-border bg-card p-4 transition-all hover:border-accent hover:shadow-md"
              >
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-accent-subtle text-accent">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-fg-muted">E-posta</p>
                  <p className="text-sm font-medium text-fg">{lawyer.email}</p>
                </div>
              </a>

              <div className="flex items-center gap-4 rounded-2xl border border-card-border bg-card p-4">
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-accent-subtle text-accent">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-fg-muted">Büro Adresi</p>
                  <p className="text-xs font-medium text-fg">{lawyer.address}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Sağ Kolon: Hızlı Randevu / Ön Talep Kartı */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-card-border bg-card p-6 sm:p-10 shadow-xl">
              <h3 className="font-serif text-2xl font-normal text-fg">
                Ön Randevu ve Danışmanlık Talebi
              </h3>
              <p className="mt-2 text-xs text-fg-muted">
                İlettiğiniz bilgiler mesleki sır ve KVKK hükümleri çerçevesinde gizli tutulur.
              </p>

              {formSent ? (
                <div className="mt-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 p-8 text-center text-emerald-800 dark:text-emerald-300">
                  <CheckCircle className="mx-auto h-12 w-12 text-emerald-500" />
                  <h4 className="mt-4 font-serif text-xl font-medium">Talebiniz Alındı</h4>
                  <p className="mt-2 text-sm">
                    Görüşme talebiniz tarafımıza iletilmiştir. Çalışma saatlerimiz dahilinde tarafınıza dönüş yapılacaktır.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-8 space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-fg-muted mb-2">
                        Adınız Soyadınız
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Örn: Ahmet Yılmaz"
                        className="w-full rounded-xl border border-card-border bg-bg-alt/50 px-4 py-3 text-sm text-fg placeholder:text-fg-muted/60 focus:border-accent focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-fg-muted mb-2">
                        Telefon Numaranız
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="0 (5XX) XXX XX XX"
                        className="w-full rounded-xl border border-card-border bg-bg-alt/50 px-4 py-3 text-sm text-fg placeholder:text-fg-muted/60 focus:border-accent focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-fg-muted mb-2">
                      Uyuşmazlık Konusu / Alan
                    </label>
                    <select
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="w-full rounded-xl border border-card-border bg-bg-alt/50 px-4 py-3 text-sm text-fg focus:border-accent focus:outline-none"
                    >
                      {areas.map((a) => (
                        <option key={a.slug} value={a.title}>
                          {a.title}
                        </option>
                      ))}
                      <option value="Diğer Hukuki Konu">Diğer Hukuki Konu</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-fg-muted mb-2">
                      Ön Bilgi / Not
                    </label>
                    <textarea
                      rows={3}
                      value={note}
                      onChange={(e) => setNote(e.target.value)}
                      placeholder="Konuyu ve varsa tebligat / yasal süreleri özetleyiniz..."
                      className="w-full rounded-xl border border-card-border bg-bg-alt/50 px-4 py-3 text-sm text-fg placeholder:text-fg-muted/60 focus:border-accent focus:outline-none resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-accent py-4 text-xs font-semibold uppercase tracking-wider text-white shadow-md transition-all hover:bg-bronze-light hover:shadow-lg"
                    >
                      <Send className="h-4 w-4" />
                      <span>Randevu Talebini Gönder</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================= 9. BİZİ TANIYIN (AVUKAT PROFİLİ & MESLEKİ GEÇMİŞ) ================= */
export function AboutLawyerSection() {
  return (
    <section className="border-t border-card-border bg-bg py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          {/* Sol Kolon: Kurumsal Portre Çerçevesi */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="absolute -inset-2.5 rounded-3xl border border-accent/25 [mask-image:linear-gradient(to_bottom,black,transparent)] pointer-events-none" />
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl border border-card-border bg-card shadow-xl">
                <Image
                  src="/images/columns-shadow.jpg"
                  alt={`Av. ${fullName} - ${lawyer.bar}`}
                  fill
                  sizes="(min-width: 1024px) 35vw, 90vw"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian/90 via-obsidian/25 to-transparent pointer-events-none" />
                <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                  <p className="text-xs uppercase tracking-wider text-accent font-semibold">
                    {lawyer.bar}
                  </p>
                  <h3 className="mt-1 font-serif text-2xl font-normal text-white">
                    Av. {fullName}
                  </h3>
                  <p className="text-xs text-slate-300 mt-1">
                    {lawyer.university}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Sağ Kolon: Mesleki Geçmiş ve Anlayış */}
          <div className="lg:col-span-7">
            <SectionBadge number="04">Bizi Tanıyın</SectionBadge>
            <h2 className="mt-4 font-serif text-3xl font-normal sm:text-4xl lg:text-5xl text-fg">
              Mesleki Kıdem, <br />
              <span className="italic text-accent">Hukuki Ciddiyet ve Güven</span>
            </h2>

            <p className="mt-6 text-base leading-relaxed text-fg-muted sm:text-lg">
              Av. {fullName}, {lawyer.university} mezuniyeti sonrasında {lawyer.startYear} yılından itibaren uluslararası tahkim ve sınır ötesi hukuk pratiğinde bağımsız ve kurumsal danışmanlık faaliyetlerini sürdürmektedir.
            </p>

            <p className="mt-4 text-sm leading-relaxed text-fg-muted">
              Uyuşmazlıkların çözümünde; klasik hukuk prensiplerinin vakarı ile çağdaş hukuk tekniğini bir arada uygulayarak, her bir müvekkilin meselesini somut deliller, Yargıtay içtihatları ve güncel mevzuat hükümleri ışığında titizlikle analiz ediyoruz.
            </p>

            {/* Temel Yetkinlik Rozetleri */}
            <div className="mt-8 grid grid-cols-2 gap-4 border-t border-line/60 pt-6 sm:grid-cols-3">
              <div className="rounded-xl border border-card-border bg-card p-4">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-fg-muted">
                  Mezuniyet
                </span>
                <p className="mt-1 font-serif text-sm font-medium text-fg">
                  Marmara Üniversitesi (2017)
                </p>
              </div>

              <div className="rounded-xl border border-card-border bg-card p-4">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-fg-muted">
                  Kayıtlı Baro
                </span>
                <p className="mt-1 font-serif text-sm font-medium text-fg">
                  {lawyer.bar}
                </p>
              </div>

              <div className="rounded-xl border border-card-border bg-card p-4 col-span-2 sm:col-span-1">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-fg-muted">
                  Yabancı Dil
                </span>
                <p className="mt-1 font-serif text-sm font-medium text-fg">
                  Türkçe, İngilizce
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/hakkimda"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white shadow-md transition-all hover:bg-bronze-light hover:shadow-lg"
              >
                <span>Detaylı Özgeçmiş & Hakkımda</span>
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="/iletisim"
                className="inline-flex items-center gap-2 rounded-full border border-card-border bg-card px-6 py-3 text-xs font-semibold uppercase tracking-wider text-fg transition-all hover:border-accent hover:text-accent"
              >
                <span>İletişim & Randevu</span>
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
