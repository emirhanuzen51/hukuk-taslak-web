import type { Metadata } from "next";
import { Clock, Mail, MapPin, Navigation, Phone, ShieldCheck, Smartphone } from "lucide-react";
import { fullName, lawyer } from "@/lib/lawyer";
import { PageHero, SectionBadge } from "@/components/motion";
import { VCardButton } from "@/components/chrome";
import { ContactCtaBanner } from "@/components/home";

export const metadata: Metadata = {
  title: "İletişim & Randevu",
  description: `Av. ${fullName} — büro adresi, telefon numaraları, e-posta, KEP adresi ve randevu bilgileri.`,
};

export default function ContactPage() {
  const contactItems = [
    {
      icon: MapPin,
      title: "Büro Adresi",
      val: lawyer.address,
      link: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(lawyer.address)}`,
      linkText: "Haritada Aç / Yol Tarifi",
    },
    {
      icon: Phone,
      title: "Sabit Hat",
      val: lawyer.phoneDisplay,
      link: lawyer.phoneHref,
      linkText: "Hemen Ara",
    },
    {
      icon: Smartphone,
      title: "Mobil / WhatsApp",
      val: lawyer.mobileDisplay,
      link: lawyer.whatsappHref,
      linkText: "WhatsApp İle Yazın",
    },
    {
      icon: Mail,
      title: "E-Posta",
      val: lawyer.email,
      link: `mailto:${lawyer.email}`,
      linkText: "E-Posta Gönder",
    },
    {
      icon: ShieldCheck,
      title: "Kayıtlı Elektronik Posta (KEP)",
      val: lawyer.kep,
      linkText: "Resmi Tebligat Adresi",
    },
    {
      icon: Clock,
      title: "Danışmanlık Saatleri",
      val: lawyer.hours,
      linkText: "Önceden Randevu Alınız",
    },
  ];

  return (
    <main>
      <PageHero
        badge="Ulaşım & Randevu"
        title="Büro İletişim "
        highlight="ve Randevu"
        description="Görüşmeler randevu esasına göre gerçekleştirilmektedir. Aşağıdaki kanallardan büromuza ulaşabilirsiniz."
        image="/images/neoclassical.jpg"
      />

      <section className="py-24 sm:py-32 bg-bg">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-14 lg:grid-cols-12">
            {/* Sol: İletişim Kartları Listesi */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <SectionBadge number="01">Resmi Kanallar</SectionBadge>
                <h2 className="mt-4 font-serif text-3xl font-normal text-fg">
                  Büro İletişim Bilgileri
                </h2>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {contactItems.map((item) => (
                  <div
                    key={item.title}
                    className="flex flex-col justify-between rounded-2xl border border-card-border bg-card p-6 shadow-xs"
                  >
                    <div>
                      <item.icon className="h-5 w-5 text-accent" />
                      <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-fg-muted">
                        {item.title}
                      </p>
                      <p className="mt-1 font-serif text-lg font-medium text-fg">
                        {item.val}
                      </p>
                    </div>

                    {item.link ? (
                      <a
                        href={item.link}
                        target={item.link.startsWith("http") ? "_blank" : undefined}
                        rel={item.link.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-accent hover:underline"
                      >
                        <span>{item.linkText}</span>
                        &rarr;
                      </a>
                    ) : (
                      <span className="mt-4 text-xs text-fg-muted">
                        {item.linkText}
                      </span>
                    )}
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-4">
                <VCardButton />
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(lawyer.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-card-border bg-card px-5 py-2.5 text-xs font-medium uppercase tracking-wider text-fg transition-all hover:border-accent hover:text-accent"
                >
                  <Navigation className="h-3.5 w-3.5" />
                  <span>Google Haritalar&apos;da Aç</span>
                </a>
              </div>
            </div>

            {/* Sağ: Harita Önizleme */}
            <div className="lg:col-span-6">
              <div className="h-full min-h-[420px] overflow-hidden rounded-3xl border border-card-border bg-card shadow-lg">
                <iframe
                  title="Büro Konumu"
                  src={`https://www.google.com/maps?q=${encodeURIComponent(lawyer.mapsQuery)}&output=embed`}
                  className="h-full w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Randevu Formu Modülü */}
      <ContactCtaBanner />
    </main>
  );
}
