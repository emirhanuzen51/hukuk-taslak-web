import type { Metadata } from "next";
import { fullName } from "@/lib/lawyer";
import { PageHero } from "@/components/motion";

export const metadata: Metadata = {
  title: "Çerez Politikası",
  description: `Av. ${fullName} — İnternet Sitesi Çerez ve Yerel Depolama Politikası.`,
};

export default function CookiePolicyPage() {
  return (
    <main>
      <PageHero
        badge="Gizlilik"
        title="Çerez "
        highlight="Politikası"
        description="İnternet sitemizde kullanılan çerezler ve tarayıcı depolama tercihleri hakkında bilgilendirme."
      />

      <section className="py-20 sm:py-28 bg-bg">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <div className="prose-executive rounded-2xl border border-card-border bg-card p-8 sm:p-12 shadow-xs">
            <p>
              Bu internet sitesi, kullanıcı deneyimini optimize etmek için yalnızca teknik olarak zorunlu ve işlevsel çerezleri / yerel depolama özelliklerini kullanmaktadır. Reklam veya üçüncü taraf hedefleme çerezleri barındırmaz.
            </p>

            <h2>1. Tarayıcı Yerel Depolaması (Local Storage)</h2>
            <p>
              Sitede yalnızca temanın (açık veya koyu mod tercihi) tarayıcınız tarafından hatırlanması amacıyla küçük bir ayar anahtarı tutulur. Bu veri kişisel kimlik tespitine elverişli bilgi içermez ve sunucularımıza iletilmez.
            </p>

            <h2>2. Üçüncü Taraf Eklentiler</h2>
            <p>
              İletişim sayfasında yer alan konum haritası Google Haritalar (Google LLC) altyapısıyla çalışmakta olup, anılan hizmet Google&apos;ın kendi gizlilik ve çerez kurallarına tabidir.
            </p>

            <h2>3. Çerezleri Devre Dışı Bırakma</h2>
            <p>
              Tarayıcınızın ayarlarından yerel depolama ve çerez izinlerini dilediğiniz zaman sınırlandırabilir veya tamamen temizleyebilirsiniz.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
