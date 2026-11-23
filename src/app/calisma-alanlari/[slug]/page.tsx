import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, BookOpen, CheckCircle, ChevronRight, FileText, Phone, Shield } from "lucide-react";
import { areas, findArea } from "@/lib/areas";
import { fullName, lawyer } from "@/lib/lawyer";
import { PageHero, SectionBadge } from "@/components/motion";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return areas.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const area = findArea(slug);
  if (!area) return { title: "Bulunamadı" };
  return {
    title: `${area.title} | Av. ${fullName}`,
    description: area.lead,
  };
}

export default async function PracticeAreaDetailPage({ params }: Props) {
  const { slug } = await params;
  const area = findArea(slug);

  if (!area) {
    notFound();
  }

  return (
    <main>
      <PageHero
        badge={area.category}
        title={area.title}
        description={area.lead}
        image={area.image}
      />

      <section className="py-24 sm:py-32 bg-bg">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mb-10">
            <Link
              href="/calisma-alanlari"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-fg-muted hover:text-accent transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Tüm Alanlara Dön</span>
            </Link>
          </div>

          <div className="grid gap-14 lg:grid-cols-12">
            {/* Sol: Detaylı Açıklama & Süreç */}
            <div className="lg:col-span-8 space-y-12">
              <div>
                <SectionBadge number="01">Kapsam ve Yaklaşım</SectionBadge>
                <h2 className="mt-4 font-serif text-3xl font-normal text-fg">
                  Hukuki Mahiyet ve Temsil Esasları
                </h2>
                <p className="mt-6 text-base leading-relaxed text-fg-muted sm:text-lg">
                  {area.description}
                </p>
              </div>

              {/* Uyuşmazlık Konuları */}
              <div className="rounded-2xl border border-card-border bg-card p-8">
                <h3 className="font-serif text-xl font-medium text-fg flex items-center gap-2">
                  <FileText className="h-5 w-5 text-accent" />
                  <span>Takip Edilen Başlıca Dava ve İşlemler</span>
                </h3>
                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {area.topics.map((t) => (
                    <li key={t} className="flex items-start gap-3 text-sm text-fg-muted">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* İşlem ve Takip Akışı */}
              <div>
                <SectionBadge number="02">Süreç Akışı</SectionBadge>
                <h3 className="mt-4 font-serif text-2xl font-normal text-fg">
                  Tipik Dosya ve Başvuru Aşamaları
                </h3>
                <div className="mt-6 space-y-4">
                  {area.processSummary.map((step, idx) => (
                    <div
                      key={step}
                      className="flex items-start gap-4 rounded-xl border border-card-border bg-card/60 p-5"
                    >
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent-subtle font-mono text-xs font-bold text-accent">
                        {idx + 1}
                      </span>
                      <p className="text-sm leading-relaxed text-fg">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sağ: İlgili Mevzuat & Hızlı İletişim Kartı */}
            <div className="lg:col-span-4 space-y-8">
              {/* Mevzuat Kartı */}
              <div className="rounded-2xl border border-card-border bg-card p-6 shadow-xs">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-accent">
                  <BookOpen className="h-4 w-4" />
                  <span>Temel Yasal Dayanaklar</span>
                </div>
                <ul className="mt-4 space-y-2.5 text-xs text-fg-muted">
                  {area.legislation.map((leg) => (
                    <li key={leg} className="rounded-lg bg-bg-alt/70 px-3 py-2 text-fg">
                      {leg}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Randevu & İletişim Kartı */}
              <div className="rounded-2xl border border-accent/30 bg-accent-subtle/30 p-7 text-center">
                <Shield className="mx-auto h-8 w-8 text-accent" />
                <h4 className="mt-4 font-serif text-xl font-medium text-fg">
                  Görüşme ve Ön İnceleme
                </h4>
                <p className="mt-2 text-xs leading-relaxed text-fg-muted">
                  {area.title} kapsamındaki dosyanız için büromuzdan ön görüşme randevusu alabilirsiniz.
                </p>
                <a
                  href={lawyer.phoneHref}
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-accent py-3.5 text-xs font-semibold uppercase tracking-wider text-white shadow-md hover:bg-bronze-light transition-all"
                >
                  <Phone className="h-4 w-4" />
                  <span>{lawyer.phoneDisplay}</span>
                </a>
                <Link
                  href="/iletisim"
                  className="mt-3 block text-xs font-medium text-accent hover:underline"
                >
                  Yol Tarifi ve İletişim &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
