import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen, GraduationCap, Scale, ShieldCheck } from "lucide-react";
import { fullName, lawyer } from "@/lib/lawyer";
import { FadeIn, PageHero, SectionBadge } from "@/components/motion";
import { VCardButton } from "@/components/chrome";

export const metadata: Metadata = {
  title: "Hakkımda",
  description: `Av. ${fullName} — mesleki özgeçmiş, baro kaydı, eğitim bilgileri ve çalışma prensipleri.`,
};

export default function AboutPage() {
  const milestones = [
    {
      year: lawyer.graduationYear,
      title: "Hukuk Fakültesi Mezuniyeti",
      detail: lawyer.university,
      icon: GraduationCap,
    },
    {
      year: lawyer.startYear,
      title: "Avukatlık Ruhsatı ve Baro Kaydı",
      detail: lawyer.bar,
      icon: Scale,
    },
    {
      year: "Günümüz",
      title: "Bağımsız Hukuki Danışmanlık ve Avukatlık",
      detail: `${lawyer.city} merkezli dosya takibi, dava ve önleyici danışmanlık`,
      icon: ShieldCheck,
    },
    {
      year: "Akademik",
      title: "Mesleki Eğitim ve İhtisas Çalışmaları",
      detail: lawyer.academic,
      icon: BookOpen,
    },
  ];

  const coreValues = [
    {
      title: "Mesleki Sır ve Gizlilik",
      desc: "Avukatlık Kanunu m.36 gereğince müvekkillerimizle paylaşılan her bilgi ve belge kesin bir sır saklama yükümlülüğü altındadır.",
    },
    {
      title: "Tam Bağımsızlık ve Tarafsızlık",
      desc: "Yargının kurucu unsurlarından olan bağımsız savunmayı, her türlü dış etkiden uzak, yalnızca hukuk ve vicdan temelinde temsil ederiz.",
    },
    {
      title: "Önleyici Hukuk Anlayışı",
      desc: "Uyuşmazlıklar ortaya çıkmadan önce sözleşmelerin ve risklerin analiz edilmesi, ileride doğabilecek telafisi güç zararları önler.",
    },
    {
      title: "Düzenli ve Şeffaf Raporlama",
      desc: "Müvekkillerimiz, dosyadaki her duruşma, ara karar ve resmi tebligat hakkında zamanında ve anlaşılır bir dille bilgilendirilir.",
    },
  ];

  return (
    <main>
      <PageHero
        badge="Özgeçmiş & İlkeler"
        title="Av. "
        highlight={fullName}
        description={`${lawyer.bar} bünyesinde, bağımsız ve etik değerlere bağlı avukatlık pratiği.`}
        image="/images/library-ladder.jpg"
      />

      {/* 1. Biyografi & Portre Bölümü */}
      <section className="py-24 sm:py-32 bg-bg">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-14 lg:grid-cols-12 lg:items-center">
            {/* Portre Görseli */}
            <div className="lg:col-span-5">
              <FadeIn>
                <div className="relative mx-auto max-w-md overflow-hidden rounded-3xl border border-card-border bg-card shadow-2xl">
                  <div className="relative aspect-[3/4]">
                    <Image
                      src="/images/columns-shadow.jpg"
                      alt="Vance & Partners Uluslararası Merkez"
                      fill
                      sizes="(min-width: 1024px) 40vw, 90vw"
                      className="object-cover object-center"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-obsidian/85 via-transparent to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-8 text-white">
                      <p className="font-serif text-2xl font-normal">Av. {fullName}</p>
                      <p className="text-xs uppercase tracking-widest text-accent mt-1">
                        {lawyer.tagline}
                      </p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Biyografi Metni */}
            <div className="lg:col-span-7">
              <SectionBadge number="01">Mesleki Profil</SectionBadge>
              <h2 className="mt-4 font-serif text-3xl font-normal sm:text-4xl text-fg">
                Hukuki Çözümde <span className="italic text-accent">Disiplin ve Özen</span>
              </h2>

              <div className="prose-executive mt-6 space-y-4">
                <p>
                  Av. {fullName}, {lawyer.university}&apos;nden mezun olmuş; uluslararası tahkim ve sınır ötesi ticaret hukuku alanında uzmanlaşarak {lawyer.bar}&apos;na kaydolmuştur. Mesleki faaliyetlerini {lawyer.city} ve Londra merkezli olarak sürdürmektedir.
                </p>
                <p>
                  Çalışmalarında; müvekkilin şeffaf bilgilendirilmesini, uluslararası sözleşmelerin tüm yönleriyle incelenmesini ve tahkim süreçlerinin titiz takibini esas alır. Her dosyanın kendine özgü küresel dinamikleri olduğu bilinciyle hareket eder.
                </p>
                <p>
                  Mesleki faaliyetlerini uluslararası etik ilkeler, IBA kuralları ve tam bağımsızlık çerçevesinde icra eder.
                </p>
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-4 border-t border-line pt-8">
                <VCardButton />
                <Link
                  href="/iletisim"
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-accent hover:underline"
                >
                  <span>Görüşme Randevusu Al</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Zaman Çizelgesi (Kariyer & Eğitim) */}
      <section className="border-y border-card-border bg-bg-alt/50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="max-w-2xl">
            <SectionBadge number="02">Eğitim & Baro</SectionBadge>
            <h2 className="mt-4 font-serif text-3xl font-normal sm:text-4xl text-fg">
              Mesleki <span className="italic text-accent">Gelişim Çizelgesi</span>
            </h2>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {milestones.map((m, idx) => (
              <FadeIn key={m.title} delay={idx * 0.1}>
                <div className="flex h-full flex-col justify-between rounded-2xl border border-card-border bg-card p-7 shadow-xs">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-sm font-semibold text-accent">
                        {m.year}
                      </span>
                      <m.icon className="h-5 w-5 text-accent" />
                    </div>
                    <h3 className="mt-4 font-serif text-lg font-medium text-fg">
                      {m.title}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-fg-muted">
                      {m.detail}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Mimari Görsel Bandı */}
      <section className="py-20 bg-bg">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-6 sm:grid-cols-3">
            <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-card-border">
              <Image src="/images/stairs.jpg" alt="" fill className="object-cover" />
            </div>
            <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-card-border">
              <Image src="/images/library.jpg" alt="" fill className="object-cover" />
            </div>
            <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-card-border">
              <Image src="/images/columns-shadow.jpg" alt="" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* 4. Temel Değerler ve Meslek İlkeleri */}
      <section className="border-t border-card-border py-24 sm:py-32 bg-bg-alt/30">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="max-w-2xl">
            <SectionBadge number="03">Mesleki Ahlak</SectionBadge>
            <h2 className="mt-4 font-serif text-3xl font-normal sm:text-4xl text-fg">
              Taviz Verilmeyen <span className="italic text-accent">Temel İlkeler</span>
            </h2>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {coreValues.map((val, idx) => (
              <FadeIn key={val.title} delay={idx * 0.1}>
                <div className="rounded-2xl border border-card-border bg-card p-8 shadow-xs">
                  <h3 className="font-serif text-xl font-medium text-fg">
                    {val.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-fg-muted">
                    {val.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
