<template>
  <div class="calendar-wrapper">
    <div
      class="meetings-iframe-container"
      :data-src="meetingUrl"
    ></div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";

const meetingUrl: string =
  "https://meetings-na2.hubspot.com/harvin?embed=true";

const loadScript = () => {
  // Prevent duplicate script loading
  if (document.getElementById("hubspot-meetings-script")) return;

  const script = document.createElement("script");
  script.id = "hubspot-meetings-script";
  script.type = "text/javascript";
  script.src =
    "https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js";
  script.async = true;

  document.body.appendChild(script);
};

onMounted(() => {
  loadScript();
});
</script>

<style scoped>
.calendar-wrapper {
  width: 100%;
  min-height: 700px;
  border-radius: 16px;
  overflow: hidden;
}

.meetings-iframe-container iframe {
  width: 100% !important;
  min-height: 700px !important;
  border: none !important;
}
</style>
