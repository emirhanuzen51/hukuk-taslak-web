import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Clock, FileText, ShieldAlert } from "lucide-react";
import { fullName } from "@/lib/lawyer";
import { articles } from "@/lib/articles";
import { FadeIn, PageHero, SectionBadge } from "@/components/motion";

export const metadata: Metadata = {
  title: "Hukuki Bilgiler & Makaleler",
  description: `Av. ${fullName} — güncel mevzuat, yargı kararları ve hukuki bilgilendirme yazıları.`,
};

export default function ArticlesPage() {
  return (
    <main>
      <PageHero
        badge="Bilgilendirme"
        title="Hukuki "
        highlight="Makale ve Bilgiler"
        description="Mevzuat değişiklikleri, dava şartları ve temel haklara dair güncel hukuki incelemeler."
        image="/images/old-books.jpg"
      />

      <section className="py-24 sm:py-32 bg-bg">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          {/* Yasal Uyarı Kutusu */}
          <div className="mb-14 rounded-2xl border border-card-border bg-card p-6 text-xs text-fg-muted">
            <div className="flex items-center gap-2.5 font-semibold text-fg">
              <ShieldAlert className="h-4 w-4 text-accent" />
              <span>Hukuki Mütalaa / Danışmanlık Niteliği Taşımama Uyarısı</span>
            </div>
            <p className="mt-2 leading-relaxed">
              Bu bölümde paylaşılan makale ve yazılar genel nitelikte bilgilendirme amaçlıdır. Her somut hukuki olay kendi delilleri, tarafları ve süresi bakımından farklılık göstereceğinden, bu yazılar hukuki danışmanlık veya mütalaa yerine ikame edilemez.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((art, idx) => (
              <FadeIn key={art.slug} delay={idx * 0.1}>
                <Link
                  href={`/hukuki-bilgiler/${art.slug}`}
                  className="group flex h-full flex-col justify-between rounded-2xl border border-card-border bg-card p-8 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-xl"
                >
                  <div>
                    <div className="flex items-center justify-between text-xs text-fg-muted">
                      <span className="font-medium text-accent">{art.category}</span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {art.readTime}
                      </span>
                    </div>

                    <h2 className="mt-5 font-serif text-2xl font-normal text-fg transition-colors group-hover:text-accent">
                      {art.title}
                    </h2>

                    <p className="mt-3 text-sm leading-relaxed text-fg-muted">
                      {art.excerpt}
                    </p>
                  </div>

                  <div className="mt-8 flex items-center justify-between border-t border-line pt-4 text-xs">
                    <span className="text-fg-muted">{art.date}</span>
                    <span className="inline-flex items-center gap-1 font-semibold text-accent group-hover:translate-x-1 transition-transform">
                      Yazıyı Oku &rarr;
                    </span>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
