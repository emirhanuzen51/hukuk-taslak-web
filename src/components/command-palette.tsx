"use client";

import { useEffect, useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  Calendar,
  Compass,
  Download,
  FileText,
  MapPin,
  Navigation,
  Phone,
  Scale,
  Search,
  ShieldCheck,
  Users,
  X,
} from "lucide-react";
import { fullName, lawyer, nav, slugName } from "@/lib/lawyer";
import { areas } from "@/lib/areas";
import { articles } from "@/lib/articles";
import { teamMembers } from "@/lib/team";

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenAppointment?: () => void;
}

export function CommandPalette({
  isOpen,
  onClose,
  onOpenAppointment,
}: CommandPaletteProps) {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Global Ctrl+K / Cmd+K listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
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

  // Filtrelenmiş Sonuçlar
  const filteredResults = useMemo(() => {
    const q = query.trim().toLocaleLowerCase("tr-TR");

    const quickActions = [
      {
        id: "action-appointment",
        type: "Eylem",
        title: "Hukuki Randevu Talep Et",
        sub: "Büro görüşmesi veya dosya inceleme randevusu oluşturun",
        icon: Calendar,
        action: () => {
          onClose();
          if (onOpenAppointment) onOpenAppointment();
        },
      },
      {
        id: "action-call",
        type: "Eylem",
        title: `Büroyu Doğrudan Arayın: ${lawyer.phoneDisplay}`,
        sub: "Hafta içi 09:00 - 18:30 doğrudan sekreterlik hattı",
        icon: Phone,
        action: () => {
          window.location.href = lawyer.phoneHref;
        },
      },
      {
        id: "action-maps",
        type: "Eylem",
        title: "Büro Konumu ve Yol Tarifi",
        sub: lawyer.address,
        icon: MapPin,
        action: () => {
          window.open(
            `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
              lawyer.address
            )}`,
            "_blank"
          );
        },
      },
      {
        id: "action-vcard",
        type: "Eylem",
        title: "Avukat Kartvizitini İndir (vCard)",
        sub: "Rehberinize doğrudan kaydedin",
        icon: Download,
        action: () => {
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
          onClose();
        },
      },
    ];

    if (!q) {
      return {
        actions: quickActions,
        practiceAreas: areas.slice(0, 4),
        articlesList: articles.slice(0, 3),
        teamList: teamMembers.slice(0, 3),
      };
    }

    const filteredActions = quickActions.filter(
      (a) =>
        a.title.toLocaleLowerCase("tr-TR").includes(q) ||
        a.sub.toLocaleLowerCase("tr-TR").includes(q)
    );

    const filteredAreas = areas.filter(
      (a) =>
        a.title.toLocaleLowerCase("tr-TR").includes(q) ||
        a.lead.toLocaleLowerCase("tr-TR").includes(q) ||
        a.topics.some((t) => t.toLocaleLowerCase("tr-TR").includes(q))
    );

    const filteredArticles = articles.filter(
      (art) =>
        art.title.toLocaleLowerCase("tr-TR").includes(q) ||
        art.excerpt.toLocaleLowerCase("tr-TR").includes(q) ||
        art.category.toLocaleLowerCase("tr-TR").includes(q)
    );

    const filteredTeam = teamMembers.filter(
      (m) =>
        m.name.toLocaleLowerCase("tr-TR").includes(q) ||
        m.title.toLocaleLowerCase("tr-TR").includes(q) ||
        m.role.toLocaleLowerCase("tr-TR").includes(q) ||
        m.areasOfFocus.some((a) => a.toLocaleLowerCase("tr-TR").includes(q))
    );

    return {
      actions: filteredActions,
      practiceAreas: filteredAreas,
      articlesList: filteredArticles,
      teamList: filteredTeam,
    };
  }, [query, onClose, onOpenAppointment]);

  const handleSelectArea = (slug: string) => {
    onClose();
    router.push(`/calisma-alanlari/${slug}`);
  };

  const handleSelectArticle = (slug: string) => {
    onClose();
    router.push(`/hukuki-bilgiler/${slug}`);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-start justify-center p-4 sm:p-6 pt-16 sm:pt-24">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-obsidian/75 backdrop-blur-md"
          />

          {/* Dialog */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -10 }}
            transition={{ type: "spring", duration: 0.35, bounce: 0 }}
            className="relative z-10 w-full max-w-2xl overflow-hidden rounded-3xl border border-card-border bg-card shadow-2xl"
          >
            {/* Arama Girdi Satırı */}
            <div className="relative flex items-center border-b border-card-border px-5 py-4">
              <Search className="h-5 w-5 text-accent shrink-0" />
              <input
                type="text"
                autoFocus
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setSelectedIndex(0);
                }}
                placeholder="Çalışma alanı, dava konusu, hukuki makale veya işlem arayın..."
                className="w-full bg-transparent px-3.5 text-base text-fg placeholder:text-fg-muted/60 focus:outline-none"
              />
              <div className="flex items-center gap-2">
                <kbd className="hidden sm:inline-flex items-center rounded-md border border-card-border bg-bg-alt px-2 py-0.5 text-[10px] font-mono font-medium text-fg-muted">
                  ESC
                </kbd>
                <button
                  onClick={onClose}
                  className="grid h-7 w-7 place-items-center rounded-lg text-fg-muted hover:text-fg"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Sonuç Listesi */}
            <div className="max-h-[60vh] overflow-y-auto p-3 sm:p-4 space-y-4">
              {/* Hızlı Eylemler */}
              {filteredResults.actions.length > 0 && (
                <div>
                  <div className="px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-fg-muted">
                    Hızlı İşlemler & İletişim
                  </div>
                  <div className="space-y-1">
                    {filteredResults.actions.map((act) => (
                      <button
                        key={act.id}
                        onClick={act.action}
                        className="flex w-full items-center justify-between rounded-xl px-3.5 py-2.5 text-left transition-colors hover:bg-accent-subtle/50 group"
                      >
                        <div className="flex items-center gap-3">
                          <div className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-bg text-accent border border-card-border">
                            <act.icon className="h-4 w-4" />
                          </div>
                          <div>
                            <p className="text-sm font-medium text-fg group-hover:text-accent">
                              {act.title}
                            </p>
                            <p className="text-xs text-fg-muted">{act.sub}</p>
                          </div>
                        </div>
                        <ArrowRight className="h-4 w-4 text-fg-muted/40 transition-transform group-hover:translate-x-1 group-hover:text-accent" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Faaliyet Alanları */}
              {filteredResults.practiceAreas.length > 0 && (
                <div>
                  <div className="px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-fg-muted">
                    Hukuki Çalışma Alanları ({filteredResults.practiceAreas.length})
                  </div>
                  <div className="space-y-1">
                    {filteredResults.practiceAreas.map((area) => (
                      <button
                        key={area.slug}
                        onClick={() => handleSelectArea(area.slug)}
                        className="flex w-full items-center justify-between rounded-xl px-3.5 py-2.5 text-left transition-colors hover:bg-accent-subtle/50 group"
                      >
                        <div className="flex items-center gap-3">
                          <div className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-bg text-accent border border-card-border">
                            <Scale className="h-4 w-4" />
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="text-sm font-medium text-fg group-hover:text-accent">
                                {area.title}
                              </span>
                              <span className="rounded-md bg-bg-alt px-1.5 py-0.5 text-[10px] text-fg-muted font-medium">
                                {area.category}
                              </span>
                            </div>
                            <p className="text-xs text-fg-muted line-clamp-1">{area.lead}</p>
                          </div>
                        </div>
                        <ArrowRight className="h-4 w-4 text-fg-muted/40 transition-transform group-hover:translate-x-1 group-hover:text-accent" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Hukuki Bilgiler & Makaleler */}
              {filteredResults.articlesList.length > 0 && (
                <div>
                  <div className="px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-fg-muted">
                    Hukuki Makaleler & Rehberler ({filteredResults.articlesList.length})
                  </div>
                  <div className="space-y-1">
                    {filteredResults.articlesList.map((art) => (
                      <button
                        key={art.slug}
                        onClick={() => handleSelectArticle(art.slug)}
                        className="flex w-full items-center justify-between rounded-xl px-3.5 py-2.5 text-left transition-colors hover:bg-accent-subtle/50 group"
                      >
                        <div className="flex items-center gap-3">
                          <div className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-bg text-accent border border-card-border">
                            <BookOpen className="h-4 w-4" />
                          </div>
                          <div>
                            <span className="text-sm font-medium text-fg group-hover:text-accent">
                              {art.title}
                            </span>
                            <p className="text-xs text-fg-muted line-clamp-1">{art.excerpt}</p>
                          </div>
                        </div>
                        <ArrowRight className="h-4 w-4 text-fg-muted/40 transition-transform group-hover:translate-x-1 group-hover:text-accent" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Hukuk Kadrosu & Ekip */}
              {filteredResults.teamList && filteredResults.teamList.length > 0 && (
                <div>
                  <div className="px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-fg-muted">
                    Hukuk Kadrosu & Çalışanlarımız ({filteredResults.teamList.length})
                  </div>
                  <div className="space-y-1">
                    {filteredResults.teamList.map((member) => (
                      <button
                        key={member.id}
                        onClick={() => {
                          onClose();
                          router.push("/ekibimiz");
                        }}
                        className="flex w-full items-center justify-between rounded-xl px-3.5 py-2.5 text-left transition-colors hover:bg-accent-subtle/50 group"
                      >
                        <div className="flex items-center gap-3">
                          <div className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-bg text-accent border border-card-border">
                            <Users className="h-4 w-4" />
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="text-sm font-medium text-fg group-hover:text-accent">
                                {member.name}
                              </span>
                              <span className="rounded-md bg-accent-subtle px-1.5 py-0.5 text-[10px] text-accent font-semibold">
                                {member.role}
                              </span>
                            </div>
                            <p className="text-xs text-fg-muted line-clamp-1">
                              {member.areasOfFocus.slice(0, 3).join(", ")}
                            </p>
                          </div>
                        </div>
                        <ArrowRight className="h-4 w-4 text-fg-muted/40 transition-transform group-hover:translate-x-1 group-hover:text-accent" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Hiçbir Sonuç Bulunamadı */}
              {filteredResults.actions.length === 0 &&
                filteredResults.practiceAreas.length === 0 &&
                filteredResults.articlesList.length === 0 &&
                (!filteredResults.teamList || filteredResults.teamList.length === 0) && (
                  <div className="py-10 text-center">
                    <Scale className="mx-auto h-10 w-10 text-fg-muted/40" />
                    <p className="mt-3 text-sm font-medium text-fg">
                      &quot;{query}&quot; ile eşleşen bir sonuç bulunamadı
                    </p>
                    <p className="mt-1 text-xs text-fg-muted">
                      Farklı bir anahtar kelime deneyebilir veya büromuzla doğrudan iletişime
                      geçebilirsiniz.
                    </p>
                    <a
                      href={lawyer.phoneHref}
                      className="mt-4 inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2 text-xs font-semibold uppercase tracking-wider text-white"
                    >
                      <Phone className="h-3.5 w-3.5" />
                      <span>{lawyer.phoneDisplay}</span>
                    </a>
                  </div>
                )}
            </div>

            {/* Alt Çubuk */}
            <div className="flex items-center justify-between border-t border-card-border bg-bg-alt/50 px-5 py-3 text-[11px] text-fg-muted">
              <div className="flex items-center gap-3">
                <span>Av. {fullName} Hukuk & Danışmanlık</span>
                <span>·</span>
                <span>{lawyer.bar}</span>
              </div>
              <span className="hidden sm:inline-block">
                Hızlı Arama & Navigasyon
              </span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
