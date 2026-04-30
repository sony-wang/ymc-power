<script setup>
import { useI18n } from 'vue-i18n'
import { useRoute, useRouter } from 'vue-router'
import { watch } from 'vue'

const { t, locale } = useI18n()
const route = useRoute()
const router = useRouter()

// 初始語言同步
locale.value = route.params.lang || 'zh-TW'

// 監聽路由變化，自動更新語言
watch(() => route.params.lang, (newLang) => {
  if (newLang) {
    locale.value = newLang
  }
})

function changeLang(lang) {
  router.push(`/${lang}`)
}
</script>

<template>
  <div>
    <h1>{{ t('home.title') }}</h1>

    <button @click="changeLang('zh-TW')">中文</button>
    <button @click="changeLang('en')">EN</button>
  </div>
</template>