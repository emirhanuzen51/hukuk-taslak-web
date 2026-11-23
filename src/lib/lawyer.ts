// Uluslararası Hukuk Bürosu Kurumsal Taslak Bilgileri (Demo / Şablon Sunumu)
// Örnek tanıtım amacıyla hazırlanmıştır. Gerçek şahıs veya telefon bilgisi içermez.

export const lawyer = {
  firstName: "Alexander",
  lastName: "Vance",
  title: "Uluslararası Hukuk & Danışmanlık Bürosu",
  tagline: "Uluslararası Ticaret, Tahkim & Danışmanlık · Zürih & Londra",
  bar: "Uluslararası Barolar Birliği (IBA) & ASA",
  barNo: "CH-8001-DEMO",
  startYear: "2015",
  university: "Zürih Üniversitesi & LSE Uluslararası Hukuk",
  graduationYear: "2014",
  languages: ["Türkçe", "İngilizce", "Almanca"],
  academic: "Sınır Ötesi Ticaret & Uluslararası Tahkim Uzmanlığı",
  city: "Zürih",
  district: "Uluslararası Finans Merkezi",
  // Uluslararası temsil adresi (İsviçre / Zürih)
  address: "Bahnhofstrasse 45, 8001 Zürih, İsviçre",
  mapsQuery: "Bahnhofstrasse 45, 8001 Zurich, Switzerland",
  // Temsili / geçersiz kurgusal telefon numaraları (Kimseye ait değildir)
  phoneDisplay: "+41 44 555 01 92",
  phoneHref: "tel:+41445550192",
  mobileDisplay: "+44 20 7946 0192",
  mobileHref: "tel:+442079460192",
  whatsappHref: "https://wa.me/41445550192",
  email: "contact@vancelegal-demo.com",
  kep: "taslak@hs01.demo.ch",
  hours: "Hafta içi 09:00 – 18:00 (GMT+1 / Randevu ile)",
  site: "https://vance-legal-template.vercel.app",
  shortBio: "Zürih ve Londra merkezli; Sınır Ötesi Ticaret, Şirket Birleşmeleri, Uluslararası Tahkim ve Küresel Sözleşmeler Hukuku alanlarında bağımsız ve kurumsal danışmanlık hizmeti sunan örnek hukuk bürosu web taslağı.",
} as const;

export const fullName = `${lawyer.firstName} ${lawyer.lastName}`;
export const initials = "VP";

export const slugName = fullName
  .toLocaleLowerCase("tr-TR")
  .replace(/ı/g, "i").replace(/ğ/g, "g").replace(/ü/g, "u").replace(/ş/g, "s").replace(/ö/g, "o").replace(/ç/g, "c")
  .normalize("NFD").replace(/[̀-ͯ]/g, "")
  .replace(/[^a-z0-9]+/g, "-");

export const nav = [
  { href: "/hakkimda", label: "Hakkımızda" },
  { href: "/ekibimiz", label: "Kadromuz" },
  { href: "/calisma-alanlari", label: "Çalışma Alanları" },
  { href: "/hukuki-bilgiler", label: "Hukuki Bilgiler" },
  { href: "/iletisim", label: "İletişim" },
];
