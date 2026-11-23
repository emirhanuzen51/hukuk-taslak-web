import { Hero } from "@/components/hero";
import {
  AboutLawyerSection,
  BarAccreditationBar,
  BentoPracticeAreas,
  ContactCtaBanner,
  InsightsSection,
  LegalFaqAccordion,
  ProcessTimeline,
  SignatureQuote,
} from "@/components/home";
import { CaseAssessmentWizard } from "@/components/case-wizard";
import { CourthouseGuide } from "@/components/courthouse-guide";
import { EmergencyLegalBanner } from "@/components/emergency-banner";
import { TeamSection } from "@/components/team-section";

export default function Home() {
  return (
    <main>
      {/* 1. Acil Ceza & İfade Durumu Bilgilendirme Şeridi */}
      <div className="pt-20 sm:pt-24">
        <EmergencyLegalBanner />
      </div>

      {/* 2. Kurumsal Giriş (İtibarlı, İnteraktif Arama & Doğrudan Hukuki Odak) */}
      <Hero />

      {/* 3. Baro ve Mesleki Esaslar */}
      <BarAccreditationBar />

      {/* 4. Hukuk Dalları ve Çalışma Alanları (Bento Grid) */}
      <BentoPracticeAreas />

      {/* 5. İnteraktif Hukuki Ön Değerlendirme & Talep Sihirbazı */}
      <CaseAssessmentWizard />

      {/* 6. Çalışma Metodolojisi ve Dava Süreci */}
      <ProcessTimeline />

      {/* 7. Meslek Beyanı ve Hukuki Titizlik İlkesi */}
      <SignatureQuote />

      {/* 8. Bölgesel Adliye, İcra ve Ulaşım Rehberi */}
      <CourthouseGuide />

      {/* 10. Sıkça Sorulan Hukuki Sorular */}
      <LegalFaqAccordion />

      {/* 11. Bizi Tanıyın (Avukat Profili & Mesleki Geçmiş) */}
      <AboutLawyerSection />

      {/* 12. Büro Kadromuz ve Çalışma Alanları */}
      <TeamSection />

      {/* 13. Hukuki Bilgilendirme ve Makaleler */}
      <InsightsSection />

      {/* 14. Doğrudan İletişim ve Randevu */}
      <ContactCtaBanner />
    </main>
  );
}
