import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2, Shield } from "lucide-react";
import { fullName } from "@/lib/lawyer";
import { areas } from "@/lib/areas";
import { FadeIn, PageHero, SectionBadge } from "@/components/motion";

export const metadata: Metadata = {
  title: "Çalışma Alanları",
  description: `Av. ${fullName} — Ceza Hukuku, Gayrimenkul Hukuku, İş Hukuku, Ticaret Hukuku ve diğer mesleki faaliyet alanları.`,
};

export default function PracticeAreasPage() {
  return (
    <main>
      <PageHero
        badge="Faaliyet Konuları"
        title="Hukuki "
        highlight="Çalışma Alanları"
        description="Müvekkillerimizin uyuşmazlık yaşadığı veya önleyici danışmanlık talep ettiği temel hukuki disiplinler."
        image="/images/facade-sky.jpg"
      />

      <section className="py-24 sm:py-32 bg-bg">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          {/* TBB Bilgilendirme Notu */}
          <div className="mb-14 rounded-2xl border border-card-border bg-card p-6 text-xs text-fg-muted">
            <div className="flex items-center gap-3 font-semibold text-fg">
              <Shield className="h-4 w-4 text-accent" />
              <span>Yasal Bilgilendirme ve Meslek Kuralları (TBB m.7)</span>
            </div>
            <p className="mt-2 leading-relaxed">
              Aşağıda yer alan çalışma alanları, Avukatlık Kanunu ve Reklam Yasağı Yönetmeliği kapsamında yalnızca kamuoyunu ve müvekkilleri büromuzun fiili iştigal konuları hakkında bilgilendirmek amacıyla listelenmiştir. Hiçbir surette uzmanlık, tekel veya üstünlük iddiası taşımamaktadır.
            </p>
          </div>

          {/* Çalışma Alanları Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {areas.map((area, idx) => (
              <FadeIn key={area.slug} delay={idx * 0.08}>
                <div className="flex h-full flex-col justify-between rounded-2xl border border-card-border bg-card p-8 shadow-xs transition-all duration-300 hover:border-accent/40 hover:shadow-lg">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="rounded-full bg-accent-subtle px-3 py-1 text-[11px] font-medium text-accent">
                        {area.category}
                      </span>
                      <span className="font-mono text-xs text-fg-muted">0{idx + 1}</span>
                    </div>

                    <h2 className="mt-5 font-serif text-2xl font-normal text-fg">
                      {area.title}
                    </h2>

                    <p className="mt-3 text-sm leading-relaxed text-fg-muted">
                      {area.lead}
                    </p>

                    <div className="mt-6 border-t border-line pt-4">
                      <p className="text-xs font-semibold uppercase tracking-wider text-fg mb-3">
                        Başlıca Uyuşmazlık Konuları:
                      </p>
                      <ul className="space-y-2">
                        {area.topics.map((t) => (
                          <li key={t} className="flex items-start gap-2 text-xs text-fg/80">
                            <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-accent mt-0.5" />
                            <span>{t}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-8 border-t border-line pt-5">
                    <Link
                      href={`/calisma-alanlari/${area.slug}`}
                      className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-accent transition-colors hover:text-fg"
                    >
                      <span>Ayrıntılı İnceleme ve Süreç</span>
                      <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
