"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  Calendar,
  Clock,
  Download,
  Mail,
  MapPin,
  Menu,
  Moon,
  Phone,
  Search,
  Shield,
  Sun,
  X,
} from "lucide-react";
import { fullName, lawyer, nav, slugName } from "@/lib/lawyer";
import { Monogram } from "./icons";
import { useModals } from "./modal-context";

/* ---------------- Logo & Marka ---------------- */
export function Brand({ light = false }: { light?: boolean }) {
  return (
    <div className="flex items-center gap-2.5 sm:gap-3.5 group">
      <Monogram className="h-9 w-9 sm:h-10 sm:w-10 shrink-0 transition-transform duration-300 group-hover:scale-105" light={light} />
      <div className="leading-tight">
        <span className={`block font-serif text-[15px] sm:text-lg font-medium tracking-tight ${light ? "text-white" : "text-fg"}`}>
          Av. {fullName}
        </span>
        <span className="block text-[9px] sm:text-[10px] uppercase font-semibold tracking-[0.18em] text-accent">
          {lawyer.bar}
        </span>
      </div>
    </div>
  );
}

/* ---------------- Tema Değiştirici ---------------- */
export function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setDark(document.documentElement.dataset.theme === "dark");
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.dataset.theme = next ? "dark" : "light";
    try {
      localStorage.setItem("avukat-theme", next ? "dark" : "light");
    } catch {}
  };

  return (
    <button
      onClick={toggle}
      aria-label={dark ? "Açık temaya geç" : "Koyu temaya geç"}
      className="relative grid h-9 w-9 place-items-center rounded-full border border-card-border bg-card/70 text-fg transition-all duration-300 hover:border-accent hover:text-accent"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={dark ? "dark" : "light"}
          initial={{ rotate: -90, opacity: 0, scale: 0.6 }}
          animate={{ rotate: 0, opacity: 1, scale: 1 }}
          exit={{ rotate: 90, opacity: 0, scale: 0.6 }}
          transition={{ duration: 0.2 }}
        >
          {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}

/* ---------------- vCard Kartvizit Butonu ---------------- */
export function VCardButton({ variant = "default" }: { variant?: "default" | "outline" | "white" }) {
  const download = () => {
    const vcard = [
      "BEGIN:VCARD",
      "VERSION:3.0",
      `N:${lawyer.lastName};${lawyer.firstName};;Av.;`,
      `FN:Av. ${fullName}`,
      `TITLE:${lawyer.title} · ${lawyer.bar}`,
      `TEL;TYPE=WORK,VOICE:${lawyer.phoneHref.replace("tel:", "")}`,
      `TEL;TYPE=CELL,VOICE:${lawyer.mobileHref.replace("tel:", "")}`,
      `EMAIL;TYPE=WORK:${lawyer.email}`,
      `ADR;TYPE=WORK:;;${lawyer.address};${lawyer.city};;;Türkiye`,
      `URL:${lawyer.site}`,
      "END:VCARD",
    ].join("\r\n");

    const blob = new Blob([vcard], { type: "text/vcard;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `av-${slugName}.vcf`;
    link.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  };

  let styles = "border border-line bg-card/80 text-fg hover:border-accent hover:text-accent";
  if (variant === "outline") {
    styles = "border border-accent text-accent hover:bg-accent hover:text-white";
  } else if (variant === "white") {
    styles = "border border-white/20 bg-white/10 text-white hover:bg-white hover:text-obsidian";
  }

  return (
    <button
      onClick={download}
      className={`group inline-flex items-center gap-2.5 rounded-full px-5 py-2.5 text-xs font-medium uppercase tracking-[0.14em] transition-all duration-300 ${styles}`}
    >
      <Download className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-y-0.5" />
      <span>Kartviziti Kaydet</span>
    </button>
  );
}

/* ---------------- Üst Menü / Navbar ---------------- */
export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { openAppointment, openCommandPalette } = useModals();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "border-b border-card-border bg-bg/85 py-3 shadow-xs backdrop-blur-xl"
            : "bg-transparent py-5"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-8">
          <Link href="/" aria-label="Ana sayfa">
            <Brand />
          </Link>

          {/* Masaüstü Navigasyon */}
          <nav className="hidden items-center gap-1 rounded-full border border-card-border bg-card/60 p-1.5 backdrop-blur-md lg:flex">
            {nav.map((item) => {
              const active = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative rounded-full px-4 py-2 text-xs font-medium tracking-[0.05em] transition-colors duration-200 ${
                    active ? "text-fg" : "text-fg-muted hover:text-fg"
                  }`}
                >
                  {active && (
                    <motion.div
                      layoutId="active-pill"
                      className="absolute inset-0 rounded-full bg-accent-subtle border border-accent/20"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Sağ Eylemler: Arama, Randevu, Telefon & Tema */}
          <div className="flex items-center gap-1.5 sm:gap-2.5">
            {/* Hızlı Arama Butonu */}
            <button
              onClick={openCommandPalette}
              aria-label="Arama yap"
              className="inline-flex items-center gap-2 rounded-full border border-card-border bg-card/70 px-3 py-1.5 text-xs text-fg-muted hover:border-accent hover:text-fg transition-all"
            >
              <Search className="h-3.5 w-3.5 text-accent" />
              <span className="hidden sm:inline">Ara...</span>
              <kbd className="hidden md:inline-flex rounded border border-card-border bg-bg-alt px-1.5 py-0.5 text-[9px] font-mono text-fg-muted">
                ⌘K
              </kbd>
            </button>

            {/* Randevu Butonu */}
            <button
              onClick={() => openAppointment()}
              className="hidden md:inline-flex items-center gap-1.5 rounded-full bg-accent px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white shadow-xs hover:bg-bronze-light transition-all"
            >
              <Calendar className="h-3.5 w-3.5" />
              <span>Randevu Al</span>
            </button>

            <a
              href={lawyer.phoneHref}
              className="hidden items-center gap-2 rounded-full border border-accent/40 bg-accent-subtle px-3.5 py-2 text-xs font-semibold tracking-wider text-accent transition-all duration-300 hover:bg-accent hover:text-white xl:inline-flex"
            >
              <Phone className="h-3.5 w-3.5" />
              <span>{lawyer.phoneDisplay}</span>
            </a>

            <ThemeToggle />

            {/* Mobil Menü Butonu */}
            <button
              onClick={() => setMobileOpen(true)}
              aria-label="Menüyü aç"
              className="grid h-9 w-9 place-items-center rounded-full border border-card-border bg-card/70 text-fg lg:hidden hover:border-accent"
            >
              <Menu className="h-4 w-4" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobil Çekmece Menü */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex flex-col bg-bg/95 p-6 backdrop-blur-2xl lg:hidden"
          >
            <div className="flex items-center justify-between border-b border-line pb-4">
              <Brand />
              <button
                onClick={() => setMobileOpen(false)}
                aria-label="Menüyü kapat"
                className="grid h-10 w-10 place-items-center rounded-full border border-line text-fg"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Mobil Arama Butonu */}
            <div className="mt-5">
              <button
                onClick={() => {
                  setMobileOpen(false);
                  openCommandPalette();
                }}
                className="flex w-full items-center justify-between rounded-xl border border-card-border bg-card p-3 text-xs text-fg-muted"
              >
                <span className="flex items-center gap-2">
                  <Search className="h-4 w-4 text-accent" />
                  <span>Dava, makale veya konu arayın...</span>
                </span>
                <span className="font-mono text-[10px] text-accent font-semibold">ARA</span>
              </button>
            </div>

            <nav className="mt-5 flex flex-col gap-2">
              <Link
                href="/"
                className={`rounded-xl px-4 py-3 text-lg font-medium transition-colors ${
                  pathname === "/" ? "bg-accent-subtle text-accent font-semibold" : "text-fg hover:bg-card"
                }`}
              >
                Ana Sayfa
              </Link>
              {nav.map((item) => {
                const active = pathname.startsWith(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`rounded-xl px-4 py-3 text-lg font-medium transition-colors ${
                      active ? "bg-accent-subtle text-accent font-semibold" : "text-fg hover:bg-card"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            <div className="mt-auto border-t border-line pt-6">
              <button
                onClick={() => {
                  setMobileOpen(false);
                  openAppointment();
                }}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-accent py-3.5 text-xs font-semibold uppercase tracking-wider text-white shadow-md mb-4"
              >
                <Calendar className="h-4 w-4" />
                <span>Hukuki Randevu Talep Et</span>
              </button>

              <p className="text-xs uppercase tracking-[0.2em] text-fg-muted">Doğrudan İletişim</p>
              <a href={lawyer.phoneHref} className="mt-2 block font-serif text-xl font-medium text-fg">
                {lawyer.phoneDisplay}
              </a>
              <a href={`mailto:${lawyer.email}`} className="mt-1 block text-sm text-fg-muted">
                {lawyer.email}
              </a>
              <div className="mt-5">
                <VCardButton />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

/* ---------------- Alt Bilgi / Footer ---------------- */
export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-card-border bg-obsidian text-slate-300 pt-16 pb-28 sm:pt-20 sm:pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-12 pb-16 border-b border-white/10">
          {/* Sol Kolon: Kurumsal Kimlik & Baro Bilgisi */}
          <div className="lg:col-span-5">
            <Brand light />
            <p className="mt-6 max-w-md text-sm leading-relaxed text-slate-400">
              {lawyer.shortBio}
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-slate-300">
                <Shield className="h-3.5 w-3.5 text-accent" />
                {lawyer.bar}
              </span>
              <VCardButton variant="white" />
            </div>
          </div>

          {/* Orta Kolon: Sayfalar */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
              Hızlı Erişim
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Ana Sayfa
                </Link>
              </li>
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Sağ Kolon: İletişim Bilgileri */}
          <div className="lg:col-span-4">
            <h4 className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
              İletişim & Konum
            </h4>
            <div className="mt-4 space-y-3 text-sm text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 shrink-0 text-accent mt-0.5" />
                <span>{lawyer.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 shrink-0 text-accent" />
                <a href={lawyer.phoneHref} className="hover:text-white transition-colors">
                  {lawyer.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 shrink-0 text-accent" />
                <a href={`mailto:${lawyer.email}`} className="hover:text-white transition-colors">
                  {lawyer.email}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="h-4 w-4 shrink-0 text-accent" />
                <span>{lawyer.hours}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Yasal Uyarı & TBB Bildirimi */}
        <div className="mt-8 flex flex-col gap-4 text-xs text-slate-500 lg:flex-row lg:items-center lg:justify-between">
          <p className="max-w-2xl leading-relaxed">
            Bu internet sitesinde yer alan tüm bilgiler, Türkiye Barolar Birliği Meslek Kuralları ve Reklam Yasağı Yönetmeliği&apos;ne uygun olarak yalnızca bilgilendirme amacıyla hazırlanmıştır. Hukuki danışmanlık veya vekalet ilişkisi teşkil etmez.
          </p>
          <div className="flex items-center gap-4 shrink-0">
            <Link href="/kvkk" className="hover:text-slate-300 transition-colors">
              KVKK Aydınlatma
            </Link>
            <span>·</span>
            <Link href="/cerez-politikasi" className="hover:text-slate-300 transition-colors">
              Çerez Politikası
            </Link>
            <span>·</span>
            <span>© {new Date().getFullYear()}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}


