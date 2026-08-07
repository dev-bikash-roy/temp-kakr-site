export default defineNuxtPlugin(() => {
  const script = document.createElement('script')
  script.type = 'text/javascript'
  script.id = 'hs-script-loader'
  script.async = true
  script.defer = true
  script.src = '//js-na2.hs-scripts.com/245270532.js'
  document.head.appendChild(script)
})
