<template>
  <div>
    <!-- Hero Section with reduced height -->
    <section class="hero bg-indigo-700 text-white section-py flex items-center justify-center">
      <div class="container mx-auto text-center">
        <h1 class="text-2xl lg:text-4xl md:text:4xl font-bold mb-4">{{ t('contact.hero.title') }}</h1>
      </div>
    </section>

    <!-- Main Contact Section -->
    <section class="contact-section mx-auto flex flex-col lg:flex-row lg:space-x-16 mt-12 px-4 lg:px-0 items-stretch">
      <!-- Left Column - Updated Contact Content with gradient background -->
      <div class="lg:w-1/2 p-8 bg-gradient-to-r from-gray-100 via-indigo-200 to-indigo-400 rounded-lg shadow-lg flex flex-col justify-center">
        <h2 class="text-2xl lg:text-4xl md:text:4xl font-bold mb-4 text-indigo-900">{{ t('contact.left.title') }}</h2>
        <p class="text-gray-700 mb-6 leading-relaxed text-lg">
          {{ t('contact.left.description') }}
        </p>
        <div class="bg-indigo-50 p-4 rounded-lg">
          <p class="mb-2 text-black md:text-lg lg:text-lg">
            {{ t('contact.left.azureListing') }} <a href="https://azuremarketplace.microsoft.com/en-us/marketplace/apps/kakrplatforminc1697572308188.pteri-node-offer?tab=overview" target="_blank" class="text-indigo-600 underline">{{ t('contact.left.azureLinkText') }}</a> {{ t('contact.left.azureDescription') }}
          </p>
          <p class="text-black md:text-lg lg:text-lg">
            {{ t('contact.left.immediateAssistance') }} <a href="mailto:contact@kakr.ai" class="text-indigo-600 underline">contact@kakr.ai</a>. {{ t('contact.left.lookForward') }}
          </p>
        </div>
      </div>

      <!-- Right Column - Contact Form with shadow and focus color -->
      <div class="lg:w-1/2 p-8 bg-white rounded-lg shadow-xl flex flex-col justify-center mt-8 lg:mt-0">
        <form @submit.prevent="submitForm" class="space-y-6">
          <div>
            <label for="userType" class="block text-sm font-medium text-gray-700">{{ t('contact.form.userType.label') }}*</label>
            <select v-model="form.userType" id="userType" class="block w-full h-12 py-2 px-4 mt-2 text-black bg-gray-100 border border-gray-300 rounded-lg focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200">
              <option value="">{{ t('contact.form.userType.choose') }}</option>
              <option value="Web3 Lead at a Brand or IP">{{ t('contact.form.userType.web3Lead') }}</option>
              <option value="Agency or Consulting firm">{{ t('contact.form.userType.agency') }}</option>
              <option value="Developer">{{ t('contact.form.userType.developer') }}</option>
              <option value="Sales demo">{{ t('contact.form.userType.salesDemo') }}</option>
              <option value="Artist / Creator">{{ t('contact.form.userType.artist') }}</option>
              <option value="Other">{{ t('contact.form.userType.other') }}</option>
            </select>
          </div>
          <div>
            <label for="name" class="block text-sm font-medium text-gray-700">{{ t('contact.form.name.label') }}</label>
            <input v-model="form.name" id="name" type="text" :placeholder="t('contact.form.name.placeholder')" class="block w-full h-12 py-2 px-4 mt-2 text-sm bg-gray-100 text-black border border-gray-300 rounded-lg focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200" required>
          </div>
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700">{{ t('contact.form.email.label') }}</label>
            <input v-model="form.email" id="email" type="email" :placeholder="t('contact.form.email.placeholder')" class="block w-full h-12 py-2 px-4 mt-2 text-sm bg-gray-100 text-black border border-gray-300 rounded-lg focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200" required>
          </div>
          <div>
            <label for="companyName" class="block text-sm font-medium text-gray-700">{{ t('contact.form.company.label') }}</label>
            <input v-model="form.companyName" id="companyName" type="text" :placeholder="t('contact.form.company.placeholder')" class="block w-full h-12 py-2 px-4 mt-2 text-sm bg-gray-100 text-black border border-gray-300 rounded-lg focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200">
          </div>
          <div>
            <label for="message" class="block text-sm font-medium text-gray-700">{{ t('contact.form.message.label') }}</label>
            <textarea v-model="form.message" id="message" rows="4" :placeholder="t('contact.form.message.placeholder')" class="block w-full py-2 px-4 mt-2 text-sm bg-gray-100 text-black border border-gray-300 rounded-lg focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"></textarea>
          </div>
          <div>
            <button type="submit" class="w-full h-14 bg-indigo-600 text-white font-bold rounded-full hover:bg-indigo-700 transition">
              {{ t('contact.form.submit') }}
            </button>
          </div>
          <div v-if="formStatus.message" :class="{'text-green-500': formStatus.success, 'text-red-500': !formStatus.success}">
            {{ formStatus.message }}
          </div>
        </form>
      </div>
    </section>

    <div class="pb-20"></div>
  </div>
</template>

<script>
export default {
  setup() {
    const { t } = useI18n()
    return { t }
  },
  data() {
    return {
      form: {
        userType: '',
        name: '',
        email: '',
        companyName: '',
        message: '',
      },
      formStatus: {
        success: false,
        message: ''
      },
      recaptchaSiteKey: '6LfBSCMqAAAAAIkug3JO3J5suGtbkdN6VvRgAQ25' // Replace with your reCAPTCHA site key
    };
  },
  methods: {
    async submitForm() {
      const recaptchaToken = await this.getRecaptchaToken();

      if (!recaptchaToken) {
        this.formStatus = {
          success: false,
          message: this.t('contact.form.errors.recaptcha')
        };
        return;
      }

      const emailData = {
        receipientEmail: 'contact@kakr.ai',
        link: '', // Add any link if required
        emailType: 9,
        customerName: this.form.name,
        customerEmail: this.form.email,
        customerCompany: this.form.companyName,
        customerRole: this.form.userType,
        customerMessage: this.form.message,
      };

      try {
        const response = await fetch('https://kakrlabs-email-microservice.azurewebsites.net/api/Email/SendContactFormEmail', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Apikey': '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',
            'SenderEmail': 'contact@kakr.ai',
            'SenderName': 'Kakr Labs Contact Form'
          },
          body: JSON.stringify(emailData)
        });

        const result = await response.json();

        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }

        this.formStatus = {
          success: true,
          message: this.t('contact.form.success')
        };
        this.resetForm();
      } catch (error) {
        this.formStatus = {
          success: false,
          message: `${this.t('contact.form.errors.sending')} ${error}`
        };
        console.error('Email sending failed:', error);
      }
    },
    async getRecaptchaToken() {
      return new Promise((resolve, reject) => {
        grecaptcha.ready(() => {
          grecaptcha.execute(this.recaptchaSiteKey, { action: 'submit' }).then((token) => {
            resolve(token);
          }).catch((error) => {
            console.error('reCAPTCHA error:', error);
            reject(null);
          });
        });
      });
    },
    resetForm() {
      this.form = {
        userType: '',
        name: '',
        email: '',
        companyName: '',
        message: ''
      };
    }
  },
  mounted() {
    const script = document.createElement('script');
    script.src = `https://www.google.com/recaptcha/api.js?render=${this.recaptchaSiteKey}`;
    document.head.appendChild(script);
  }
}
</script>

<style scoped>
.hero {
  background-image: url('https://source.unsplash.com/featured/?blockchain,technology');
  background-size: cover;
  background-position: center;
  min-height: 250px;
}

.contact-section {
  margin-top: 3rem;
}

.shadow-xl {
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.bg-gradient-to-r {
  background: linear-gradient(to right, #f9fafb, #e0e7ff, #c7d2fe);
}

@media (max-width: 1024px) {
  .contact-section {
    flex-direction: column;
    margin-top: 2rem;
  }
}
</style>
