<template>
  <div class="cal-com-calendar">
    <div 
      ref="calendarContainer" 
      style="width:100%;height:800px;overflow:scroll" 
      :class="{ 'loading': loading, 'error': error }"
    >
      <div v-if="loading" class="flex items-center justify-center h-full">
        <p class="text-slate-500">Loading calendar...</p>
      </div>
      <div v-else-if="error" class="flex items-center justify-center h-full">
        <p class="text-slate-500">Failed to load calendar. Please try again later.</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

// Define props
const props = defineProps({
  calLink: {
    type: String,
    required: true
  },
  namespace: {
    type: String,
    required: true
  },
  layout: {
    type: String,
    default: 'month_view'
  }
})

// Reactive state
const calendarContainer = ref<HTMLElement | null>(null)
const loading = ref(true)
const error = ref(false)

// Initialize calendar
const initializeCalendar = () => {
  if (!calendarContainer.value) {
    return
  }

  try {
    // Standard Cal.com snippet logic adapted for Vue
    (function (C: any, A: string, L: string) { 
      let p = function (a: any, ar: any) { 
        a.q.push(ar); 
      }; 
      let d = C.document; 
      C.Cal = C.Cal || function () { 
        let cal = C.Cal; 
        let ar = arguments; 
        if (!cal.loaded) { 
          cal.ns = {}; 
          cal.q = cal.q || []; 
          d.head.appendChild(d.createElement("script")).src = A; 
          cal.loaded = true; 
        } 
        if (ar[0] === L) { 
          const api: any = function () { 
            p(api, arguments); 
          }; 
          const namespace = ar[1]; 
          api.q = api.q || []; 
          if(typeof namespace === "string"){
             cal.ns[namespace] = cal.ns[namespace] || api;
             p(cal.ns[namespace], ar);
             p(cal, ["initNamespace", namespace]);
          } else {
             p(cal, ar); 
          }
          return; 
        } 
        p(cal, ar); 
      }; 
    })(window, "https://app.cal.com/embed/embed.js", "init");

    // @ts-ignore
    const Cal = window.Cal;
    
    Cal("init", props.namespace, {origin:"https://app.cal.com"});
    
    Cal.ns[props.namespace]("inline", {
      elementOrSelector: "#" + calendarContainer.value.id,
      config: {"layout": props.layout},
      calLink: props.calLink,
    });

    Cal.ns[props.namespace]("ui", {"hideEventTypeDetails":false, "layout": props.layout});
    
    // We assume it loads successfully if no error thrown immediately
    // The actual iframe load is handled by the script
    loading.value = false

  } catch (err) {
    console.error('Error initializing calendar:', err)
    loading.value = false
    error.value = true
  }
}

// Set up the container ID
const containerId = `cal-com-calendar-${props.namespace}`

onMounted(() => {
  // Set the container ID
  if (calendarContainer.value) {
    calendarContainer.value.id = containerId
  }
  
  // Initialize
  setTimeout(initializeCalendar, 100)
})

onUnmounted(() => {
  // We don't remove the script because it might be used by other components
  // But we could clean up if needed. For now, let's leave it.
})
</script>

<style scoped>
.cal-com-calendar {
  width: 100%;
  height: 100%;
}

.loading, .error {
  min-height: 400px;
}
</style>
