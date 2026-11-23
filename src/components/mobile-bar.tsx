"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Calendar,
  ChevronUp,
  MapPin,
  MessageCircle,
  Phone,
  X,
} from "lucide-react";
import { lawyer } from "@/lib/lawyer";

interface MobileActionBarProps {
  onOpenAppointment: () => void;
}

export function MobileActionBar({ onOpenAppointment }: MobileActionBarProps) {
  const [visible, setVisible] = useState(false);
  const [expanded, setExpanded] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // 100px aşağı kaydırıldığında göster
      setVisible(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-5 right-4 z-50 flex flex-col items-end gap-2.5 sm:right-6 pointer-events-none">
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.9 }}
            transition={{ duration: 0.25 }}
            className="flex flex-col items-end gap-2.5 pointer-events-auto"
          >
            {/* 1. Yol Tarifi & Harita (Yuvarlak İkon) */}
            <motion.a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                lawyer.address
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              whileTap={{ scale: 0.92 }}
              className="group flex items-center gap-2"
              aria-label="Büro Yol Tarifi"
            >
              <span className="rounded-full bg-card/95 border border-card-border px-2.5 py-1 text-[11px] font-semibold text-fg shadow-md backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity">
                Yol Tarifi
              </span>
              <div className="grid h-11 w-11 place-items-center rounded-full border border-card-border bg-card text-fg shadow-lg transition-transform duration-300 hover:border-accent hover:text-accent">
                <MapPin className="h-4 w-4" />
              </div>
            </motion.a>

            {/* 2. Randevu Al (Yuvarlak İkon) */}
            <motion.button
              onClick={onOpenAppointment}
              whileTap={{ scale: 0.92 }}
              className="group flex items-center gap-2"
              aria-label="Randevu Al"
            >
              <span className="rounded-full bg-card/95 border border-card-border px-2.5 py-1 text-[11px] font-semibold text-fg shadow-md backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity">
                Randevu Al
              </span>
              <div className="grid h-12 w-12 place-items-center rounded-full border border-accent/40 bg-card text-accent shadow-xl transition-all duration-300 hover:bg-accent hover:text-white">
                <Calendar className="h-5 w-5" />
              </div>
            </motion.button>

            {/* 3. Sabit Hat / Telefonla Ara (Yuvarlak İkon - Altın Renkli) */}
            <motion.a
              href={lawyer.phoneHref}
              whileTap={{ scale: 0.92 }}
              className="group flex items-center gap-2"
              aria-label="Büroyu Hemen Ara"
            >
              <span className="rounded-full bg-card/95 border border-card-border px-2.5 py-1 text-[11px] font-semibold text-fg shadow-md backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity">
                Hemen Ara
              </span>
              <div className="grid h-12 w-12 place-items-center rounded-full bg-accent text-white shadow-xl transition-transform duration-300 hover:scale-105">
                <Phone className="h-5 w-5" />
              </div>
            </motion.a>

            {/* 4. WhatsApp Danışma (Yuvarlak İkon - Yeşil WhatsApp) */}
            <motion.a
              href={lawyer.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              whileTap={{ scale: 0.92 }}
              className="group relative flex items-center gap-2"
              aria-label="WhatsApp ile Danış"
            >
              <span className="rounded-full bg-card/95 border border-card-border px-2.5 py-1 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 shadow-md backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity">
                WhatsApp
              </span>
              <div className="relative grid h-13 w-13 place-items-center rounded-full bg-[#25D366] text-white shadow-2xl transition-transform duration-300 hover:scale-105">
                <MessageCircle className="h-6 w-6" />
                <span className="absolute -top-0.5 -right-0.5 flex h-3.5 w-3.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500 border-2 border-white"></span>
                </span>
              </div>
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Küçültme / Büyütme Düğmesi (İsteğe bağlı kapatıp açma) */}
      <motion.button
        whileTap={{ scale: 0.9 }}
        onClick={() => setExpanded((prev) => !prev)}
        aria-label={expanded ? "Hızlı butonları gizle" : "Hızlı butonları göster"}
        className="grid h-8 w-8 place-items-center rounded-full border border-card-border bg-card/90 text-fg-muted shadow-md backdrop-blur-md hover:text-fg pointer-events-auto transition-colors"
      >
        {expanded ? <X className="h-3.5 w-3.5" /> : <ChevronUp className="h-4 w-4" />}
      </motion.button>
    </div>
  );
}
