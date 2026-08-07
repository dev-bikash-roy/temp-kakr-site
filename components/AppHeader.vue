<template>
  <!--
    `top` tracks --kakr-announce-h so the editorial announcement bar sits above
    the header rather than covering it (handoff §1). The variable is 0px when no
    announcement is live.
  -->
  <!--
    `transition-[padding-top]`, deliberately NOT `transition-all`.

    This element only animates its own padding (pt-3 → pt-0 on scroll). With
    `transition-all`, the browser also transitions the inherited custom property
    --kakr-announce-h that `top` resolves against — so dismissing the announcement
    bar left the header stuck 56px down with a gap where the bar had been, and the
    offset was wrong on first paint too. Scoping the transition makes `top` track
    the variable immediately.
  -->
  <header
    class="fixed inset-x-0 z-[999] transition-[padding-top] duration-500"
    style="top: var(--kakr-announce-h, 0px)"
    :class="scrolled || activeMenu ? 'pt-0' : 'pt-3'"
    @mouseleave="closeMenu"
  >
    <!-- Outer wrapper: pill on scroll, full-width flat on top -->
    <div
      class="mx-auto transition-all duration-500"
      :class="scrolled || activeMenu
        ? 'max-w-[1400px] px-4 sm:px-6 lg:px-8'
        : 'max-w-[1400px] px-4 sm:px-6 lg:px-8'"
    >
      <div
        class="flex items-center h-16 sm:h-[72px] px-4 sm:px-5 transition-all duration-500"
        :class="scrolled || activeMenu
          ? 'rounded-2xl bg-black/80 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)]'
          : 'rounded-none bg-transparent border border-transparent'"
      >
        <!-- Logo -->
        <div class="flex-shrink-0 flex items-center">
          <NuxtLink :to="localePath('/')" class="flex items-center" @click="closeMenu">
            <img src="/kakrlabs-logo.png" alt="Kakr Labs" class="h-8 sm:h-9 w-auto" />
          </NuxtLink>
        </div>

        <!-- Desktop Navigation -->
        <nav class="hidden lg:flex items-center ml-6 xl:ml-8 gap-2">
          <!-- Platform -->
          <div class="relative group" @mouseenter="openMenu('platform')" @mouseleave="closeMenu">
            <button
              class="nav-link flex items-center gap-1"
              :class="{ 'text-emerald-400': activeMenu === 'platform' }"
              @focus="openMenu('platform')"
              @click="goTo('/platform')"
            >
              {{ t.platform }}
              <svg class="w-3.5 h-3.5 transition-transform duration-200" :class="{ 'rotate-180': activeMenu === 'platform' }" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" /></svg>
            </button>
            <Transition
              enter-active-class="transition duration-200 ease-out"
              enter-from-class="opacity-0 translate-y-2"
              enter-to-class="opacity-100 translate-y-0"
              leave-active-class="transition duration-150 ease-in"
              leave-from-class="opacity-100 translate-y-0"
              leave-to-class="opacity-0 translate-y-2"
            >
              <div v-show="activeMenu === 'platform'" class="absolute top-full left-0 pt-3 w-[280px] z-[100]">
                <div class="bg-[#0a0a0a]/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.6)] p-2 flex flex-col gap-1">
                  <template v-for="item in product" :key="item.name">
                    <div v-if="item.soon" class="dropdown-item cursor-default opacity-70">
                      <div class="font-semibold text-white/90 text-sm">{{ item.name }} <span class="mega-badge">{{ t.comingSoon }}</span></div>
                      <div class="text-xs text-white/50 mt-0.5">{{ item.desc }}</div>
                    </div>
                    <a v-else-if="item.external" :href="item.link" target="_blank" rel="noopener noreferrer" class="dropdown-item group/item" @click="closeMenu">
                      <div class="font-semibold text-white/90 text-sm group-hover/item:text-emerald-400 transition-colors">{{ item.name }}</div>
                      <div class="text-xs text-white/50 mt-0.5">{{ item.desc }}</div>
                    </a>
                    <NuxtLink v-else :to="localePath(item.link)" class="dropdown-item group/item" @click="closeMenu">
                      <div class="font-semibold text-white/90 text-sm group-hover/item:text-emerald-400 transition-colors">{{ item.name }}</div>
                      <div class="text-xs text-white/50 mt-0.5">{{ item.desc }}</div>
                    </NuxtLink>
                  </template>
                </div>
              </div>
            </Transition>
          </div>

          <!-- Solutions -->
          <div class="relative group" @mouseenter="openMenu('solutions')" @mouseleave="closeMenu">
            <button
              class="nav-link flex items-center gap-1"
              :class="{ 'text-emerald-400': activeMenu === 'solutions' }"
              @focus="openMenu('solutions')"
              @click="goTo('/solutions')"
            >
              {{ t.solutions }}
              <svg class="w-3.5 h-3.5 transition-transform duration-200" :class="{ 'rotate-180': activeMenu === 'solutions' }" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" /></svg>
            </button>
            <Transition
              enter-active-class="transition duration-200 ease-out"
              enter-from-class="opacity-0 translate-y-2"
              enter-to-class="opacity-100 translate-y-0"
              leave-active-class="transition duration-150 ease-in"
              leave-from-class="opacity-100 translate-y-0"
              leave-to-class="opacity-0 translate-y-2"
            >
              <div v-show="activeMenu === 'solutions'" class="absolute top-full left-0 pt-3 w-[280px] z-[100]">
                <div class="bg-[#0a0a0a]/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.6)] p-2 flex flex-col gap-1">
                  <template v-for="item in solutions" :key="item.name">
                    <a v-if="item.external" :href="item.link" target="_blank" rel="noopener noreferrer" class="dropdown-item group/item" @click="closeMenu">
                      <div class="font-semibold text-white/90 text-sm group-hover/item:text-emerald-400 transition-colors">{{ item.name }}</div>
                      <div class="text-xs text-white/50 mt-0.5">{{ item.desc }}</div>
                    </a>
                    <NuxtLink v-else :to="localePath(item.link)" class="dropdown-item group/item" @click="closeMenu">
                      <div class="font-semibold text-white/90 text-sm group-hover/item:text-emerald-400 transition-colors">{{ item.name }}</div>
                      <div class="text-xs text-white/50 mt-0.5">{{ item.desc }}</div>
                    </NuxtLink>
                  </template>
                </div>
              </div>
            </Transition>
          </div>

          <NuxtLink :to="localePath('/wallet')" class="nav-link" @click="closeMenu" @mouseenter="closeMenu">
            {{ t.wallet }}
          </NuxtLink>

          <NuxtLink :to="localePath('/api-hub')" class="nav-link" @click="closeMenu" @mouseenter="closeMenu">
            {{ t.api }}
          </NuxtLink>

          <!-- Developers / Resources -->
          <div class="relative group" @mouseenter="openMenu('developers')" @mouseleave="closeMenu">
            <button
              class="nav-link flex items-center gap-1"
              :class="{ 'text-emerald-400': activeMenu === 'developers' }"
              @focus="openMenu('developers')"
            >
              {{ t.resources }}
              <svg class="w-3.5 h-3.5 transition-transform duration-200" :class="{ 'rotate-180': activeMenu === 'developers' }" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" /></svg>
            </button>
            <Transition
              enter-active-class="transition duration-200 ease-out"
              enter-from-class="opacity-0 translate-y-2"
              enter-to-class="opacity-100 translate-y-0"
              leave-active-class="transition duration-150 ease-in"
              leave-from-class="opacity-100 translate-y-0"
              leave-to-class="opacity-0 translate-y-2"
            >
              <div v-show="activeMenu === 'developers'" class="absolute top-full left-0 pt-3 w-[260px] z-[100]">
                <div class="bg-[#0a0a0a]/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.6)] p-2 flex flex-col gap-1">
                  <!-- `external` decides target/rel. It used to be inferred from
                       `soon`, which meant every internal Resources link opened in a
                       new tab; the two are unrelated properties. -->
                  <template v-for="item in developers" :key="item.name">
                    <a v-if="item.external" :href="item.link" target="_blank" rel="noopener noreferrer" class="dropdown-item group/item" @click="closeMenu">
                      <div class="font-semibold text-white/90 text-sm group-hover/item:text-emerald-400 transition-colors">{{ item.name }}</div>
                      <div class="text-xs text-white/50 mt-0.5">{{ item.desc }}</div>
                    </a>
                    <NuxtLink v-else :to="localePath(item.link)" class="dropdown-item group/item" @click="closeMenu">
                      <div class="font-semibold text-white/90 text-sm group-hover/item:text-emerald-400 transition-colors">{{ item.name }} <span v-if="item.soon" class="mega-badge">{{ t.comingSoon }}</span></div>
                      <div class="text-xs text-white/50 mt-0.5">{{ item.desc }}</div>
                    </NuxtLink>
                  </template>
                </div>
              </div>
            </Transition>
          </div>

          <!-- Company -->
          <div class="relative group" @mouseenter="openMenu('company')" @mouseleave="closeMenu">
            <button
              class="nav-link flex items-center gap-1"
              :class="{ 'text-emerald-400': activeMenu === 'company' }"
              @focus="openMenu('company')"
            >
              {{ t.company }}
              <svg class="w-3.5 h-3.5 transition-transform duration-200" :class="{ 'rotate-180': activeMenu === 'company' }" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" /></svg>
            </button>
            <Transition
              enter-active-class="transition duration-200 ease-out"
              enter-from-class="opacity-0 translate-y-2"
              enter-to-class="opacity-100 translate-y-0"
              leave-active-class="transition duration-150 ease-in"
              leave-from-class="opacity-100 translate-y-0"
              leave-to-class="opacity-0 translate-y-2"
            >
              <div v-show="activeMenu === 'company'" class="absolute top-full left-0 pt-3 w-[240px] z-[100]">
                <div class="bg-[#0a0a0a]/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.6)] p-2 flex flex-col gap-1">
                  <NuxtLink v-for="item in company" :key="item.name" :to="localePath(item.link)" class="dropdown-item group/item" @click="closeMenu">
                    <div class="font-semibold text-white/90 text-sm group-hover/item:text-emerald-400 transition-colors">{{ item.name }}</div>
                    <div class="text-xs text-white/50 mt-0.5">{{ item.desc }}</div>
                  </NuxtLink>
                </div>
              </div>
            </Transition>
          </div>
        </nav>

        <!-- Right Side Actions -->
        <div class="hidden lg:flex items-center gap-1.5 ml-auto">
          <!-- Language Switcher -->
          <div class="relative" @mouseenter="openMenu('language')">
            <button
              class="nav-link flex items-center gap-1 uppercase text-xs"
              :class="{ 'text-emerald-400': activeMenu === 'language' }"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9"/></svg>
              {{ locale }}
              <svg class="w-3 h-3 transition-transform duration-200" :class="{ 'rotate-180': activeMenu === 'language' }" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" /></svg>
            </button>
            <div v-show="activeMenu === 'language'" class="absolute top-full right-0 pt-3">
              <div class="w-44 bg-[#0d0d0d] border border-white/10 rounded-xl shadow-2xl py-2 backdrop-blur-xl">
                <button
                  v-for="l in availableLocales"
                  :key="l.code"
                  @click="setLocale(l.code); closeMenu()"
                  class="block w-full text-left px-4 py-2 text-sm transition-colors"
                  :class="locale === l.code ? 'text-emerald-400 font-semibold' : 'text-slate-300 hover:bg-white/5 hover:text-white'"
                >
                  {{ l.name }}
                </button>
              </div>
            </div>
          </div>

          <!-- Divider -->
          <span class="w-px h-4 bg-white/10 mx-1"></span>

          <a href="https://pteri.org/Login" target="_blank" class="nav-link text-slate-300 hover:text-white">
            {{ t.signIn }}
          </a>

          <a
            href="https://pteri.org/Register"
            target="_blank"
            class="header-cta ml-1 px-4 font-bold text-black rounded-xl transition-all duration-200 whitespace-nowrap relative overflow-hidden group"
            style="background: linear-gradient(135deg, #34d399 0%, #10b981 100%); box-shadow: 0 0 20px rgba(52,211,153,0.3);"
          >
            <span class="relative z-10">Start Building Free</span>
            <span class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200" style="background: linear-gradient(135deg, #6ee7b7 0%, #34d399 100%);"></span>
          </a>
        </div>

        <!-- Mobile controls -->
        <div class="lg:hidden flex items-center gap-2 ml-auto">
          <div class="relative">
            <button @click="toggleMobileSubmenu('mobileLang')" class="flex items-center gap-1 p-2 rounded-lg text-white hover:bg-white/10 uppercase font-semibold text-xs">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9"/></svg>
              {{ locale }}
              <svg class="w-3 h-3 text-slate-400 transition-transform" :class="{ 'rotate-180': mobileSubmenu === 'mobileLang' }" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" /></svg>
            </button>
            <div v-show="mobileSubmenu === 'mobileLang'" class="absolute top-full right-0 mt-1 w-36 bg-[#0d0d0d] border border-white/10 rounded-xl shadow-xl py-1 z-[100] backdrop-blur-xl">
              <button
                v-for="l in availableLocales"
                :key="l.code"
                @click="setLocale(l.code); toggleMobileSubmenu('mobileLang')"
                class="block w-full text-left px-4 py-2.5 text-sm transition-colors"
                :class="locale === l.code ? 'text-emerald-400 font-semibold' : 'text-slate-300 hover:text-white hover:bg-white/5'"
              >
                {{ l.name }}
              </button>
            </div>
          </div>

          <button @click="mobileMenuOpen = !mobileMenuOpen" class="p-2 rounded-lg text-white hover:bg-white/10 transition-colors">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path v-if="!mobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Menu Drawer (Slide-in) -->
    <Teleport to="body">
      <Transition
        enter-active-class="transform transition ease-in-out duration-300"
        enter-from-class="-translate-x-full"
        enter-to-class="translate-x-0"
        leave-active-class="transform transition ease-in-out duration-300"
        leave-from-class="translate-x-0"
        leave-to-class="-translate-x-full"
      >
        <div v-show="mobileMenuOpen" class="lg:hidden fixed inset-0 z-[60] flex">
          <div class="fixed inset-0 bg-black/50 backdrop-blur-sm" @click="mobileMenuOpen = false"></div>

          <div class="relative w-[85%] max-w-sm bg-black shadow-2xl flex flex-col border-r border-white/10" style="height: 100%; height: 100dvh; max-height: 100dvh;">
            <div class="h-16 flex items-center px-6 border-b border-white/10 shrink-0">
              <img src="/kakrlabs-logo.png" alt="Kakr Labs" class="h-9 w-auto" />
              <button @click="mobileMenuOpen = false" class="ml-auto text-slate-400 hover:text-white">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </div>

            <div class="flex-1 overflow-y-auto py-4 px-6 space-y-1" style="-webkit-overflow-scrolling: touch; overscroll-behavior: contain;">
              <div class="border-b border-white/5 py-1">
                <button @click="toggleMobileSubmenu('platform')" class="w-full flex items-center justify-between text-left text-white font-medium py-3 text-base">
                  {{ t.platform }}
                  <svg class="w-4 h-4 transition-transform text-slate-400" :class="{ 'rotate-180': mobileSubmenu === 'platform' }" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" /></svg>
                </button>
                <div v-show="mobileSubmenu === 'platform'" class="pl-4 space-y-1 pb-3">
                  <template v-for="item in product" :key="item.name">
                    <div v-if="item.soon" class="flex items-center gap-2 py-2 text-slate-500 text-sm">
                      {{ item.name }}<span class="mega-badge">{{ t.comingSoon }}</span>
                    </div>
                    <a v-else-if="item.external" :href="item.link" target="_blank" rel="noopener noreferrer" class="block py-3 text-slate-400 hover:text-emerald-400 text-sm transition-colors" @click="mobileMenuOpen = false">{{ item.name }}</a>
                    <NuxtLink v-else :to="localePath(item.link)" class="block py-3 text-slate-400 hover:text-emerald-400 text-sm transition-colors" @click="mobileMenuOpen = false">{{ item.name }}</NuxtLink>
                  </template>
                </div>
              </div>

              <div class="border-b border-white/5 py-1">
                <button @click="toggleMobileSubmenu('solutions')" class="w-full flex items-center justify-between text-left text-white font-medium py-3 text-base">
                  {{ t.solutions }}
                  <svg class="w-4 h-4 transition-transform text-slate-400" :class="{ 'rotate-180': mobileSubmenu === 'solutions' }" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" /></svg>
                </button>
                <div v-show="mobileSubmenu === 'solutions'" class="pl-4 space-y-1 pb-3">
                  <template v-for="item in solutions" :key="item.name">
                    <a v-if="item.external" :href="item.link" target="_blank" rel="noopener noreferrer" class="block py-3 text-slate-400 hover:text-emerald-400 text-sm transition-colors" @click="mobileMenuOpen = false">{{ item.name }}</a>
                    <NuxtLink v-else :to="localePath(item.link)" class="block py-3 text-slate-400 hover:text-emerald-400 text-sm transition-colors" @click="mobileMenuOpen = false">{{ item.name }}</NuxtLink>
                  </template>
                </div>
              </div>

              <NuxtLink :to="localePath('/wallet')" class="block text-white font-medium py-3 text-base border-b border-white/5" @click="mobileMenuOpen = false">
                {{ t.wallet }}
              </NuxtLink>

              <NuxtLink :to="localePath('/api-hub')" class="block text-white font-medium py-3 text-base border-b border-white/5" @click="mobileMenuOpen = false">
                {{ t.api }}
              </NuxtLink>

              <div class="border-b border-white/5 py-1">
                <button @click="toggleMobileSubmenu('developers')" class="w-full flex items-center justify-between text-left text-white font-medium py-3 text-base">
                  {{ t.resources }}
                  <svg class="w-4 h-4 transition-transform text-slate-400" :class="{ 'rotate-180': mobileSubmenu === 'developers' }" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" /></svg>
                </button>
                <div v-show="mobileSubmenu === 'developers'" class="pl-4 space-y-1 pb-3">
                  <!-- Same external/internal split as the desktop menu: Newsroom,
                       Product Updates and Tutorials are in-app routes. -->
                  <template v-for="item in developers" :key="item.name">
                    <a v-if="item.external" :href="item.link" target="_blank" rel="noopener noreferrer" class="block py-3 text-slate-400 hover:text-emerald-400 text-sm transition-colors" @click="mobileMenuOpen = false">{{ item.name }}</a>
                    <NuxtLink v-else :to="localePath(item.link)" class="block py-3 text-slate-400 hover:text-emerald-400 text-sm transition-colors" @click="mobileMenuOpen = false">{{ item.name }}</NuxtLink>
                  </template>
                </div>
              </div>

              <div class="border-b border-white/5 py-1">
                <button @click="toggleMobileSubmenu('company')" class="w-full flex items-center justify-between text-left text-white font-medium py-3 text-base">
                  {{ t.company }}
                  <svg class="w-4 h-4 transition-transform text-slate-400" :class="{ 'rotate-180': mobileSubmenu === 'company' }" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" /></svg>
                </button>
                <div v-show="mobileSubmenu === 'company'" class="pl-4 space-y-1 pb-3">
                  <NuxtLink v-for="(item, index) in company" :key="index" :to="localePath(item.link)" class="block py-3 text-slate-400 hover:text-emerald-400 text-sm transition-colors" @click="mobileMenuOpen = false">
                    {{ item.name }}
                  </NuxtLink>
                </div>
              </div>

              <div class="py-5 border-t border-white/5 mt-2">
                <p class="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">{{ t.downloadApp }}</p>
                <div class="grid grid-cols-2 gap-3">
                  <a href="https://apps.apple.com/us/app/pteri-wallet/id6751649780" target="_blank" class="flex justify-center bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg p-2 transition-colors">
                    <img src="/ios.png" alt="App Store" class="h-8 w-auto" />
                  </a>
                  <a href="https://play.google.com/store/apps/details?id=org.kakr.pteri" target="_blank" class="flex justify-center bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg p-2 transition-colors">
                    <img src="/playstore.png" alt="Play Store" class="h-8 w-auto" />
                  </a>
                </div>
              </div>

              <div class="pt-4 pb-8">
                <a href="https://pteri.org/Register" target="_blank" class="block w-full text-center py-3.5 font-bold text-black rounded-xl text-base transition-all shadow-lg" style="background: linear-gradient(135deg, #34d399 0%, #10b981 100%); border: 1px solid rgba(52,211,153,0.5); box-shadow: 0 0 16px rgba(52,211,153,0.3);" @click="mobileMenuOpen = false">
                  Start Building Free
                </a>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed, watch } from 'vue'

const { locale, locales, setLocale } = useI18n()
const localePath = useLocalePath()
const router = useRouter()

const scrolled = ref(false)
const activeMenu = ref(null)
const mobileMenuOpen = ref(false)
const mobileSubmenu = ref(null)
let closeTimer = null

const availableLocales = computed(() => {
  return locales.value
})

// Translations for header
const translations = {
  en: {
    home: 'Home',
    platform: 'Platform',
    wallet: 'PTERI App',
    pteri: 'PTERI',
    identity: 'Identity',
    payments: 'Payments',
    api: 'API',
    docs: 'Docs',
    pricing: 'Pricing',
    company: 'Company',
    about: 'About',
    partnerships: 'Partnerships',
    contact: 'Contact',
    getStarted: 'Get Started',
    downloadApp: 'Download the App',
    startPilot: 'Start Pilot',
    product: 'Product',
    solutions: 'Solutions',
    developers: 'Developers',
    pilotProgram: 'Pilot Program',
    signIn: 'Log in',
    intelligence: 'Intelligence',
    whoItsFor: 'Use Cases',
    identityUseCases: 'PTERI Solutions',
    coreModules: 'Enterprise & Developer Tools',
    seeItInAction: 'Talk to Our Team',
    cybersecurity: 'Cybersecurity & IAM',
    compliance: 'Compliance',
    blockchainInfra: 'Blockchain Infrastructure',
    baas: 'BaaS (Decentralized)',
    apiDocs: 'Documentation',
    sdks: 'SDKs',
    devDashboard: 'Developer Dashboard',
    statusPage: 'System Status',
    agentMarketplace: 'Agent Marketplace',
    agentMarketplaceDesc: 'Discover, onboard, and monetize trusted AI agents.',
    comingSoon: 'Coming Soon',
    resources: 'Resources',
    tutorials: 'Tutorials',
    tutorialsDesc: 'Step-by-step integration guides',
    productUpdates: 'Product Updates',
    productUpdatesDesc: 'Launched features, releases, and changes',
    newsroom: 'Newsroom',
    newsroomDesc: 'Releases, research, and announcements'
  },
  ja: {
    home: 'ホーム',
    platform: 'プラットフォーム',
    wallet: 'PTERIアプリ',
    pteri: 'PTERI',
    identity: 'アイデンティティ',
    payments: '支払い',
    api: 'API',
    docs: 'ドキュメント',
    pricing: '価格設定',
    company: '会社',
    about: '会社概要',
    partnerships: 'パートナーシップ',
    contact: 'お問い合わせ',
    getStarted: '始める',
    downloadApp: 'アプリをダウンロード',
    startPilot: 'パイロットを開始',
    product: '製品',
    solutions: 'ソリューション',
    developers: '開発者',
    pilotProgram: 'パイロットプログラム',
    signIn: 'サインイン',
    intelligence: 'インテリジェンス',
    whoItsFor: 'ユースケース',
    identityUseCases: 'PTERIソリューション',
    coreModules: 'エンタープライズと開発者向けツール',
    seeItInAction: 'チームに相談する',
    cybersecurity: 'サイバーセキュリティとIAM',
    compliance: 'コンプライアンス',
    blockchainInfra: 'ブロックチェーンインフラ',
    baas: 'BaaS（分散型）',
    apiDocs: 'APIドキュメント',
    sdks: 'SDK',
    devDashboard: '開発者ダッシュボード',
    statusPage: 'システムステータス',
    agentMarketplace: 'エージェントマーケットプレイス',
    agentMarketplaceDesc: '信頼できるAIエージェントを発見、導入、収益化。',
    comingSoon: '近日公開',
    resources: 'リソース',
    tutorials: 'チュートリアル',
    tutorialsDesc: 'ステップバイステップの統合ガイド',
    productUpdates: '製品アップデート',
    productUpdatesDesc: 'リリースされた機能、更新、変更点',
    newsroom: 'ニュースルーム',
    newsroomDesc: 'リリース、リサーチ、お知らせ'
  },
  de: {
    home: 'Startseite',
    platform: 'Plattform',
    wallet: 'PTERI App',
    pteri: 'PTERI',
    identity: 'Identität',
    payments: 'Zahlungen',
    api: 'API',
    docs: 'Dokumentation',
    pricing: 'Preise',
    company: 'Unternehmen',
    about: 'Über uns',
    partnerships: 'Partnerschaften',
    contact: 'Kontakt',
    getStarted: 'Loslegen',
    downloadApp: 'App herunterladen',
    startPilot: 'Pilot starten',
    product: 'Produkt',
    solutions: 'Lösungen',
    developers: 'Entwickler',
    pilotProgram: 'Pilotprogramm',
    signIn: 'Anmelden',
    intelligence: 'Intelligenz',
    whoItsFor: 'Anwendungsfälle',
    identityUseCases: 'PTERI-Lösungen',
    coreModules: 'Enterprise- und Entwicklertools',
    seeItInAction: 'Mit unserem Team sprechen',
    cybersecurity: 'Cybersicherheit & IAM',
    compliance: 'Compliance',
    blockchainInfra: 'Blockchain-Infrastruktur',
    baas: 'BaaS (dezentralisiert)',
    apiDocs: 'API-Dokumentation',
    sdks: 'SDKs',
    devDashboard: 'Entwickler-Dashboard',
    statusPage: 'Systemstatus',
    agentMarketplace: 'Agent-Marktplatz',
    agentMarketplaceDesc: 'Vertrauenswürdige KI-Agenten entdecken, einbinden und monetarisieren.',
    comingSoon: 'Demnächst',
    resources: 'Ressourcen',
    tutorials: 'Tutorials',
    tutorialsDesc: 'Schritt-für-Schritt-Integrationsleitfäden',
    productUpdates: 'Produkt-Updates',
    productUpdatesDesc: 'Veröffentlichte Funktionen, Releases und Änderungen',
    newsroom: 'Newsroom',
    newsroomDesc: 'Releases, Forschung und Ankündigungen'
  },
  es: {
    home: 'Inicio',
    platform: 'Plataforma',
    wallet: 'PTERI App',
    pteri: 'PTERI',
    identity: 'Identidad',
    payments: 'Pagos',
    api: 'API',
    docs: 'Documentación',
    pricing: 'Precios',
    company: 'Empresa',
    about: 'Acerca de',
    partnerships: 'Asociaciones',
    contact: 'Contacto',
    getStarted: 'Comenzar',
    downloadApp: 'Descargar la aplicación',
    startPilot: 'Iniciar Piloto',
    product: 'Producto',
    solutions: 'Soluciones',
    developers: 'Desarrolladores',
    pilotProgram: 'Programa Piloto',
    signIn: 'Iniciar sesión',
    intelligence: 'Inteligencia',
    whoItsFor: 'Casos de Uso',
    identityUseCases: 'Soluciones PTERI',
    coreModules: 'Herramientas empresariales y para desarrolladores',
    seeItInAction: 'Habla con nuestro equipo',
    cybersecurity: 'Ciberseguridad e IAM',
    compliance: 'Cumplimiento',
    blockchainInfra: 'Infraestructura Blockchain',
    baas: 'BaaS (Descentralizado)',
    apiDocs: 'Documentación de la API',
    sdks: 'SDKs',
    devDashboard: 'Panel de desarrollador',
    statusPage: 'Estado del sistema',
    agentMarketplace: 'Mercado de Agentes',
    agentMarketplaceDesc: 'Descubre, integra y monetiza agentes de IA confiables.',
    comingSoon: 'Próximamente',
    resources: 'Recursos',
    tutorials: 'Tutoriales',
    tutorialsDesc: 'Guías de integración paso a paso',
    productUpdates: 'Actualizaciones de Producto',
    productUpdatesDesc: 'Funciones lanzadas, versiones y cambios',
    newsroom: 'Sala de prensa',
    newsroomDesc: 'Lanzamientos, investigación y anuncios'
  },
  ar: {
    home: 'الرئيسية',
    platform: 'المنصة',
    wallet: 'تطبيق PTERI',
    pteri: 'PTERI',
    identity: 'الهوية',
    payments: 'المدفوعات',
    api: 'API',
    docs: 'التوثيق',
    pricing: 'التسعير',
    company: 'الشركة',
    about: 'حول',
    partnerships: 'الشراكات',
    contact: 'اتصل بنا',
    getStarted: 'ابدأ الآن',
    downloadApp: 'تحميل التطبيق',
    startPilot: 'بدء الطيار',
    product: 'المنتج',
    solutions: 'الحلول',
    developers: 'المطورون',
    pilotProgram: 'برنامج بايلوت',
    signIn: 'تسجيل الدخول',
    intelligence: 'ذكاء',
    whoItsFor: 'حالات الاستخدام',
    identityUseCases: 'حلول PTERI',
    coreModules: 'أدوات المؤسسات والمطورين',
    seeItInAction: 'تحدث مع فريقنا',
    cybersecurity: 'الأمن السحابي وإدارة الوصول (IAM)',
    compliance: 'الامتثال',
    blockchainInfra: 'بنية البلوكشين التحتية',
    baas: 'BaaS (لامركزي)',
    apiDocs: 'توثيق API',
    sdks: 'مجموعات SDK',
    devDashboard: 'لوحة تحكم المطور',
    statusPage: 'حالة النظام',
    agentMarketplace: 'سوق الوكلاء',
    agentMarketplaceDesc: 'اكتشف ووظّف وحقّق الدخل من وكلاء الذكاء الاصطناعي الموثوقين.',
    comingSoon: 'قريباً',
    resources: 'الموارد',
    tutorials: 'الدروس التعليمية',
    tutorialsDesc: 'أدلة تكامل خطوة بخطوة',
    productUpdates: 'تحديثات المنتج',
    productUpdatesDesc: 'الميزات المُطلقة والإصدارات والتغييرات',
    newsroom: 'غرفة الأخبار',
    newsroomDesc: 'الإصدارات والأبحاث والإعلانات'
  }
}

const t = computed(() => translations[locale.value] || translations.en)

const company = computed(() => [
  { name: t.value.about, link: '/about', desc: 'Our mission and team' },
  { name: t.value.partnerships, link: '/partnerships', desc: 'Work together with Kakr' },
  { name: t.value.newsroom, link: '/newsroom', desc: t.value.newsroomDesc },
  { name: t.value.contact, link: '/contact', desc: 'Get in touch with us' }
])

// Resources menu order is fixed by handoff §1: Newsroom sits directly below
// Documentation, with Product Updates and Tutorials as category shortcuts into the
// same collection. Blog is dropped from the menu — /blog still resolves for old
// links, but the Newsroom is the canonical destination and listing both would
// present them as two separate places.
const developers = computed(() => [
  { name: t.value.apiDocs, link: 'https://docs.kakr.ai/', desc: 'Guides and API reference', external: true },
  { name: t.value.newsroom, link: '/newsroom', desc: t.value.newsroomDesc },
  { name: t.value.productUpdates, link: '/updates', desc: t.value.productUpdatesDesc },
  { name: t.value.tutorials, link: '/tutorials', desc: t.value.tutorialsDesc },
  { name: t.value.devDashboard, link: 'https://pteri.org/', desc: 'Manage keys and usage', external: true },
  { name: t.value.statusPage, link: 'https://kakrlabs1.statuspage.io/', desc: 'Live system status', external: true }
])

const product = computed(() => [
  { name: 'Platform Overview', link: '/platform', desc: 'The full Kakr platform' },
  { name: t.value.pteri, link: '/platform#pteri', desc: 'Verifiable identity engine' },
  { name: t.value.identity, link: '/platform#authority', desc: 'Verifiable digital identity' },
  { name: t.value.intelligence, link: 'https://pteri.org/chat/pteri-intelligence', desc: 'Risk & fraud intelligence', external: true },
  { name: t.value.pricing, link: '/platform#pricing', desc: 'Plans for every scale' },
  { name: t.value.agentMarketplace, link: '', desc: t.value.agentMarketplaceDesc, soon: true }
])

const solutions = computed(() => [
  { name: t.value.whoItsFor, link: '/solutions#use-cases', desc: 'Workforce, AI agents, IoT & more' },
  { name: t.value.identityUseCases, link: '/solutions#pteri-solutions', desc: 'Passwordless MFA, AI agents, payments & more' },
  { name: t.value.coreModules, link: 'https://docs.kakr.ai/docs/product-and-access/13.1-pricing-plans?_highlight=enterprise#pteri-enterprise', desc: 'Existing-system protection & MCP tooling', external: true },
  { name: t.value.seeItInAction, link: '/solutions#contact', desc: 'Get matched with the right solution' }
])

// Methods
const handleScroll = () => {
  scrolled.value = window.scrollY > 20
}

const openMenu = (menu) => {
  if (closeTimer) {
    clearTimeout(closeTimer)
    closeTimer = null
  }
  activeMenu.value = menu
}

const closeMenu = () => {
  if (closeTimer) clearTimeout(closeTimer)
  closeTimer = setTimeout(() => {
    activeMenu.value = null
  }, 120)
}

// Clicking a mega-menu trigger label navigates to its overview page
const goTo = (path) => {
  activeMenu.value = null
  router.push(localePath(path))
}

const toggleMobileSubmenu = (menu) => {
  mobileSubmenu.value = mobileSubmenu.value === menu ? null : menu
}

// Lock body scroll when drawer is open, but keep drawer itself scrollable
watch(mobileMenuOpen, (val) => {
  if (typeof document !== 'undefined') {
    document.body.style.overflow = val ? 'hidden' : ''
    document.body.style.touchAction = val ? 'none' : ''
  }
})

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  if (closeTimer) clearTimeout(closeTimer)
  if (typeof document !== 'undefined') {
    document.body.style.overflow = ''
    document.body.style.touchAction = ''
  }
})
</script>

<style scoped>
.nav-link {
  /* Audit p2 NAV: 15/22, 600 */
  padding: 0.4rem 0.65rem;
  font-size: var(--nav-font-size, 15px);
  line-height: var(--nav-line-height, 22px);
  font-weight: 600;
  color: rgba(255, 255, 255, 0.75);
  transition: color 0.15s ease;
  white-space: nowrap;
  border-radius: 0.5rem;
}
/* Audit p2: header button height 44px — also satisfies the 44px minimum
   tap target. Uses flex centring so the label stays vertically centred. */
.header-cta {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: var(--btn-height-header, 44px);
  font-size: var(--btn-font-size, 15px);
  line-height: var(--btn-line-height, 20px);
}

.nav-link:hover {
  color: #ffffff;
}

.dropdown-item {
  display: block;
  padding: 0.5rem 0.75rem;
  border-radius: 0.75rem;
  transition: background-color 0.15s ease;
  text-decoration: none;
}
.dropdown-item:hover {
  background-color: rgba(255, 255, 255, 0.05);
}

.mega-badge {
  display: inline-block;
  margin-left: 0.5rem;
  padding: 0.1rem 0.45rem;
  font-size: 0.6rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: #34d399;
  background: rgba(52, 211, 153, 0.12);
  border: 1px solid rgba(52, 211, 153, 0.35);
  border-radius: 9999px;
  vertical-align: middle;
  white-space: nowrap;
}
</style>
