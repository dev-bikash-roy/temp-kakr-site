<script setup>
import { computed, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { useSEO } from '~/composables/useSEO'

const { locale } = useI18n()
const { setSEO } = useSEO()

setSEO({
  title: 'Retail & E-commerce Web3 Infrastructure - Secure Payment Solutions | Kakr Labs',
  description: 'Web3 infrastructure for retail and e-commerce. Secure payment processing, loyalty programs, and supply chain solutions on Litecoin blockchain. Reduce fraud, increase customer trust.',
  keywords: ['retail blockchain', 'e-commerce Web3', 'retail infrastructure', 'blockchain payments', 'supply chain tracking', 'loyalty programs blockchain', 'retail security', 'payment processing'],
  type: 'service',
  image: '/retail-ecommerce-og.jpg',
  structuredData: [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Retail & E-commerce Web3 Infrastructure',
      description: 'Blockchain infrastructure solutions for retail and e-commerce businesses',
      provider: {
        '@type': 'Organization',
        name: 'Kakr Labs'
      },
      serviceType: 'Retail Technology Infrastructure',
      areaServed: 'Worldwide',
      audience: {
        '@type': 'Audience',
        audienceType: 'Retail and E-commerce Businesses'
      }
    }
  ]
})

definePageMeta({
  layout: 'default'
})

const retailTranslations = computed(() => {
  const texts = {
    en: {
      hero: {
        badge: "Retail & eCommerce Solutions",
        title: "Secure Commerce Infrastructure",
        subtitle: "Retail and eCommerce face escalating fraud, supply chain opacity, and diminishing customer loyalty. Kakr Labs provides the secure, transparent infrastructure needed to thrive in the digital economy.",
        compliance: "Designed to support PCI DSS and GDPR compliance programs",
        startTrial: "Start Free Trial",
        exploreSolutions: "Explore Solutions"
      },
      solutions: {
        title: "Why Kakr Labs for Retail & eCommerce",
        description: "Our solutions tackle eCommerce challenges head-on with decentralized security and transparency.",
        items: [
          {
            title: "Secure Checkouts & Payments",
            description: "Reduce chargebacks and payment fraud with PTERI App's verifiable identity and 2FA.",
            points: ["Biometric 2FA for every transaction", "Zero-knowledge proof identity verification", "Instant settlement with Litecoin"]
          },
          {
            title: "Supply Chain Transparency",
            description: "Verify product authenticity and ethical sourcing from factory to shelf with PTERI Data.",
            points: ["Immutable product journey tracking", "Real-time inventory visibility", "Anti-counterfeiting verification"]
          },
          {
            title: "Customer Loyalty & Micropayments",
            description: "Revolutionize loyalty programs with tokenized rewards and micropayments that actually have value.",
            points: ["Interoperable loyalty tokens", "Micropayments for engagement", "Privacy-preserving customer insights"]
          }
        ]
      },
      benefits: {
        title: "Benefits for Retail & eCommerce",
        description: "See how Kakr Labs solutions compare to traditional systems for retail businesses.",
        headers: ["Benefit", "Kakr Labs", "Traditional Systems"],
        rows: [
          { name: "Fraud Exposure", kakr: "Cryptographic 2FA - no OTP to intercept", trad: "High phishing risks" },
          { name: "Cost Savings", kakr: "Low per-transaction fees", trad: "High gateway fees" },
          { name: "Compliance", kakr: "Audit trails and evidence to support PCI DSS and GDPR programs", trad: "Manual processes" },
          { name: "Settlement Layer", kakr: "Litecoin mainnet, running since 2011", trad: "System downtimes" }
        ]
      },
      useCases: {
        title: "Retail & eCommerce Use Cases",
        description: "How retailers are leveraging Kakr Labs solutions to solve real challenges",
        items: [
          {
            title: "Fraud-Resistant Checkouts",
            description: "Online retailers are implementing PTERI App's decentralized authentication to reduce account takeovers and payment fraud.",
            stats: ["Reduced checkout-fraud exposure", "Fewer abandoned checkouts"]
          },
          {
            title: "Transparent Supply Chain",
            description: "Retailers are using PTERI Data to create transparent supply chains that verify product authenticity and ethical sourcing.",
            stats: ["End-to-end product traceability", "Fewer counterfeit products in circulation"]
          },
          {
            title: "Blockchain Loyalty Programs",
            description: "Retailers are implementing blockchain-based loyalty programs with micropayments that reduce costs and increase customer engagement.",
            stats: ["40% increase in program participation", "65% reduction in program administration costs"]
          },
          {
            title: "Inventory Management",
            description: "Retailers are using PTERI Data to create immutable inventory records that improve accuracy and reduce shrinkage across the supply chain.",
            stats: ["30% reduction in inventory shrinkage", "25% improvement in inventory accuracy"]
          },
          {
            title: "Cross-Border Payments",
            description: "Global retailers are using Litecoin-based payments to reduce cross-border transaction costs and currency conversion overhead.",
            stats: ["Lower payment processing fees", "Settlement in minutes rather than days"]
          },
          {
            title: "AI-Powered Personalization",
            description: "Retailers are using PTERI Intelligence to create personalized shopping experiences while protecting customer privacy.",
            stats: ["More repeat purchases", "Privacy-first design that supports GDPR programs"]
          }
        ]
      },
      cta: {
        title: "Ready to Elevate Your eCommerce?",
        description: "Start with our free 2FA API or explore a 3-month pilot at 50% off.",
        startTrial: "Start Free Trial",
        schedulePilot: "Schedule Pilot Program",
        footer: "Kakr Labs: Secure Web3 Innovation for Retail"
      }
    },
    de: {
      hero: {
        badge: "Einzelhandels- & E-Commerce-Lösungen",
        title: "Sichere Handelsinfrastruktur",
        subtitle: "Einzelhandel und E-Commerce sehen sich zunehmendem Betrug, undurchsichtigen Lieferketten und schwindender Kundenbindung gegenüber. Kakr Labs bietet die sichere, transparente Infrastruktur, die für den Erfolg in der digitalen Wirtschaft erforderlich ist.",
        compliance: "Entwickelt zur Unterstützung von PCI DSS- und DSGVO-Compliance-Programmen",
        startTrial: "Kostenlos testen",
        exploreSolutions: "Lösungen erkunden"
      },
      solutions: {
        title: "Warum Kakr Labs für Einzelhandel & E-Commerce",
        description: "Unsere Lösungen gehen E-Commerce-Herausforderungen direkt mit dezentraler Sicherheit und Transparenz an.",
        items: [
          {
            title: "Sichere Kassen & Zahlungen",
            description: "Reduzieren Sie Rückbuchungen und Zahlungsbetrug mit der dezentralen Identität und 2FA von PTERI App.",
            points: ["Biometrische 2FA für jede Transaktion", "Zero-Knowledge-Proof Identitätsprüfung", "Sofortige Abwicklung mit Litecoin"]
          },
          {
            title: "Transparenz der Lieferkette",
            description: "Überprüfen Sie die Produktechtheit und ethische Beschaffung vom Werk bis zum Regal mit PTERI Data.",
            points: ["Unveränderliche Verfolgung der Produktreise", "Echtzeit-Bestandsübersicht", "Fälschungsschutz-Verifizierung"]
          },
          {
            title: "Kundenbindung & Mikrozahlungen",
            description: "Revolutionieren Sie Treueprogramme mit tokenisierten Belohnungen und Mikrozahlungen, die tatsächlich einen Wert haben.",
            points: ["Interoperable Treue-Token", "Mikrozahlungen für Engagement", "Datenschutzfreundliche Kundeneinblicke"]
          }
        ]
      },
      benefits: {
        title: "Vorteile für Einzelhandel & E-Commerce",
        description: "Sehen Sie, wie Kakr Labs-Lösungen im Vergleich zu herkömmlichen Systemen für Einzelhandelsunternehmen abschneiden.",
        headers: ["Vorteil", "Kakr Labs", "Traditionelle Systeme"],
        rows: [
          { name: "Betrugsrisiko", kakr: "Kryptografische 2FA - kein OTP zum Abfangen", trad: "Hohe Phishing-Risiken" },
          { name: "Kosteneinsparungen", kakr: "Niedrige Transaktionsgebühren", trad: "Hohe Gateway-Gebühren" },
          { name: "Compliance", kakr: "Prüfpfade und Nachweise zur Unterstützung von PCI DSS- und DSGVO-Programmen", trad: "Manuelle Prozesse" },
          { name: "Settlement-Layer", kakr: "Litecoin-Mainnet, in Betrieb seit 2011", trad: "Systemausfälle" }
        ]
      },
      useCases: {
        title: "Anwendungsfälle im Einzelhandel & E-Commerce",
        description: "Wie Einzelhändler Kakr Labs-Lösungen nutzen, um echte Herausforderungen zu lösen",
        items: [
          {
            title: "Betrugssichere Kassen",
            description: "Online-Händler implementieren die dezentrale Authentifizierung von PTERI App, um Kontoübernahmen und Zahlungsbetrug zu reduzieren.",
            stats: ["Geringeres Risiko von Kassenbetrug", "Weniger abgebrochene Bestellvorgänge"]
          },
          {
            title: "Transparente Lieferkette",
            description: "Einzelhändler nutzen PTERI Data, um transparente Lieferketten zu schaffen, die Produktechtheit und ethische Beschaffung verifizieren.",
            stats: ["End-to-End-Produktrückverfolgbarkeit", "Weniger gefälschte Produkte im Umlauf"]
          },
          {
            title: "Blockchain-Treueprogramme",
            description: "Einzelhändler implementieren Blockchain-basierte Treueprogramme mit Mikrozahlungen, die Kosten senken und das Kundenengagement steigern.",
            stats: ["40% Steigerung der Programmteilnahme", "65% Reduzierung der Verwaltungskosten"]
          },
          {
            title: "Bestandsmanagement",
            description: "Einzelhändler nutzen PTERI Data, um unveränderliche Bestandsaufzeichnungen zu erstellen, die die Genauigkeit verbessern und Schwund in der Lieferkette reduzieren.",
            stats: ["30% Reduzierung des Bestandsschwunds", "25% Verbesserung der Bestandsgenauigkeit"]
          },
          {
            title: "Grenzüberschreitende Zahlungen",
            description: "Globale Einzelhändler nutzen Litecoin-basierte Zahlungen, um grenzüberschreitende Transaktionskosten und den Aufwand für Währungsumrechnung zu senken.",
            stats: ["Niedrigere Zahlungsabwicklungsgebühren", "Abwicklung in Minuten statt Tagen"]
          },
          {
            title: "KI-gestützte Personalisierung",
            description: "Einzelhändler nutzen PTERI Intelligence, um personalisierte Einkaufserlebnisse zu schaffen und gleichzeitig die Privatsphäre der Kunden zu schützen.",
            stats: ["Mehr Wiederholungskäufe", "Privacy-First-Design zur Unterstützung von DSGVO-Programmen"]
          }
        ]
      },
      cta: {
        title: "Bereit, Ihren E-Commerce zu verbessern?",
        description: "Starten Sie mit unserer kostenlosen 2FA-API oder erkunden Sie ein 3-monatiges Pilotprojekt mit 50% Rabatt.",
        startTrial: "Kostenlos testen",
        schedulePilot: "Pilotprogramm planen",
        footer: "Kakr Labs: Sichere Web3-Innovation für den Einzelhandel"
      }
    },
    es: {
      hero: {
        badge: "Soluciones para Retail y eCommerce",
        title: "Infraestructura de Comercio Seguro",
        subtitle: "El comercio minorista y electrónico enfrentan fraudes crecientes, opacidad en la cadena de suministro y lealtad del cliente decreciente. Kakr Labs proporciona la infraestructura segura y transparente necesaria para prosperar en la economía digital.",
        compliance: "Diseñado para respaldar programas de cumplimiento de PCI DSS y GDPR",
        startTrial: "Iniciar Prueba Gratis",
        exploreSolutions: "Explorar Soluciones"
      },
      solutions: {
        title: "Por qué Kakr Labs para Retail y eCommerce",
        description: "Nuestras soluciones abordan los desafíos del comercio electrónico con seguridad descentralizada y transparencia.",
        items: [
          {
            title: "Pagos y Cajas Seguras",
            description: "Reduzca contracargos y fraude de pagos con la identidad descentralizada y 2FA de PTERI App.",
            points: ["2FA biométrico para cada transacción", "Verificación de identidad de prueba de conocimiento cero", "Liquidación instantánea con Litecoin"]
          },
          {
            title: "Transparencia de la Cadena de Suministro",
            description: "Verifique la autenticidad del producto y el abastecimiento ético desde la fábrica hasta el estante con PTERI Data.",
            points: ["Rastreo inmutable del viaje del producto", "Visibilidad de inventario en tiempo real", "Verificación anti-falsificación"]
          },
          {
            title: "Lealtad del Cliente y Micropagos",
            description: "Revolucione los programas de lealtad con recompensas tokenizadas y micropagos que realmente tienen valor.",
            points: ["Tokens de lealtad interoperables", "Micropagos por participación", "Información del cliente preservando la privacidad"]
          }
        ]
      },
      benefits: {
        title: "Beneficios para Retail y eCommerce",
        description: "Vea cómo las soluciones de Kakr Labs se comparan con los sistemas tradicionales para empresas minoristas.",
        headers: ["Beneficio", "Kakr Labs", "Sistemas Tradicionales"],
        rows: [
          { name: "Exposición al Fraude", kakr: "2FA criptográfica - sin OTP que interceptar", trad: "Altos riesgos de phishing" },
          { name: "Ahorro de Costos", kakr: "Tarifas bajas por transacción", trad: "Altas tarifas de pasarela" },
          { name: "Cumplimiento", kakr: "Pistas de auditoría y evidencia para respaldar programas PCI DSS y GDPR", trad: "Procesos manuales" },
          { name: "Capa de Liquidación", kakr: "Mainnet de Litecoin, en marcha desde 2011", trad: "Tiempos de inactividad del sistema" }
        ]
      },
      useCases: {
        title: "Casos de Uso en Retail y eCommerce",
        description: "Cómo los minoristas están aprovechando las soluciones de Kakr Labs para resolver desafíos reales",
        items: [
          {
            title: "Cajas Resistentes al Fraude",
            description: "Los minoristas en línea están implementando la autenticación descentralizada de PTERI App para reducir tomas de cuentas y fraude de pagos.",
            stats: ["Menor exposición al fraude de pago", "Menos pagos abandonados"]
          },
          {
            title: "Cadena de Suministro Transparente",
            description: "Los minoristas están utilizando PTERI Data para crear cadenas de suministro transparentes que verifican la autenticidad del producto y el abastecimiento ético.",
            stats: ["Trazabilidad de producto de extremo a extremo", "Menos productos falsificados en circulación"]
          },
          {
            title: "Programas de Lealtad Blockchain",
            description: "Los minoristas están implementando programas de lealtad basados en blockchain con micropagos que reducen costos y aumentan la participación del cliente.",
            stats: ["40% aumento en participación del programa", "65% reducción en costos de administración"]
          },
          {
            title: "Gestión de Inventario",
            description: "Los minoristas están utilizando PTERI Data para crear registros de inventario inmutables que mejoran la precisión y reducen la merma en toda la cadena de suministro.",
            stats: ["30% reducción en merma de inventario", "25% mejora en precisión de inventario"]
          },
          {
            title: "Pagos Transfronterizos",
            description: "Los minoristas globales están utilizando pagos basados en Litecoin para reducir los costos de transacción transfronterizos y la carga de conversión de moneda.",
            stats: ["Menores tarifas de procesamiento", "Liquidación en minutos en lugar de días"]
          },
          {
            title: "Personalización Impulsada por IA",
            description: "Los minoristas están utilizando PTERI Intelligence para crear experiencias de compra personalizadas mientras protegen la privacidad del cliente.",
            stats: ["Más compras repetidas", "Diseño con la privacidad primero que respalda programas GDPR"]
          }
        ]
      },
      cta: {
        title: "¿Listo para Elevar su eCommerce?",
        description: "Comience con nuestra API 2FA gratuita o explore un piloto de 3 meses con 50% de descuento.",
        startTrial: "Iniciar Prueba Gratis",
        schedulePilot: "Programar Piloto",
        footer: "Kakr Labs: Innovación Web3 Segura para Retail"
      }
    },
    ja: {
      hero: {
        badge: "小売＆eコマースソリューション",
        title: "安全な商取引インフラ",
        subtitle: "小売およびeコマースは、詐欺の増加、サプライチェーンの不透明性、顧客ロイヤルティの低下に直面しています。Kakr Labsは、デジタル経済で成功するために必要な安全で透明なインフラを提供します。",
        compliance: "PCI DSS、GDPRのコンプライアンス対応を支援する設計",
        startTrial: "無料トライアルを開始",
        exploreSolutions: "ソリューションを探索"
      },
      solutions: {
        title: "小売＆eコマースにKakr Labsを選ぶ理由",
        description: "当社のソリューションは、分散型セキュリティと透明性でeコマースの課題に正面から取り組みます。",
        items: [
          {
            title: "安全なチェックアウトと支払い",
            description: "PTERI Appの分散型IDと2FAで、チャージバックと支払い詐欺のリスクを低減します。",
            points: ["すべての取引に対する生体認証2FA", "ゼロ知識証明による本人確認", "ライトコインによる即時決済"]
          },
          {
            title: "サプライチェーンの透明性",
            description: "PTERI Dataを使用して、工場から棚まで製品の真正性と倫理的な調達を検証します。",
            points: ["不変の製品ジャーニートラッキング", "リアルタイムの在庫可視性", "偽造防止検証"]
          },
          {
            title: "顧客ロイヤルティとマイクロペイメント",
            description: "トークン化された報酬と実際に価値のあるマイクロペイメントで、ロイヤルティプログラムに革命を起こします。",
            points: ["相互運用可能なロイヤルティトークン", "エンゲージメントに対するマイクロペイメント", "プライバシーを保護する顧客インサイト"]
          }
        ]
      },
      benefits: {
        title: "小売＆eコマースのメリット",
        description: "Kakr Labsのソリューションが小売企業の従来のシステムとどのように比較されるかをご覧ください。",
        headers: ["メリット", "Kakr Labs", "従来システム"],
        rows: [
          { name: "詐欺リスク", kakr: "暗号2FA - 傍受できるOTPなし", trad: "高いフィッシングリスク" },
          { name: "コスト削減", kakr: "低いトランザクション手数料", trad: "高いゲートウェイ手数料" },
          { name: "コンプライアンス", kakr: "PCI DSSやGDPRのプログラムを支援する監査証跡とエビデンス", trad: "手動プロセス" },
          { name: "決済レイヤー", kakr: "ライトコインのメインネット（2011年から稼働）", trad: "システムダウンタイム" }
        ]
      },
      useCases: {
        title: "小売＆eコマースのユースケース",
        description: "小売業者がKakr Labsソリューションを活用して実際の課題を解決する方法",
        items: [
          {
            title: "詐欺に強いチェックアウト",
            description: "オンライン小売業者は、PTERI Appの分散型認証を実装して、アカウント乗っ取りと支払い詐欺のリスクを低減しています。",
            stats: ["チェックアウト詐欺リスクの低減", "カート放棄の減少"]
          },
          {
            title: "透明なサプライチェーン",
            description: "小売業者はPTERI Dataを使用して、製品の真正性と倫理的な調達を検証する透明なサプライチェーンを作成しています。",
            stats: ["エンドツーエンドの製品トレーサビリティ", "流通する偽造品の減少"]
          },
          {
            title: "ブロックチェーンロイヤルティプログラム",
            description: "小売業者は、コストを削減し、顧客エンゲージメントを高めるマイクロペイメントを備えたブロックチェーンベースのロイヤルティプログラムを実装しています。",
            stats: ["プログラム参加の40％増加", "プログラム管理コストの65％削減"]
          },
          {
            title: "在庫管理",
            description: "小売業者はPTERI Dataを使用して、不変の在庫記録を作成し、精度を向上させ、サプライチェーン全体での損失を削減しています。",
            stats: ["在庫損失の30％削減", "在庫精度の25％向上"]
          },
          {
            title: "クロスボーダー決済",
            description: "グローバル小売業者は、ライトコインベースの支払いを使用して、クロスボーダー取引コストと通貨換算の手数料負担を削減しています。",
            stats: ["支払い処理手数料の低減", "数日ではなく数分での決済"]
          },
          {
            title: "AIを活用したパーソナライゼーション",
            description: "小売業者はPTERI Intelligenceを使用して、顧客のプライバシーを保護しながらパーソナライズされたショッピング体験を作成しています。",
            stats: ["リピート購入の増加", "GDPRプログラムを支援するプライバシーファースト設計"]
          }
        ]
      },
      cta: {
        title: "eコマースを向上させる準備はできましたか？",
        description: "無料の2FA APIから始めるか、50％オフで3か月のパイロットを探索してください。",
        startTrial: "無料トライアルを開始",
        schedulePilot: "パイロットプログラムをスケジュール",
        footer: "Kakr Labs: 小売向け安全なWeb3イノベーション"
      }
    },
    ar: {
      hero: {
        badge: "حلول التجزئة والتجارة الإلكترونية",
        title: "بنية تحتية تجارية آمنة",
        subtitle: "تواجه التجزئة والتجارة الإلكترونية احتيالًا متصاعدًا، وغموضًا في سلسلة التوريد، وتناقص ولاء العملاء. توفر Kakr Labs البنية التحتية الآمنة والشفافة اللازمة للازدهار في الاقتصاد الرقمي.",
        compliance: "مصمم لدعم برامج الامتثال لـ PCI DSS و GDPR",
        startTrial: "ابدأ التجربة المجانية",
        exploreSolutions: "استكشف الحلول"
      },
      solutions: {
        title: "لماذا Kakr Labs للتجزئة والتجارة الإلكترونية",
        description: "تعالج حلولنا تحديات التجارة الإلكترونية بشكل مباشر من خلال الأمن اللامركزي والشفافية.",
        items: [
          {
            title: "عمليات دفع وخروج آمنة",
            description: "تخلص من رد المبالغ المدفوعة واحتيال الدفع باستخدام الهوية اللامركزية والمصادقة الثنائية من PTERI App.",
            points: ["مصادقة ثنائية بيومترية لكل معاملة", "التحقق من الهوية بإثبات المعرفة الصفرية", "تسوية فورية باستخدام Litecoin"]
          },
          {
            title: "شفافية سلسلة التوريد",
            description: "تحقق من صحة المنتج والمصادر الأخلاقية من المصنع إلى الرف باستخدام PTERI Data.",
            points: ["تتبع رحلة المنتج غير القابل للتغيير", "رؤية المخزون في الوقت الفعلي", "التحقق من مكافحة التزييف"]
          },
          {
            title: "ولاء العملاء والمدفوعات الصغيرة",
            description: "أحدث ثورة في برامج الولاء بمكافآت رمزية ومدفوعات صغيرة لها قيمة فعلية.",
            points: ["رموز ولاء قابلة للتشغيل البيني", "مدفوعات صغيرة للمشاركة", "رؤى العملاء التي تحافظ على الخصوصية"]
          }
        ]
      },
      benefits: {
        title: "فوائد للتجزئة والتجارة الإلكترونية",
        description: "شاهد كيف تقارن حلول Kakr Labs بالأنظمة التقليدية لشركات التجزئة.",
        headers: ["الفائدة", "Kakr Labs", "الأنظمة التقليدية"],
        rows: [
          { name: "التعرض للاحتيال", kakr: "2FA تشفيرية - دون OTP يمكن اعتراضه", trad: "مخاطر تصيد عالية" },
          { name: "توفير التكاليف", kakr: "رسوم منخفضة لكل معاملة", trad: "رسوم بوابة عالية" },
          { name: "الامتثال", kakr: "مسارات تدقيق وأدلة لدعم برامج PCI DSS وGDPR", trad: "عمليات يدوية" },
          { name: "طبقة التسوية", kakr: "شبكة Litecoin الرئيسية، تعمل منذ 2011", trad: "توقف النظام" }
        ]
      },
      useCases: {
        title: "حالات استخدام التجزئة والتجارة الإلكترونية",
        description: "كيف يستفيد تجار التجزئة من حلول Kakr Labs لحل التحديات الحقيقية",
        items: [
          {
            title: "عمليات خروج مقاومة للاحتيال",
            description: "يقوم تجار التجزئة عبر الإنترنت بتنفيذ المصادقة اللامركزية لـ PTERI App للقضاء على عمليات الاستيلاء على الحساب واحتيال الدفع.",
            stats: ["انخفاض التعرض لاحتيال الخروج", "عدد أقل من عمليات الدفع المتروكة"]
          },
          {
            title: "سلسلة توريد شفافة",
            description: "يستخدم تجار التجزئة PTERI Data لإنشاء سلاسل توريد شفافة تتحقق من صحة المنتج والمصادر الأخلاقية.",
            stats: ["تتبع المنتج من البداية إلى النهاية", "عدد أقل من المنتجات المقلدة في التداول"]
          },
          {
            title: "برامج ولاء Blockchain",
            description: "يقوم تجار التجزئة بتنفيذ برامج ولاء قائمة على blockchain مع مدفوعات صغيرة تقلل التكاليف وتزيد من مشاركة العملاء.",
            stats: ["40% زيادة في مشاركة البرنامج", "65% انخفاض في تكاليف إدارة البرنامج"]
          },
          {
            title: "إدارة المخزون",
            description: "يستخدم تجار التجزئة PTERI Data لإنشاء سجلات مخزون غير قابلة للتغيير تحسن الدقة وتقلل من الانكماش عبر سلسلة التوريد.",
            stats: ["30% انخفاض في انكماش المخزون", "25% تحسن في دقة المخزون"]
          },
          {
            title: "المدفوعات عبر الحدود",
            description: "يستخدم تجار التجزئة العالميون المدفوعات القائمة على Litecoin لتقليل تكاليف المعاملات عبر الحدود والقضاء على رسوم تحويل العملات.",
            stats: ["رسوم أقل لمعالجة الدفع", "التسوية في دقائق بدلاً من أيام"]
          },
          {
            title: "تخصيص مدعوم بالذكاء الاصطناعي",
            description: "يستخدم تجار التجزئة PTERI Intelligence لإنشاء تجارب تسوق مخصصة مع حماية خصوصية العملاء.",
            stats: ["مزيد من عمليات الشراء المتكررة", "تصميم يضع الخصوصية أولاً ويدعم برامج GDPR"]
          }
        ]
      },
      cta: {
        title: "هل أنت مستعد للارتقاء بتجارتك الإلكترونية؟",
        description: "ابدأ مع واجهة برمجة تطبيقات 2FA المجانية الخاصة بنا أو استكشف برنامجًا تجريبيًا لمدة 3 أشهر بخصم 50%.",
        startTrial: "ابدأ التجربة المجانية",
        schedulePilot: "جدولة البرنامج التجريبي",
        footer: "Kakr Labs: ابتكار Web3 آمن للتجزئة"
      }
    }
  }
  return texts[locale.value] || texts.en
})

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fade-in-up')
      }
    })
  })

  document.querySelectorAll('.animate-on-scroll').forEach((el) => {
    observer.observe(el)
  })
})
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100" :dir="locale === 'ar' ? 'rtl' : 'ltr'">
    <!-- Hero Section -->
    <section class="relative overflow-hidden bg-gradient-to-r from-green-800 via-green-900 to-black">
      <div class="absolute inset-0 bg-black/10"></div>
      <div class="absolute inset-0 bg-gradient-to-r from-green-600/20 to-green-700/20"></div>
      
      <!-- Animated background elements -->
      <div class="absolute inset-0 overflow-hidden">
        <div class="absolute -top-40 -right-40 w-80 h-80 bg-green-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div class="absolute -bottom-40 -left-40 w-80 h-80 bg-green-600/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>
      
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <div class="animate-fade-in-up">
          <!-- Industry Badge -->
          <div class="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500/20 to-blue-500/20 border border-emerald-400/30 backdrop-blur-sm mb-8">
            <svg class="w-5 h-5 text-emerald-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
            </svg>
            <span class="text-emerald-300 font-medium tracking-wide uppercase text-sm">{{ retailTranslations.hero.badge }}</span>
          </div>

          <h1 class="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-200 to-blue-400 mb-6 tracking-tight leading-tight">
            {{ retailTranslations.hero.title }}
          </h1>
          
          <p class="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto mb-10 leading-relaxed">
            {{ retailTranslations.hero.subtitle }}
          </p>
          
          <div class="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button class="btn-primary flex items-center">
              {{ retailTranslations.hero.startTrial }}
              <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
              </svg>
            </button>
            <button class="px-8 py-4 bg-transparent border border-emerald-500/30 hover:bg-emerald-500/10 text-emerald-300 rounded-xl font-bold text-lg transition-all flex items-center backdrop-blur-sm">
              {{ retailTranslations.hero.exploreSolutions }}
            </button>
          </div>

          <div class="flex flex-wrap justify-center gap-6 text-sm text-white/60 font-medium opacity-80">
            <div class="flex items-center">
              <svg class="w-5 h-5 text-emerald-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              {{ retailTranslations.hero.compliance }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Solutions Overview -->
    <section class="py-20 px-4 relative">
      <div class="max-w-7xl mx-auto"data-aos="fade-up">
        <div class="text-center mb-16 animate-fade-in-up"data-aos="fade-up">
          <h2 class="text-4xl font-bold text-white mb-4">
            {{ retailTranslations.solutions.title }}
          </h2>
          <p class="text-xl text-white/70 max-w-2xl mx-auto">
            {{ retailTranslations.solutions.description }}
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <div class="bg-black rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 group" v-for="(item, idx) in retailTranslations.solutions.items" :key="idx">
            <div class="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg class="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-white mb-4">{{ item.title }}</h3>
            <p class="text-white/70 mb-6 leading-relaxed">
              {{ item.description }}
            </p>
            <ul class="space-y-3">
              <li class="flex items-start text-white/90" v-for="(point, pIdx) in item.points" :key="pIdx">
                <svg class="w-5 h-5 text-emerald-500 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                {{ point }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Benefits Comparison -->
    <section class="py-20 px-4 bg-black/50 backdrop-blur-sm">
      <div class="max-w-7xl mx-auto"data-aos="fade-up">
        <div class="text-center mb-16 animate-fade-in-up"data-aos="fade-up">
          <h2 class="text-4xl font-bold text-white mb-4">
            {{ retailTranslations.benefits.title }}
          </h2>
          <p class="text-xl text-white/70">
            {{ retailTranslations.benefits.description }}
          </p>
        </div>

        <div class="bg-black rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
          <div class="overflow-x-auto">
            <table class="w-full">
              <thead>
                <tr class="bg-gradient-to-r from-gray-50 to-blue-50">
                  <th class="text-left p-6 font-semibold text-white text-lg">{{ retailTranslations.benefits.headers[0] }}</th>
                  <th class="text-center p-6 font-semibold text-emerald-900 text-lg">{{ retailTranslations.benefits.headers[1] }}</th>
                  <th class="text-center p-6 font-semibold text-red-900 text-lg">{{ retailTranslations.benefits.headers[2] }}</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-100">
                <tr class="hover:bg-white/3/50 transition-colors duration-150" v-for="(row, idx) in retailTranslations.benefits.rows" :key="idx">
                  <td class="p-6 font-medium text-white">{{ row.name }}</td>
                  <td class="p-6 text-center">
                    <div class="flex items-center justify-center">
                      <svg class="w-6 h-6 text-emerald-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span class="text-emerald-700 font-semibold">{{ row.kakr }}</span>
                    </div>
                  </td>
                  <td class="p-6 text-center">
                    <div class="flex items-center justify-center">
                      <svg class="w-6 h-6 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                      </svg>
                      <span class="text-red-700 font-semibold">{{ row.trad }}</span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials removed: entries were fabricated (placeholder personas and
         invented outcome quotes). Restore only with real, approved customer
         quotes, real names/roles, and permission to publish. -->

    <!-- Use Cases Grid -->
    <section class="py-20 px-4 bg-black/50 backdrop-blur-sm">
      <div class="max-w-7xl mx-auto"data-aos="fade-up">
        <div class="text-center mb-16 animate-fade-in-up"data-aos="fade-up">
          <h2 class="text-4xl font-bold text-white mb-4">
            {{ retailTranslations.useCases.title }}
          </h2>
          <p class="text-xl text-white/70">
            {{ retailTranslations.useCases.description }}
          </p>
        </div>

        <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <!-- Use Case Cards -->
          <div class="bg-black rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1" v-for="(item, idx) in retailTranslations.useCases.items" :key="idx">
            <div class="w-12 h-12 bg-gradient-to-br from-green-600 to-green-700 rounded-xl flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-white mb-3">{{ item.title }}</h3>
            <p class="text-white/70 mb-4">
              {{ item.description }}
            </p>
            <ul class="space-y-2">
              <li class="flex items-center text-sm text-white/70" v-for="(stat, sIdx) in item.stats" :key="sIdx">
                <svg class="w-4 h-4 text-emerald-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                {{ stat }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 px-4 bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 relative overflow-hidden">
      <div class="absolute inset-0 bg-black/10"></div>
      <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iYSIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVHJhbnNmb3JtPSJyb3RhdGUoNDUpIj48cGF0aCBkPSJNMCAwaDQwdjQwSDBWMHoiIGZpbGw9Im5vbmUiLz48cGF0aCBkPSJNMCAyMGg0MHYyMEgwVjIweiIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNhKSIvPjwvc3ZnPg==')] opacity-20"></div>
      
      <div class="relative max-w-4xl mx-auto text-center text-white">
        <div class="animate-fade-in-up">
          <h2 class="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            {{ retailTranslations.cta.title }}
          </h2>
          <p class="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed">
            {{ retailTranslations.cta.description }}
          </p>
          
          <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="https://pteri.org/Register" 
              target="_blank"
              class="group bg-black hover:bg-white/3 text-white font-semibold py-4 px-8 rounded-2xl transition-all duration-200 transform hover:scale-105 shadow-xl hover:shadow-2xl flex items-center"
            >
              <svg class="w-5 h-5 mr-2 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
              {{ retailTranslations.cta.startTrial }}
              <svg class="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
              </svg>
            </a>
            
            <a 
              href="/contact" 
              class="group border-2 border-white hover:bg-black hover:text-white text-white font-semibold py-4 px-8 rounded-2xl transition-all duration-200 flex items-center"
            >
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
              </svg>
              {{ retailTranslations.cta.schedulePilot }}
            </a>
          </div>
          
          <p class="text-sm text-blue-200 mt-6 flex items-center justify-center gap-2">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            {{ retailTranslations.cta.footer }}
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fade-in-up 0.8s ease-out forwards;
}

.delay-2000 {
  animation-delay: 2s;
}

/* Custom shadow for enhanced cards */
.shadow-3xl {
  box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);
}

/* Hover effects for interactive elements */
.group:hover .group-hover\:translate-x-1 {
  transform: translateX(0.25rem);
}

/* Smooth scroll behavior */
html {
  scroll-behavior: smooth;
}

/* Focus states for accessibility */
button:focus,
a:focus {
  outline: 2px solid #3b82f6;
  outline-offset: 2px;
}

/* Responsive font sizes */
@media (max-width: 768px) {
  .text-5xl {
    font-size: 3rem;
  }
  .text-7xl {
    font-size: 3.5rem;
  }
}
</style>
