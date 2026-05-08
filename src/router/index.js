import { createRouter, createWebHistory, RouterView } from 'vue-router'
import Home from '../views/Home.vue'
import Products from '../views/Products.vue'
import i18n from '../i18n'

const routes = [
  {
    path: '/:lang(zh-TW|en)',
    component: RouterView,
    children: [
      {
        path: '',
        name: 'home',
        component: Home
      },
      {
        path: 'products/:productType?',
        name: 'products',
        component: Products,
      }
    ]
  },
  {
    path: '/',
    redirect: '/zh-TW'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to) => {
  const lang = to.params.lang

  if (lang && i18n.global.locale.value !== lang) {
    i18n.global.locale.value = lang
  }
})

export default router
