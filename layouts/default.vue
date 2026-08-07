<template>
  <!--
    padding-top reserves the announcement bar's height so the fixed AppHeader,
    which is offset by the same variable, still sits clear of page content. The
    variable is 0px whenever no announcement is live, which is the common case
    and costs nothing.
  -->
  <div class="kakr-shell">
    <SiteAnnouncementBar />
    <AppHeader />
    <StickyCta />
    <slot />
    <AppFooter />
  </div>
</template>

<style>
.kakr-shell {
  padding-top: var(--kakr-announce-h, 0px);
}
</style>
