export default defineNuxtPlugin((nuxtApp) => {
  const { googleAnalyticsId } = useRuntimeConfig().public

  if (!googleAnalyticsId) return

  // Inject gtag loader script
  const script1 = document.createElement('script')
  script1.async = true
  script1.src = `https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`
  document.head.appendChild(script1)

  // Inject gtag init script
  const script2 = document.createElement('script')
  script2.innerHTML = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${googleAnalyticsId}');
  `
  document.head.appendChild(script2)

  // Track SPA page views on route change
  const router = useRouter()
  router.afterEach((to) => {
    if ((window as any).gtag) {
      ;(window as any).gtag('event', 'page_view', {
        page_path: to.fullPath,
        send_to: googleAnalyticsId
      })
    }
  })
})
