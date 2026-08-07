<script setup>
import { useI18n } from 'vue-i18n'
import { useSEO } from '~/composables/useSEO'

const { locale } = useI18n()
const { setSEO } = useSEO()

setSEO({
  title: 'Technology & SaaS Web3 Infrastructure - Developer Solutions | Kakr Labs',
  description: 'Web3 infrastructure for technology companies and SaaS platforms. Developer-friendly APIs, SDKs, and blockchain integration tools on Litecoin. Build faster with enterprise-grade infrastructure.',
  keywords: ['technology blockchain', 'SaaS Web3 infrastructure', 'developer infrastructure', 'blockchain integration', 'API development', 'SDK tools', 'enterprise SaaS', 'Web3 development'],
  type: 'service',
  image: '/technology-saas-og.jpg',
  structuredData: [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Technology & SaaS Web3 Infrastructure',
      description: 'Blockchain infrastructure solutions for technology companies and SaaS platforms',
      provider: {
        '@type': 'Organization',
        name: 'Kakr Labs'
      },
      serviceType: 'Technology Infrastructure',
      areaServed: 'Worldwide',
      audience: {
        '@type': 'Audience',
        audienceType: 'Technology Companies and SaaS Platforms'
      }
    }
  ]
})

const translations = computed(() => {
  const texts = {
    en: {
      title: 'Technology & SaaS Solutions',
      description: 'Technology and SaaS companies battle centralized credential breaches, SIM-swap attacks, and high operational costs. Kakr Labs provides Litecoin-based solutions with proof-of-work security and low per-transaction fees.',
      compliance: 'Designed to support your GDPR compliance program',
      tryFree: 'Try Free 2FA API',
      tryFreePteri: 'Try Free',
      contactSales: 'Contact Sales',
      whyKakr: {
        industry: 'Technology & SaaS',
        description: 'Our solutions solve tech challenges like security vulnerabilities and integration complexity with Litecoin\'s reliable blockchain.',
        features: [
          {
            title: 'Secure User Authentication',
            description: 'Replace OTP apps with PTERI App\'s decentralized 2FA.',
            points: ['Cut phishing exposure with cryptographic proofs', 'REST APIs for seamless SaaS integration', 'Verifiable audit trails for user trust'],
            linkText: 'Authentication Solutions'
          },
          {
            title: 'No-Code App Development',
            description: 'Accelerate DApp creation with PTERI Playground\'s AI tools.',
            points: ['Natural language prototyping on Litecoin', 'SDKs (Swift, Kotlin, JS) for cross-platform', 'Faster development for startups'],
            linkText: 'Development Solutions'
          },
          {
            title: 'AI-Driven Operations',
            description: 'Optimize SaaS with PTERI Intelligence\'s MCP servers.',
            points: ['Private AI for data analysis and automation', 'Customer-controlled credentials for secure processing', 'Scalable for high-volume tech apps'],
            linkText: 'AI Solutions'
          }
        ]
      },
      benefits: {
        title: 'Benefits for Technology & SaaS',
        description: 'See how Kakr Labs solutions compare to traditional systems for tech companies.',
        benefitLabel: 'Benefit',
        ourLabel: 'Kakr Labs',
        theirLabel: 'Traditional Systems',
        rows: [
          { benefit: 'Fraud Exposure', ours: 'Cryptographic 2FA - no OTP to intercept', theirs: 'High phishing risks' },
          { benefit: 'Development Speed', ours: 'Faster first integration', theirs: 'Code-heavy setups' },
          { benefit: 'Compliance', ours: 'Automated audit trails', theirs: 'Manual audits' },
          { benefit: 'Settlement Layer', ours: 'Litecoin mainnet, running since 2011', theirs: 'Frequent downtimes' }
        ]
      },
      techStack: {
        title: 'Seamless Tech Stack Integration',
        description: 'Kakr Labs solutions integrate with your existing technology stack through modern APIs and SDKs.',
        cards: [
          {
            title: 'Developer-First APIs',
            description: 'Our REST and GraphQL APIs are designed for developers, with comprehensive documentation, sandbox environments, and robust SDKs.',
            features: ['OpenAPI/Swagger specifications', 'Webhooks for real-time events', 'Rate limits of 1000+ requests/second']
          },
          {
            title: 'Cross-Platform SDKs',
            description: 'Native SDKs for all major platforms make integration simple, with pre-built components and sample applications.',
            features: ['JavaScript/TypeScript, React, Vue', 'iOS (Swift) and Android (Kotlin)', 'Python, Go, Ruby, Java, .NET']
          },
          {
            title: 'Enterprise Integration',
            description: 'Connect with your existing enterprise systems through standard protocols and pre-built connectors.',
            features: ['SAML, OIDC, and OAuth 2.0', 'Active Directory and LDAP', 'Salesforce, SAP, and Oracle connectors']
          }
        ]
      },
      useCases: {
        title: 'Technology & SaaS Use Cases',
        description: 'How tech companies are leveraging Kakr Labs solutions to solve real challenges.',
        complexityLabel: 'Implementation Complexity',
        complexityValues: { low: 'Low', medium: 'Medium', high: 'High' },
        metricLabels: {
          security: 'Security Improvement',
          speed: 'Development Speed',
          cost: 'Cost Reduction',
          privacy: 'Privacy Enhancement'
        },
        metricValues: { veryHigh: 'Very High', high: 'High' },
        cases: [
          {
            title: 'Enhanced User Authentication',
            description: 'SaaS platforms are replacing traditional 2FA with PTERI App\'s decentralized authentication to reduce account takeovers and phishing attacks.',
            complexity: 'low',
            metric: 'security',
            metricValue: 'veryHigh',
            complexityPercent: 25,
            metricPercent: 95
          },
          {
            title: 'Rapid Blockchain App Development',
            description: 'Tech startups are using PTERI Playground to build and deploy blockchain applications in days instead of months, with minimal coding required.',
            complexity: 'medium',
            metric: 'speed',
            metricValue: 'veryHigh',
            complexityPercent: 50,
            metricPercent: 90
          },
          {
            title: 'Secure Payment Processing',
            description: 'SaaS platforms are implementing Litecoin-based micropayments for subscription billing, reducing transaction costs and chargeback exposure.',
            complexity: 'medium',
            metric: 'cost',
            metricValue: 'high',
            complexityPercent: 60,
            metricPercent: 80
          },
          {
            title: 'Private AI Processing',
            description: 'Tech companies are using PTERI Intelligence\'s MCP servers for secure, private AI processing that protects sensitive customer data.',
            complexity: 'high',
            metric: 'privacy',
            metricValue: 'veryHigh',
            complexityPercent: 75,
            metricPercent: 95
          }
        ]
      }
    },
    de: {
      title: 'Technologie & SaaS Lösungen',
      description: 'Technologie- und SaaS-Unternehmen kämpfen mit zentralisierten Datenschutzverletzungen, SIM-Swap-Angriffen und hohen Betriebskosten. Kakr Labs bietet Litecoin-basierte Lösungen, seit 2011 durch Proof-of-Work gesichert, mit niedrigen Transaktionsgebühren.',
      compliance: 'Entwickelt zur Unterstützung Ihres DSGVO-Compliance-Programms',
      tryFree: 'Kostenlose 2FA-API testen',
      tryFreePteri: 'Kostenlos testen',
      contactSales: 'Vertrieb kontaktieren',
      whyKakr: {
        industry: 'Technologie & SaaS',
        description: 'Unsere Lösungen lösen technische Herausforderungen wie Sicherheitslücken und Integrationskomplexität mit Litecoins zuverlässiger Blockchain.',
        features: [
          {
            title: 'Sichere Benutzerauthentifizierung',
            description: 'Ersetzen Sie OTP-Apps durch die dezentrale 2FA von PTERI App.',
            points: ['Reduzieren Sie Phishing-Risiken mit kryptografischen Beweisen', 'REST-APIs für nahtlose SaaS-Integration', 'Nachprüfbare Audit-Trails für Benutzervertrauen'],
            linkText: 'Authentifizierungslösungen'
          },
          {
            title: 'No-Code App-Entwicklung',
            description: 'Beschleunigen Sie die DApp-Erstellung mit den KI-Tools von PTERI Playground.',
            points: ['Prototyping in natürlicher Sprache auf Litecoin', 'SDKs (Swift, Kotlin, JS) für plattformübergreifend', 'Schnellere Entwicklung für Startups'],
            linkText: 'Entwicklungslösungen'
          },
          {
            title: 'KI-gesteuerte Operationen',
            description: 'Optimieren Sie SaaS mit den MCP-Servern von PTERI Intelligence.',
            points: ['Private KI für Datenanalyse und Automatisierung', 'Kundengesteuerte Zugangsdaten für sichere Verarbeitung', 'Skalierbar für hochvolumige Tech-Apps'],
            linkText: 'KI-Lösungen'
          }
        ]
      },
      benefits: {
        title: 'Vorteile für Technologie & SaaS',
        description: 'Sehen Sie, wie Kakr Labs-Lösungen im Vergleich zu traditionellen Systemen für Technologieunternehmen abschneiden.',
        benefitLabel: 'Vorteil',
        ourLabel: 'Kakr Labs',
        theirLabel: 'Traditionelle Systeme',
        rows: [
          { benefit: 'Betrugsrisiko', ours: 'Kryptografische 2FA - kein OTP zum Abfangen', theirs: 'Hohe Phishing-Risiken' },
          { benefit: 'Entwicklungsgeschwindigkeit', ours: 'Schnellere Erstintegration', theirs: 'Code-lastige Setups' },
          { benefit: 'Compliance', ours: 'Automatisierte Audit-Trails', theirs: 'Manuelle Audits' },
          { benefit: 'Settlement-Layer', ours: 'Litecoin-Mainnet, in Betrieb seit 2011', theirs: 'Häufige Ausfallzeiten' }
        ]
      },
      techStack: {
        title: 'Nahtlose Tech-Stack-Integration',
        description: 'Kakr Labs-Lösungen integrieren sich über moderne APIs und SDKs in Ihren bestehenden Technologie-Stack.',
        cards: [
          {
            title: 'Entwickler-First-APIs',
            description: 'Unsere REST- und GraphQL-APIs sind für Entwickler konzipiert, mit umfassender Dokumentation, Sandbox-Umgebungen und robusten SDKs.',
            features: ['OpenAPI/Swagger-Spezifikationen', 'Webhooks für Echtzeit-Events', 'Rate Limits von 1000+ Anfragen/Sekunde']
          },
          {
            title: 'Plattformübergreifende SDKs',
            description: 'Native SDKs für alle wichtigen Plattformen machen die Integration einfach, mit vorgefertigten Komponenten und Beispielanwendungen.',
            features: ['JavaScript/TypeScript, React, Vue', 'iOS (Swift) und Android (Kotlin)', 'Python, Go, Ruby, Java, .NET']
          },
          {
            title: 'Enterprise-Integration',
            description: 'Verbinden Sie sich über Standardprotokolle und vorgefertigte Konnektoren mit Ihren bestehenden Unternehmenssystemen.',
            features: ['SAML, OIDC und OAuth 2.0', 'Active Directory und LDAP', 'Salesforce-, SAP- und Oracle-Konnektoren']
          }
        ]
      },
      useCases: {
        title: 'Technologie & SaaS Anwendungsfälle',
        description: 'Wie Technologieunternehmen Kakr Labs-Lösungen nutzen, um echte Herausforderungen zu lösen.',
        complexityLabel: 'Implementierungskomplexität',
        complexityValues: { low: 'Niedrig', medium: 'Mittel', high: 'Hoch' },
        metricLabels: {
          security: 'Sicherheitsverbesserung',
          speed: 'Entwicklungsgeschwindigkeit',
          cost: 'Kostenreduzierung',
          privacy: 'Datenschutzverbesserung'
        },
        metricValues: { veryHigh: 'Sehr hoch', high: 'Hoch' },
        cases: [
          {
            title: 'Verbesserte Benutzerauthentifizierung',
            description: 'SaaS-Plattformen ersetzen traditionelle 2FA durch die dezentrale Authentifizierung von PTERI App, um Kontoübernahmen und Phishing-Angriffe zu reduzieren.',
            complexity: 'low',
            metric: 'security',
            metricValue: 'veryHigh',
            complexityPercent: 25,
            metricPercent: 95
          },
          {
            title: 'Schnelle Blockchain-App-Entwicklung',
            description: 'Tech-Startups nutzen PTERI Playground, um Blockchain-Anwendungen in Tagen statt Monaten zu erstellen und bereitzustellen, mit minimalem Codierungsaufwand.',
            complexity: 'medium',
            metric: 'speed',
            metricValue: 'veryHigh',
            complexityPercent: 50,
            metricPercent: 90
          },
          {
            title: 'Sichere Zahlungsabwicklung',
            description: 'SaaS-Plattformen implementieren Litecoin-basierte Mikrozahlungen für Abonnementabrechnungen, reduzieren Transaktionskosten und das Rückbuchungsrisiko.',
            complexity: 'medium',
            metric: 'cost',
            metricValue: 'high',
            complexityPercent: 60,
            metricPercent: 80
          },
          {
            title: 'Private KI-Verarbeitung',
            description: 'Technologieunternehmen nutzen die MCP-Server von PTERI Intelligence für sichere, private KI-Verarbeitung, die sensible Kundendaten schützt.',
            complexity: 'high',
            metric: 'privacy',
            metricValue: 'veryHigh',
            complexityPercent: 75,
            metricPercent: 95
          }
        ]
      }
    },
    es: {
      title: 'Soluciones de Tecnología y SaaS',
      description: 'Las empresas de tecnología y SaaS luchan contra brechas centralizadas, ataques de intercambio de SIM y altos costos operativos. Kakr Labs proporciona soluciones basadas en Litecoin, protegidas por prueba de trabajo desde 2011, con tarifas bajas por transacción.',
      compliance: 'Diseñado para respaldar su programa de cumplimiento del GDPR',
      tryFree: 'Prueba API 2FA gratis',
      tryFreePteri: 'Prueba gratis',
      contactSales: 'Contactar Ventas',
      whyKakr: {
        industry: 'Tecnología y SaaS',
        description: 'Nuestras soluciones resuelven desafíos tecnológicos como vulnerabilidades de seguridad y complejidad de integración con la blockchain confiable de Litecoin.',
        features: [
          {
            title: 'Autenticación Segura de Usuarios',
            description: 'Reemplace las aplicaciones OTP con la 2FA descentralizada de PTERI App.',
            points: ['Reduzca la exposición al phishing con pruebas criptográficas', 'APIs REST para integración SaaS sin problemas', 'Registros de auditoría verificables para la confianza del usuario'],
            linkText: 'Soluciones de Autenticación'
          },
          {
            title: 'Desarrollo de Aplicaciones Sin Código',
            description: 'Acelere la creación de DApp con las herramientas de IA de PTERI Playground.',
            points: ['Prototipado en lenguaje natural en Litecoin', 'SDKs (Swift, Kotlin, JS) para multiplataforma', 'Desarrollo más rápido para startups'],
            linkText: 'Soluciones de Desarrollo'
          },
          {
            title: 'Operaciones Impulsadas por IA',
            description: 'Optimice SaaS con los servidores MCP de PTERI Intelligence.',
            points: ['IA privada para análisis de datos y automatización', 'Credenciales controladas por el cliente para un procesamiento seguro', 'Escalable para aplicaciones tecnológicas de alto volumen'],
            linkText: 'Soluciones de IA'
          }
        ]
      },
      benefits: {
        title: 'Beneficios para Tecnología y SaaS',
        description: 'Vea cómo las soluciones de Kakr Labs se comparan con los sistemas tradicionales para empresas tecnológicas.',
        benefitLabel: 'Beneficio',
        ourLabel: 'Kakr Labs',
        theirLabel: 'Sistemas Tradicionales',
        rows: [
          { benefit: 'Exposición al Fraude', ours: '2FA criptográfica - sin OTP que interceptar', theirs: 'Altos riesgos de phishing' },
          { benefit: 'Velocidad de Desarrollo', ours: 'Primera integración más rápida', theirs: 'Configuraciones pesadas de código' },
          { benefit: 'Cumplimiento', ours: 'Registros de auditoría automatizados', theirs: 'Auditorías manuales' },
          { benefit: 'Capa de Liquidación', ours: 'Mainnet de Litecoin, en marcha desde 2011', theirs: 'Tiempos de inactividad frecuentes' }
        ]
      },
      techStack: {
        title: 'Integración Perfecta del Stack Tecnológico',
        description: 'Las soluciones de Kakr Labs se integran con su stack tecnológico existente a través de APIs y SDKs modernos.',
        cards: [
          {
            title: 'APIs Primero para Desarrolladores',
            description: 'Nuestras APIs REST y GraphQL están diseñadas para desarrolladores, con documentación completa, entornos sandbox y SDKs robustos.',
            features: ['Especificaciones OpenAPI/Swagger', 'Webhooks para eventos en tiempo real', 'Límites de tasa de 1000+ solicitudes/segundo']
          },
          {
            title: 'SDKs Multiplataforma',
            description: 'SDKs nativos para todas las plataformas principales hacen que la integración sea simple, con componentes preconstruidos y aplicaciones de muestra.',
            features: ['JavaScript/TypeScript, React, Vue', 'iOS (Swift) y Android (Kotlin)', 'Python, Go, Ruby, Java, .NET']
          },
          {
            title: 'Integración Empresarial',
            description: 'Conéctese con sus sistemas empresariales existentes a través de protocolos estándar y conectores preconstruidos.',
            features: ['SAML, OIDC y OAuth 2.0', 'Active Directory y LDAP', 'Conectores Salesforce, SAP y Oracle']
          }
        ]
      },
      useCases: {
        title: 'Casos de Uso de Tecnología y SaaS',
        description: 'Cómo las empresas tecnológicas están aprovechando las soluciones de Kakr Labs para resolver desafíos reales.',
        complexityLabel: 'Complejidad de Implementación',
        complexityValues: { low: 'Baja', medium: 'Media', high: 'Alta' },
        metricLabels: {
          security: 'Mejora de Seguridad',
          speed: 'Velocidad de Desarrollo',
          cost: 'Reducción de Costos',
          privacy: 'Mejora de Privacidad'
        },
        metricValues: { veryHigh: 'Muy alta', high: 'Alta' },
        cases: [
          {
            title: 'Autenticación de Usuario Mejorada',
            description: 'Las plataformas SaaS están reemplazando la 2FA tradicional con la autenticación descentralizada de PTERI App para reducir tomas de cuentas y ataques de phishing.',
            complexity: 'low',
            metric: 'security',
            metricValue: 'veryHigh',
            complexityPercent: 25,
            metricPercent: 95
          },
          {
            title: 'Desarrollo Rápido de Aplicaciones Blockchain',
            description: 'Las startups tecnológicas están usando PTERI Playground para construir y desplegar aplicaciones blockchain en días en lugar de meses, con codificación mínima requerida.',
            complexity: 'medium',
            metric: 'speed',
            metricValue: 'veryHigh',
            complexityPercent: 50,
            metricPercent: 90
          },
          {
            title: 'Procesamiento de Pagos Seguro',
            description: 'Las plataformas SaaS están implementando micropagos basados en Litecoin para facturación de suscripciones, reduciendo costos de transacción y la exposición a contracargos.',
            complexity: 'medium',
            metric: 'cost',
            metricValue: 'high',
            complexityPercent: 60,
            metricPercent: 80
          },
          {
            title: 'Procesamiento de IA Privado',
            description: 'Las empresas tecnológicas están usando los servidores MCP de PTERI Intelligence para procesamiento de IA seguro y privado que protege datos sensibles de clientes.',
            complexity: 'high',
            metric: 'privacy',
            metricValue: 'veryHigh',
            complexityPercent: 75,
            metricPercent: 95
          }
        ]
      }
    },
    ja: {
      title: 'テクノロジー＆SaaSソリューション',
      description: 'テクノロジーおよびSaaS企業は、集中管理された認証情報の侵害、SIMスワップ攻撃、高い運用コストと戦っています。Kakr Labsは、2011年以来プルーフ・オブ・ワークで保護され、低いトランザクション手数料を実現するLitecoinベースのソリューションを提供します。',
      compliance: 'GDPRのコンプライアンス対応を支援する設計',
      tryFree: '無料2FA APIを試す',
      tryFreePteri: '無料で試す',
      contactSales: '営業に連絡',
      whyKakr: {
        industry: 'テクノロジー＆SaaS',
        description: '当社のソリューションは、Litecoinの信頼性の高いブロックチェーンを使用して、セキュリティの脆弱性や統合の複雑さなどの技術的課題を解決します。',
        features: [
          {
            title: '安全なユーザー認証',
            description: 'OTPアプリをPTERI Appの分散型2FAに置き換えます。',
            points: ['暗号証明でフィッシングのリスクを低減', 'シームレスなSaaS統合のためのREST API', 'ユーザーの信頼のための検証可能な監査証跡'],
            linkText: '認証ソリューション'
          },
          {
            title: 'ノーコードアプリ開発',
            description: 'PTERI PlaygroundのAIツールでDApp作成を加速します。',
            points: ['Litecoin上での自然言語プロトタイピング', 'クロスプラットフォーム用SDK（Swift、Kotlin、JS）', 'スタートアップの開発を高速化'],
            linkText: '開発ソリューション'
          },
          {
            title: 'AI駆動型オペレーション',
            description: 'PTERI IntelligenceのMCPサーバーでSaaSを最適化します。',
            points: ['データ分析と自動化のためのプライベートAI', '安全な処理のための顧客管理型認証情報', '大量のテクノロジーアプリに対応可能'],
            linkText: 'AIソリューション'
          }
        ]
      },
      benefits: {
        title: 'テクノロジー＆SaaSのメリット',
        description: 'Kakr Labsのソリューションが技術企業の従来のシステムとどのように比較されるかをご覧ください。',
        benefitLabel: 'メリット',
        ourLabel: 'Kakr Labs',
        theirLabel: '従来システム',
        rows: [
          { benefit: '詐欺リスク', ours: '暗号2FA - 傍受できるOTPなし', theirs: '高いフィッシングリスク' },
          { benefit: '開発速度', ours: '初回統合をより迅速に', theirs: 'コード重視のセットアップ' },
          { benefit: 'コンプライアンス', ours: '自動化された監査証跡', theirs: '手動監査' },
          { benefit: '決済レイヤー', ours: 'Litecoinメインネット（2011年から稼働）', theirs: '頻繁なダウンタイム' }
        ]
      },
      techStack: {
        title: 'シームレスなテックスタック統合',
        description: 'Kakr Labsソリューションは、最新のAPIとSDKを通じて既存のテクノロジースタックと統合します。',
        cards: [
          {
            title: '開発者ファーストAPI',
            description: '当社のRESTおよびGraphQL APIは、包括的なドキュメント、サンドボックス環境、堅牢なSDKを備えた開発者向けに設計されています。',
            features: ['OpenAPI/Swagger仕様', 'リアルタイムイベント用Webhook', '1000+リクエスト/秒のレート制限']
          },
          {
            title: 'クロスプラットフォームSDK',
            description: 'すべての主要プラットフォーム用のネイティブSDKにより、事前構築されたコンポーネントとサンプルアプリケーションで統合が簡単になります。',
            features: ['JavaScript/TypeScript、React、Vue', 'iOS（Swift）およびAndroid（Kotlin）', 'Python、Go、Ruby、Java、.NET']
          },
          {
            title: 'エンタープライズ統合',
            description: '標準プロトコルと事前構築されたコネクタを通じて、既存のエンタープライズシステムと接続します。',
            features: ['SAML、OIDC、OAuth 2.0', 'Active DirectoryおよびLDAP', 'Salesforce、SAP、Oracleコネクタ']
          }
        ]
      },
      useCases: {
        title: 'テクノロジー＆SaaSのユースケース',
        description: 'テクノロジー企業がKakr Labsソリューションを活用して実際の課題を解決する方法。',
        complexityLabel: '実装の複雑さ',
        complexityValues: { low: '低', medium: '中', high: '高' },
        metricLabels: {
          security: 'セキュリティ向上',
          speed: '開発速度',
          cost: 'コスト削減',
          privacy: 'プライバシー強化'
        },
        metricValues: { veryHigh: '非常に高い', high: '高い' },
        cases: [
          {
            title: '強化されたユーザー認証',
            description: 'SaaSプラットフォームは、アカウント乗っ取りとフィッシング攻撃のリスクを低減するために、従来の2FAをPTERI Appの分散型認証に置き換えています。',
            complexity: 'low',
            metric: 'security',
            metricValue: 'veryHigh',
            complexityPercent: 25,
            metricPercent: 95
          },
          {
            title: '迅速なブロックチェーンアプリ開発',
            description: 'テックスタートアップは、PTERI Playgroundを使用して、最小限のコーディングで数か月ではなく数日でブロックチェーンアプリケーションを構築および展開しています。',
            complexity: 'medium',
            metric: 'speed',
            metricValue: 'veryHigh',
            complexityPercent: 50,
            metricPercent: 90
          },
          {
            title: '安全な支払い処理',
            description: 'SaaSプラットフォームは、サブスクリプション請求にLitecoinベースのマイクロペイメントを実装し、取引コストとチャージバックのリスクを削減しています。',
            complexity: 'medium',
            metric: 'cost',
            metricValue: 'high',
            complexityPercent: 60,
            metricPercent: 80
          },
          {
            title: 'プライベートAI処理',
            description: 'テクノロジー企業は、機密性の高い顧客データを保護する安全でプライベートなAI処理のために、PTERI IntelligenceのMCPサーバーを使用しています。',
            complexity: 'high',
            metric: 'privacy',
            metricValue: 'veryHigh',
            complexityPercent: 75,
            metricPercent: 95
          }
        ]
      }
    },
    ar: {
      title: 'حلول التكنولوجيا وSaaS',
      description: 'تحارب شركات التكنولوجيا وSaaS الاختراقات المركزية لبيانات الاعتماد وهجمات تبديل SIM والتكاليف التشغيلية العالية. تقدم Kakr Labs حلولاً قائمة على Litecoin، مؤمَّنة بإثبات العمل منذ عام 2011، مع رسوم منخفضة لكل معاملة.',
      compliance: 'مصمم لدعم برنامج الامتثال لـ GDPR الخاص بك',
      tryFree: 'جرب API 2FA مجانًا',
      tryFreePteri: 'جرب مجانًا',
      contactSales: 'اتصل بالمبيعات',
      whyKakr: {
        industry: 'التكنولوجيا وSaaS',
        description: 'تحل حلولنا التحديات التقنية مثل الثغرات الأمنية وتعقيد التكامل باستخدام blockchain الموثوق من Litecoin.',
        features: [
          {
            title: 'مصادقة مستخدم آمنة',
            description: 'استبدل تطبيقات OTP بمصادقة 2FA اللامركزية من PTERI App.',
            points: ['تقليل التعرض للتصيد الاحتيالي باستخدام الإثباتات التشفيرية', 'واجهات برمجة تطبيقات REST للتكامل السلس مع SaaS', 'سجلات تدقيق قابلة للتحقق لثقة المستخدم'],
            linkText: 'حلول المصادقة'
          },
          {
            title: 'تطوير تطبيقات بدون كود',
            description: 'تسريع إنشاء DApp باستخدام أدوات الذكاء الاصطناعي من PTERI Playground.',
            points: ['النماذج الأولية بلغة طبيعية على Litecoin', 'SDKs (Swift، Kotlin، JS) لمنصات متعددة', 'تطوير أسرع للشركات الناشئة'],
            linkText: 'حلول التطوير'
          },
          {
            title: 'عمليات مدفوعة بالذكاء الاصطناعي',
            description: 'تحسين SaaS باستخدام خوادم MCP من PTERI Intelligence.',
            points: ['ذكاء اصطناعي خاص لتحليل البيانات والأتمتة', 'بيانات اعتماد يتحكم بها العميل للمعالجة الآمنة', 'قابل للتوسع لتطبيقات التكنولوجيا عالية الحجم'],
            linkText: 'حلول الذكاء الاصطناعي'
          }
        ]
      },
      benefits: {
        title: 'فوائد التكنولوجيا وSaaS',
        description: 'شاهد كيف تقارن حلول Kakr Labs بالأنظمة التقليدية لشركات التكنولوجيا.',
        benefitLabel: 'الفائدة',
        ourLabel: 'Kakr Labs',
        theirLabel: 'الأنظمة التقليدية',
        rows: [
          { benefit: 'التعرض للاحتيال', ours: '2FA تشفيرية - دون OTP يمكن اعتراضه', theirs: 'مخاطر تصيد عالية' },
          { benefit: 'سرعة التطوير', ours: 'تكامل أول أسرع', theirs: 'إعدادات ثقيلة الكود' },
          { benefit: 'الامتثال', ours: 'سجلات تدقيق آلية', theirs: 'عمليات تدقيق يدوية' },
          { benefit: 'طبقة التسوية', ours: 'شبكة Litecoin الرئيسية، تعمل منذ 2011', theirs: 'أوقات تعطل متكررة' }
        ]
      },
      techStack: {
        title: 'تكامل سلس للمجموعة التقنية',
        description: 'تتكامل حلول Kakr Labs مع مجموعتك التقنية الحالية من خلال واجهات برمجة التطبيقات وSDKs الحديثة.',
        cards: [
          {
            title: 'واجهات برمجة تطبيقات للمطورين أولاً',
            description: 'تم تصميم واجهات برمجة تطبيقات REST وGraphQL الخاصة بنا للمطورين، مع توثيق شامل وبيئات sandbox وSDKs قوية.',
            features: ['مواصفات OpenAPI/Swagger', 'Webhooks للأحداث في الوقت الفعلي', 'حدود معدل 1000+ طلب/ثانية']
          },
          {
            title: 'SDKs متعددة المنصات',
            description: 'تجعل SDKs الأصلية لجميع المنصات الرئيسية التكامل بسيطًا، مع مكونات مسبقة البناء وتطبيقات عينة.',
            features: ['JavaScript/TypeScript، React، Vue', 'iOS (Swift) وAndroid (Kotlin)', 'Python، Go، Ruby، Java، .NET']
          },
          {
            title: 'تكامل المؤسسات',
            description: 'اتصل بأنظمة المؤسسات الحالية من خلال البروتوكولات القياسية والموصلات المسبقة البناء.',
            features: ['SAML، OIDC، وOAuth 2.0', 'Active Directory وLDAP', 'موصلات Salesforce وSAP وOracle']
          }
        ]
      },
      useCases: {
        title: 'حالات استخدام التكنولوجيا وSaaS',
        description: 'كيف تستفيد شركات التكنولوجيا من حلول Kakr Labs لحل التحديات الحقيقية.',
        complexityLabel: 'تعقيد التنفيذ',
        complexityValues: { low: 'منخفض', medium: 'متوسط', high: 'عالي' },
        metricLabels: {
          security: 'تحسين الأمان',
          speed: 'سرعة التطوير',
          cost: 'تقليل التكلفة',
          privacy: 'تحسين الخصوصية'
        },
        metricValues: { veryHigh: 'عالي جدًا', high: 'عالي' },
        cases: [
          {
            title: 'مصادقة مستخدم محسّنة',
            description: 'تستبدل منصات SaaS المصادقة الثنائية التقليدية بمصادقة PTERI App اللامركزية للقضاء على عمليات الاستيلاء على الحسابات وهجمات التصيد الاحتيالي.',
            complexity: 'low',
            metric: 'security',
            metricValue: 'veryHigh',
            complexityPercent: 25,
            metricPercent: 95
          },
          {
            title: 'تطوير تطبيقات blockchain سريع',
            description: 'تستخدم الشركات الناشئة التقنية PTERI Playground لبناء ونشر تطبيقات blockchain في أيام بدلاً من أشهر، مع الحد الأدنى من الترميز المطلوب.',
            complexity: 'medium',
            metric: 'speed',
            metricValue: 'veryHigh',
            complexityPercent: 50,
            metricPercent: 90
          },
          {
            title: 'معالجة دفع آمنة',
            description: 'تنفذ منصات SaaS مدفوعات صغيرة قائمة على Litecoin لفوترة الاشتراكات، مما يقلل تكاليف المعاملات ويزيل عمليات رد المبالغ المدفوعة.',
            complexity: 'medium',
            metric: 'cost',
            metricValue: 'high',
            complexityPercent: 60,
            metricPercent: 80
          },
          {
            title: 'معالجة ذكاء اصطناعي خاصة',
            description: 'تستخدم شركات التكنولوجيا خوادم MCP من PTERI Intelligence لمعالجة ذكاء اصطناعي آمنة وخاصة تحمي بيانات العملاء الحساسة.',
            complexity: 'high',
            metric: 'privacy',
            metricValue: 'veryHigh',
            complexityPercent: 75,
            metricPercent: 95
          }
        ]
      }
    }
  }
  return texts[locale.value] || texts.en
})
</script>

<template>
  <div class="bg-black ">
    <!-- Hero -->
    <section class="relative overflow-hidden isolate bg-emerald-50 ">
      <!-- Background layers -->
      <div aria-hidden="true" class="pointer-events-none absolute inset-0">
        <div class="absolute inset-0 bg-gradient-to-b from-emerald-50/60 to-white/80 dark:from-slate-950/70 dark:to-slate-900/80"></div>
        <div class="absolute -top-1/3 -left-1/4 h-[36rem] w-[36rem] rounded-full bg-emerald-300/30 blur-3xl dark:bg-emerald-400/20"></div>
        <div class="absolute -bottom-1/3 -right-1/4 h-[36rem] w-[36rem] rounded-full bg-cyan-300/25 blur-3xl dark:bg-cyan-400/15"></div>
        <svg class="absolute inset-0 h-full w-full opacity-[0.08] dark:opacity-[0.14]" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="tech-grid" width="8" height="8" patternUnits="userSpaceOnUse">
              <path d="M8 0H0V8" fill="none" stroke="currentColor" stroke-width=".25"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#tech-grid)" class="text-white "
                style="mask: radial-gradient(120% 90% at 50% 0%, #000 45%, transparent 100%); -webkit-mask: radial-gradient(120% 90% at 50% 0%, #000 45%, transparent 100%);" />
        </svg>
      </div>

      <div class="relative container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24 pt-28 md:pt-16">
        <h1 class="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white ">
          {{ translations.title }}
        </h1>

        <p class="mt-6 max-w-3xl text-lg text-white/70  ">
          {{ translations.description }}
        </p>

        <div class="mt-4 text-sm text-white/50 ">
          {{ translations.compliance }}
        </div>

        <!-- Primary CTAs -->
        <div class="mt-6 flex flex-wrap gap-3">
          <!-- Try Free 2FA API (Azure Marketplace) -->
          <a
            href="https://azuremarketplace.microsoft.com/en-us/marketplace/apps/kakrplatforminc1697572308188.pteri-node-offer?tab=overview"
            target="_blank"
            rel="noopener"
            class="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold text-white  bg-gradient-to-r from-emerald-300 to-emerald-400 hover:from-emerald-200 hover:to-emerald-300 transition"
          >
            {{ translations.tryFree }}
          </a>

          <!-- Try Free (pteri.org) -->
          <a
            href="https://pteri.org/Register"
            target="_blank"
            rel="noopener"
            class="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold text-emerald-300 border border-emerald-400/60 hover:bg-emerald-400/10 transition"
          >
            {{ translations.tryFreePteri }}
          </a>

          <!-- Contact Sales (/contact) -->
          <a
            href="/contact"
            class="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold text-slate-200 border border-white/15 hover:bg-black/5 transition"
          >
            {{ translations.contactSales }}
          </a>
        </div>
      </div>
    </section>

    <!-- Main Content -->
    <WhyKakrSection
      :industry="translations.whyKakr.industry"
      :description="translations.whyKakr.description"
    >
      <!-- Feature Cards -->
      <FeatureCard
        v-for="(feature, idx) in translations.whyKakr.features"
        :key="idx"
        :title="feature.title"
        :description="feature.description"
        :features="feature.points"
        :linkText="feature.linkText"
        :linkUrl="idx === 0 ? 'https://docs.kakr.ai/' : idx === 1 ? 'https://playground.pteri.org/' : 'https://playground.pteri.org/Chat/Pteri-intelligence'"
        :iconBgClass="idx === 0 ? 'bg-gradient-to-br from-green-600 to-green-700' : idx === 1 ? 'bg-gradient-to-br from-green-600 to-green-800' : 'bg-gradient-to-br from-emerald-500 to-teal-600'"
      >
        <template #icon>
          <svg v-if="idx === 0" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
          </svg>
          <svg v-else-if="idx === 1" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
        </template>
      </FeatureCard>
    </WhyKakrSection>

    <!-- Benefits Comparison Table -->
    <section class="bg-black py-16 /50 lg:py-24">
      <div class="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-3xl text-center">
          <h2 class="text-3xl font-bold tracking-tight text-white  sm:text-4xl">
            {{ translations.benefits.title }}
          </h2>
          <p class="mt-4 text-lg text-white/70  ">
            {{ translations.benefits.description }}
          </p>
        </div>

        <div class="mt-12">
          <ComparisonTable
            :benefitLabel="translations.benefits.benefitLabel"
            :ourLabel="translations.benefits.ourLabel"
            :theirLabel="translations.benefits.theirLabel"
            :rows="translations.benefits.rows.map(row => ({ ...row, highlight: true }))"
          />
        </div>
      </div>
    </section>

    <!-- Testimonials removed: entries were fabricated (placeholder personas and
         invented outcome quotes). Restore only with real, approved customer
         quotes, real names/roles, and permission to publish. -->

    <!-- Tech Stack Integration -->
    <section class="bg-black py-16  lg:py-24">
      <div class="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-3xl text-center">
          <h2 class="text-3xl font-bold tracking-tight text-white  sm:text-4xl">
            {{ translations.techStack.title }}
          </h2>
          <p class="mt-4 text-lg text-white/70  ">
            {{ translations.techStack.description }}
          </p>
        </div>

        <div class="mt-16">
          <div class="grid gap-8 md:grid-cols-3">
            <!-- Dynamic Tech Stack Cards -->
            <div 
              v-for="(card, idx) in translations.techStack.cards" 
              :key="idx"
              class="rounded-2xl border border-white/10  bg-black p-8 shadow-sm dark:border-slate-800 /50"
            >
              <div 
                class="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full"
                :class="idx === 0 ? 'bg-gradient-to-br from-green-600 to-green-700' : idx === 1 ? 'bg-gradient-to-br from-green-600 to-green-800' : 'bg-gradient-to-br from-emerald-500 to-teal-600'"
              >
                <svg v-if="idx === 0" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <svg v-else-if="idx === 1" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                </svg>
                <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                </svg>
              </div>
              <h3 class="mb-3 text-xl font-semibold text-white ">{{ card.title }}</h3>
              <p class="text-white/70  ">
                {{ card.description }}
              </p>
              <ul class="mt-4 space-y-2">
                <li v-for="(feature, fIdx) in card.features" :key="fIdx" class="flex items-start">
                  <svg class="mr-2 mt-1 h-4 w-4 flex-shrink-0 text-emerald-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span class="text-sm text-white/70  ">{{ feature }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Use Cases -->
    <section class="bg-black py-16 /50 lg:py-24">
      <div class="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-3xl text-center">
          <h2 class="text-3xl font-bold tracking-tight text-white  sm:text-4xl">
            {{ translations.useCases.title }}
          </h2>
          <p class="mt-4 text-lg text-white/70  ">
            {{ translations.useCases.description }}
          </p>
        </div>

        <div class="mt-16 grid gap-8 md:grid-cols-2">
          <!-- Dynamic Use Case Cards -->
          <div 
            v-for="(useCase, idx) in translations.useCases.cases" 
            :key="idx"
            class="rounded-2xl border border-white/10  bg-black p-6 shadow-sm dark:border-slate-800 /50"
          >
            <div 
              class="mb-4 flex h-12 w-12 items-center justify-center rounded-full"
              :class="idx === 0 ? 'bg-gradient-to-br from-green-600 to-green-700' : idx === 1 ? 'bg-gradient-to-br from-green-600 to-green-800' : idx === 2 ? 'bg-gradient-to-br from-green-500 to-green-700' : 'bg-gradient-to-br from-emerald-500 to-teal-600'"
            >
              <svg v-if="idx === 0" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <svg v-else-if="idx === 1" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
              <svg v-else-if="idx === 2" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
              </svg>
              <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 class="mb-3 text-xl font-semibold text-white ">{{ useCase.title }}</h3>
            <p class="text-white/70  ">
              {{ useCase.description }}
            </p>
            <div class="mt-6">
              <div class="flex items-center justify-between">
                <span class="text-xs font-medium text-white/50 ">{{ translations.useCases.complexityLabel }}</span>
                <span class="text-xs font-medium text-emerald-600 dark:text-emerald-400">{{ translations.useCases.complexityValues[useCase.complexity] }}</span>
              </div>
              <div class="mt-1 h-2 w-full rounded-full bg-white/8 ">
                <div class="h-2 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600" :style="`width: ${useCase.complexityPercent}%`"></div>
              </div>
            </div>
            <div class="mt-4">
              <div class="flex items-center justify-between">
                <span class="text-xs font-medium text-white/50 ">{{ translations.useCases.metricLabels[useCase.metric] }}</span>
                <span class="text-xs font-medium text-emerald-600 dark:text-emerald-400">{{ translations.useCases.metricValues[useCase.metricValue] }}</span>
              </div>
              <div class="mt-1 h-2 w-full rounded-full bg-white/8 ">
                <div class="h-2 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600" :style="`width: ${useCase.metricPercent}%`"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>



