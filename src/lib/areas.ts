// Hukuki Çalışma Alanları Kataloğu
// TBB Reklam Yasağı m.7: Yalnızca fiilen yürütülen alanların bilgilendirme amaçlı listesidir.

export type AreaCategory = "Özel Hukuk" | "Kamu Hukuku" | "Ceza & Yargılama" | "Şirket & Ticaret";

export type Area = {
  slug: string;
  title: string;
  category: AreaCategory;
  lead: string;
  description: string;
  topics: string[];
  legislation: string[];
  processSummary: string[];
  image: string;
};

export const areas: Area[] = [
  {
    slug: "ceza-hukuku",
    title: "Ceza Hukuku",
    category: "Ceza & Yargılama",
    lead: "Soruşturma ve kovuşturma evrelerinde şüpheli, sanık müdafiliği ve mağdur / müşteki vekilliği.",
    description: "Ceza muhakemesi sürecinde kişi özgürlüğü ve güvenlik hakkının korunması, adil yargılanma ilkesi çerçevesinde delillerin hukuka uygunluğunun denetimi ve kanun yolları başvuruları titizlikle yürütülür.",
    topics: [
      "Gözaltı, ifade ve sorgu işlemleri",
      "Tutuklama kararına itiraz ve tahliye talepleri",
      "Ağır Ceza ve Asliye Ceza Mahkemesi davaları",
      "İstinaf, Temyiz ve Yargıtay kanun yolları",
      "Uzlaştırma ve infaz hukuku süreçleri"
    ],
    legislation: ["Türk Ceza Kanunu (5237)", "Ceza Muhakemesi Kanunu (5271)", "İnfaz Kanunu (5275)"],
    processSummary: [
      "Dosya evraklarının adliyeden/UYAP üzerinden temini ve analizi",
      "Müvekkil ile görüşme ve savunma kurgusunun oluşturulması",
      "Hukuka aykırı delillerin tespiti ve savunma layihasının sunulması",
      "Duruşma temsili ve karara karşı kanun yolu başvuruları"
    ],
    image: "/images/facade-sky.jpg",
  },
  {
    slug: "gayrimenkul-ve-kira-hukuku",
    title: "Gayrimenkul ve Kira Hukuku",
    category: "Özel Hukuk",
    lead: "Taşınmaz mülkiyeti, kira sözleşmeleri, tahliye davaları ve tapu iptal-tescil uyuşmazlıkları.",
    description: "Taşınmazlara ilişkin her türlü alım-satım, ayni hak tesisi, kira ilişkileri ve kat mülkiyeti uyuşmazlıklarında güncel mevzuat ve Yargıtay içtihatları doğrultusunda kapsamlı hukuki destek sunulmaktadır.",
    topics: [
      "Kira bedeli tespiti ve kira uyarlama davaları",
      "İhtiyaç, tahliye taahhüdü ve temerrüt nedeniyle tahliye",
      "Tapu iptali ve tescil davaları (Muris muvazaası vb.)",
      "Kat mülkiyeti ve yönetim planı uyuşmazlıkları",
      "Ortaklığın giderilmesi (İzale-i Şüyu) davaları"
    ],
    legislation: ["Türk Borçlar Kanunu (Kira Hükümleri)", "Türk Medeni Kanunu (Eşya Hukuku)", "Kat Mülkiyeti Kanunu (634)"],
    processSummary: [
      "Sözleşme ve tapu kayıtlarının incelenmesi",
      "Zorunlu arabuluculuk sürecinin yürütülmesi",
      "İhtarname tanzimi ve yasal sürelerin takibi",
      "Sulh Hukuk veya Asliye Hukuk Mahkemesinde dava açılması"
    ],
    image: "/images/neoclassical.jpg",
  },
  {
    slug: "is-ve-sosyal-guvenlik-hukuku",
    title: "İş ve Sosyal Güvenlik Hukuku",
    category: "Özel Hukuk",
    lead: "İşçi ve işveren hakları, kıdem-ihbar tazminatları, işe iade ve iş kazası tazminat davaları.",
    description: "İşçi ve işveren tarafları arasındaki bireysel veya toplu iş sözleşmelerinin tanzimi, iş sözleşmesinin feshinden doğan uyuşmazlıkların arabuluculuk ve dava aşamalarında takibi gerçekleştirilir.",
    topics: [
      "Kıdem, ihbar, fazla mesai ve UBGT alacakları",
      "Geçersiz fesih ve işe iade davaları",
      "Hizmet tespiti ve sigortalılık süresi davaları",
      "İş kazası ve meslek hastalığı maddi-manevi tazminat",
      "İş sözleşmeleri ve personel yönetmeliklerinin hazırlanması"
    ],
    legislation: ["İş Kanunu (4857)", "İş Mahkemeleri Kanunu (7036)", "Sosyal Sigortalar ve Genel Sağlık Sigortası (5510)"],
    processSummary: [
      "Bordro, puantaj ve tanık delillerinin toplanması",
      "Dava şartı arabuluculuk müzakerelerinin yürütülmesi",
      "Bilirkişi hesap raporlarının denetimi ve itirazlar",
      "İstinaf ve Yargıtay denetimlerinin takibi"
    ],
    image: "/images/stairs.jpg",
  },
  {
    slug: "ticaret-ve-sirketler-hukuku",
    title: "Ticaret ve Şirketler Hukuku",
    category: "Şirket & Ticaret",
    lead: "Şirket kuruluşları, ticari sözleşmeler, alacak tahsili ve şirket ortakları arası uyuşmazlıklar.",
    description: "Ticari işletmelerin ve sermaye şirketlerinin kurumsal işleyişinde karşılaştıkları sözleşme risklerinin önlenmesi, alacak yönetimi ve şirketler arası uyuşmazlıkların çözümü amaçlanır.",
    topics: [
      "Ticari sözleşmelerin hazırlanması ve risk analizi",
      "Cari hesap ve fatura alacaklarının tahsili",
      "Kambiyo senetlerine (çek, bono, poliçe) özgü takipler",
      "Genel kurul kararlarının iptali davaları",
      "Haksız rekabet ve ticari sırrın korunması"
    ],
    legislation: ["Türk Ticaret Kanunu (6102)", "İcra ve İflas Kanunu (2004)", "Türk Borçlar Kanunu (6098)"],
    processSummary: [
      "Mevcut ticari sözleşmelerin denetimi",
      "İcra takibi ve önleyici haciz işlemleri",
      "Ticari arabuluculuk müzakere toplantıları",
      "Asliye Ticaret Mahkemesinde dava açılması"
    ],
    image: "/images/columns-shadow.jpg",
  },
  {
    slug: "aile-ve-miras-hukuku",
    title: "Aile ve Miras Hukuku",
    category: "Özel Hukuk",
    lead: "Anlaşmalı ve çekişmeli boşanma, nafaka, velayet, mal paylaşımı ve veraset davaları.",
    description: "Aile kurumunun hassasiyeti ve tarafların özel hayatının gizliliği gözetilerek; evlilik birliğinin sonlanması veya miras intikali süreçlerinde titiz, dengeli ve hakkaniyetli çözümler üretilir.",
    topics: [
      "Anlaşmalı ve çekişmeli boşanma davaları",
      "Maddi ve manevi tazminat, nafaka ve velayet",
      "Edinilmiş mallara katılma rejimi ve tasfiye",
      "Veraset ilamı, vasiyetname düzenleme ve tenkis davaları",
      "Miras taksim sözleşmeleri ve saklı pay uyuşmazlıkları"
    ],
    legislation: ["Türk Medeni Kanunu (Aile ve Miras Hükümleri)", "Hukuk Muhakemeleri Kanunu (6100)"],
    processSummary: [
      "Hassas ve gizlilik esasına dayalı ön görüşme",
      "Protokol hazırlığı (Anlaşmalı boşanma halinde)",
      "Finansal ve ayni delillerin toplanması",
      "Dava ve nafaka ara kararlarının icrası"
    ],
    image: "/images/library.jpg",
  },
  {
    slug: "idare-ve-vergi-hukuku",
    title: "İdare ve Vergi Hukuku",
    category: "Kamu Hukuku",
    lead: "İdari işlemlerin iptali, tam yargı (tazminat) davaları ve vergi cezalarına karşı itirazlar.",
    description: "Kamu kurumlarının hukuka aykırı işlem ve eylemleri sonucu hak kaybına uğrayan gerçek ve tüzel kişilerin hak arama yolları ve idari yargı denetimi yürütülmektedir.",
    topics: [
      "Hukuka aykırı idari işlemlerin iptali davaları",
      "İdarenin hizmet kusurundan doğan tam yargı davaları",
      "Memur ve kamu personeli disiplin cezalarına itiraz",
      "İmar planı ve kamulaştırmasız el atma davaları",
      "Vergi ve ceza ihbarnamelerine karşı iptal davaları"
    ],
    legislation: ["İdari Yargılama Usulü Kanunu (2577)", "Vergi Usul Kanunu (213)", "Kamulaştırma Kanunu (2942)"],
    processSummary: [
      "İdari merci tebligatının ve 60 günlük sürenin incelenmesi",
      "İdari başvuru (itiraz / düzeltme) evresi",
      "Yürütmenin durdurulması istemli dava dilekçesi",
      "Bölge İdare Mahkemesi ve Danıştay kanun yolları"
    ],
    image: "/images/library-ladder.jpg",
  },
];

export const findArea = (slug: string) => areas.find((a) => a.slug === slug);
