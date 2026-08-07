<script setup>
import { useSEO } from '~/composables/useSEO'
import { ref, reactive, onMounted } from 'vue'

const { setSEO } = useSEO()

setSEO({
  title: "Kakr Labs - Pioneering Web3 on the Litecoin Blockchain",
  description: "Welcome to Kakr Labs™, a Microsoft-backed Web3 innovator leveraging the Litecoin blockchain to deliver decentralized, scalable, and AI-powered solutions for developers and enterprises.",
  keywords: ["Kakr Labs", "Web3 development", "Litecoin blockchain", "Microsoft Web3 partner", "AI-powered blockchain tools", "decentralized applications", "no-code blockchain", "scalable Web3 infrastructure"],
  image: "https://www.kakr.ai/assets/img/kakr-home.jpg",
  type: "website",
  url: "https://www.kakr.ai",
  siteName: "Kakr Labs™",
  author: "Kakr Labs™",
  twitterCard: "summary_large_image",
  twitterCreator: "@kakrlabs"
})

useHead({
  // htmlAttrs: { lang: "en" }, // Handled by i18n or global config usually, but keeping if needed.
  link: [
    {
      rel: "stylesheet",
      href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"
    },
    { rel: "stylesheet", href: "/assets/css/bootstrap.min.css" },
    { rel: "stylesheet", href: "/assets/css/animate.min.css" },
    { rel: "stylesheet", href: "/assets/css/keyframe-animation.css" },
    { rel: "stylesheet", href: "/assets/css/line-awesome.min.css" },
    { rel: "stylesheet", href: "/assets/css/odometer.min.css" },
    { rel: "stylesheet", href: "/assets/css/swiper.min.css" },
    { rel: "stylesheet", href: "/assets/css/venobox.min.css" },
    { rel: "stylesheet", href: "/assets/css/animated-text.min.css" },
    { rel: "stylesheet", href: "/assets/css/common-style.css" },
    { rel: "stylesheet", href: "/assets/css/main.css" },
    { rel: "stylesheet", href: "/assets/css/style.css" }
  ],
  script: [
    { src: "/assets/js/vendor/jquary-3.6.0.min.js", defer: true },
    { src: "/assets/js/vendor/modernizr-2.8.3-respond-1.4.2.min.js", defer: true },
    { src: "/assets/js/vendor/atropos.min.js", defer: true },
    { src: "/assets/js/vendor/bootstrap.min.js", defer: true },
    { src: "/assets/js/vendor/popper.min.js", defer: true },
    { src: "/assets/js/vendor/odometer.min.js", defer: true },
    { src: "/assets/js/vendor/waypoints.min.js", defer: true },
    { src: "/assets/js/vendor/venobox.min.js", defer: true },
    { src: "/assets/js/vendor/swiper.min.js", defer: true },
    { src: "/assets/js/vendor/smooth-scroll.js", defer: true },
    { src: "/assets/js/vendor/wow.min.js", defer: true },
    { src: "/assets/js/vendor/animated-text.min.js", defer: true },
    { src: "/assets/js/vendor/gsap.min.js", defer: true },
    { src: "/assets/js/vendor/scroll-trigger.min.js", defer: true },
    { src: "/assets/js/vendor/parallax-scroll.min.js", defer: true },
    { src: "/assets/js/mailchimp.js", defer: true },
    {
      src: "https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/prism.min.js",
      defer: true
    },
    {
      src:
        "https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/plugins/line-numbers/prism-line-numbers.min.js",
      defer: true
    }
    // Note: We are not loading SplitText here.
  ]
})

// --- Reactive form state ---
const form = reactive({
  companyName: "",
  industry: "",
  companySize: "",
  contactName: "",
  email: "",
  phone: "",
  linkedin: "",
  solutions: [], // array of strings
  useCase: "",
  terms: false
})

const formStatus = ref({ success: null, message: "" })

// Your reCAPTCHA site key
const recaptchaSiteKey = "6LfBSCMqAAAAAIkug3JO3J5suGtbkdN6VvRgAQ25"

// Load reCAPTCHA script on mount
onMounted(() => {
  const script = document.createElement("script")
  script.src = `https://www.google.com/recaptcha/api.js?render=${recaptchaSiteKey}`
  document.head.appendChild(script)
})

/**
 * Returns a Promise that resolves to a single reCAPTCHA token (v3) or null on failure.
 */
async function getRecaptchaToken() {
  return new Promise((resolve) => {
    if (!window.grecaptcha) {
      resolve(null)
      return
    }
    window.grecaptcha.ready(() => {
      window.grecaptcha
        .execute(recaptchaSiteKey, { action: "submit" })
        .then((token) => resolve(token))
        .catch(() => resolve(null))
    })
  })
}

/**
 * Called when user clicks “Submit”. Does:
 *   - run reCAPTCHA v3
 *   - POST form JSON to your Email microservice
 *   - show success/error
 */
async function submitForm() {
  // Reset previous status
  formStatus.value = { success: null, message: "" }

  // 1) run reCAPTCHA v3
  const recaptchaToken = await getRecaptchaToken()
  if (!recaptchaToken) {
    formStatus.value = {
      success: false,
      message: "reCAPTCHA validation failed. Please try again."
    }
    return
  }

  // 2) Build “customerMessage” string out of all fields
  const lines = []
  lines.push(`Industry: ${form.industry}`)
  lines.push(`Company Size: ${form.companySize}`)
  lines.push(`Phone: ${form.phone || "-"}`)
  lines.push(`LinkedIn: ${form.linkedin || "-"}`)
  lines.push(`Solutions of Interest: ${form.solutions.join(", ") || "-"}`)
  lines.push(`Use Case / Business Needs:`)
  lines.push(form.useCase || "-")

  const customerMessage = lines.join("\n")

  // 3) Prepare payload
  const payload = {
    receipientEmail: "contact@kakr.ai",
    emailType: 9,
    customerName: form.contactName,
    customerEmail: form.email,
    customerCompany: form.companyName,
    customerRole: form.industry,
    customerMessage,
    link: "", // required by API, not used here
    recaptchaToken
  }

  try {
    const response = await fetch(
      "https://kakrlabs-email-microservice.azurewebsites.net/api/Email/SendContactFormEmail",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Apikey:
            "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",
          SenderEmail: "contact@kakr.ai",
          SenderName: "Kakr Labs LiaaS Contact Form"
        },
        body: JSON.stringify(payload)
      }
    )

    if (!response.ok) {
      const text = await response.text()
      throw new Error(text || response.statusText)
    }

    // Success: show message and clear form
    formStatus.value = {
      success: true,
      message: "Your message has been sent successfully!"
    }
    Object.keys(form).forEach((key) => {
      if (Array.isArray(form[key])) {
        form[key] = []
      } else if (typeof form[key] === "boolean") {
        form[key] = false
      } else {
        form[key] = ""
      }
    })
  } catch (err) {
    formStatus.value = {
      success: false,
      message: `Failed to send your message. ${err.message}`
    }
  }
}
</script>

<template>
  <!-- Hero / Title Section -->
  <section
    class="hero-section d-flex align-items-center justify-content-center text-center"
    style="
      height: 50vh;
      margin-top: 72px;
    "
  >
    <div class="bg-dark bg-opacity-50 w-100 h-100 d-flex align-items-center">
      <div class="container text-white">
        <h1 class="display-4 fw-bold">Join the LiaaS Pilot Program</h1>
        <p class="lead">
          Powered by Pteri Blockchain Suite on Azure Infrastructure
        </p>
      </div>
    </div>
  </section>

  <!-- Contact Form Section -->
  <section class="py-5">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-8">
          <div class="card shadow">
            <div class="card-body px-4 py-5">
            <img src="/assets/img/pteri-logo.png" style="width:120px;margin:auto;display:block;">
              <h2 class="card-title text-center mb-3">LiaaS Pilot Program Contact Form</h2>
              <p class="text-center text-muted mb-4">
                Fill out the form below and our team will reach out with tailored
                details soon.
              </p>

              <form @submit.prevent="submitForm" novalidate>
                <!-- Row: Company Name / Industry -->
                <div class="row mb-3">
                  <div class="col-md-6 mb-3 mb-md-0">
                    <label for="companyName" class="form-label"><b>Company Name</b></label>
                    <input
                      v-model="form.companyName"
                      type="text"
                      id="companyName"
                      required
                      class="form-control"
                      placeholder="Enter your company name"
                    />
                  </div>
                  <div class="col-md-6">
                    <label for="industry" class="form-label"><b>Industry</b></label>
                    <select
                      v-model="form.industry"
                      id="industry"
                      required
                      class="form-select"
                    >
                      <option value="" disabled>Select your industry</option>
                      <option value="Legal Services">Legal Services</option>
                      <option value="Financial Services">Financial Services</option>
                      <option value="Healthcare">Healthcare</option>
                      <option value="Energy & Utilities">Energy & Utilities</option>
                      <option value="Technology">Technology</option>
                      <option value="Government & Public Sector">Government & Public Sector</option>
                      <option value="Manufacturing">Manufacturing</option>
                      <option value="Retail & E-Commerce">Retail & E-Commerce</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <!-- Row: Company Size / Contact Name -->
                <div class="row mb-3">
                  <div class="col-md-6 mb-3 mb-md-0">
                    <label for="companySize" class="form-label"><b>Company Size</b></label>
                    <select
                      v-model="form.companySize"
                      id="companySize"
                      required
                      class="form-select"
                    >
                      <option value="" disabled>Select company size</option>
                      <option value="Small (1-50 employees)">Small (1-50 employees)</option>
                      <option value="Medium (51-500 employees)">Medium (51-500 employees)</option>
                      <option value="Large (501+ employees)">Large (501+ employees)</option>
                    </select>
                  </div>
                  <div class="col-md-6">
                    <label for="contactName" class="form-label"><b>Contact Name</b></label>
                    <input
                      v-model="form.contactName"
                      type="text"
                      id="contactName"
                      required
                      class="form-control"
                      placeholder="Enter your full name"
                    />
                  </div>
                </div>

                <!-- Row: Email / Phone -->
                <div class="row mb-3">
                  <div class="col-md-6 mb-3 mb-md-0">
                    <label for="email" class="form-label"><b>Email Address</b></label>
                    <input
                      v-model="form.email"
                      type="email"
                      id="email"
                      required
                      class="form-control"
                      placeholder="Enter your email address"
                    />
                  </div>
                  <div class="col-md-6">
                    <label for="phone" class="form-label"><b>Phone Number</b></label>
                    <input
                      v-model="form.phone"
                      type="tel"
                      id="phone"
                      class="form-control"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>

                <!-- LinkedIn Profile -->
                <div class="mb-3">
                  <label for="linkedin" class="form-label"><b>LinkedIn Profile</b></label>
                  <input
                    v-model="form.linkedin"
                    type="url"
                    id="linkedin"
                    class="form-control"
                    placeholder="Enter your LinkedIn profile URL"
                  />
                </div>

                <!-- Solutions of Interest -->
                <div class="mb-3">
                  <label class="form-label"><b>LiaaS Solutions of Interest</b></label>
                  <p class="text-muted small mb-2">
                    Select the solution(s) you’re interested in for the pilot
                    program.
                  </p>
                  <div class="form-check mb-2">
                    <input
                      v-model="form.solutions"
                      class="form-check-input"
                      type="checkbox"
                      value="Decentralized Two-Factor Authentication"
                      id="twoFactor"
                    />
                    <label class="form-check-label" for="twoFactor">
                      Decentralized Two-Factor Authentication (Enhance security for
                      sensitive legal data access)
                    </label>
                  </div>
                  <div class="form-check mb-2">
                    <input
                      v-model="form.solutions"
                      class="form-check-input"
                      type="checkbox"
                      value="Interplay File Systems"
                      id="interplay"
                    />
                    <label class="form-check-label" for="interplay">
                      Interplay File Systems (Secure, scalable document management
                      for legal workflows)
                    </label>
                  </div>
                  <div class="form-check mb-2">
                    <input
                      v-model="form.solutions"
                      class="form-check-input"
                      type="checkbox"
                      value="Energy RWA Solutions"
                      id="energyRWA"
                    />
                    <label class="form-check-label" for="energyRWA">
                      Energy RWA Solutions (Real-world asset tokenization for energy
                      sector compliance)
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      v-model="form.solutions"
                      class="form-check-input"
                      type="checkbox"
                      value="Blockchain-Based Solutions"
                      id="blockchain"
                    />
                    <label class="form-check-label" for="blockchain">
                      Blockchain-Based Solutions (Immutable records for contracts
                      and compliance)
                    </label>
                  </div>
                </div>

                <!-- Use Case -->
                <div class="mb-3">
                  <label for="useCase" class="form-label"><b>How Will You Use LiaaS?</b></label>
                  <textarea
                    v-model="form.useCase"
                    id="useCase"
                    required
                    rows="4"
                    class="form-control"
                    placeholder="Describe your business needs and how LiaaS solutions can support your goals..."
                  ></textarea>
                </div>

                <!-- Terms & Conditions -->
                <div class="mb-4 form-check">
                  <input
                    v-model="form.terms"
                    type="checkbox"
                    id="terms"
                    required
                    class="form-check-input"
                  />
                  <label class="form-check-label" for="terms">
                    <b>I agree to the
                    <a href="/terms-of-service" class="text-decoration-underline">terms and conditions</a>
                 </b> </label>
                </div>

                <!-- Submit Button -->
                <div class="d-grid mb-3">
                  <button type="submit" class="default-btn btn-lg">
                    Submit
                  </button>
                </div>
              </form>

              <!-- Status Message -->
              <p
                v-if="formStatus.success !== null"
                :class="formStatus.success
                  ? 'text-success text-center mt-2'
                  : 'text-danger text-center mt-2'"
              >
                {{ formStatus.message }}
              </p>

              <!-- Footer Note -->
              <p class="text-muted text-center mt-3 small">
                Thank you for your interest in the LiaaS Pilot Program! Our team
                will reach out with detailed information and next steps soon. For
                immediate inquiries, contact us at
                <a href="mailto:contact@kakr.ai">contact@kakr.ai</a>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-section {
  position: relative;
}

/* Dark overlay to ensure text readability */
.hero-section > .bg-dark {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.hero-section .container {
  position: relative;
  z-index: 1;
}
</style>
