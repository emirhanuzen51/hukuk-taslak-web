// Hukuki Bilgilendirme Makaleleri
// NOT: Bu yazılar genel bilgilendirme amacıyla hazırlanmıştır; somut olaya özgü danışmanlık teşkil etmez.

export type Article = {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  minutes: number;
  date: string;
  readTime: string;
  body: { h?: string; p?: string; list?: string[] }[];
};

export const articles: Article[] = [
  {
    slug: "zamanasimi-ve-hak-dusurucu-sure-farki",
    title: "Zamanaşımı ile Hak Düşürücü Süre Arasındaki Hukuki Farklar",
    category: "Genel Hukuk & Usul",
    excerpt: "Hukuki uyuşmazlıklarda sürelere riayet edilmemesi davanın reddedilmesine neden olabilir. İki temel kavramın karşılaştırmalı analizi.",
    minutes: 4,
    readTime: "4 dk okuma",
    date: "10 Ekim 2026",
    body: [
      {
        p: "Hukuk sisteminde süreler, kişilerin süresiz bir hukuki belirsizlik altında kalmasını önlemek ve adli istikrarı sağlamak amacıyla katı kurallara bağlanmıştır. Hak sahiplerinin haklarını kullanabilecekleri süreler temelde iki farklı hukuki müessese ile düzenlenir: Zamanaşımı ve Hak Düşürücü Süre."
      },
      {
        h: "Zamanaşımı Müessesesinin Özellikleri",
        p: "Zamanaşımı, hakkın özünü tamamen ortadan kaldırmaz. Sürenin dolması durumunda hak bir 'eksik borç' haline gelir. Borçlu, usulüne uygun şekilde zamanaşımı def'ini ileri sürerse borcu ifa etmekten kaçınabilir."
      },
      {
        list: [
          "Zamanaşımı hakim tarafından re'sen (kendiliğinden) dikkate alınamaz; davalı tarafın açıkça ileri sürmesi gerekir.",
          "Belirli hukuki olaylarla (dava açılması, icra takibi, borcun ikrar edilmesi) zamanaşımı kesilebilir veya durabilir.",
          "Zamanaşımına uğramış bir borç isteyerek ödenirse, bu ödeme hukuken geçerlidir ve geri istenemez."
        ]
      },
      {
        h: "Hak Düşürücü Sürenin Hukuki Niteliği",
        p: "Hak düşürücü süre ise hakkın varlığı için kanunun tanıdığı kesin bir yaşam süresidir. Bu süre dolduğunda hakkın kendisi tamamen son bulur."
      },
      {
        list: [
          "Hakim, davanın her aşamasında hak düşürücü süreyi taraflar ileri sürmese dahi kendiliğinden gözetmek zorundadır.",
          "Kural olarak durması veya kesilmesi söz konusu değildir.",
          "Sürenin geçmesi durumunda davanın esasına girilmeksizin usulden reddine karar verilir."
        ]
      },
      {
        h: "Uygulamada Dikkat Edilmesi Gereken Hususlar",
        p: "Uyuşmazlık konusu alacak veya talebin zamanaşımına mı yoksa hak düşürücü süreye mi tabi olduğu doğru tayin edilmelidir. Dava açmadan veya yasal yollara başvurmadan önce hak kayıplarının önlenmesi adına sürelerin hassasiyetle denetlenmesi gerekir."
      }
    ]
  },
  {
    slug: "kira-uyusmazliklarinda-zorunlu-arabuluculuk-ve-tahliye",
    title: "Kira Uyuşmazlıklarında Dava Şartı Arabuluculuk ve Tahliye Süreci",
    category: "Gayrimenkul Hukuku",
    excerpt: "7445 sayılı Kanun ile kira hukukunda getirilen zorunlu arabuluculuk şartı, başvuru usulü ve tahliye davalarındaki pratik aşamalar.",
    minutes: 5,
    readTime: "5 dk okuma",
    date: "18 Eylül 2026",
    body: [
      {
        p: "Kira ilişkilerinden kaynaklanan uyuşmazlıkların adli merciler önünde yarattığı yoğunluğu azaltmak ve tarafları barışçıl çözümlere teşvik etmek amacıyla kira davalarında arabuluculuk dava şartı haline getirilmiştir."
      },
      {
        h: "Hangi Kira Davaları Arabuluculuğa Tabidir?",
        p: "İcra ve İflas Kanunu uyarınca ilamsız icra yoluyla tahliye takipleri hariç olmak üzere, Sulh Hukuk Mahkemelerinde açılacak hemen hemen tüm kira uyuşmazlıkları arabuluculuğa tabidir."
      },
      {
        list: [
          "Kira bedelinin tespiti ve kira uyarlama davaları",
          "İhtiyaç sebebiyle tahliye davaları",
          "Yazılı tahliye taahhüdüne dayalı tahliye davaları",
          "Depozito ve aidat uyuşmazlıkları"
        ]
      },
      {
        h: "Arabuluculuk Yapılmadan Dava Açılırsa Ne Olur?",
        p: "Arabuluculuk son tutanağı eklenmeksizin açılan davalarda mahkeme, herhangi bir duruşma dahi yapmaksızın davanın dava şartı yokluğu sebebiyle usulden reddine karar verir."
      },
      {
        h: "Süreç Nasıl İlerler?",
        p: "Arabuluculuk bürosuna yapılan başvurunun ardından arabulucu taraflarla iletişime geçerek müzakere oturumu düzenler. Anlaşma sağlanamaması durumunda düzenlenen 'Son Tutanak' ile birlikte yasal süresi içinde yetkili Sulh Hukuk Mahkemesinde dava ikame edilebilir."
      }
    ]
  },
  {
    slug: "is-sozlesmesinin-feshinde-kulluk-ve-ihbar-haklari",
    title: "İş Sözleşmesinin Feshinde Kıdem ve İhbar Tazminatı Şartları",
    category: "İş Hukuku",
    excerpt: "4857 sayılı İş Kanunu kapsamında fesih türleri, haklı neden ile geçerli neden ayrımı ve işçilik alacaklarının hesaplanma parametreleri.",
    minutes: 6,
    readTime: "6 dk okuma",
    date: "05 Ağustos 2026",
    body: [
      {
        p: "İş hukukunun temel felsefesi olan işçinin korunması ilkesi, iş sözleşmesinin sona ermesi aşamasında kıdem ve ihbar tazminatı hükümleriyle somutlaşır. Hak kaybına uğramamak için fesih bildiriminin hukuki dayanağı iyi anlaşılmalıdır."
      },
      {
        h: "Kıdem Tazminatına Hak Kazanma Koşulları",
        p: "Bir çalışanın kıdem tazminatına hak kazanabilmesi için öncelikle aynı işverenin işyerlerinde en az 1 tam yıl kesintisiz çalışmış olması şarttır."
      },
      {
        list: [
          "İşverenin İş Kanunu m.25/II (Ahlak ve iyi niyet kurallarına aykırılık) haricindeki sebeplerle sözleşmeyi feshetmesi",
          "İşçinin haklı nedenle (ücretin ödenmemesi, mobbing, sağlık koşulları vb.) derhal feshi",
          "Emeklilik, askerlik veya kadın işçinin evlilik tarihinden itibaren 1 yıl içinde istifası",
          "İşçinin vefatı durumunda kanuni mirasçılarına ödenmesi"
        ]
      },
      {
        h: "İhbar Tazminatı ve Önelli Fesih",
        p: "Belirsiz süreli iş sözleşmelerinde fesih öncesinde kanunda kıdeme göre öngörülen bildirim sürelerine (2 ila 8 hafta) uyulması zorunludur. Bu sürelere uymaksızın işten çıkaran taraf, karşı tarafa ihbar tazminatı ödemekle yükümlüdür."
      },
      {
        h: "Arabuluculuk ve Zamanaşımı",
        p: "İşçilik alacakları ve tazminat taleplerinde dava açmadan önce arabulucuya başvuru dava şartıdır. Kıdem ve ihbar tazminatında zamanaşımı süresi fesih tarihinden itibaren 5 yıldır."
      }
    ]
  }
];

export const findArticle = (slug: string) => articles.find((a) => a.slug === slug);
