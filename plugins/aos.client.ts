import AOS from 'aos'
import 'aos/dist/aos.css'

const AOS_OPTIONS = {
  duration: 550, // Snappier duration for a responsive, premium feel
  easing: 'ease-out-quad', // Decelerate smoothly
  once: true, // Only animate once to maintain clean navigation when scrolling back up
  offset: 80, // Trigger animations slightly earlier to avoid sudden pops
  delay: 50, // Tiny delay to allow initial layout pass to finish smoothly
}

export default defineNuxtPlugin((nuxtApp) => {
  // AOS.init() writes .aos-init / .aos-animate directly onto DOM nodes that Vue
  // also controls. Running it during plugin setup means those classes land while
  // Vue is still hydrating, so the client vdom (class="mb-10") disagrees with the
  // server HTML (class="mb-10 aos-init") and Vue logs a "Hydration class
  // mismatch" for every [data-aos] element. Deferring to app:suspense:resolve
  // runs it once hydration has finished, so there is nothing left to mismatch.
  nuxtApp.hook('app:suspense:resolve', () => {
    AOS.init(AOS_OPTIONS)

    // Signals to the inline safety-net script in nuxt.config that AOS is alive,
    // so it does not force-reveal content AOS is about to animate. Set only
    // AFTER a successful init() — if init throws, the safety net must stay armed
    // so the content still gets revealed rather than staying invisible forever.
    document.documentElement.classList.add('aos-initialized')
  })

  // Refresh AOS after each page navigation, then re-scroll to hash
  nuxtApp.hook('page:finish', () => {
    setTimeout(() => {
      AOS.refresh()
      // Re-scroll to hash after AOS repositions elements
      const hash = window.location.hash
      if (hash) {
        const el = document.querySelector(hash)
        if (el) {
          setTimeout(() => {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' })
          }, 150)
        }
      }
    }, 100)
  })
})
