<template>
  <section class="py-5 text-center" style="background: #f8f9fa; width: 100%;">
    <div class="container">
      <h2 class="fw-bold mb-5">Downloadable Resources</h2>

      <div class="row justify-content-center g-4">
        <div
          v-for="(pdf, index) in pdfList"
          :key="index"
          class="col-sm-10 col-md-6 col-lg-4 d-flex align-items-stretch"
        >
          <div class="card w-100 shadow-sm">
            <div class="card-body d-flex flex-column">
              <!-- PDF Preview Thumbnail -->
              <iframe
                :src="pdf.embedLink"
                width="100%"
                height="200"
                style="border: none;"
                class="mb-3 rounded"
              ></iframe>

              <!-- Title -->
              <h5 class="card-title mb-3">{{ pdf.title }}</h5>

              <!-- Actions -->
              <a
                :href="pdf.openLink"
                class="default-btn mt-auto"
                target="_blank"
              >
                Open in new tab
              </a>
              <button
                class="btn btn-link mt-2 text-decoration-underline"
                @click="openModal(pdf.embedLink)"
              >
                Quick Preview
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Modal -->
      <div v-if="modalUrl" class="custom-modal-backdrop">
        <div class="custom-modal-content">
          <div class="modal-header">
            <h5 class="modal-title">PDF Preview</h5>
            <button
              type="button"
              class="btn-close"
              @click="modalUrl = ''"
            ></button>
          </div>
          <div class="modal-body p-0">
            <iframe
              :src="modalUrl"
              width="100%"
              height="600"
              style="border: none;"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const modalUrl = ref('')

const openModal = (url) => {
  modalUrl.value = url
}

const pdfList = [
  {
    title: 'Customer Case Studies',
    openLink: 'https://drive.google.com/file/d/1ekNE70tpZZlHWzu1OVE6ZUzRJ-Q400EB/view',
    embedLink: 'https://drive.google.com/file/d/1ekNE70tpZZlHWzu1OVE6ZUzRJ-Q400EB/preview',
  },
  {
    title: 'Deployment Guide',
    openLink: 'https://drive.google.com/file/d/1DvzvenVmdltt1YgpGasFW9O0otWs_VRe/view',
    embedLink: 'https://drive.google.com/file/d/1DvzvenVmdltt1YgpGasFW9O0otWs_VRe/preview',
  },
  {
    title: 'FAQs',
    openLink: 'https://drive.google.com/file/d/1Vpc8ZX-fwPy0SiInhE2xHag9RKVkgQOe/view',
    embedLink: 'https://drive.google.com/file/d/1Vpc8ZX-fwPy0SiInhE2xHag9RKVkgQOe/preview',
  },
  {
    title: 'Kakr Labs One-Pager',
    openLink: 'https://drive.google.com/file/d/13MsWT5rqctS-4oUpZoTYaYeO45iCy1we/view',
    embedLink: 'https://drive.google.com/file/d/13MsWT5rqctS-4oUpZoTYaYeO45iCy1we/preview',
  },
  {
    title: 'Product Comparison',
    openLink: 'https://drive.google.com/file/d/1SCoWxfaJpxa2W7OIkvq8ZOnBX9Q7rC3W/view',
    embedLink: 'https://drive.google.com/file/d/1SCoWxfaJpxa2W7OIkvq8ZOnBX9Q7rC3W/preview',
  },
]
</script>



<style scoped>
.pdf-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 20px;
  padding: 20px;
}

.pdf-item {
  background: #f5f5f5;
  padding: 16px;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
}

.pdf-item h3 {
  font-size: 1.1rem;
  margin-bottom: 12px;
}

.pdf-item button {
  padding: 8px 16px;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.3s;
}

.pdf-item button:hover {
  background: #0056b3;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.modal-content {
  position: relative;
  background: white;
  padding: 1rem;
  border-radius: 10px;
  width: 100%;
  max-width: 900px;
  max-height: 90vh;
  overflow: auto;
}

.close-btn {
  position: absolute;
  top: 10px;
  right: 14px;
  background: none;
  border: none;
  font-size: 1.8rem;
  color: #666;
  cursor: pointer;
}
.custom-modal-backdrop {
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1055;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
}

.custom-modal-content {
  background: #fff;
  border-radius: 0.5rem;
  width: 100%;
  max-width: 960px;
  max-height: 90vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}
</style>
