import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Clock, ShieldAlert } from "lucide-react";
import { articles, findArticle } from "@/lib/articles";
import { fullName, lawyer } from "@/lib/lawyer";
import { PageHero, SectionBadge } from "@/components/motion";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = findArticle(slug);
  if (!article) return { title: "Yazı Bulunamadı" };
  return {
    title: `${article.title} | Av. ${fullName}`,
    description: article.excerpt,
  };
}

export default async function ArticleDetailPage({ params }: Props) {
  const { slug } = await params;
  const article = findArticle(slug);

  if (!article) {
    notFound();
  }

  return (
    <main>
      <PageHero
        badge={article.category}
        title={article.title}
        description={article.excerpt}
      />

      <section className="py-20 sm:py-28 bg-bg">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <div className="mb-8 flex items-center justify-between border-b border-line pb-6 text-xs text-fg-muted">
            <Link
              href="/hukuki-bilgiler"
              className="inline-flex items-center gap-2 font-medium hover:text-accent transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Tüm Yazılara Dön</span>
            </Link>
            <div className="flex items-center gap-4">
              <span>{article.date}</span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <Clock className="h-3 w-3" />
                {article.readTime}
              </span>
            </div>
          </div>

          {/* Makale Gövdesi */}
          <article className="prose-executive">
            {article.body.map((block, idx) => (
              <div key={idx}>
                {block.h && <h2>{block.h}</h2>}
                {block.p && <p>{block.p}</p>}
                {block.list && (
                  <ul>
                    {block.list.map((item, lIdx) => (
                      <li key={lIdx}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </article>

          {/* Yazar ve Sorumluluk Reddi Beyanı */}
          <div className="mt-16 rounded-2xl border border-card-border bg-card p-8">
            <div className="flex items-center gap-3">
              <ShieldAlert className="h-5 w-5 text-accent shrink-0" />
              <h4 className="font-serif text-lg font-medium text-fg">Yasal Çekince</h4>
            </div>
            <p className="mt-2 text-xs leading-relaxed text-fg-muted">
              Bu makale, yayımlandığı tarih itibarıyla yürürlükte bulunan mevzuat ve içtihatlar dikkate alınarak genel bilgilendirme amacıyla hazırlanmıştır. Hukuk kuralları somut olayın özelliklerine göre farklı sonuçlar doğurabileceğinden, somut uyuşmazlığınız hakkında bir avukata danışmanız önerilir.
            </p>
            <div className="mt-6 border-t border-line pt-4 text-xs text-fg-muted">
              Yazar: <strong className="text-fg">Av. {fullName}</strong> ({lawyer.bar})
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
