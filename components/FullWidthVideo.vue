<template>
  <section class="w-full bg-black section-py">
    <div class="max-w-5xl mx-auto px-6 text-center mb-16">
      <h2 class="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4 leading-tight">
        {{ translations.title }}
      </h2>
      <p class="text-xl text-gray-300 max-w-2xl mx-auto">
        {{ translations.description }}
      </p>
    </div>
    <img
      src="/Pteri-Flowchart.png"
      :alt="t('fullWidthVideo.alt')"
      class="w-full h-auto object-cover"
      loading="eager"
      decoding="async"
    />
  </section>
</template>

<script setup lang="ts">
import { useI18n } from '#imports'
import { computed } from 'vue'

const { t, locale } = useI18n()

// Local Translations
const translations = computed(() => {
  const lang = locale.value
  
  const texts: any = {
    en: {
      title: 'One Platform for Identity, Authorization, and Trusted Actions',
      description: 'PTERI connects people, AI agents, applications, and enterprise systems through passwordless authentication, scoped authorization, and verifiable action evidence.'
    },
    de: {
      title: 'Eine Plattform für Identität, Autorisierung und vertrauenswürdige Aktionen',
      description: 'PTERI verbindet Personen, KI-Agenten, Anwendungen und Unternehmenssysteme durch passwortlose Authentifizierung, bereichsbegrenzte Autorisierung und nachweisbare Aktionsnachweise.'
    },
    es: {
      title: 'Una Plataforma para Identidad, Autorización y Acciones Verificadas',
      description: 'PTERI conecta personas, agentes de IA, aplicaciones y sistemas empresariales mediante autenticación sin contraseña, autorización con alcance limitado y evidencia de acciones verificable.'
    },
    ja: {
      title: 'アイデンティティ、認可、信頼されたアクションのための統合プラットフォーム',
      description: 'PTERIは、パスワードレス認証、スコープ付き認可、検証可能なアクション証拠を通じて、人、AIエージェント、アプリケーション、エンタープライズシステムをつなぎます。'
    },
    ar: {
      title: 'منصة واحدة للهوية والتفويض والإجراءات الموثوقة',
      description: 'يربط PTERI الأشخاص ووكلاء الذكاء الاصطناعي والتطبيقات وأنظمة المؤسسات من خلال المصادقة بدون كلمة مرور والتفويض المحدود النطاق وأدلة الإجراءات القابلة للتحقق.'
    }
  }
  
  return texts[lang] || texts.en
})
</script>
