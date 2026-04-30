<script setup>
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()

function changeLang(lang) {
  locale.value = lang
}
</script>

<template>
  <div>
    <h1>{{ t('home.title') }}</h1>

    <button @click="changeLang('zh-TW')">中文</button>
    <button @click="changeLang('en')">EN</button>
  </div>
</template>