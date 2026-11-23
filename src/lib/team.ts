// Uluslararası Hukuk Bürosu Kadrosu ve Çalışan Bilgileri (Taslak / Demo)
// Temsili profillerdir, gerçek kişileri temsil etmez.

export interface TeamMember {
  id: string;
  name: string;
  title: string;
  role: "Kurucu Avukat" | "Avukat" | "Stajyer Avukat" | "İdari Kadro";
  bar?: string;
  education: string;
  graduationYear?: string;
  languages: string[];
  areasOfFocus: string[];
  bio: string;
  email: string;
  phone?: string;
  image?: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: "alexander-vance",
    name: "Dr. Av. Alexander Vance",
    title: "Yönetici Ortak & Tahkim Hakemi",
    role: "Kurucu Avukat",
    bar: "IBA & İsviçre Barolar Birliği",
    education: "Zürih Üniversitesi & LSE Uluslararası Hukuk (LL.M.)",
    graduationYear: "2014",
    languages: ["Türkçe", "İngilizce", "Almanca"],
    areasOfFocus: [
      "Uluslararası Ticari Tahkim (ICC / LCIA)",
      "Sınır Ötesi Şirket Birleşmeleri & Devralmalar",
      "Stratejik Uyuşmazlık Çözümü",
      "Çok Uluslu Ticaret Sözleşmeleri",
      "Yabancı Yatırım & Varlık Koruma",
    ],
    bio: "Zürih ve Londra merkezli sınır ötesi ticari davalarda, uluslararası tahkim süreçlerinde ve çok uluslu yatırım uyuşmazlıklarında 10 yılı aşkın tecrübesiyle kurumsal müvekkillere stratejik hukuki danışmanlık sunmaktadır.",
    email: "a.vance@vancelegal-demo.com",
  },
  {
    id: "elena-rostova",
    name: "Av. Elena Rostova",
    title: "Kıdemli Ortak Avukat",
    role: "Avukat",
    bar: "Londra Hukuk Cemiyeti (Law Society)",
    education: "London School of Economics (LSE) Hukuk Fakültesi",
    graduationYear: "2017",
    languages: ["Türkçe", "İngilizce", "Fransızca"],
    areasOfFocus: [
      "Uluslararası Şirketler & Finans Hukuku",
      "Fintech ve Dijital Varlık Düzenlemeleri",
      "Sınır Ötesi Vergi & Yapılandırma",
      "Uluslararası Ticaret & İhracat Hukuku",
    ],
    bio: "LSE mezuniyeti sonrasında Londra ve Zürih finans merkezlerinde çok uluslu şirketlerin yapılandırılması, yatırım fonu regülasyonları ve sınır ötesi finansman anlaşmalarında uzmanlaşmıştır.",
    email: "e.rostova@vancelegal-demo.com",
  },
  {
    id: "marcus-sterling",
    name: "Av. Marcus Sterling",
    title: "Ortak Avukat & Arabulucu",
    role: "Avukat",
    bar: "Cenevre Barosu",
    education: "Cenevre Üniversitesi Hukuk Fakültesi",
    graduationYear: "2019",
    languages: ["Türkçe", "İngilizce", "Almanca"],
    areasOfFocus: [
      "Uluslararası Ticari Arabuluculuk",
      "Deniz Ticareti & Lojistik Uyuşmazlıkları",
      "Fikri Mülkiyet & Uluslararası Patent (WIPO)",
      "Gayrimenkul Yatırımı & Fon Yönetimi",
    ],
    bio: "Cenevre ve Zürih merkezli ticari uyuşmazlıkların mahkeme öncesi arabuluculuk yoluyla çözümü, lojistik sözleşmeleri ve uluslararası marka/patent haklarının korunmasında aktiftir.",
    email: "m.sterling@vancelegal-demo.com",
  },
  {
    id: "daniel-becker",
    name: "Daniel Becker",
    title: "Kıdemli Hukuki Araştırmacı & Koordinatör",
    role: "İdari Kadro",
    education: "Frankfurt Goethe Üniversitesi Hukuk & Ekonomi",
    graduationYear: "2021",
    languages: ["İngilizce", "Almanca", "Türkçe"],
    areasOfFocus: [
      "Uluslararası Tahkim Dosya Hazırlığı",
      "Küresel Mevzuat ve İçtihat Taraması",
      "Müvekkil İletişimi & Dava Takvim Yönetimi",
    ],
    bio: "Büromuz nezdinde yürütülen sınır ötesi tahkim ve şirketler hukuku dosyalarının mevzuat taraması, yabancı içtihat araştırması ve operasyonel koordinasyonunu sağlamaktadır.",
    email: "d.becker@vancelegal-demo.com",
  },
];
