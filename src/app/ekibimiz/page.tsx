import type { Metadata } from "next";
import { fullName, lawyer } from "@/lib/lawyer";
import { PageHero } from "@/components/motion";
import { TeamSection } from "@/components/team-section";
import { ContactCtaBanner } from "@/components/home";

export const metadata: Metadata = {
  title: "Hukuk Kadromuz & Ekibimiz",
  description: `Av. ${fullName} Hukuk Bürosu ekibi — avukatlar, stajyerler ve idari kadromuzun uzmanlık alanları ve mesleki profilleri.`,
};

export default function TeamPage() {
  return (
    <main>
      <PageHero
        badge="Hukuk Kadromuz"
        title="Büro Ekibimiz ve "
        highlight="Uzmanlık Alanları"
        description="Farklı hukuki disiplinlerde yetkin, müvekkillerimizin uyuşmazlıklarında dinamik ve koordineli temsil sunan hukuk kadromuz."
        image="/images/columns-shadow.jpg"
      />

      <TeamSection />

      <ContactCtaBanner />
    </main>
  );
}
