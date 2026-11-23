"use client";

import { useState } from "react";
import {
  AlertCircle,
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Gavel,
  Phone,
  PhoneCall,
  Shield,
  ShieldAlert,
  X,
} from "lucide-react";
import { lawyer } from "@/lib/lawyer";

export function EmergencyLegalBanner() {
  const [modalOpen, setModalOpen] = useState(false);

  const rights = [
    {
      title: "Susma Hakkı (CMK m.147)",
      desc: "Yüklenen suç hakkında açıklamada bulunmama hakkınız yasal olarak mevcuttur. Susma hakkının kullanılması aleyhe bir delil veya suç ikrarı olarak değerlendirilemez.",
    },
    {
      title: "Avukat (Müdafi) Tayini ve Gizli Görüşme (CMK m.154)",
      desc: "İfade öncesinde ve ifade anında avukatınızın hazır bulunmasını talep etme ve avukatınızla başkalarının duyamayacağı bir ortamda serbestçe görüşme hakkınız vardır.",
    },
    {
      title: "Yakınlarına Haber Verme Hakkı (CMK m.95)",
      desc: "Gözaltına alındığınız veya yakalandığınız bilgisi, gecikmeksizin belirleyeceğiniz bir yakınınıza kolluk görevlilerince bildirilmek zorundadır.",
    },
    {
      title: "İfade Tutanağını Okuma ve İtiraz Hakkı (CMK m.148)",
      desc: "Tutanak kelimesi kelimesine okunmadan veya gerçeğe aykırı hususlar düzeltilmeden kesinlikle imzalanmamalıdır. İmzalamama veya şerh düşme hakkınız saklıdır.",
    },
  ];

  return (
    <>
      {/* İnce ve Dikkat Çekici Acil Durum Şeridi */}
      <section className="border-b border-card-border bg-gradient-to-r from-red-950/20 via-card to-amber-950/20 py-3 sm:py-4">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 sm:flex-row sm:px-8">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-red-500/10 text-red-500 border border-red-500/20">
              <ShieldAlert className="h-4 w-4" />
            </div>
            <div>
              <span className="text-xs font-semibold text-fg">
                Acil Gözaltı, Arama veya Karakol / Savcılık İfadesi mi Söz Konusu?
              </span>
              <span className="hidden md:inline text-xs text-fg-muted ml-2">
                — Yasal haklarınızı öğrenin ve ifadeye avukatsız girmeyiniz.
              </span>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 shrink-0">
            <button
              onClick={() => setModalOpen(true)}
              className="rounded-full border border-card-border bg-card px-3.5 py-1.5 text-xs font-semibold text-fg hover:border-accent hover:text-accent transition-colors"
            >
              Gözaltı Hakları Rehberi
            </button>

            <a
              href={lawyer.phoneHref}
              className="inline-flex items-center gap-1.5 rounded-full bg-red-600 hover:bg-red-700 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white shadow-xs transition-all"
            >
              <PhoneCall className="h-3.5 w-3.5" />
              <span>Acil İletişim</span>
            </a>
          </div>
        </div>
      </section>

      {/* Haklar Bilgilendirme Modalı */}
      {modalOpen && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          <div
            onClick={() => setModalOpen(false)}
            className="fixed inset-0 bg-obsidian/75 backdrop-blur-md"
          />

          <div className="relative z-10 w-full max-w-2xl rounded-3xl border border-card-border bg-card p-6 sm:p-8 shadow-2xl my-8">
            <div className="flex items-center justify-between border-b border-line pb-4">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-red-500/10 text-red-500">
                  <ShieldAlert className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-normal text-fg">
                    Kolluk ve Savcılıkta Anayasal Haklarınız
                  </h3>
                  <p className="text-xs text-fg-muted">
                    Ceza Muhakemesi Kanunu (CMK) m. 147 Güvenceleri
                  </p>
                </div>
              </div>

              <button
                onClick={() => setModalOpen(false)}
                className="grid h-8 w-8 place-items-center rounded-full text-fg-muted hover:text-fg"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="mt-6 space-y-4 max-h-[60vh] overflow-y-auto pr-1">
              {rights.map((r, i) => (
                <div
                  key={r.title}
                  className="rounded-2xl border border-card-border bg-bg-alt/50 p-4"
                >
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold text-accent">0{i + 1}</span>
                    <h4 className="font-serif text-base font-medium text-fg">{r.title}</h4>
                  </div>
                  <p className="mt-2 text-xs leading-relaxed text-fg-muted pl-6">{r.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-3 pt-5 border-t border-line">
              <p className="text-xs text-fg-muted">
                İfade öncesinde dosya ve delil incelemesi için avukat talep ediniz.
              </p>
              <a
                href={lawyer.phoneHref}
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-accent px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-white shadow-md hover:bg-bronze-light transition-all"
              >
                <Phone className="h-3.5 w-3.5" />
                <span>{lawyer.phoneDisplay}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
