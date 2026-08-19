<script setup>
import { useI18n } from 'vue-i18n'
import { useSEO } from '~/composables/useSEO'

const { locale } = useI18n()
const { setSEO } = useSEO()

setSEO({
  title: 'Healthcare Web3 Infrastructure - Blockchain Solutions for HIPAA Programs | Kakr Labs',
  description: 'Secure patient data and support your HIPAA compliance program with Kakr Labs\' Litecoin-based healthcare solutions. Protect portals, enable telemedicine, and track pharmaceuticals with proof-of-work-secured infrastructure.',
  keywords: ['healthcare blockchain', 'HIPAA Web3', 'medical blockchain infrastructure', 'patient data security', 'telemedicine blockchain', 'pharmaceutical tracking', 'healthcare 2FA', 'medical records blockchain'],
  type: 'service',
  image: '/og/og-healthcare.png',
  robots: 'noindex, follow',
  structuredData: [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Healthcare Web3 Infrastructure Solutions',
      description: 'Web3 infrastructure that supports HIPAA compliance programs for healthcare organizations, built on Litecoin blockchain',
      provider: {
        '@type': 'Organization',
        name: 'Kakr Labs'
      },
      serviceType: 'Healthcare Blockchain Infrastructure',
      areaServed: 'Worldwide',
      audience: {
        '@type': 'Audience',
        audienceType: 'Healthcare Organizations'
      },
      offers: {
        '@type': 'Offer',
        name: 'Healthcare Blockchain Solutions',
        description: 'Secure patient portals, telemedicine infrastructure, and pharmaceutical tracking',
        category: 'Healthcare Technology'
      }
    }
  ]
})

const translations = computed(() => {
  const texts = {
    en: {
      title: 'Healthcare Solutions',
      description: 'Healthcare faces data breaches and compliance pressures, including HIPAA violations. Kakr Labs offers Litecoin-based solutions with proof-of-work security and low per-transaction fees.',
      compliance: 'Designed to support HIPAA, EPCS, and GDPR compliance programs',
      contactSales: 'Contact Sales',
      whyTitle: 'Why Kakr Labs for Healthcare?',
      whyDescription: 'Our solutions tackle healthcare challenges like data privacy, secure access, and regulatory compliance with Litecoin\'s reliable blockchain.',
      portalTitle: 'Secure Patient Portals',
      portalDescription: 'Protect access with PTERI App\'s decentralized 2FA.',
      portalFeature1: 'Cut phishing exposure with cryptographic proofs',
      portalFeature2: 'Designed to support HIPAA-related controls for patient data',
      portalFeature3: 'REST APIs for integration with EHR systems',
      portalLink: 'Portal Solutions',
      telemedicineTitle: 'Telemedicine & EPCS',
      telemedicineDescription: 'Enable secure prescribing with PTERI Intelligence\'s AI tools.',
      telemedicineFeature1: 'Workflows that support EPCS requirements for telehealth',
      telemedicineFeature2: 'Customer-controlled credential protection for secure sessions',
      telemedicineFeature3: 'Low per-transaction fees for global access',
      telemedicineLink: 'Telemedicine Solutions',
      supplyChainTitle: 'Supply Chain & Drug Tracking',
      supplyChainDescription: 'Track pharmaceuticals with PTERI Data\'s immutable records.',
      supplyChainFeature1: 'Tamper-proof audits for supply chain',
      supplyChainFeature2: 'Evidence and records to support regulatory reporting',
      supplyChainFeature3: 'Scalable for hospital networks',
      supplyChainLink: 'Supply Chain Solutions',
      benefitsTitle: 'Benefits for Healthcare',
      benefitsDescription: 'See how Kakr Labs solutions compare to traditional systems for healthcare providers.',
      challengesTitle: 'Healthcare Industry Challenges',
      challengesDescription: 'How Kakr Labs addresses the most pressing issues in healthcare today.',
      challenge1Title: 'Data Security & Privacy',
      challenge1Description: 'Healthcare organizations face unprecedented challenges in securing patient data while maintaining accessibility for care providers. With breaches carrying serious financial and regulatory consequences, the stakes are higher than ever.',
      challenge1SolutionTitle: 'Kakr Labs Solution:',
      challenge1Solution1: 'Decentralized 2FA reduces credential-theft risk',
      challenge1Solution2: 'Customer-controlled credential protection for patient data',
      challenge1Solution3: 'Security controls and audit trails designed to support HIPAA-related requirements',
      challenge2Title: 'Regulatory Compliance',
      challenge2Description: 'Navigating complex regulatory requirements like HIPAA, EPCS, and international data protection laws creates significant overhead for healthcare organizations of all sizes.',
      challenge2SolutionTitle: 'Kakr Labs Solution:',
      challenge2Solution1: 'Automated compliance reporting and documentation',
      challenge2Solution2: 'Immutable audit trails for regulatory inspections',
      challenge2Solution3: 'Pre-built compliance templates for common requirements',
      challenge3Title: 'Telemedicine Security',
      challenge3Description: 'The rapid growth of telemedicine has created new security challenges for patient identity verification, secure prescribing, and maintaining confidentiality in virtual care settings.',
      challenge3SolutionTitle: 'Kakr Labs Solution:',
      challenge3Solution1: 'Electronic prescribing built to support EPCS requirements',
      challenge3Solution2: 'Secure patient identity verification',
      challenge3Solution3: 'End-to-end encrypted session management',
      challenge4Title: 'Supply Chain Integrity',
      challenge4Description: 'Ensuring the authenticity and integrity of pharmaceuticals and medical supplies is critical for patient safety, but traditional tracking systems are vulnerable to tampering and fraud.',
      challenge4SolutionTitle: 'Kakr Labs Solution:',
      challenge4Solution1: 'Immutable blockchain records for supply chain',
      challenge4Solution2: 'End-to-end tracking from manufacturer to patient',
      challenge4Solution3: 'Counterfeit detection and prevention'
    },
    de: {
      title: 'Gesundheitslösungen',
      description: 'Das Gesundheitswesen steht vor Datenschutzverletzungen und Compliance-Druck, einschließlich HIPAA-Verstößen. Kakr Labs bietet Litecoin-basierte Lösungen, seit 2011 durch Proof-of-Work gesichert, mit niedrigen Transaktionsgebühren.',
      compliance: 'Entwickelt zur Unterstützung von HIPAA-, EPCS- und DSGVO-Compliance-Programmen',
      contactSales: 'Vertrieb kontaktieren',
      whyTitle: 'Warum Kakr Labs für das Gesundheitswesen?',
      whyDescription: 'Unsere Lösungen bewältigen Herausforderungen im Gesundheitswesen wie Datenschutz, sicheren Zugang und regulatorische Compliance mit Litecoins zuverlässiger Blockchain.',
      portalTitle: 'Sichere Patientenportale',
      portalDescription: 'Schützen Sie den Zugang mit der dezentralen 2FA von PTERI App.',
      portalFeature1: 'Reduzieren Sie Phishing-Risiken mit kryptografischen Nachweisen',
      portalFeature2: 'Entwickelt zur Unterstützung HIPAA-bezogener Kontrollen für Patientendaten',
      portalFeature3: 'REST-APIs für Integration mit EHR-Systemen',
      portalLink: 'Portal-Lösungen',
      telemedicineTitle: 'Telemedizin & EPCS',
      telemedicineDescription: 'Ermöglichen Sie sichere Verschreibungen mit den KI-Tools von PTERI Intelligence.',
      telemedicineFeature1: 'Workflows zur Unterstützung von EPCS-Anforderungen für Telemedizin',
      telemedicineFeature2: 'Kundengesteuerter Schutz der Anmeldedaten für sichere Sitzungen',
      telemedicineFeature3: 'Niedrige Transaktionsgebühren für globalen Zugang',
      telemedicineLink: 'Telemedizin-Lösungen',
      supplyChainTitle: 'Lieferkette & Arzneimittelverfolgung',
      supplyChainDescription: 'Verfolgen Sie Arzneimittel mit den unveränderlichen Aufzeichnungen von PTERI Data.',
      supplyChainFeature1: 'Manipulationssichere Audits für die Lieferkette',
      supplyChainFeature2: 'Nachweise und Aufzeichnungen zur Unterstützung regulatorischer Berichterstattung',
      supplyChainFeature3: 'Skalierbar für Krankenhausnetzwerke',
      supplyChainLink: 'Lieferketten-Lösungen',
      benefitsTitle: 'Vorteile für das Gesundheitswesen',
      benefitsDescription: 'Sehen Sie, wie Kakr Labs-Lösungen im Vergleich zu traditionellen Systemen für Gesundheitsdienstleister abschneiden.',
      challengesTitle: 'Herausforderungen der Gesundheitsbranche',
      challengesDescription: 'Wie Kakr Labs die dringendsten Probleme im Gesundheitswesen heute angeht.',
      challenge1Title: 'Datensicherheit & Datenschutz',
      challenge1Description: 'Gesundheitsorganisationen stehen vor beispiellosen Herausforderungen bei der Sicherung von Patientendaten bei gleichzeitiger Aufrechterhaltung der Zugänglichkeit für Pflegekräfte. Angesichts erheblicher finanzieller und regulatorischer Folgen von Datenschutzverletzungen war der Einsatz noch nie höher.',
      challenge1SolutionTitle: 'Kakr Labs Lösung:',
      challenge1Solution1: 'Dezentrale 2FA reduziert das Risiko von Anmeldedatendiebstahl',
      challenge1Solution2: 'Kundengesteuerte Schutztechnologie für Anmeldedaten von Patienten',
      challenge1Solution3: 'Sicherheitskontrollen und Prüfpfade zur Unterstützung HIPAA-bezogener Anforderungen',
      challenge2Title: 'Regulatorische Compliance',
      challenge2Description: 'Die Navigation durch komplexe regulatorische Anforderungen wie HIPAA, EPCS und internationale Datenschutzgesetze schafft erheblichen Overhead für Gesundheitsorganisationen aller Größen.',
      challenge2SolutionTitle: 'Kakr Labs Lösung:',
      challenge2Solution1: 'Automatisierte Compliance-Berichterstattung und Dokumentation',
      challenge2Solution2: 'Unveränderliche Prüfpfade für regulatorische Inspektionen',
      challenge2Solution3: 'Vorgefertigte Compliance-Vorlagen für häufige Anforderungen',
      challenge3Title: 'Telemedizin-Sicherheit',
      challenge3Description: 'Das schnelle Wachstum der Telemedizin hat neue Sicherheitsherausforderungen für die Patientenidentitätsverifizierung, sichere Verschreibungen und die Wahrung der Vertraulichkeit in virtuellen Pflegeumgebungen geschaffen.',
      challenge3SolutionTitle: 'Kakr Labs Lösung:',
      challenge3Solution1: 'Elektronische Verschreibung zur Unterstützung von EPCS-Anforderungen',
      challenge3Solution2: 'Sichere Patientenidentitätsverifizierung',
      challenge3Solution3: 'End-to-End-verschlüsselte Sitzungsverwaltung',
      challenge4Title: 'Lieferkettenintegrität',
      challenge4Description: 'Die Sicherstellung der Authentizität und Integrität von Arzneimitteln und medizinischen Versorgungsgütern ist für die Patientensicherheit von entscheidender Bedeutung, aber traditionelle Tracking-Systeme sind anfällig für Manipulation und Betrug.',
      challenge4SolutionTitle: 'Kakr Labs Lösung:',
      challenge4Solution1: 'Unveränderliche Blockchain-Aufzeichnungen für die Lieferkette',
      challenge4Solution2: 'End-to-End-Tracking vom Hersteller zum Patienten',
      challenge4Solution3: 'Fälschungserkennung und -prävention'
    },
    es: {
      title: 'Soluciones de Salud',
      description: 'La atención médica enfrenta brechas de datos y presiones de cumplimiento, incluidas las violaciones de HIPAA. Kakr Labs ofrece soluciones basadas en Litecoin, protegidas por prueba de trabajo desde 2011, con tarifas bajas por transacción.',
      compliance: 'Diseñado para respaldar programas de cumplimiento de HIPAA, EPCS y GDPR',
      contactSales: 'Contactar Ventas',
      whyTitle: '¿Por qué Kakr Labs para la Salud?',
      whyDescription: 'Nuestras soluciones abordan desafíos de atención médica como privacidad de datos, acceso seguro y cumplimiento regulatorio con la blockchain confiable de Litecoin.',
      portalTitle: 'Portales de Pacientes Seguros',
      portalDescription: 'Proteja el acceso con la 2FA descentralizada de PTERI App.',
      portalFeature1: 'Reduzca la exposición al phishing con pruebas criptográficas',
      portalFeature2: 'Diseñado para respaldar controles relacionados con HIPAA para datos de pacientes',
      portalFeature3: 'APIs REST para integración con sistemas EHR',
      portalLink: 'Soluciones de Portal',
      telemedicineTitle: 'Telemedicina y EPCS',
      telemedicineDescription: 'Habilite la prescripción segura con las herramientas de IA de PTERI Intelligence.',
      telemedicineFeature1: 'Flujos de trabajo que respaldan los requisitos de EPCS para telesalud',
      telemedicineFeature2: 'Protección de credenciales controlada por el cliente para sesiones seguras',
      telemedicineFeature3: 'Tarifas bajas por transacción para acceso global',
      telemedicineLink: 'Soluciones de Telemedicina',
      supplyChainTitle: 'Cadena de Suministro y Seguimiento de Medicamentos',
      supplyChainDescription: 'Rastree productos farmacéuticos con los registros inmutables de PTERI Data.',
      supplyChainFeature1: 'Auditorías a prueba de manipulaciones para la cadena de suministro',
      supplyChainFeature2: 'Evidencia y registros para respaldar los informes regulatorios',
      supplyChainFeature3: 'Escalable para redes hospitalarias',
      supplyChainLink: 'Soluciones de Cadena de Suministro',
      benefitsTitle: 'Beneficios para la Salud',
      benefitsDescription: 'Vea cómo las soluciones de Kakr Labs se comparan con los sistemas tradicionales para proveedores de atención médica.',
      challengesTitle: 'Desafíos de la Industria de la Salud',
      challengesDescription: 'Cómo Kakr Labs aborda los problemas más urgentes en la atención médica hoy.',
      challenge1Title: 'Seguridad y Privacidad de Datos',
      challenge1Description: 'Las organizaciones de atención médica enfrentan desafíos sin precedentes para asegurar los datos de los pacientes mientras mantienen la accesibilidad para los proveedores de atención. Con brechas que conllevan graves consecuencias financieras y regulatorias, las apuestas son más altas que nunca.',
      challenge1SolutionTitle: 'Solución de Kakr Labs:',
      challenge1Solution1: 'La 2FA descentralizada reduce el riesgo de robo de credenciales',
      challenge1Solution2: 'Tecnología de protección de credenciales controlada por el cliente para datos de pacientes',
      challenge1Solution3: 'Controles de seguridad y pistas de auditoría diseñados para respaldar requisitos relacionados con HIPAA',
      challenge2Title: 'Cumplimiento Regulatorio',
      challenge2Description: 'Navegar por requisitos regulatorios complejos como HIPAA, EPCS y leyes internacionales de protección de datos crea una sobrecarga significativa para organizaciones de atención médica de todos los tamaños.',
      challenge2SolutionTitle: 'Solución de Kakr Labs:',
      challenge2Solution1: 'Informes y documentación de cumplimiento automatizados',
      challenge2Solution2: 'Pistas de auditoría inmutables para inspecciones regulatorias',
      challenge2Solution3: 'Plantillas de cumplimiento prediseñadas para requisitos comunes',
      challenge3Title: 'Seguridad de Telemedicina',
      challenge3Description: 'El rápido crecimiento de la telemedicina ha creado nuevos desafíos de seguridad para la verificación de identidad del paciente, la prescripción segura y el mantenimiento de la confidencialidad en entornos de atención virtual.',
      challenge3SolutionTitle: 'Solución de Kakr Labs:',
      challenge3Solution1: 'Prescripción electrónica compatible con EPCS',
      challenge3Solution2: 'Verificación segura de identidad del paciente',
      challenge3Solution3: 'Gestión de sesiones cifradas de extremo a extremo',
      challenge4Title: 'Integridad de la Cadena de Suministro',
      challenge4Description: 'Garantizar la autenticidad e integridad de los productos farmacéuticos y suministros médicos es crítico para la seguridad del paciente, pero los sistemas de seguimiento tradicionales son vulnerables a la manipulación y el fraude.',
      challenge4SolutionTitle: 'Solución de Kakr Labs:',
      challenge4Solution1: 'Registros blockchain inmutables para la cadena de suministro',
      challenge4Solution2: 'Seguimiento de extremo a extremo desde el fabricante hasta el paciente',
      challenge4Solution3: 'Detección y prevención de falsificaciones'
    },
    ja: {
      title: 'ヘルスケアソリューション',
      description: 'ヘルスケアはデータ侵害とコンプライアンスの圧力（HIPAA違反を含む）に直面しています。Kakr Labsは、2011年以来プルーフ・オブ・ワークで保護され、低いトランザクション手数料を実現するLitecoinベースのソリューションを提供します。',
      compliance: 'HIPAA、EPCS、GDPRのコンプライアンス対応を支援する設計',
      contactSales: '営業に連絡',
      whyTitle: 'ヘルスケアにKakr Labsを選ぶ理由',
      whyDescription: '当社のソリューションは、Litecoinの信頼性の高いブロックチェーンを使用して、データプライバシー、安全なアクセス、規制コンプライアンスなどのヘルスケアの課題に取り組みます。',
      portalTitle: '安全な患者ポータル',
      portalDescription: 'PTERI Appの分散型2FAでアクセスを保護します。',
      portalFeature1: '暗号証明でフィッシングのリスクを低減',
      portalFeature2: '患者データに関するHIPAA関連の管理策を支援する設計',
      portalFeature3: 'EHRシステムとの統合のためのREST API',
      portalLink: 'ポータルソリューション',
      telemedicineTitle: '遠隔医療＆EPCS',
      telemedicineDescription: 'PTERI IntelligenceのAIツールで安全な処方を実現します。',
      telemedicineFeature1: '遠隔医療のEPCS要件を支援するワークフロー',
      telemedicineFeature2: '安全なセッションのための顧客管理型認証情報保護',
      telemedicineFeature3: 'グローバルアクセスのための低いトランザクション手数料',
      telemedicineLink: '遠隔医療ソリューション',
      supplyChainTitle: 'サプライチェーン＆医薬品追跡',
      supplyChainDescription: 'PTERI Dataの不変記録で医薬品を追跡します。',
      supplyChainFeature1: 'サプライチェーンの改ざん防止監査',
      supplyChainFeature2: '規制報告を支援するエビデンスと記録',
      supplyChainFeature3: '病院ネットワークに対応可能',
      supplyChainLink: 'サプライチェーンソリューション',
      benefitsTitle: 'ヘルスケアのメリット',
      benefitsDescription: 'Kakr Labsソリューションが医療提供者向けの従来システムとどのように比較されるかをご覧ください。',
      challengesTitle: 'ヘルスケア業界の課題',
      challengesDescription: 'Kakr Labsが今日のヘルスケアで最も差し迫った問題にどのように対処しているか。',
      challenge1Title: 'データセキュリティ＆プライバシー',
      challenge1Description: '医療機関は、医療提供者のアクセシビリティを維持しながら患者データを保護するという前例のない課題に直面しています。侵害は深刻な財務上・規制上の影響を伴うため、リスクはこれまで以上に高くなっています。',
      challenge1SolutionTitle: 'Kakr Labsソリューション：',
      challenge1Solution1: '分散型2FAが認証情報盗難のリスクを低減',
      challenge1Solution2: '患者データのための顧客管理型認証情報保護技術',
      challenge1Solution3: 'HIPAA関連の要件を支援するよう設計されたセキュリティ制御と監査証跡',
      challenge2Title: '規制コンプライアンス',
      challenge2Description: 'HIPAA、EPCS、国際データ保護法などの複雑な規制要件をナビゲートすることは、あらゆる規模の医療機関に大きなオーバーヘッドを生み出します。',
      challenge2SolutionTitle: 'Kakr Labsソリューション：',
      challenge2Solution1: '自動化されたコンプライアンスレポートとドキュメント',
      challenge2Solution2: '規制検査のための不変の監査証跡',
      challenge2Solution3: '一般的な要件のための事前構築されたコンプライアンステンプレート',
      challenge3Title: '遠隔医療セキュリティ',
      challenge3Description: '遠隔医療の急速な成長により、患者の身元確認、安全な処方、仮想ケア環境での機密性の維持に関する新しいセキュリティ課題が生まれています。',
      challenge3SolutionTitle: 'Kakr Labsソリューション：',
      challenge3Solution1: 'EPCS要件を支援する電子処方',
      challenge3Solution2: '安全な患者身元確認',
      challenge3Solution3: 'エンドツーエンド暗号化セッション管理',
      challenge4Title: 'サプライチェーンの完全性',
      challenge4Description: '医薬品および医療用品の真正性と完全性を確保することは患者の安全にとって重要ですが、従来の追跡システムは改ざんや詐欺に対して脆弱です。',
      challenge4SolutionTitle: 'Kakr Labsソリューション：',
      challenge4Solution1: 'サプライチェーンのための不変のブロックチェーン記録',
      challenge4Solution2: '製造業者から患者までのエンドツーエンド追跡',
      challenge4Solution3: '偽造品の検出と防止'
    },
    ar: {
      title: 'حلول الرعاية الصحية',
      description: 'تواجه الرعاية الصحية اختراقات البيانات وضغوط الامتثال، بما في ذلك انتهاكات HIPAA. تقدم Kakr Labs حلولاً قائمة على Litecoin، مؤمَّنة بإثبات العمل منذ عام 2011، مع رسوم منخفضة لكل معاملة.',
      compliance: 'مصمم لدعم برامج الامتثال لـ HIPAA وEPCS وGDPR',
      contactSales: 'اتصل بالمبيعات',
      whyTitle: 'لماذا Kakr Labs للرعاية الصحية؟',
      whyDescription: 'تعالج حلولنا تحديات الرعاية الصحية مثل خصوصية البيانات والوصول الآمن والامتثال التنظيمي باستخدام blockchain Litecoin الموثوق.',
      portalTitle: 'بوابات المرضى الآمنة',
      portalDescription: 'احمِ الوصول باستخدام 2FA اللامركزية من PTERI App.',
      portalFeature1: 'قلل التعرض للتصيد الاحتيالي باستخدام الإثباتات التشفيرية',
      portalFeature2: 'مصمَّم لدعم ضوابط ذات صلة بـ HIPAA لبيانات المرضى',
      portalFeature3: 'واجهات برمجة تطبيقات REST للتكامل مع أنظمة EHR',
      portalLink: 'حلول البوابة',
      telemedicineTitle: 'الطب عن بعد وEPCS',
      telemedicineDescription: 'تمكين الوصفات الآمنة باستخدام أدوات الذكاء الاصطناعي من PTERI Intelligence.',
      telemedicineFeature1: 'سير عمل يدعم متطلبات EPCS للرعاية الصحية عن بعد',
      telemedicineFeature2: 'حماية بيانات الاعتماد التي يتحكم فيها العميل للجلسات الآمنة',
      telemedicineFeature3: 'رسوم منخفضة لكل معاملة للوصول العالمي',
      telemedicineLink: 'حلول الطب عن بعد',
      supplyChainTitle: 'سلسلة التوريد وتتبع الأدوية',
      supplyChainDescription: 'تتبع المستحضرات الصيدلانية باستخدام سجلات PTERI Data غير القابلة للتغيير.',
      supplyChainFeature1: 'عمليات تدقيق مقاومة للتلاعب لسلسلة التوريد',
      supplyChainFeature2: 'أدلة وسجلات لدعم التقارير التنظيمية',
      supplyChainFeature3: 'قابل للتوسع لشبكات المستشفيات',
      supplyChainLink: 'حلول سلسلة التوريد',
      benefitsTitle: 'فوائد الرعاية الصحية',
      benefitsDescription: 'انظر كيف تقارن حلول Kakr Labs بالأنظمة التقليدية لمقدمي الرعاية الصحية.',
      challengesTitle: 'تحديات صناعة الرعاية الصحية',
      challengesDescription: 'كيف تعالج Kakr Labs أكثر القضايا إلحاحًا في الرعاية الصحية اليوم.',
      challenge1Title: 'أمان البيانات والخصوصية',
      challenge1Description: 'تواجه منظمات الرعاية الصحية تحديات غير مسبوقة في تأمين بيانات المرضى مع الحفاظ على إمكانية الوصول لمقدمي الرعاية. ومع ما تحمله الاختراقات من عواقب مالية وتنظيمية جسيمة، أصبحت المخاطر أعلى من أي وقت مضى.',
      challenge1SolutionTitle: 'حل Kakr Labs:',
      challenge1Solution1: 'تقلل 2FA اللامركزية مخاطر سرقة بيانات الاعتماد',
      challenge1Solution2: 'تقنية حماية بيانات الاعتماد التي يتحكم فيها العميل لبيانات المرضى',
      challenge1Solution3: 'ضوابط أمنية ومسارات تدقيق مصمَّمة لدعم متطلبات ذات صلة بـ HIPAA',
      challenge2Title: 'الامتثال التنظيمي',
      challenge2Description: 'التنقل عبر المتطلبات التنظيمية المعقدة مثل HIPAA وEPCS وقوانين حماية البيانات الدولية يخلق عبئًا كبيرًا لمنظمات الرعاية الصحية من جميع الأحجام.',
      challenge2SolutionTitle: 'حل Kakr Labs:',
      challenge2Solution1: 'تقارير ووثائق امتثال آلية',
      challenge2Solution2: 'مسارات تدقيق غير قابلة للتغيير للتفتيش التنظيمي',
      challenge2Solution3: 'قوالب امتثال مُعدة مسبقًا للمتطلبات الشائعة',
      challenge3Title: 'أمان الطب عن بعد',
      challenge3Description: 'أدى النمو السريع للطب عن بعد إلى إنشاء تحديات أمنية جديدة للتحقق من هوية المريض والوصف الآمن والحفاظ على السرية في بيئات الرعاية الافتراضية.',
      challenge3SolutionTitle: 'حل Kakr Labs:',
      challenge3Solution1: 'وصف إلكتروني يدعم متطلبات EPCS',
      challenge3Solution2: 'التحقق الآمن من هوية المريض',
      challenge3Solution3: 'إدارة جلسات مشفرة من طرف إلى طرف',
      challenge4Title: 'سلامة سلسلة التوريد',
      challenge4Description: 'ضمان صحة وسلامة المستحضرات الصيدلانية والإمدادات الطبية أمر بالغ الأهمية لسلامة المرضى، لكن أنظمة التتبع التقليدية عرضة للتلاعب والاحتيال.',
      challenge4SolutionTitle: 'حل Kakr Labs:',
      challenge4Solution1: 'سجلات blockchain غير قابلة للتغيير لسلسلة التوريد',
      challenge4Solution2: 'تتبع من طرف إلى طرف من الشركة المصنعة إلى المريض',
      challenge4Solution3: 'كشف ومنع التزييف'
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
            <pattern id="hc-grid" width="8" height="8" patternUnits="userSpaceOnUse">
              <path d="M8 0H0V8" fill="none" stroke="currentColor" stroke-width=".25"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hc-grid)" class="text-white "
                style="mask: radial-gradient(120% 90% at 50% 0%, #000 45%, transparent 100%); -webkit-mask: radial-gradient(120% 90% at 50% 0%, #000 45%, transparent 100%);" />
        </svg>
      </div>

      <!-- Content -->
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
          <a
            href="/contact"
            target="_blank"
            rel="noopener"
            class="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold text-white  bg-gradient-to-r from-emerald-300 to-emerald-400 hover:from-emerald-200 hover:to-emerald-300 transition"
          >
            {{ translations.contactSales }}
          </a>
        </div>
      </div>
    </section>

    <!-- Main Content -->
    <WhyKakrSection
      :industry="translations.whyTitle"
      :description="translations.whyDescription"
    >
      <FeatureCard
        :title="translations.portalTitle"
        :description="translations.portalDescription"
        :features="[
          translations.portalFeature1,
          translations.portalFeature2,
          translations.portalFeature3
        ]"
        :linkText="translations.portalLink"
        linkUrl="https://docs.kakr.ai/"
        iconBgClass="bg-gradient-to-br from-green-600 to-green-700"
      >
        <template #icon>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
        </template>
      </FeatureCard>

      <FeatureCard
        :title="translations.telemedicineTitle"
        :description="translations.telemedicineDescription"
        :features="[
          translations.telemedicineFeature1,
          translations.telemedicineFeature2,
          translations.telemedicineFeature3
        ]"
        :linkText="translations.telemedicineLink"
        linkUrl="https://docs.kakr.ai/"
        iconBgClass="bg-gradient-to-br from-green-600 to-green-800"
      >
        <template #icon>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
        </template>
      </FeatureCard>

      <FeatureCard
        :title="translations.supplyChainTitle"
        :description="translations.supplyChainDescription"
        :features="[
          translations.supplyChainFeature1,
          translations.supplyChainFeature2,
          translations.supplyChainFeature3
        ]"
        :linkText="translations.supplyChainLink"
        linkUrl="https://docs.kakr.ai/"
        iconBgClass="bg-gradient-to-br from-emerald-500 to-teal-600"
      >
        <template #icon>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
          </svg>
        </template>
      </FeatureCard>
    </WhyKakrSection>

    <!-- Benefits Comparison Table -->
    <section class="bg-black py-16 /50 lg:py-24">
      <div class="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-3xl text-center">
          <h2 class="text-3xl font-bold tracking-tight text-white  sm:text-4xl">
            {{ translations.benefitsTitle }}
          </h2>
          <p class="mt-4 text-lg text-white/70  ">
            {{ translations.benefitsDescription }}
          </p>
        </div>

        <div class="mt-12">
          <ComparisonTable
            benefitLabel="Benefit"
            ourLabel="Kakr Labs"
            theirLabel="Traditional Systems"
            :rows="[
              { benefit: 'Breach Exposure', ours: 'Cryptographic 2FA - no shared secret to steal', theirs: 'High data risks', highlight: true },
              { benefit: 'Cost Savings', ours: 'Low per-transaction fees', theirs: 'High processing fees', highlight: true },
              { benefit: 'Compliance', ours: 'Audit trails and evidence to support HIPAA and EPCS programs', theirs: 'Manual audits', highlight: true },
              { benefit: 'Settlement Layer', ours: 'Litecoin mainnet, running since 2011', theirs: 'System downtimes', highlight: true }
            ]"
          />
        </div>
      </div>
    </section>

    <!-- Testimonials removed: entries were fabricated (placeholder personas and
         invented outcome quotes). Restore only with real, approved customer
         quotes, real names/roles, and permission to publish. -->

    <!-- Healthcare Challenges -->
    <section class="bg-black py-16  lg:py-24">
      <div class="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-3xl text-center">
          <h2 class="text-3xl font-bold tracking-tight text-white  sm:text-4xl">
            {{ translations.challengesTitle }}
          </h2>
          <p class="mt-4 text-lg text-white/70  ">
            {{ translations.challengesDescription }}
          </p>
        </div>

        <div class="mt-16">
          <div class="grid gap-8 md:grid-cols-2">
            <!-- Card 1 -->
            <div class="rounded-2xl border border-white/10  bg-black p-8 shadow-sm dark:border-slate-800 /50">
              <h3 class="mb-4 text-2xl font-semibold text-white ">{{ translations.challenge1Title }}</h3>
              <div class="mb-6 h-1 w-16 rounded bg-gradient-to-r from-emerald-500 to-teal-600"></div>
              <p class="mb-6 text-white/70  ">
                {{ translations.challenge1Description }}
              </p>
              <h4 class="mb-3 text-lg font-medium text-white ">{{ translations.challenge1SolutionTitle }}</h4>
              <ul class="space-y-3">
                <li class="flex items-start">
                  <svg class="mr-2 mt-1 h-5 w-5 flex-shrink-0 text-emerald-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
                  <span class="text-white/70  ">{{ translations.challenge1Solution1 }}</span>
                </li>
                <li class="flex items-start">
                  <svg class="mr-2 mt-1 h-5 w-5 flex-shrink-0 text-emerald-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
                  <span class="text-white/70  ">{{ translations.challenge1Solution2 }}</span>
                </li>
                <li class="flex items-start">
                  <svg class="mr-2 mt-1 h-5 w-5 flex-shrink-0 text-emerald-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
                  <span class="text-white/70  ">{{ translations.challenge1Solution3 }}</span>
                </li>
              </ul>
            </div>

            <!-- Card 2 -->
            <div class="rounded-2xl border border-white/10  bg-black p-8 shadow-sm dark:border-slate-800 /50">
              <h3 class="mb-4 text-2xl font-semibold text-white ">{{ translations.challenge2Title }}</h3>
              <div class="mb-6 h-1 w-16 rounded bg-gradient-to-r from-green-600 to-green-700"></div>
              <p class="mb-6 text-white/70  ">
                {{ translations.challenge2Description }}
              </p>
              <h4 class="mb-3 text-lg font-medium text-white ">{{ translations.challenge2SolutionTitle }}</h4>
              <ul class="space-y-3">
                <li class="flex items-start">
                  <svg class="mr-2 mt-1 h-5 w-5 flex-shrink-0 text-emerald-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
                  <span class="text-white/70  ">{{ translations.challenge2Solution1 }}</span>
                </li>
                <li class="flex items-start">
                  <svg class="mr-2 mt-1 h-5 w-5 flex-shrink-0 text-emerald-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
                  <span class="text-white/70  ">{{ translations.challenge2Solution2 }}</span>
                </li>
                <li class="flex items-start">
                  <svg class="mr-2 mt-1 h-5 w-5 flex-shrink-0 text-emerald-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
                  <span class="text-white/70  ">{{ translations.challenge2Solution3 }}</span>
                </li>
              </ul>
            </div>

            <!-- Card 3 -->
            <div class="rounded-2xl border border-white/10  bg-black p-8 shadow-sm dark:border-slate-800 /50">
              <h3 class="mb-4 text-2xl font-semibold text-white ">{{ translations.challenge3Title }}</h3>
              <div class="mb-6 h-1 w-16 rounded bg-gradient-to-r from-green-600 to-green-800"></div>
              <p class="mb-6 text-white/70  ">
                {{ translations.challenge3Description }}
              </p>
              <h4 class="mb-3 text-lg font-medium text-white ">{{ translations.challenge3SolutionTitle }}</h4>
              <ul class="space-y-3">
                <li class="flex items-start">
                  <svg class="mr-2 mt-1 h-5 w-5 flex-shrink-0 text-emerald-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
                  <span class="text-white/70  ">{{ translations.challenge3Solution1 }}</span>
                </li>
                <li class="flex items-start">
                  <svg class="mr-2 mt-1 h-5 w-5 flex-shrink-0 text-emerald-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
                  <span class="text-white/70  ">{{ translations.challenge3Solution2 }}</span>
                </li>
                <li class="flex items-start">
                  <svg class="mr-2 mt-1 h-5 w-5 flex-shrink-0 text-emerald-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
                  <span class="text-white/70  ">{{ translations.challenge3Solution3 }}</span>
                </li>
              </ul>
            </div>

            <!-- Card 4 -->
            <div class="rounded-2xl border border-white/10  bg-black p-8 shadow-sm dark:border-slate-800 /50">
              <h3 class="mb-4 text-2xl font-semibold text-white ">{{ translations.challenge4Title }}</h3>
              <div class="mb-6 h-1 w-16 rounded bg-gradient-to-r from-green-500 to-green-700"></div>
              <p class="mb-6 text-white/70  ">
                {{ translations.challenge4Description }}
              </p>
              <h4 class="mb-3 text-lg font-medium text-white ">{{ translations.challenge4SolutionTitle }}</h4>
              <ul class="space-y-3">
                <li class="flex items-start">
                  <svg class="mr-2 mt-1 h-5 w-5 flex-shrink-0 text-emerald-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
                  <span class="text-white/70  ">{{ translations.challenge4Solution1 }}</span>
                </li>
                <li class="flex items-start">
                  <svg class="mr-2 mt-1 h-5 w-5 flex-shrink-0 text-emerald-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
                  <span class="text-white/70  ">{{ translations.challenge4Solution2 }}</span>
                </li>
                <li class="flex items-start">
                  <svg class="mr-2 mt-1 h-5 w-5 flex-shrink-0 text-emerald-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
                  <span class="text-white/70  ">{{ translations.challenge4Solution3 }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Integration Partners -->
    <section class="hidden bg-black py-16 /50 lg:py-24">
      <div class="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-3xl text-center">
          <h2 class="text-3xl font-bold tracking-tight text-white  sm:text-4xl">
            Healthcare Integration Partners
          </h2>
          <p class="mt-4 text-lg text-white/70  ">
            Kakr Labs solutions integrate seamlessly with leading healthcare systems.
          </p>
        </div>

        <div class="mt-12">
          <div class="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
            <div class="flex items-center justify-center p-4"><div class="h-12 w-full rounded-lg bg-white/8 "></div></div>
            <div class="flex items-center justify-center p-4"><div class="h-12 w-full rounded-lg bg-white/8 "></div></div>
            <div class="flex items-center justify-center p-4"><div class="h-12 w-full rounded-lg bg-white/8 "></div></div>
            <div class="flex items-center justify-center p-4"><div class="h-12 w-full rounded-lg bg-white/8 "></div></div>
            <div class="flex items-center justify-center p-4"><div class="h-12 w-full rounded-lg bg-white/8 "></div></div>
            <div class="flex items-center justify-center p-4"><div class="h-12 w-full rounded-lg bg-white/8 "></div></div>
          </div>
          <div class="mt-8 text-center text-sm text-white/50 ">
            Partner logos will be displayed here. We integrate with all major EHR, telehealth, and healthcare management systems.
          </div>
        </div>
      </div>
    </section>
  </div>
</template>


