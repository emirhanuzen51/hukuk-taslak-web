"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Award,
  Briefcase,
  Calendar,
  CheckCircle2,
  Clock,
  FileText,
  MapPin,
  Phone,
  Scale,
  Search,
  Shield,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { fullName, lawyer } from "@/lib/lawyer";
import { areas } from "@/lib/areas";
import { VCardButton } from "./chrome";
import { easeCustom } from "./motion";
import { useModals } from "./modal-context";

export function Hero() {
  const [currentTime, setCurrentTime] = useState("");
  const { openAppointment, openCommandPalette } = useModals();

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString("tr-TR", { hour: "2-digit", minute: "2-digit" })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden border-b border-card-border bg-gradient-to-b from-bg-alt/80 via-bg to-bg pt-10 pb-14 sm:pt-20 sm:pb-20 lg:pt-28 lg:pb-28">
      {/* İnce zarif kurumsal arka plan dokusu */}
      <div className="pointer-events-none absolute -top-40 right-1/4 h-[550px] w-[550px] rounded-full bg-accent/8 blur-[140px]" />
      <div className="pointer-events-none absolute -bottom-20 left-10 h-[450px] w-[450px] rounded-full bg-accent/5 blur-[120px]" />

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
          {/* Sol Kolon: Kurumsal Hukuk Bürosu Tanıtımı */}
          <div className="lg:col-span-7 xl:col-span-7">
            {/* Kurumsal Rozet */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: easeCustom }}
              className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full border border-card-border bg-card/90 px-3.5 py-1.5 shadow-xs backdrop-blur-md"
            >
              <Scale className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-accent" />
              <span className="text-[11px] sm:text-xs font-semibold tracking-wider text-fg">
                {lawyer.bar}
              </span>
              <span className="text-xs text-fg-muted">·</span>
              <span className="text-[11px] sm:text-xs text-fg-muted">Zürih & Londra</span>
              <span className="text-xs text-fg-muted">·</span>
              <span className="text-[11px] sm:text-xs text-fg-muted">Hukuk & Danışmanlık</span>
            </motion.div>

            {/* Büyük Tipografik Kurumsal Başlık */}
            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: easeCustom }}
              className="mt-5 font-serif text-[clamp(2.1rem,6vw,4.4rem)] font-normal tracking-tight text-fg leading-[1.14]"
            >
              Hukukun Üstünlüğü, <br />
              <span className="italic font-medium text-accent">Stratejik Temsil</span> ve <br />
              İlkeli Avukatlık.
            </motion.h1>

            {/* Açıklama Metni */}
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: easeCustom }}
              className="mt-5 max-w-2xl text-sm sm:text-base leading-relaxed text-fg-muted sm:leading-relaxed"
            >
              Bireysel ve kurumsal müvekkillerimize Ceza Hukuku, Gayrimenkul & Kira, İş Hukuku, Ticaret ve Aile Hukuku alanlarında derinlemesine mevzuat analizi, şeffaf dava takibi ve sonuç odaklı hukuki danışmanlık hizmeti sunuyoruz.
            </motion.p>

            {/* Hızlı İnteraktif Arama Kutusu */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25, ease: easeCustom }}
              onClick={openCommandPalette}
              className="mt-6 flex max-w-xl cursor-pointer items-center justify-between rounded-2xl border border-card-border bg-card/85 p-2.5 pl-3.5 sm:p-3 sm:pl-4 shadow-sm backdrop-blur-md transition-all hover:border-accent hover:shadow-md group"
            >
              <div className="flex items-center gap-2.5 text-xs text-fg-muted truncate pr-2">
                <Search className="h-4 w-4 text-accent shrink-0 transition-transform group-hover:scale-110" />
                <span className="truncate">Ceza, kira tahliyesi, işe iade, boşanma ara...</span>
              </div>
              <span className="shrink-0 rounded-xl bg-accent-subtle px-2.5 py-1 text-[10px] font-mono font-semibold text-accent">
                ARA
              </span>
            </motion.div>

            {/* Buton Grubu */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: easeCustom }}
              className="mt-7 flex flex-wrap items-center gap-3.5"
            >
              <button
                onClick={() => openAppointment()}
                className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-white shadow-md transition-all duration-300 hover:bg-bronze-light hover:shadow-lg hover:-translate-y-0.5"
              >
                <Calendar className="h-4 w-4" />
                <span>Ön Görüşme Randevusu Al</span>
              </button>

              <a
                href="#calisma-alanlari"
                className="inline-flex items-center gap-2 rounded-full border border-card-border bg-card/80 px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-fg transition-all duration-300 hover:border-accent hover:text-accent hover:-translate-y-0.5"
              >
                <span>Çalışma Alanları</span>
                <ArrowDown className="h-3.5 w-3.5" />
              </a>

              <a
                href={lawyer.phoneHref}
                className="inline-flex items-center gap-2 rounded-full border border-card-border bg-card/60 px-5 py-3.5 text-xs font-medium tracking-wider text-fg transition-all duration-300 hover:border-accent hover:text-accent"
              >
                <Phone className="h-3.5 w-3.5 text-accent" />
                <span>{lawyer.phoneDisplay}</span>
              </a>
            </motion.div>

            {/* Hızlı Çalışma Alanları Etiketleri (İlk girişte hemen görünür) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-8 flex flex-wrap items-center gap-2 pt-6 border-t border-line/60"
            >
              <span className="text-[11px] font-semibold uppercase tracking-wider text-fg-muted mr-1">
                Başlıca Alanlar:
              </span>
              {areas.slice(0, 5).map((area) => (
                <Link
                  key={area.slug}
                  href={`/calisma-alanlari/${area.slug}`}
                  className="rounded-lg border border-card-border bg-card/60 px-2.5 py-1 text-xs text-fg-muted transition-colors hover:border-accent hover:text-accent"
                >
                  {area.title}
                </Link>
              ))}
            </motion.div>
          </div>

          {/* Sağ Kolon: Kurumsal Büro Bilgi Kartı (Resim Yok - Ofis / Danışmanlık Bilgileri) */}
          <div className="lg:col-span-5 xl:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25, ease: easeCustom }}
              className="rounded-3xl border border-card-border bg-card/90 p-7 sm:p-9 shadow-xl backdrop-blur-md"
            >
              {/* Kart Başlığı */}
              <div className="flex items-center justify-between border-b border-card-border pb-5">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent">
                    Büro Bilgilendirme
                  </p>
                  <h3 className="mt-1 font-serif text-2xl font-normal text-fg">
                    Av. {fullName} Hukuk Bürosu
                  </h3>
                </div>
                <div className="grid h-10 w-10 place-items-center rounded-2xl bg-accent-subtle text-accent">
                  <ShieldCheck className="h-5 w-5" />
                </div>
              </div>

              {/* Kurumsal Bilgi Maddeleri */}
              <div className="mt-6 space-y-4">
                <div className="flex items-start gap-3.5">
                  <div className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-bg text-accent border border-card-border">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-fg">Büro Adresi</p>
                    <p className="mt-0.5 text-xs text-fg-muted leading-relaxed">
                      {lawyer.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-bg text-accent border border-card-border">
                    <Phone className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-fg">Doğrudan İletişim</p>
                    <a
                      href={lawyer.phoneHref}
                      className="mt-0.5 inline-block text-xs font-medium text-accent hover:underline"
                    >
                      {lawyer.phoneDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-bg text-accent border border-card-border">
                    <Clock className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <p className="text-xs font-semibold text-fg">Görüşme Saatleri</p>
                      {currentTime && (
                        <span className="font-mono text-[10px] text-accent font-medium">
                          {currentTime}
                        </span>
                      )}
                    </div>
                    <p className="mt-0.5 text-xs text-fg-muted">{lawyer.hours}</p>
                  </div>
                </div>
              </div>

              {/* Çalışma Prensipleri Kontrol Listesi */}
              <div className="mt-7 rounded-2xl bg-bg-alt/70 p-4 border border-card-border space-y-2.5">
                <div className="flex items-center gap-2.5 text-xs text-fg">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-accent" />
                  <span>Avukatlık Meslek İlkeleri ve Sır Saklama</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-fg">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-accent" />
                  <span>Düzenli UYAP ve Dava Takibi Bilgilendirmesi</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-fg">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-accent" />
                  <span>TBB Reklam Yasağına Tam Uyumluluk</span>
                </div>
              </div>

              {/* Hızlı Eylemler */}
              <div className="mt-6 flex items-center justify-between gap-3">
                <VCardButton />
                <Link
                  href="/iletisim"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent hover:underline"
                >
                  <span>Yol Tarifi & Harita</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
