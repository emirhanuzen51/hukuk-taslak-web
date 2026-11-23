"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  Briefcase,
  Calendar,
  CheckCircle2,
  GraduationCap,
  Mail,
  Scale,
  Shield,
  ShieldCheck,
  User,
  Users,
  X,
} from "lucide-react";
import { TeamMember, teamMembers } from "@/lib/team";
import { SectionBadge } from "./motion";
import { useModals } from "./modal-context";

export function TeamSection() {
  const [selectedRole, setSelectedRole] = useState<string>("Tümü");
  const [activeMember, setActiveMember] = useState<TeamMember | null>(null);
  const { openAppointment } = useModals();

  const roles = ["Tümü", "Avukatlar", "Stajyer & Danışmanlar", "İdari Kadro"];

  const filteredMembers = teamMembers.filter((m) => {
    if (selectedRole === "Tümü") return true;
    if (selectedRole === "Avukatlar") {
      return m.role === "Kurucu Avukat" || m.role === "Avukat";
    }
    if (selectedRole === "Stajyer & Danışmanlar") {
      return m.role === "Stajyer Avukat";
    }
    if (selectedRole === "İdari Kadro") {
      return m.role === "İdari Kadro";
    }
    return true;
  });

  return (
    <section id="kadromuz" className="scroll-mt-20 py-16 sm:py-24 lg:py-32 bg-bg border-b border-card-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        {/* Başlık ve Filtre */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-line">
          <div>
            <SectionBadge number="05">Hukuk Kadromuz</SectionBadge>
            <h2 className="mt-4 font-serif text-3xl font-normal sm:text-4xl lg:text-5xl text-fg">
              Büro Çalışanlarımız ve <span className="italic text-accent">Uzmanlık Alanları</span>
            </h2>
            <p className="mt-3 text-sm text-fg-muted max-w-xl">
              Farklı hukuk disiplinlerinde akademik bilgi birikimine ve dava pratiğine sahip,
              müvekkillerimize organize ve dinamik temsil sağlayan ekibimiz.
            </p>
          </div>

          {/* Filtre Sekmeleri */}
          <div className="flex flex-wrap gap-2">
            {roles.map((r) => (
              <button
                key={r}
                onClick={() => setSelectedRole(r)}
                className={`rounded-full px-4 py-2 text-xs font-semibold tracking-wider transition-all duration-300 ${
                  selectedRole === r
                    ? "bg-accent text-white shadow-xs"
                    : "border border-card-border bg-card/80 text-fg-muted hover:border-accent hover:text-fg"
                }`}
              >
                {r}
              </button>
            ))}
          </div>
        </div>

        {/* Ekip Kartları Grid */}
        <motion.div layout className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence>
            {filteredMembers.map((member) => (
              <motion.div
                key={member.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35 }}
                className="group flex flex-col justify-between rounded-3xl border border-card-border bg-card p-6 sm:p-7 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-accent/60 hover:shadow-xl"
              >
                <div>
                  {/* Üst Kısım: Fotoğraf / Avatar & Rol */}
                  <div className="flex items-start justify-between gap-4">
                    <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-2xl border border-card-border bg-bg-alt">
                      {member.image ? (
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          sizes="80px"
                          className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                        />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center bg-accent-subtle/50 text-accent font-serif text-2xl font-semibold">
                          {member.name
                            .split(" ")
                            .filter((part) => !part.includes("."))
                            .map((p) => p[0])
                            .slice(0, 2)
                            .join("")}
                        </div>
                      )}
                    </div>

                    <div className="text-right">
                      <span className="inline-block rounded-full bg-accent-subtle px-2.5 py-1 text-[11px] font-semibold text-accent">
                        {member.role}
                      </span>
                      {member.bar && (
                        <p className="mt-1 text-[11px] font-medium text-fg-muted">
                          {member.bar}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* İsim ve Başlık */}
                  <div className="mt-5">
                    <h3 className="font-serif text-xl font-normal text-fg transition-colors group-hover:text-accent">
                      {member.name}
                    </h3>
                    <p className="text-xs text-fg-muted mt-0.5 font-medium">
                      {member.title}
                    </p>
                  </div>

                  {/* Eğitim Bilgisi */}
                  <div className="mt-3 flex items-center gap-2 text-xs text-fg-muted">
                    <GraduationCap className="h-3.5 w-3.5 text-accent shrink-0" />
                    <span className="truncate">{member.education}</span>
                  </div>

                  {/* Deneyimli Olduğu Hukuki Alanlar */}
                  <div className="mt-5 border-t border-line/60 pt-4">
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-fg-muted mb-2.5">
                      Çalışma ve Deneyim Alanları:
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {member.areasOfFocus.map((area) => (
                        <span
                          key={area}
                          className="rounded-lg bg-bg-alt/70 px-2.5 py-1 text-[11px] font-medium text-fg/80 border border-card-border/60 transition-colors group-hover:border-accent/30"
                        >
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Alt Aksiyon Butonları */}
                <div className="mt-6 flex items-center justify-between border-t border-line/60 pt-4">
                  <button
                    onClick={() => setActiveMember(member)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent hover:underline"
                  >
                    <span>Özgeçmiş & Detay</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>

                  <a
                    href={`mailto:${member.email}`}
                    title={member.email}
                    className="grid h-8 w-8 place-items-center rounded-lg border border-card-border bg-bg-alt/50 text-fg-muted hover:border-accent hover:text-accent transition-colors"
                  >
                    <Mail className="h-4 w-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Ekip Üyesi Detay Modalı */}
      <AnimatePresence>
        {activeMember && (
          <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            <div
              onClick={() => setActiveMember(null)}
              className="fixed inset-0 bg-obsidian/75 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative z-10 w-full max-w-xl rounded-3xl border border-card-border bg-card p-6 sm:p-8 shadow-2xl my-8"
            >
              <div className="flex items-start justify-between border-b border-line pb-5">
                <div>
                  <span className="rounded-full bg-accent-subtle px-3 py-1 text-[11px] font-semibold text-accent">
                    {activeMember.role}
                  </span>
                  <h3 className="mt-3 font-serif text-2xl font-normal text-fg">
                    {activeMember.name}
                  </h3>
                  <p className="text-xs text-fg-muted mt-0.5">{activeMember.title}</p>
                </div>

                <button
                  onClick={() => setActiveMember(null)}
                  className="grid h-8 w-8 place-items-center rounded-full border border-card-border text-fg-muted hover:text-fg"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <div className="mt-5 space-y-4 text-xs">
                {/* Eğitim ve Baro Bilgisi */}
                <div className="rounded-2xl bg-bg-alt/60 p-4 border border-card-border space-y-2">
                  <div className="flex items-center gap-2 text-fg">
                    <GraduationCap className="h-4 w-4 text-accent" />
                    <span><strong>Eğitim:</strong> {activeMember.education} {activeMember.graduationYear ? `(${activeMember.graduationYear})` : ""}</span>
                  </div>
                  {activeMember.bar && (
                    <div className="flex items-center gap-2 text-fg">
                      <Scale className="h-4 w-4 text-accent" />
                      <span><strong>Kayıtlı Baro:</strong> {activeMember.bar}</span>
                    </div>
                  )}
                  <div className="flex items-center gap-2 text-fg">
                    <BookOpen className="h-4 w-4 text-accent" />
                    <span><strong>Yabancı Diller:</strong> {activeMember.languages.join(", ")}</span>
                  </div>
                </div>

                {/* Biyografi */}
                <div>
                  <h4 className="font-semibold uppercase tracking-wider text-fg-muted text-[11px] mb-1.5">
                    Mesleki Profil
                  </h4>
                  <p className="text-sm leading-relaxed text-fg-muted">
                    {activeMember.bio}
                  </p>
                </div>

                {/* Deneyim Alanları */}
                <div>
                  <h4 className="font-semibold uppercase tracking-wider text-fg-muted text-[11px] mb-2">
                    Faaliyet ve Uzmanlık Alanları
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {activeMember.areasOfFocus.map((a) => (
                      <span
                        key={a}
                        className="rounded-lg bg-accent-subtle/50 px-3 py-1.5 text-xs font-medium text-fg border border-accent/20"
                      >
                        {a}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap items-center justify-between gap-3 pt-5 border-t border-line">
                <a
                  href={`mailto:${activeMember.email}`}
                  className="text-xs text-accent font-medium hover:underline flex items-center gap-1.5"
                >
                  <Mail className="h-3.5 w-3.5" />
                  <span>{activeMember.email}</span>
                </a>

                <button
                  onClick={() => {
                    const focusArea = activeMember.areasOfFocus[0];
                    setActiveMember(null);
                    openAppointment(focusArea);
                  }}
                  className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white shadow-md hover:bg-bronze-light transition-all"
                >
                  <Calendar className="h-3.5 w-3.5" />
                  <span>Randevu Talebi Oluştur</span>
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
