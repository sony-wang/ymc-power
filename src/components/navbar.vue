<template>
  <fwb-navbar class="ymc-navbar fixed top-0 right-0 left-0 z-50 X!border-[#17363b] X!bg-[#0d2428e5]">
    <template #logo>
      <fwb-navbar-logo alt="吉穎電機Logo" :image-url="logo" link="#" @click.prevent="scrollToSection('home')">
        <!-- YMC Power -->
      </fwb-navbar-logo>
    </template>
    <template #default="{isShowMenu}">
      <fwb-navbar-collapse :is-show-menu="isShowMenu">
        <fwb-navbar-link is-active link="#home" @click.prevent="scrollToSection('home')">
          {{ t('nav.home') }}
        </fwb-navbar-link>
        <fwb-navbar-link link="#about" @click.prevent="scrollToSection('about')">
          {{ t('nav.about') }}
        </fwb-navbar-link>
        <fwb-navbar-link link="#products" @click.prevent="scrollToSection('products')">
          {{ t('nav.products') }}
        </fwb-navbar-link>
        <fwb-navbar-link link="#contact" @click.prevent="scrollToSection('contact')">
          {{ t('nav.contact') }}
        </fwb-navbar-link>
        <li class="md:flex md:items-center">
          <fwb-dropdown
            :text="languageLabel"
            align-to-end
            close-inside
            color="light"
            placement="bottom"
            content-wrapper-class="z-50 w-32 overflow-hidden rounded-lg border border-gray-200 bg-white shadow-lg dark:border-gray-700 dark:bg-gray-800"
          >
            <template #trigger>
              <button
                type="button"
                class="inline-flex w-full items-center gap-1 rounded py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-100 md:w-auto md:p-0 md:hover:bg-transparent md:hover:text-blue-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent md:dark:hover:text-white"
              >
                {{ languageLabel }}
                <svg
                  class="size-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19 9l-7 7-7-7"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                  />
                </svg>
              </button>
            </template>

            <nav class="py-2 text-sm dark:bg-gray-800">
              <button
                type="button"
                class="block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100 hover:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                @click="changeLang('zh-TW')"
              >
                中文
              </button>
              <button
                type="button"
                class="block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100 hover:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                @click="changeLang('en')"
              >
                English
              </button>
            </nav>
          </fwb-dropdown>
        </li>
      </fwb-navbar-collapse>
    </template>
  </fwb-navbar>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute, useRouter } from 'vue-router'
import {
  FwbDropdown,
  FwbNavbar,
  FwbNavbarCollapse,
  FwbNavbarLink,
  FwbNavbarLogo,
} from 'flowbite-vue'
import logo from '../assets/images/logo.png'

const route = useRoute()
const router = useRouter()
const { t } = useI18n()

const languageLabel = computed(() => route.params.lang === 'zh-TW' ? 'language' : '語言')

function changeLang(lang) {
  router.push(`/${lang}`)
}

function scrollToSection(id) {
  if (id === 'home') {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    history.replaceState(null, '', `${location.pathname}${location.search}`)
    return
  }

  const target = document.getElementById(id)
  const navbar = document.querySelector('.ymc-navbar')

  if (!target) return

  const navbarHeight = navbar?.getBoundingClientRect().height ?? 0
  const top = target.getBoundingClientRect().top + window.scrollY - navbarHeight

  window.scrollTo({ top, behavior: 'smooth' })
  history.replaceState(null, '', `#${id}`)
}
</script>

<style scoped>
:global(.ymc-navbar) {
  color-scheme: dark;
  background-color: #0d2428 !important;
  border-color: #17363b !important;
}

:global(.ymc-navbar ul),
:global(.ymc-navbar nav),
:global(.ymc-navbar [class*="bg-white"]) {
  background-color: #0d2428 !important;
  border-color: #17363b !important;
}

:global(.ymc-navbar a),
:global(.ymc-navbar button),
:global(.ymc-navbar span) {
  color: #d1d5db !important;
}

:global(.ymc-navbar a:hover),
:global(.ymc-navbar button:hover) {
  background-color: #17363b !important;
  color: #fff !important;
}

@media (min-width: 768px) {
  :global(.ymc-navbar a:hover),
  :global(.ymc-navbar button:hover) {
    background-color: transparent !important;
  }
}
</style>
