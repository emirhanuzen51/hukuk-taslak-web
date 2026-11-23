import type { Metadata } from "next";
import { fullName, lawyer } from "@/lib/lawyer";
import { PageHero } from "@/components/motion";

export const metadata: Metadata = {
  title: "KVKK Aydınlatma Metni",
  description: `Av. ${fullName} — 6698 Sayılı Kişisel Verilerin Korunması Kanunu Kapsamında Aydınlatma Metni.`,
};

export default function KvkkPage() {
  return (
    <main>
      <PageHero
        badge="Yasal Bildirim"
        title="KVKK "
        highlight="Aydınlatma Metni"
        description="6698 sayılı Kişisel Verilerin Korunması Kanunu gereğince veri sorumlusu sıfatıyla bilgilendirme."
      />

      <section className="py-20 sm:py-28 bg-bg">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <div className="prose-executive rounded-2xl border border-card-border bg-card p-8 sm:p-12 shadow-xs">
            <div className="mb-6 rounded-xl border border-accent/40 bg-accent-subtle/40 p-4 text-xs leading-relaxed text-accent">
              <strong>Önemli Bilgilendirme:</strong> Bu web sitesi, kurumsal hukuk büroları ve avukatlar için hazırlanmış <strong>taslak / demo sunum şablonudur</strong>. Sayfada yer alan tüm iletişim bilgileri, adresler ve isimler temsilidir.
            </div>

            <p>
              6698 sayılı Kişisel Verilerin Korunması Kanunu (&quot;KVKK&quot;) ve GDPR uyarınca, veri sorumlusu sıfatıyla Av. {fullName} tarafından kişisel verileriniz aşağıda belirtilen amaç ve hukuki sebepler doğrultusunda işlenmektedir.
            </p>

            <h2>1. İşlenen Kişisel Veriler</h2>
            <p>
              İletişim kanallarımız (telefon, e-posta, iletişim formu, KEP) aracılığıyla ilettiğiniz ad-soyad, telefon numarası, e-posta adresi ve uyuşmazlığa dair paylaştığınız ön bilgiler.
            </p>

            <h2>2. İşleme Amaçları ve Hukuki Sebepler</h2>
            <ul>
              <li>İletişim ve randevu taleplerinin değerlendirilmesi ve geri dönüş sağlanması,</li>
              <li>Avukatlık Kanunu m.36 gereğince mesleki sır saklama yükümlülüğü çerçevesinde kayıt tutulması,</li>
              <li>Hukuki ve yasal yükümlülüklerin yerine getirilmesi.</li>
            </ul>

            <h2>3. Verilerin Aktarımı ve Güvenliği</h2>
            <p>
              Kişisel verileriniz, kanuni zorunluluklar veya yargı mercilerinin resmi talepleri haricinde üçüncü şahıslarla, reklam veya pazarlama şirketleriyle kesinlikle paylaşılmaz. Verileriniz mesleki gizlilik ve teknik güvenlik tedbirleriyle muhafaza edilir.
            </p>

            <h2>4. İlgili Kişi Olarak Haklarınız</h2>
            <p>
              KVKK&apos;nın 11. maddesi uyarınca veri sahipleri; kişisel verilerinin işlenip işlenmediğini öğrenme, işlenmişse buna ilişkin bilgi talep etme ve silinmesini isteme hakkına sahiptir. Başvurularınızı {lawyer.address} adresine yazılı olarak veya {lawyer.kep} KEP adresine iletebilirsiniz.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
