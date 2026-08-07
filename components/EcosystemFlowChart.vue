<template>
  <section class="relative section-py overflow-hidden bg-black border-t border-white/5">
    <div class="absolute inset-0 pointer-events-none" style="background: radial-gradient(ellipse 80% 60% at 50% 50%, rgba(16,185,129,0.06) 0%, transparent 70%);"></div>

    <div class="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

      <!-- Header -->
      <div class="text-center mb-16" data-aos="fade-up">
        <p class="text-xs font-bold tracking-widest uppercase text-emerald-500 mb-3">{{ content.ecosystem }}</p>
        <h2 class="text-3xl sm:text-4xl font-bold text-white">{{ content.headline }}</h2>
        <p class="text-white/80 text-base sm:text-lg mt-4 max-w-2xl mx-auto leading-relaxed">{{ content.subheadline }}</p>
      </div>

      <!-- Flow -->
      <div class="flex flex-col items-center gap-0" data-aos="fade-up" data-aos-delay="100">

        <!-- Row 1: Sources -->
        <div class="flex flex-wrap items-stretch justify-center gap-4 w-full">
          <div v-for="src in sources" :key="src.label" class="source-node flex flex-col items-center justify-center gap-2.5 px-5 py-4 rounded-2xl min-w-[120px]">
            <div class="w-10 h-10 rounded-xl flex items-center justify-center" :style="`background: ${src.bg}; border: 1px solid ${src.border};`">
              <span v-html="src.svg"></span>
            </div>
            <span class="text-base font-semibold text-white">{{ src.label }}</span>
          </div>
        </div>

        <!-- Arrow down -->
        <div class="flex flex-col items-center my-2">
          <div class="w-px h-8 bg-gradient-to-b from-white/20 to-emerald-500/60"></div>
          <svg width="12" height="8" viewBox="0 0 12 8"><path d="M6 8L0 0h12z" fill="rgba(16,185,129,0.7)"/></svg>
        </div>

        <!-- Row 2: PTERI Core -->
        <div class="pteri-core flex flex-col sm:flex-row sm:items-center sm:justify-center gap-4 sm:gap-6 px-5 sm:px-10 py-5 sm:py-6 rounded-3xl">
          <!-- Icon + text, centered as one unit with the logo -->
          <div class="flex items-center justify-center gap-3 sm:contents">
            <div class="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center flex-shrink-0">
              <img src="/pteri-logo.webp" alt="PTERI" class="w-8 h-8 sm:w-9 sm:h-9 object-contain rounded-lg" />
            </div>
            <div class="flex flex-col justify-center">
              <p class="text-white font-bold text-xl tracking-tight leading-tight">PTERI</p>
              <p class="text-emerald-400 text-xs font-semibold leading-tight">{{ content.pteriSubtitle }}</p>
              <p class="text-white text-sm mt-0.5 leading-tight whitespace-nowrap">{{ content.pteriDesc }}</p>
            </div>
          </div>
          <!-- Badges -->
          <div class="flex flex-wrap justify-center gap-2">
            <span v-for="badge in content.badges" :key="badge" class="badge">{{ badge }}</span>
          </div>
        </div>

        <!-- Arrow down -->
        <div class="flex flex-col items-center my-2">
          <div class="w-px h-8 bg-gradient-to-b from-emerald-500/60 to-white/20"></div>
          <svg width="12" height="8" viewBox="0 0 12 8"><path d="M6 8L0 0h12z" fill="rgba(16,185,129,0.7)"/></svg>
        </div>

        <!-- Row 3: Outputs -->
        <div class="flex flex-wrap items-stretch justify-center gap-4 w-full">
          <div v-for="out in outputs" :key="out.label"
            class="output-node flex flex-col items-center justify-center gap-3 px-5 py-5 rounded-2xl min-w-[130px] flex-1 max-w-[160px]">
            <div class="w-10 h-10 rounded-xl flex items-center justify-center" :style="`background: ${out.bg}; border: 1px solid ${out.border};`">
              <span v-html="out.svg"></span>
            </div>
            <div class="text-center">
              <p class="text-white text-sm font-bold">{{ out.label }}</p>
              <p class="text-white/70 text-xs mt-0.5 leading-snug">{{ out.desc }}</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

const content = computed(() => {
  const t = {
    en: {
      ecosystem: 'ONE SECURITY LAYER',
      headline: 'Protect the Person, the Agent, and the Action',
      subheadline: 'PTERI applies one verifiable authorization model across workforce access, AI-agent activity, and sensitive enterprise operations.',
      pteriSubtitle: 'Privacy Trust Engine',
      pteriDesc: 'Identity, authorization, and evidence layer',
      badges: ['Customer-Controlled', 'Policy-Enforced', 'Time-Bound', 'Cryptographically Verifiable'],
      sources: ['Users', 'AI Agents', 'Enterprises', 'IoT Devices', 'Existing Applications'],
      outputs: [
        { label: 'Passwordless MFA', desc: 'Verify people without reusable passwords or shared secrets.' },
        { label: 'Agent Authorization', desc: 'Give every AI agent a verifiable identity and scoped authority.' },
        { label: 'Step-Up Approval', desc: 'Require explicit approval before high-impact actions.' },
        { label: 'Action Evidence', desc: 'Produce tamper-evident evidence of identity and authority.' },
      ],
    },
    de: {
      ecosystem: 'EINE SICHERHEITSSCHICHT',
      headline: 'Schützen Sie die Person, den Agenten und die Aktion',
      subheadline: 'PTERI wendet ein einheitliches, überprüfbares Autorisierungsmodell auf Mitarbeiterzugriff, KI-Agenten-Aktivität und sensible Unternehmensvorgänge an.',
      pteriSubtitle: 'Privacy Trust Engine',
      pteriDesc: 'Identitäts-, Autorisierungs- und Nachweisebene',
      badges: ['Kundenkontrolliert', 'Richtliniengesteuert', 'Zeitlich begrenzt', 'Kryptografisch Verifizierbar'],
      sources: ['Benutzer', 'KI-Agenten', 'Unternehmen', 'IoT-Geräte', 'Bestehende Anwendungen'],
      outputs: [
        { label: 'Passwortlose MFA', desc: 'Personen ohne wiederverwendbare Passwörter oder gemeinsame Geheimnisse verifizieren.' },
        { label: 'Agenten-Autorisierung', desc: 'Jedem KI-Agenten eine verifizierbare Identität und begrenzte Befugnis geben.' },
        { label: 'Zusätzliche Genehmigung', desc: 'Ausdrückliche Genehmigung vor wirkungsstarken Aktionen verlangen.' },
        { label: 'Aktionsnachweis', desc: 'Manipulationssicheren Nachweis von Identität und Befugnis erstellen.' },
      ],
    },
    es: {
      ecosystem: 'UNA CAPA DE SEGURIDAD',
      headline: 'Protege a la Persona, al Agente y la Acción',
      subheadline: 'PTERI aplica un modelo de autorización verificable único al acceso del personal, la actividad de agentes de IA y las operaciones empresariales sensibles.',
      pteriSubtitle: 'Motor de Confianza de Privacidad',
      pteriDesc: 'Capa de identidad, autorización y evidencia',
      badges: ['Control del Cliente', 'Basado en Políticas', 'Limitado en el Tiempo', 'Criptográficamente Verificable'],
      sources: ['Usuarios', 'Agentes IA', 'Empresas', 'Dispositivos IoT', 'Aplicaciones Existentes'],
      outputs: [
        { label: 'MFA Sin Contraseña', desc: 'Verifica personas sin contraseñas reutilizables ni secretos compartidos.' },
        { label: 'Autorización de Agentes', desc: 'Otorga a cada agente de IA una identidad verificable y autoridad limitada.' },
        { label: 'Aprobación Adicional', desc: 'Exige aprobación explícita antes de acciones de alto impacto.' },
        { label: 'Evidencia de Acción', desc: 'Genera evidencia a prueba de manipulaciones de identidad y autoridad.' },
      ],
    },
    ja: {
      ecosystem: '統合セキュリティレイヤー',
      headline: '人、エージェント、行動を保護する',
      subheadline: 'PTERIは、従業員のアクセス、AIエージェントの活動、機密性の高い企業業務に一貫した検証可能な認可モデルを適用します。',
      pteriSubtitle: 'プライバシートラストエンジン',
      pteriDesc: 'アイデンティティ・認可・証拠レイヤー',
      badges: ['顧客管理型', 'ポリシー適用', '期限付き', '暗号学的に検証可能'],
      sources: ['ユーザー', 'AIエージェント', '企業', 'IoTデバイス', '既存アプリケーション'],
      outputs: [
        { label: 'パスワードレスMFA', desc: '再利用可能なパスワードや共有シークレットなしで本人確認。' },
        { label: 'エージェント認可', desc: 'すべてのAIエージェントに検証可能なIDと限定された権限を付与。' },
        { label: 'ステップアップ承認', desc: '影響の大きい操作には明示的な承認を要求。' },
        { label: 'アクション証拠', desc: 'IDと権限を結びつける改ざん防止の証拠を生成。' },
      ],
    },
    ar: {
      ecosystem: 'طبقة أمان واحدة',
      headline: 'احمِ الشخص والوكيل والإجراء',
      subheadline: 'يطبّق PTERI نموذج تفويض واحد قابل للتحقق عبر وصول القوى العاملة ونشاط وكلاء الذكاء الاصطناعي والعمليات المؤسسية الحساسة.',
      pteriSubtitle: 'محرك ثقة الخصوصية',
      pteriDesc: 'طبقة الهوية والتفويض والأدلة',
      badges: ['يتحكم به العميل', 'مبني على السياسات', 'محدود زمنياً', 'قابل للتحقق تشفيرياً'],
      sources: ['المستخدمون', 'وكلاء الذكاء الاصطناعي', 'المؤسسات', 'أجهزة IoT', 'التطبيقات الحالية'],
      outputs: [
        { label: 'مصادقة بدون كلمة مرور', desc: 'التحقق من الأشخاص دون كلمات مرور قابلة لإعادة الاستخدام أو أسرار مشتركة.' },
        { label: 'تفويض الوكلاء', desc: 'منح كل وكيل ذكاء اصطناعي هوية قابلة للتحقق وسلطة محدودة النطاق.' },
        { label: 'موافقة إضافية', desc: 'طلب موافقة صريحة قبل الإجراءات عالية التأثير.' },
        { label: 'دليل الإجراء', desc: 'إنتاج دليل غير قابل للتلاعب يربط الهوية بالسلطة.' },
      ],
    },
  }
  return t[locale.value] || t.en
})

// Clean single-stroke line icons matching the outputMeta style below,
// instead of the previous mismatched colorful icon-pack glyphs. Each entry
// also carries a matching icon-box background/border, mirroring how the
// output row's icons are already boxed — the source row previously had
// bare icons with no box, which read as inconsistent with the output row.
const sourceMeta = [
  { bg: 'rgba(226,232,240,0.1)', border: 'rgba(226,232,240,0.3)', svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#e2e8f0" stroke-width="1.75"><circle cx="12" cy="8" r="3.2"/><path stroke-linecap="round" stroke-linejoin="round" d="M5.5 19c.8-3.2 3.4-5 6.5-5s5.7 1.8 6.5 5"/></svg>` },
  { bg: 'rgba(167,139,250,0.1)', border: 'rgba(167,139,250,0.3)', svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#a78bfa" stroke-width="1.75"><rect x="5" y="9" width="14" height="10" rx="2.5"/><path stroke-linecap="round" d="M12 9V5.5M9 5.5h6"/><circle cx="9.5" cy="14" r="1.1" fill="#a78bfa" stroke="none"/><circle cx="14.5" cy="14" r="1.1" fill="#a78bfa" stroke="none"/></svg>` },
  { bg: 'rgba(96,165,250,0.1)', border: 'rgba(96,165,250,0.3)', svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#60a5fa" stroke-width="1.75"><path stroke-linecap="round" stroke-linejoin="round" d="M4 20V6a1 1 0 011-1h6a1 1 0 011 1v14M13 20v-8a1 1 0 011-1h5a1 1 0 011 1v8"/><path stroke-linecap="round" d="M7 8h1M7 11h1M7 14h1M16 13h1M16 16h1"/><path stroke-linecap="round" d="M2 20h20"/></svg>` },
  { bg: 'rgba(251,191,36,0.1)', border: 'rgba(251,191,36,0.3)', svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#fbbf24" stroke-width="1.75"><rect x="7" y="7" width="10" height="10" rx="1.5"/><path stroke-linecap="round" d="M9 3v2M12 3v2M15 3v2M9 19v2M12 19v2M15 19v2M3 9h2M3 12h2M3 15h2M19 9h2M19 12h2M19 15h2"/></svg>` },
  { bg: 'rgba(34,211,238,0.1)', border: 'rgba(34,211,238,0.3)', svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#22d3ee" stroke-width="1.75"><rect x="4" y="4" width="7" height="7" rx="1.5"/><rect x="13" y="4" width="7" height="7" rx="1.5"/><rect x="4" y="13" width="7" height="7" rx="1.5"/><rect x="13" y="13" width="7" height="7" rx="1.5"/></svg>` },
]

const outputMeta = [
  { bg: 'rgba(16,185,129,0.1)', border: 'rgba(16,185,129,0.3)', svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#10b981" stroke-width="1.75"><path stroke-linecap="round" stroke-linejoin="round" d="M12 3l7 3v6c0 4.5-3 8-7 9-4-1-7-4.5-7-9V6l7-3z"/><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4"/></svg>` },
  { bg: 'rgba(34,211,238,0.1)', border: 'rgba(34,211,238,0.3)', svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#22d3ee" stroke-width="1.75"><rect x="4" y="7" width="16" height="12" rx="2"/><circle cx="9" cy="12" r="1.1" fill="#22d3ee" stroke="none"/><circle cx="15" cy="12" r="1.1" fill="#22d3ee" stroke="none"/><path stroke-linecap="round" d="M9 16h6M12 7V4M9.5 4h5"/></svg>` },
  { bg: 'rgba(251,191,36,0.1)', border: 'rgba(251,191,36,0.3)', svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#fbbf24" stroke-width="1.75"><circle cx="12" cy="12" r="9"/><path stroke-linecap="round" stroke-linejoin="round" d="M8.5 12.5l2.5 2.5 5-5"/></svg>` },
  { bg: 'rgba(129,140,248,0.1)', border: 'rgba(129,140,248,0.3)', svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#818cf8" stroke-width="1.75"><path stroke-linecap="round" stroke-linejoin="round" d="M8 3h6l4 4v13a1 1 0 01-1 1H8a1 1 0 01-1-1V4a1 1 0 011-1z"/><path stroke-linecap="round" stroke-linejoin="round" d="M14 3v4h4M9 13l2 2 4-4"/></svg>` },
]

const sources = computed(() =>
  content.value.sources.map((label, i) => ({ label, ...sourceMeta[i] }))
)

const outputs = computed(() =>
  content.value.outputs.map((o, i) => ({ ...o, ...outputMeta[i] }))
)
</script>

<style scoped>
.source-node {
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.08);
  transition: all 0.2s ease;
}
.source-node:hover {
  background: rgba(255,255,255,0.08);
  border-color: rgba(255,255,255,0.15);
}

.pteri-core {
  background: linear-gradient(135deg, rgba(16,185,129,0.12) 0%, rgba(16,185,129,0.05) 100%);
  border: 1px solid rgba(16,185,129,0.3);
  box-shadow: 0 0 40px rgba(16,185,129,0.1), inset 0 1px 0 rgba(16,185,129,0.15);
}

.output-node {
  background: rgba(255,255,255,0.03);
  border: 1px solid rgba(255,255,255,0.07);
  transition: all 0.2s ease;
}
.output-node:hover {
  background: rgba(255,255,255,0.07);
  border-color: rgba(255,255,255,0.15);
  transform: translateY(-2px);
}

.badge {
  display: inline-block;
  padding: 2px 10px;
  border-radius: 999px;
  font-size: 10px;
  font-weight: 600;
  color: #34d399;
  background: rgba(16,185,129,0.1);
  border: 1px solid rgba(16,185,129,0.2);
}
</style>
