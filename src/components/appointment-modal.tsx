"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Calendar,
  CheckCircle2,
  Clock,
  Mail,
  Phone,
  Scale,
  Send,
  ShieldCheck,
  User,
  X,
} from "lucide-react";
import { fullName, lawyer } from "@/lib/lawyer";
import { areas } from "@/lib/areas";

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultArea?: string;
}

export function AppointmentModal({
  isOpen,
  onClose,
  defaultArea,
}: AppointmentModalProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [selectedArea, setSelectedArea] = useState(defaultArea || areas[0]?.title || "");
  const [preferredDate, setPreferredDate] = useState("");
  const [preferredTime, setPreferredTime] = useState("Sabah (10:00 - 13:00)");
  const [note, setNote] = useState("");
  const [consent, setConsent] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (defaultArea) {
      setSelectedArea(defaultArea);
    }
  }, [defaultArea]);

  // ESC tuşuyla kapatma
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!consent) return;
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setName("");
    setPhone("");
    setEmail("");
    setNote("");
    setConsent(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-obsidian/75 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 16 }}
            transition={{ type: "spring", duration: 0.4, bounce: 0 }}
            className="relative z-10 w-full max-w-2xl overflow-hidden rounded-3xl border border-card-border bg-card shadow-2xl my-8"
          >
            {/* Üst Başlık Şeridi */}
            <div className="relative border-b border-card-border bg-bg-alt/70 px-6 py-5 sm:px-8">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-accent-subtle text-accent">
                    <Scale className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-normal text-fg">
                      Hukuki Randevu Talebi
                    </h3>
                    <p className="text-xs text-fg-muted">
                      Av. {fullName} Hukuk & Danışmanlık Bürosu
                    </p>
                  </div>
                </div>

                <button
                  onClick={onClose}
                  aria-label="Kapat"
                  className="grid h-9 w-9 place-items-center rounded-full border border-card-border bg-card text-fg-muted transition-colors hover:border-accent hover:text-fg"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* İçerik */}
            <div className="p-6 sm:p-8 max-h-[80vh] overflow-y-auto">
              {submitted ? (
                <div className="py-8 text-center">
                  <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-emerald-500/10 text-emerald-500">
                    <CheckCircle2 className="h-9 w-9" />
                  </div>
                  <h4 className="mt-5 font-serif text-2xl font-normal text-fg">
                    Randevu Talebiniz Alındı
                  </h4>
                  <p className="mt-2 text-sm text-fg-muted max-w-md mx-auto leading-relaxed">
                    Sayın <strong className="text-fg">{name}</strong>, randevu talebiniz
                    ve ilettiğiniz ön bilgiler gizlilik esaslarımız çerçevesinde büromuza
                    ulaştı. Çalışma saatlerimiz içerisinde <strong>{phone}</strong> numaranızdan
                    randevu teyidi için sizinle iletişime geçeceğiz.
                  </p>

                  <div className="mt-6 rounded-2xl bg-bg-alt/60 p-4 text-xs text-fg-muted border border-card-border max-w-md mx-auto text-left">
                    <div className="flex items-center gap-2 font-semibold text-accent mb-1">
                      <ShieldCheck className="h-4 w-4" />
                      <span>Görüşme Öncesi Hatırlatma</span>
                    </div>
                    <span>
                      Görüşmeye gelirken uyuşmazlığa dair tebligatları, sözleşmeleri, tutanakları
                      ve varsa dosya numarasını yanınızda bulundurmanız sürecin verimliliği
                      açısından önem taşımaktadır.
                    </span>
                  </div>

                  <div className="mt-8 flex justify-center gap-3">
                    <button
                      onClick={handleReset}
                      className="rounded-full bg-accent px-7 py-3 text-xs font-semibold uppercase tracking-wider text-white shadow-md hover:bg-bronze-light transition-all"
                    >
                      Pencereyi Kapat
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="rounded-xl border border-accent/20 bg-accent-subtle/30 p-3.5 text-xs text-fg-muted leading-relaxed">
                    <strong className="font-semibold text-accent">TBB Meslek Kuralı: </strong>
                    Avukatlık görüşmeleri ve hukuki danışmanlık, müvekkilin hak kaybına uğramaması
                    amacıyla randevu ile dosya incelemesi yapılarak yürütülür.
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-fg-muted mb-1.5">
                        Adınız Soyadınız *
                      </label>
                      <div className="relative">
                        <User className="absolute left-3.5 top-3.5 h-4 w-4 text-fg-muted/60" />
                        <input
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Örn: Avni Yılmaz"
                          className="w-full rounded-xl border border-card-border bg-bg-alt/50 pl-10 pr-4 py-2.5 text-sm text-fg placeholder:text-fg-muted/50 focus:border-accent focus:outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-fg-muted mb-1.5">
                        Telefon Numaranız *
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3.5 top-3.5 h-4 w-4 text-fg-muted/60" />
                        <input
                          type="tel"
                          required
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="0 (5XX) XXX XX XX"
                          className="w-full rounded-xl border border-card-border bg-bg-alt/50 pl-10 pr-4 py-2.5 text-sm text-fg placeholder:text-fg-muted/50 focus:border-accent focus:outline-none"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-fg-muted mb-1.5">
                        E-Posta Adresiniz (İsteğe Bağlı)
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3.5 top-3.5 h-4 w-4 text-fg-muted/60" />
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="isim@alanadi.com"
                          className="w-full rounded-xl border border-card-border bg-bg-alt/50 pl-10 pr-4 py-2.5 text-sm text-fg placeholder:text-fg-muted/50 focus:border-accent focus:outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-fg-muted mb-1.5">
                        Uyuşmazlık Konusu / Alan *
                      </label>
                      <select
                        value={selectedArea}
                        onChange={(e) => setSelectedArea(e.target.value)}
                        className="w-full rounded-xl border border-card-border bg-bg-alt/50 px-3.5 py-2.5 text-sm text-fg focus:border-accent focus:outline-none"
                      >
                        {areas.map((a) => (
                          <option key={a.slug} value={a.title}>
                            {a.title}
                          </option>
                        ))}
                        <option value="Diğer Hukuki Uyuşmazlık">Diğer Hukuki Uyuşmazlık</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-fg-muted mb-1.5">
                        Tercih Edilen Gün
                      </label>
                      <div className="relative">
                        <Calendar className="absolute left-3.5 top-3.5 h-4 w-4 text-fg-muted/60" />
                        <input
                          type="date"
                          value={preferredDate}
                          onChange={(e) => setPreferredDate(e.target.value)}
                          className="w-full rounded-xl border border-card-border bg-bg-alt/50 pl-10 pr-4 py-2.5 text-sm text-fg focus:border-accent focus:outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-fg-muted mb-1.5">
                        Tercih Edilen Zaman Dilimi
                      </label>
                      <div className="relative">
                        <Clock className="absolute left-3.5 top-3.5 h-4 w-4 text-fg-muted/60" />
                        <select
                          value={preferredTime}
                          onChange={(e) => setPreferredTime(e.target.value)}
                          className="w-full rounded-xl border border-card-border bg-bg-alt/50 pl-10 pr-4 py-2.5 text-sm text-fg focus:border-accent focus:outline-none"
                        >
                          <option value="Sabah (10:00 - 13:00)">Sabah (10:00 - 13:00)</option>
                          <option value="Öğleden Sonra (14:00 - 16:30)">Öğleden Sonra (14:00 - 16:30)</option>
                          <option value="Akşamüstü (16:30 - 18:30)">Akşamüstü (16:30 - 18:30)</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-fg-muted mb-1.5">
                      Uyuşmazlık Özeti / Varsa Tebligat Notu
                    </label>
                    <textarea
                      rows={3}
                      value={note}
                      onChange={(e) => setNote(e.target.value)}
                      placeholder="Konuyu ve varsa tarafınıza tebliğ edilen mahkeme veya icra evrakını özetleyiniz..."
                      className="w-full rounded-xl border border-card-border bg-bg-alt/50 px-4 py-2.5 text-sm text-fg placeholder:text-fg-muted/50 focus:border-accent focus:outline-none resize-none"
                    />
                  </div>

                  <div className="flex items-start gap-2.5 pt-1">
                    <input
                      type="checkbox"
                      id="modal-consent"
                      required
                      checked={consent}
                      onChange={(e) => setConsent(e.target.checked)}
                      className="mt-1 h-4 w-4 rounded border-card-border text-accent focus:ring-accent accent-[#c59b27]"
                    />
                    <label htmlFor="modal-consent" className="text-xs text-fg-muted leading-relaxed cursor-pointer">
                      İlettiğim kişisel verilerimin KVKK ve Avukatlık Kanunu sır saklama yükümlülüğü
                      kapsamında randevu planlaması amacıyla işlenmesini onaylıyorum.
                    </label>
                  </div>

                  <div className="flex items-center justify-end gap-3 pt-3 border-t border-card-border">
                    <button
                      type="button"
                      onClick={onClose}
                      className="rounded-full border border-card-border bg-card px-5 py-2.5 text-xs font-medium text-fg-muted hover:text-fg transition-colors"
                    >
                      İptal
                    </button>
                    <button
                      type="submit"
                      disabled={!consent}
                      className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-white shadow-md hover:bg-bronze-light disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                    >
                      <Send className="h-3.5 w-3.5" />
                      <span>Talebi İlet</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
