"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  AlertTriangle,
  ArrowLeft,
  ArrowRight,
  Briefcase,
  Building,
  CheckCircle2,
  Clock,
  FileCheck2,
  FileText,
  Gavel,
  HelpCircle,
  Home,
  MessageSquare,
  Phone,
  Scale,
  Send,
  Shield,
  ShieldAlert,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";
import { fullName, lawyer } from "@/lib/lawyer";
import { SectionBadge } from "./motion";

interface WizardData {
  area: string;
  stage: string;
  urgency: "normal" | "urgent" | "critical";
  hasNotice: boolean;
  name: string;
  phone: string;
  city: string;
  note: string;
  consent: boolean;
}

export function CaseAssessmentWizard() {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [data, setData] = useState<WizardData>({
    area: "",
    stage: "",
    urgency: "normal",
    hasNotice: false,
    name: "",
    phone: "",
    city: "Zürih / Londra / Uluslararası",
    note: "",
    consent: false,
  });

  const practiceOptions = [
    {
      id: "ceza",
      title: "Ceza & Soruşturma",
      desc: "Ağır ceza, asliye ceza, savcılık soruşturması, gözaltı ve ifade",
      icon: Gavel,
      color: "border-red-500/30 hover:border-red-500/60",
    },
    {
      id: "kira",
      title: "Gayrimenkul & Kira",
      desc: "Tahliye davaları, kira tespit, tapu iptal tescil, kamulaştırma",
      icon: Home,
      color: "border-amber-500/30 hover:border-amber-500/60",
    },
    {
      id: "is",
      title: "İş & Tazminat Hukuku",
      desc: "İşe iade, kıdem ve ihbar tazminatı, fazla mesai, iş kazası",
      icon: Briefcase,
      color: "border-blue-500/30 hover:border-blue-500/60",
    },
    {
      id: "aile",
      title: "Aile & Boşanma",
      desc: "Anlaşmalı/çekişmeli boşanma, velayet, nafaka ve mal paylaşımı",
      icon: Users,
      color: "border-purple-500/30 hover:border-purple-500/60",
    },
    {
      id: "ticaret",
      title: "Ticaret & Şirketler",
      desc: "Ticari alacaklar, sözleşme hazırlığı, şirket danışmanlığı",
      icon: Building,
      color: "border-emerald-500/30 hover:border-emerald-500/60",
    },
    {
      id: "icra",
      title: "İcra & Alacak Takibi",
      desc: "İlamsız icra takipleri, itirazın iptali, menfi tespit, haciz",
      icon: Scale,
      color: "border-indigo-500/30 hover:border-indigo-500/60",
    },
  ];

  const stageOptions = [
    {
      id: "tebligat",
      title: "Resmi Tebligat Geldi (Mahkeme / İcra / Savcılık)",
      desc: "Zarf elime ulaştı, yasal cevap veya itiraz sürem işliyor.",
      urgency: "urgent" as const,
      hasNotice: true,
      badge: "Süreli & Öncelikli",
    },
    {
      id: "dava-acma",
      title: "Dava Açmak / Hakkımı Aramak İstiyorum",
      desc: "Uyuşmazlık henüz mahkemeye taşınmadı, yasal yolları başlatmak istiyorum.",
      urgency: "normal" as const,
      hasNotice: false,
      badge: "Stratejik Hazırlık",
    },
    {
      id: "arabuluculuk",
      title: "Zorunlu Arabuluculuk Süreci Başladı / Başvurulacak",
      desc: "İş, kira veya ticari uyuşmazlık için arabulucu toplantısı yapılacak.",
      urgency: "normal" as const,
      hasNotice: false,
      badge: "Dava Şartı",
    },
    {
      id: "acil-ifade",
      title: "Acil İfade / Gözaltı / Karakol Süreci",
      desc: "Kolluk veya savcılıkta ifade alınacak, derhal müdafi tayini gerekli.",
      urgency: "critical" as const,
      hasNotice: false,
      badge: "Kritik 7/24",
    },
    {
      id: "danismanlik",
      title: "Sözleşme İnceleme / Önleyici Hukuki Danışmanlık",
      desc: "İmza öncesi sözleşme analizi veya ihtilaf doğmadan önlem alma.",
      urgency: "normal" as const,
      hasNotice: false,
      badge: "Önleyici Hukuk",
    },
  ];

  const handleSelectArea = (title: string) => {
    setData((prev) => ({ ...prev, area: title }));
    setStep(2);
  };

  const handleSelectStage = (opt: (typeof stageOptions)[0]) => {
    setData((prev) => ({
      ...prev,
      stage: opt.title,
      urgency: opt.urgency,
      hasNotice: opt.hasNotice,
    }));
    setStep(3);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!data.consent) return;
    setStep(4);
  };

  const reset = () => {
    setData({
      area: "",
      stage: "",
      urgency: "normal",
      hasNotice: false,
      name: "",
      phone: "",
      city: "Zürih / Londra / Uluslararası",
      note: "",
      consent: false,
    });
    setStep(1);
  };

  return (
    <section className="relative overflow-hidden py-16 sm:py-24 lg:py-32 bg-bg-alt/40 border-y border-card-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        {/* Başlık Alanı */}
        <div className="text-center max-w-2xl mx-auto">
          <SectionBadge number="02">İnteraktif Değerlendirme</SectionBadge>
          <h2 className="mt-4 font-serif text-3xl font-normal sm:text-4xl lg:text-5xl text-fg">
            Hukuki Durum <span className="italic text-accent">Ön Değerlendirme Sihirbazı</span>
          </h2>
          <p className="mt-3 text-sm text-fg-muted">
            Uyuşmazlığınızın konusunu ve aşamasını seçerek yasal sürelere uygun,
            yapılandırılmış bir ön inceleme randevusu planlayın.
          </p>
        </div>

        {/* Adım İlerleme Göstergesi */}
        <div className="mx-auto mt-12 max-w-xl">
          <div className="flex items-center justify-between">
            {[
              { num: 1, label: "Hukuk Dalı" },
              { num: 2, label: "Süreç Aşaması" },
              { num: 3, label: "Randevu & Bilgi" },
              { num: 4, label: "Sonuç" },
            ].map((s, idx) => (
              <div key={s.num} className="flex items-center gap-2">
                <div
                  className={`grid h-8 w-8 place-items-center rounded-full text-xs font-mono font-bold transition-all ${
                    step >= s.num
                      ? "bg-accent text-white shadow-xs"
                      : "bg-card border border-card-border text-fg-muted"
                  }`}
                >
                  {s.num}
                </div>
                <span
                  className={`hidden sm:inline-block text-xs font-medium ${
                    step >= s.num ? "text-fg" : "text-fg-muted"
                  }`}
                >
                  {s.label}
                </span>
                {idx < 3 && (
                  <div
                    className={`h-0.5 w-6 sm:w-12 transition-all ${
                      step > s.num ? "bg-accent" : "bg-line"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Sihirbaz Kartı */}
        <div className="mx-auto mt-10 max-w-4xl rounded-3xl border border-card-border bg-card p-6 sm:p-10 shadow-xl">
          <AnimatePresence mode="wait">
            {/* ADIM 1: HUKUK DALI SEÇİMİ */}
            {step === 1 && (
              <motion.div
                key="step-1"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="mb-6">
                  <h3 className="font-serif text-2xl font-normal text-fg">
                    1. Uyuşmazlığınız Hangi Hukuk Alanını İlgilendiriyor?
                  </h3>
                  <p className="mt-1 text-xs text-fg-muted">
                    Doğru mevzuat tespiti için en uygun başlığı seçiniz.
                  </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {practiceOptions.map((opt) => (
                    <button
                      key={opt.id}
                      onClick={() => handleSelectArea(opt.title)}
                      className={`group flex flex-col justify-between rounded-2xl border p-5 text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
                        data.area === opt.title
                          ? "border-accent bg-accent-subtle/30 ring-1 ring-accent"
                          : "border-card-border bg-bg-alt/30 hover:border-accent/60"
                      }`}
                    >
                      <div>
                        <div className="grid h-10 w-10 place-items-center rounded-xl bg-card text-accent border border-card-border shadow-xs group-hover:bg-accent group-hover:text-white transition-colors">
                          <opt.icon className="h-5 w-5" />
                        </div>
                        <h4 className="mt-4 font-serif text-lg font-medium text-fg group-hover:text-accent transition-colors">
                          {opt.title}
                        </h4>
                        <p className="mt-1.5 text-xs text-fg-muted leading-relaxed">
                          {opt.desc}
                        </p>
                      </div>
                      <div className="mt-4 flex items-center gap-1 text-[11px] font-semibold text-accent pt-3 border-t border-line/40">
                        <span>Seç ve İlerle</span>
                        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                      </div>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* ADIM 2: SÜREÇ AŞAMASI & ACİLİYET */}
            {step === 2 && (
              <motion.div
                key="step-2"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="font-serif text-2xl font-normal text-fg">
                      2. Uyuşmazlığınızın Şu Anki Durumu Nedir?
                    </h3>
                    <p className="mt-1 text-xs text-fg-muted">
                      Seçilen Alan: <strong className="text-accent">{data.area}</strong>
                    </p>
                  </div>
                  <button
                    onClick={() => setStep(1)}
                    className="inline-flex items-center gap-1.5 text-xs text-fg-muted hover:text-fg font-medium"
                  >
                    <ArrowLeft className="h-4 w-4" />
                    <span>Geri Dön</span>
                  </button>
                </div>

                <div className="space-y-3.5">
                  {stageOptions.map((opt) => (
                    <button
                      key={opt.id}
                      onClick={() => handleSelectStage(opt)}
                      className="group flex w-full items-center justify-between rounded-2xl border border-card-border bg-bg-alt/30 p-5 text-left transition-all duration-300 hover:border-accent hover:bg-card hover:shadow-md"
                    >
                      <div className="flex items-start gap-4">
                        <div
                          className={`mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-xl border ${
                            opt.urgency === "critical"
                              ? "bg-red-500/10 text-red-500 border-red-500/30"
                              : opt.urgency === "urgent"
                              ? "bg-amber-500/10 text-amber-500 border-amber-500/30"
                              : "bg-card text-accent border-card-border"
                          }`}
                        >
                          {opt.urgency === "critical" ? (
                            <ShieldAlert className="h-5 w-5" />
                          ) : opt.urgency === "urgent" ? (
                            <AlertTriangle className="h-5 w-5" />
                          ) : (
                            <FileCheck2 className="h-5 w-5" />
                          )}
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-serif text-base font-medium text-fg group-hover:text-accent">
                              {opt.title}
                            </span>
                            <span
                              className={`rounded-md px-2 py-0.5 text-[10px] font-semibold ${
                                opt.urgency === "critical"
                                  ? "bg-red-500/20 text-red-600 dark:text-red-400"
                                  : opt.urgency === "urgent"
                                  ? "bg-amber-500/20 text-amber-700 dark:text-amber-300"
                                  : "bg-accent-subtle text-accent"
                              }`}
                            >
                              {opt.badge}
                            </span>
                          </div>
                          <p className="mt-1 text-xs text-fg-muted">{opt.desc}</p>
                        </div>
                      </div>

                      <ArrowRight className="h-4 w-4 shrink-0 text-fg-muted/40 transition-transform group-hover:translate-x-1 group-hover:text-accent" />
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* ADIM 3: ÖZET VE RANDEVU FORMU */}
            {step === 3 && (
              <motion.div
                key="step-3"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="font-serif text-2xl font-normal text-fg">
                      3. Hukuki Ön İnceleme ve İletişim Bilgileri
                    </h3>
                    <p className="mt-1 text-xs text-fg-muted">
                      Randevu teyidi ve dosya hazırlığı için bilgilerinizi tamamlayınız.
                    </p>
                  </div>
                  <button
                    onClick={() => setStep(2)}
                    className="inline-flex items-center gap-1.5 text-xs text-fg-muted hover:text-fg font-medium"
                  >
                    <ArrowLeft className="h-4 w-4" />
                    <span>Geri Dön</span>
                  </button>
                </div>

                {/* Hukuki Süre Uyarı Kutusu */}
                {data.hasNotice && (
                  <div className="mb-6 rounded-2xl border border-amber-500/30 bg-amber-500/10 p-4 text-xs text-amber-900 dark:text-amber-200">
                    <div className="flex items-center gap-2 font-semibold">
                      <AlertTriangle className="h-4 w-4 text-amber-500 shrink-0" />
                      <span>Hak Düşürücü Süre Uyarısı</span>
                    </div>
                    <p className="mt-1.5 leading-relaxed">
                      Mahkeme, icra dairesi veya noter kanalıyla tebliğ edilen belgelerde itiraz
                      veya cevap süreleri genellikle <strong>7 gün</strong> veya <strong>2 hafta</strong>dır.
                      Tebligat zarfını saklamanız ve süre kaybı yaşamamak için gecikmeksizin
                      başvurmanız önerilir.
                    </p>
                  </div>
                )}

                {/* Seçim Özeti Bandı */}
                <div className="mb-6 flex flex-wrap items-center gap-3 rounded-2xl bg-bg-alt/60 p-4 border border-card-border text-xs">
                  <div className="flex items-center gap-1.5">
                    <span className="text-fg-muted font-semibold">Alan:</span>
                    <span className="font-medium text-accent">{data.area}</span>
                  </div>
                  <span className="text-line">|</span>
                  <div className="flex items-center gap-1.5">
                    <span className="text-fg-muted font-semibold">Aşama:</span>
                    <span className="font-medium text-fg">{data.stage}</span>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-fg-muted mb-1.5">
                        Adınız Soyadınız *
                      </label>
                      <input
                        type="text"
                        required
                        value={data.name}
                        onChange={(e) => setData({ ...data, name: e.target.value })}
                        placeholder="Örn: Mehmet Demir"
                        className="w-full rounded-xl border border-card-border bg-bg-alt/50 px-4 py-3 text-sm text-fg placeholder:text-fg-muted/50 focus:border-accent focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-fg-muted mb-1.5">
                        Telefon Numaranız *
                      </label>
                      <input
                        type="tel"
                        required
                        value={data.phone}
                        onChange={(e) => setData({ ...data, phone: e.target.value })}
                        placeholder="0 (5XX) XXX XX XX"
                        className="w-full rounded-xl border border-card-border bg-bg-alt/50 px-4 py-3 text-sm text-fg placeholder:text-fg-muted/50 focus:border-accent focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-fg-muted mb-1.5">
                      Uyuşmazlığın Özeti & Varsa Evrak/Dava Bilgisi
                    </label>
                    <textarea
                      rows={3}
                      value={data.note}
                      onChange={(e) => setData({ ...data, note: e.target.value })}
                      placeholder="Uyuşmazlığı birkaç cümleyle özetleyiniz (örneğin: kiracı tahliyesi için ihtarname çekildi, veya işten çıkarıldım vb.)..."
                      className="w-full rounded-xl border border-card-border bg-bg-alt/50 px-4 py-3 text-sm text-fg placeholder:text-fg-muted/50 focus:border-accent focus:outline-none resize-none"
                    />
                  </div>

                  <div className="flex items-start gap-2.5 pt-2">
                    <input
                      type="checkbox"
                      id="wizard-consent"
                      required
                      checked={data.consent}
                      onChange={(e) => setData({ ...data, consent: e.target.checked })}
                      className="mt-1 h-4 w-4 rounded border-card-border text-accent focus:ring-accent accent-[#c59b27]"
                    />
                    <label
                      htmlFor="wizard-consent"
                      className="text-xs text-fg-muted leading-relaxed cursor-pointer"
                    >
                      İlettiğim bilgilerin Avukatlık Kanunu mesleki sır saklama hükümleri
                      ve KVKK kapsamında randevu amacıyla işlenmesini onaylıyorum.
                    </label>
                  </div>

                  <div className="flex items-center justify-end gap-3 pt-4 border-t border-card-border">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="rounded-full border border-card-border bg-card px-5 py-2.5 text-xs font-medium text-fg-muted hover:text-fg transition-colors"
                    >
                      Geri
                    </button>
                    <button
                      type="submit"
                      disabled={!data.consent}
                      className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3 text-xs font-semibold uppercase tracking-wider text-white shadow-md hover:bg-bronze-light disabled:opacity-50 transition-all"
                    >
                      <Send className="h-4 w-4" />
                      <span>Değerlendirmeyi Gönder</span>
                    </button>
                  </div>
                </form>
              </motion.div>
            )}

            {/* ADIM 4: TAMAMLANDI VE SONUÇ KARTI */}
            {step === 4 && (
              <motion.div
                key="step-4"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-6 text-center"
              >
                <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-emerald-500/10 text-emerald-500">
                  <CheckCircle2 className="h-10 w-10" />
                </div>
                <h3 className="mt-5 font-serif text-3xl font-normal text-fg">
                  Ön Değerlendirme Talebiniz İletildi
                </h3>
                <p className="mt-2 text-sm text-fg-muted max-w-lg mx-auto leading-relaxed">
                  Sayın <strong className="text-fg">{data.name}</strong>,{" "}
                  <strong>{data.area}</strong> alanındaki başvurunuz Av. {fullName} Hukuk Bürosu
                  sekreteryasına ulaşmıştır.
                </p>

                <div className="mx-auto mt-6 max-w-md rounded-2xl bg-bg-alt/70 p-5 text-left border border-card-border text-xs space-y-2">
                  <div className="flex justify-between border-b border-line pb-2">
                    <span className="text-fg-muted">Başvuru Konusu:</span>
                    <span className="font-semibold text-fg">{data.area}</span>
                  </div>
                  <div className="flex justify-between border-b border-line pb-2">
                    <span className="text-fg-muted">Süreç Aşaması:</span>
                    <span className="font-medium text-fg">{data.stage}</span>
                  </div>
                  <div className="flex justify-between border-b border-line pb-2">
                    <span className="text-fg-muted">İrtibat Numarası:</span>
                    <span className="font-mono text-accent font-semibold">{data.phone}</span>
                  </div>
                  <div className="flex justify-between pt-1">
                    <span className="text-fg-muted">Büro Konumu:</span>
                    <span className="text-fg">{lawyer.city} / {lawyer.district}</span>
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                  <a
                    href={lawyer.phoneHref}
                    className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white shadow-md hover:bg-bronze-light transition-all"
                  >
                    <Phone className="h-3.5 w-3.5" />
                    <span>Hemen Arayarak Teyit Edin</span>
                  </a>

                  <button
                    onClick={reset}
                    className="rounded-full border border-card-border bg-card px-5 py-3 text-xs font-medium text-fg-muted hover:text-fg transition-colors"
                  >
                    Yeni Bir Değerlendirme Başlat
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
