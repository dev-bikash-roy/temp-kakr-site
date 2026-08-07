<template>
  <div ref="textContainer" class="animated-text-section">
    <p class="text-content">
      <span
        v-for="(word, index) in words"
        :key="index"
        class="word"
        :class="{ 'is-visible': visibleWords[index] }"
        :style="{ transitionDelay: `${index * 100}ms` }"
      >
        {{ word }}&nbsp;
      </span>
    </p>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, computed, watch } from 'vue';
import { useI18n } from '#imports'

const { locale } = useI18n()

// Hardcoded translations
const translations = computed(() => {
  const lang = locale.value
  
  const t = {
    en: {
      text: "Kakr Labs: Blockchain infrastructure built on Litecoin, designed for scale, secured by design. Trusted by enterprises demanding security, compliance, and control."
    },
    de: {
      text: "Kakr Labs: Blockchain-Infrastruktur auf Litecoin aufgebaut, für Skalierung entwickelt, durch Design gesichert. Vertraut von Unternehmen, die Sicherheit, Compliance und Kontrolle fordern."
    },
    es: {
      text: "Kakr Labs: Infraestructura blockchain construida en Litecoin, diseñada para escalar, segura por diseño. Confiada por empresas que exigen seguridad, cumplimiento y control."
    },
    ja: {
      text: "Kakr Labs: Litecoin上に構築されたブロックチェーンインフラストラクチャ、スケールのために設計、設計によって保護。セキュリティ、コンプライアンス、コントロールを求める企業から信頼されています。"
    },
    ar: {
      text: "Kakr Labs: بنية تحتية للبلوكشين مبنية على Litecoin، مصممة للتوسع، آمنة بالتصميم. موثوقة من قبل المؤسسات التي تطالب بالأمان والامتثال والتحكم."
    }
  }
  
  return t[lang] || t.en
})

// The text content
const text = computed(() => translations.value.text)

// Split the text into individual words
const words = computed(() => text.value.split(' '))

// A ref to the main container div
const textContainer = ref(null);

// A reactive object to track the visibility of each word
const visibleWords = ref([])

// Watch for changes in words and update visibleWords accordingly
watch(words, (newWords) => {
  visibleWords.value = Array(newWords.length).fill(false)
}, { immediate: true })

let observer;

onMounted(() => {
  // Options for the Intersection Observer
  const options = {
    root: null, // observes intersections relative to the viewport
    rootMargin: '0px',
    threshold: 0.4 // Trigger when 40% of the element is visible
  };

  // The callback function to execute when the element is intersecting
  const callback = (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // When the component is visible, set all words to be visible
        // The transition-delay in the CSS will make them appear one by one
        for (let i = 0; i < words.value.length; i++) {
          visibleWords.value[i] = true;
        }
        // Optional: unobserve after the animation has been triggered once
        observer.unobserve(entry.target);
      }
    });
  };

  // Create the observer and start observing the container
  observer = new IntersectionObserver(callback, options);
  if (textContainer.value) {
    observer.observe(textContainer.value);
  }
});

// Clean up the observer when the component is unmounted
onBeforeUnmount(() => {
  if (observer && textContainer.value) {
    observer.unobserve(textContainer.value);
  }
});
</script>

<style scoped>
/* Main container for the section */
.animated-text-section {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3rem 1rem;
  background-color: #ffffff;
  position: relative;
  overflow: hidden; /* Ensures side borders don't cause overflow */
}

/* Red and blue side borders as seen in the image */
.animated-text-section::before,
.animated-text-section::after {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  width: 4px; /* Width of the border */
}

.animated-text-section::before {
  left: 0;
  background: linear-gradient(to bottom, #e11d48, #3b82f6); /* Gradient from red to blue */
}

.animated-text-section::after {
  right: 0;
  background: linear-gradient(to bottom, #e11d48, #3b82f6); /* Gradient from red to blue */
}

/* Styling for the paragraph text */
.text-content {
  max-width: 1000px;
  font-size: 2.2rem;
  font-weight: 600;
  line-height: 1.3;
  color: #2d3748; /* A dark gray, similar to the image */
  text-align: center;
  letter-spacing: -0.02em;
}

/* Styling for each individual word */
.word {
  display: inline-block;
  opacity: 0;
  transform: translateY(15px);
  transition: opacity 0.5s ease, transform 0.5s ease;
  margin: 0 2px;
}

/* The class that makes the word visible */
.word.is-visible {
  opacity: 1;
  transform: translateY(0);
}

/* Responsive adjustments for smaller screens */
@media (max-width: 768px) {
  .text-content {
    font-size: 1.5rem;
    line-height: 1.4;
  }
  .word {
    margin: 0 1px;
  }
}

/* Medium screens */
@media (max-width: 1024px) {
  .text-content {
    font-size: 1.8rem;
  }
}
</style>
