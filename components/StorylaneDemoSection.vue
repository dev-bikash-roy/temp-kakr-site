<template>
  <section class="section-py px-4 sm:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto">
      <!-- Section Header -->
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          {{ t('demo.title') }}
        </h2>
        <p class="text-lg text-gray-700 max-w-2xl mx-auto">
          {{ t('demo.description') }}
        </p>
      </div>

      <!-- Storylane Demo Embed -->
      <div class="sl-embed-container" style="position:relative;display:flex;align-items:center;justify-content:center;border: 1px solid rgba(63,95,172,0.35);box-shadow: 0px 0px 18px rgba(26, 19, 72, 0.15);border-radius:10px">
        <div class="sl-preview-heading" style="position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;background-color:rgba(40, 37, 54, 0.9);z-index:999999;font-family:Poppins, Arial, sans-serif;font-size:clamp(20px, 2.664vw, 28px);font-weight:500;line-height:normal;text-align:center;border-radius:10px;">
          <div class="sl-heading-text" style="color:#fff;margin-bottom:clamp(20px, 1.776vw, 24px);text-shadow: 0px 1px 2px rgba(26, 19, 72, 0.40);max-width:53%;">
            {{ t('demo.tourTitle') }}
          </div>
          <button 
            @click="playDemo"
            class="sl-preview-cta" 
            style="background-color:#9939EB;border:none;border-radius:8px;box-shadow:0px 0px 15px rgba(26, 19, 72, 0.45);color:#FFFFFF;display:inline-block;font-family:Poppins, Arial, sans-serif;font-size:clamp(16px, 1.599vw, 20px);font-weight:600;height:clamp(40px, 3.996vw, 50px);line-height:1.2;padding:0 clamp(15px, 1.776vw, 20px);text-overflow:ellipsis;transform:translateZ(0);transition:background 0.4s;white-space:nowrap;width:auto;z-index:999999;cursor:pointer"
          >
            {{ t('demo.viewDemo') }}
          </button>
        </div>
        <div class="sl-embed" data-sl-demo-type="image" style="position:relative;padding-bottom:calc(46.25% + 25px);width:100%;height:0;transform:scale(1);overflow:hidden;">
          <div class="sl-preview" style="width:100%;height:100%;z-index:99999;position:absolute;background:url('https://storylane-prod-uploads.s3.us-east-2.amazonaws.com/company/company_b6d39447-3cef-413f-85d5-f8c0e0e0e0e0/demo/demo_hsjskm1iokbu/1734534000000/cover.png') no-repeat;background-size:100% 100%;border-radius:inherit;filter:blur(0px)"></div>
          <iframe ref="demoIframe" class="sl-demo" src="" name="sl-embed" allow="fullscreen" allowfullscreen style="display:none;position:absolute;top:0;left:0;width:100%;height:100%;border:none;"></iframe>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const { t } = useI18n()
const demoIframe = ref<HTMLIFrameElement | null>(null)

const playDemo = (event: Event) => {
  if (typeof window !== 'undefined' && (window as any).Storylane) {
    (window as any).Storylane.Play({
      type: 'preview_embed',
      demo_type: 'image',
      width: 2560,
      height: 1184,
      element: event.target,
      demo_url: 'https://app.storylane.io/demo/hsjskm1iokbu?embed=inline_overlay'
    })
  }
}

onMounted(() => {
  // Load Storylane script
  if (typeof window !== 'undefined' && !(window as any).Storylane) {
    const script = document.createElement('script')
    script.src = 'https://js.storylane.io/js/v2/storylane.js'
    script.async = true
    document.head.appendChild(script)
  }
})
</script>

<style scoped>
.sl-heading-text {
  max-width: 53%;
}

@media (max-width: 1024px) {
  .sl-heading-text {
    max-width: 90%;
  }
}

.sl-preview-cta:hover {
  background-color: #7d2bc7;
}
</style>
