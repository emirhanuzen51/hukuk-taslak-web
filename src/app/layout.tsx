import type { Metadata, Viewport } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { fullName, lawyer } from "@/lib/lawyer";
import { areas } from "@/lib/areas";
import { Footer, Header } from "@/components/chrome";
import { SmoothScroll } from "@/components/motion";
import { ModalProvider } from "@/components/modal-context";

const playfair = Playfair_Display({
  subsets: ["latin", "latin-ext"],
  variable: "--font-playfair",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin", "latin-ext"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(lawyer.site),
  title: {
    default: `Av. ${fullName} | ${lawyer.city} Hukuk & Danışmanlık`,
    template: `%s | Av. ${fullName}`,
  },
  description: `Av. ${fullName} — ${lawyer.bar}. Mesleki bilgiler, hukuki çalışma alanları ve iletişim detayları.`,
  openGraph: {
    locale: "tr_TR",
    type: "website",
    siteName: `Av. ${fullName} Hukuk Bürosu`,
  },
};

export const viewport: Viewport = {
  themeColor: "#090d14",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Attorney",
  name: `Av. ${fullName}`,
  telephone: lawyer.phoneDisplay,
  email: lawyer.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: lawyer.address,
    addressLocality: lawyer.city,
    addressCountry: "TR",
  },
  knowsAbout: areas.map((a) => a.title),
};

const themeScript = `try{var t=localStorage.getItem('avukat-theme');document.documentElement.dataset.theme=t==='dark'?'dark':'light'}catch(e){}`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="tr"
      data-theme="light"
      suppressHydrationWarning
      className={`${playfair.variable} ${jakarta.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ModalProvider>
          <SmoothScroll />
          <Header />
          {children}
          <Footer />
        </ModalProvider>
      </body>
    </html>
  );
}
