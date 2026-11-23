"use client";

import { useId, useState } from "react";
import {
  Calculator,
  CheckCircle2,
  FileSpreadsheet,
  HelpCircle,
  Info,
  Scale,
  Shield,
  Sparkles,
} from "lucide-react";
import { SectionBadge } from "./motion";

export function FeeEstimator() {
  const [caseType, setCaseType] = useState<"nispi" | "maktu">("nispi");
  const [claimAmount, setClaimAmount] = useState<number>(100000);
  const [includeExpert, setIncludeExpert] = useState<boolean>(true);
  const claimInputId = useId();

  // 2026 yaklaşık yargılama gideri hesap parametreleri (Bilgilendirme amaçlı)
  const basvuruHarci = 427.6; // Maktu başvuru harcı
  const vekaletHarci = 60.8;
  const giderAvansi = 1500; // Standart tebligat ve posta avansı
  const bilirkisiUcreti = includeExpert ? 4500 : 0;

  // Nispi harç: Talep tutarının binde 68,31'inin dörtte biri (peşin harç)
  const pesinHarci =
    caseType === "nispi" ? Math.max((claimAmount * 0.06831) / 4, 427.6) : 427.6;

  const toplamMasraf =
    basvuruHarci + vekaletHarci + pesinHarci + giderAvansi + bilirkisiUcreti;

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat("tr-TR", {
      style: "currency",
      currency: "TRY",
      maximumFractionDigits: 0,
    }).format(val);
  };

  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-bg border-b border-card-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <SectionBadge number="03">Şeffaf Bilgilendirme</SectionBadge>
          <h2 className="mt-4 font-serif text-3xl font-normal sm:text-4xl lg:text-5xl text-fg">
            Yargılama Harç ve <span className="italic text-accent">Masraf Rehberi</span>
          </h2>
          <p className="mt-3 text-sm text-fg-muted">
            Dava açılışında adli vezneye yatırılması gereken resmi giderler ve yasal usul kuralları hakkında ön bilgilendirme.
          </p>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-12 lg:items-start">
          {/* Sol Kolon: Hesaplama Parametreleri */}
          <div className="lg:col-span-6 rounded-3xl border border-card-border bg-card p-6 sm:p-8 shadow-lg">
            <div className="flex items-center justify-between border-b border-line pb-4">
              <div className="flex items-center gap-2.5">
                <Calculator className="h-5 w-5 text-accent" />
                <h3 className="font-serif text-xl font-medium text-fg">
                  Masraf Hesaplama Kriterleri
                </h3>
              </div>
              <span className="text-xs text-fg-muted">Adli Vezne Kalemleri</span>
            </div>

            <div className="mt-6 space-y-6">
              {/* Dava Türü Seçimi */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-fg-muted mb-2">
                  Dava / Uyuşmazlık Türü
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setCaseType("nispi")}
                    className={`rounded-2xl p-4 text-left border transition-all ${
                      caseType === "nispi"
                        ? "border-accent bg-accent-subtle/30 ring-1 ring-accent"
                        : "border-card-border bg-bg-alt/40 text-fg-muted hover:border-accent/40"
                    }`}
                  >
                    <p className="font-serif text-sm font-medium text-fg">
                      Nispi Harçlı Davalar
                    </p>
                    <p className="mt-1 text-[11px] text-fg-muted leading-tight">
                      Tazminat, alacak, ticari davalar (Dava değerine bağlı)
                    </p>
                  </button>

                  <button
                    type="button"
                    onClick={() => setCaseType("maktu")}
                    className={`rounded-2xl p-4 text-left border transition-all ${
                      caseType === "maktu"
                        ? "border-accent bg-accent-subtle/30 ring-1 ring-accent"
                        : "border-card-border bg-bg-alt/40 text-fg-muted hover:border-accent/40"
                    }`}
                  >
                    <p className="font-serif text-sm font-medium text-fg">
                      Maktu Harçlı Davalar
                    </p>
                    <p className="mt-1 text-[11px] text-fg-muted leading-tight">
                      Tahliye, boşanma, velayet, işe iade (Sabit harçlı)
                    </p>
                  </button>
                </div>
              </div>

              {/* Dava Değeri (Sadece Nispi İse) */}
              {caseType === "nispi" && (
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label htmlFor={claimInputId} className="text-xs font-semibold uppercase tracking-wider text-fg-muted">
                      Uyuşmazlık / Talep Tutarı (TL)
                    </label>
                    <span className="font-mono text-sm font-bold text-accent">
                      {formatCurrency(claimAmount)}
                    </span>
                  </div>
                  <input
                    id={claimInputId}
                    type="range"
                    min={10000}
                    max={2000000}
                    step={10000}
                    value={claimAmount}
                    onChange={(e) => setClaimAmount(Number(e.target.value))}
                    className="w-full accent-[#c59b27] cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-fg-muted mt-1 font-mono">
                    <span>10.000 ₺</span>
                    <span>500.000 ₺</span>
                    <span>1.000.000 ₺</span>
                    <span>2.000.000 ₺+</span>
                  </div>
                </div>
              )}

              {/* Bilirkişi İhtiyacı Seçimi */}
              <div className="flex items-center justify-between rounded-xl bg-bg-alt/50 p-4 border border-card-border">
                <div>
                  <p className="text-xs font-semibold text-fg">
                    Bilirkişi İncelemesi Öngörülüyor mu?
                  </p>
                  <p className="text-[11px] text-fg-muted mt-0.5">
                    Hesap bilirkişisi, teknik veya adli tıp raporu masrafı
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked={includeExpert}
                  onChange={(e) => setIncludeExpert(e.target.checked)}
                  className="h-5 w-5 rounded border-card-border text-accent focus:ring-accent accent-[#c59b27]"
                />
              </div>

              {/* HMK İade Bilgilendirmesi */}
              <div className="rounded-2xl bg-accent-subtle/20 p-4 border border-accent/20 text-xs text-fg-muted leading-relaxed">
                <div className="flex items-center gap-2 font-semibold text-accent mb-1">
                  <Shield className="h-4 w-4 shrink-0" />
                  <span>HMK m. 326 Hükmü Güvencesi</span>
                </div>
                Dava açılışında davacı tarafından yatırılan peşin harç ve gider avansları,
                davanın lehe sonuçlanması durumunda <strong>mahkeme ilamıyla birlikte haksız çıkan karşı tarafa yükletilir</strong> ve tahsil edilir.
              </div>
            </div>
          </div>

          {/* Sağ Kolon: Hesap Özeti & Masraf Dağılımı */}
          <div className="lg:col-span-6 rounded-3xl border border-card-border bg-card p-6 sm:p-8 shadow-lg">
            <div className="flex items-center justify-between border-b border-line pb-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-fg-muted">
                Tahmini İlk Masraf Dağılımı
              </span>
              <span className="rounded-full bg-accent-subtle px-3 py-1 text-[11px] font-semibold text-accent">
                {caseType === "nispi" ? "Nispi Esaslı" : "Maktu Esaslı"}
              </span>
            </div>

            <div className="mt-6 space-y-3.5">
              <div className="flex items-center justify-between text-xs py-2 border-b border-line/60">
                <span className="text-fg-muted">Resmi Başvurma Harcı</span>
                <span className="font-mono font-medium text-fg">{formatCurrency(basvuruHarci)}</span>
              </div>

              <div className="flex items-center justify-between text-xs py-2 border-b border-line/60">
                <span className="text-fg-muted">Vekalet Suret Harcı ve Baro Pulu</span>
                <span className="font-mono font-medium text-fg">{formatCurrency(vekaletHarci)}</span>
              </div>

              <div className="flex items-center justify-between text-xs py-2 border-b border-line/60">
                <div>
                  <span className="text-fg-muted block">Peşin Karar ve İlam Harcı</span>
                  <span className="text-[10px] text-fg-muted/60">
                    {caseType === "nispi" ? "Dava değerinin 1/4 nispi peşin harcı" : "Maktu karar harcı"}
                  </span>
                </div>
                <span className="font-mono font-medium text-fg">{formatCurrency(pesinHarci)}</span>
              </div>

              <div className="flex items-center justify-between text-xs py-2 border-b border-line/60">
                <div>
                  <span className="text-fg-muted block">Gider Avansı (Tebligat & Müzekkere)</span>
                  <span className="text-[10px] text-fg-muted/60">Kullanılmayan kısım karar sonrası iade edilir</span>
                </div>
                <span className="font-mono font-medium text-fg">{formatCurrency(giderAvansi)}</span>
              </div>

              {includeExpert && (
                <div className="flex items-center justify-between text-xs py-2 border-b border-line/60">
                  <span className="text-fg-muted">Tahmini Bilirkişi Ücret Avansı</span>
                  <span className="font-mono font-medium text-fg">{formatCurrency(bilirkisiUcreti)}</span>
                </div>
              )}

              {/* Toplam */}
              <div className="mt-6 rounded-2xl bg-bg-alt/70 p-5 border border-card-border flex items-center justify-between">
                <div>
                  <span className="text-xs uppercase tracking-wider text-fg-muted font-semibold block">
                    Tahmini Açılış Masrafı
                  </span>
                  <span className="text-[11px] text-fg-muted">
                    Vezneye peşin yatırılan resmi gider
                  </span>
                </div>
                <div className="text-right">
                  <span className="font-serif text-2xl font-bold text-accent">
                    {formatCurrency(toplamMasraf)}
                  </span>
                </div>
              </div>
            </div>

            {/* Yasal Not */}
            <p className="mt-6 text-[11px] text-fg-muted leading-relaxed">
              * Bu modüldeki hesaplamalar Harçlar Kanunu ve HMK Gider Avansı Tarifesi esas alınarak
              bilgilendirme amacıyla yapılmıştır. Avukatlık vekalet ücreti TBB Asgari Ücret Tarifesi
              altında kalmamak kaydıyla ayrıca belirlenir.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
