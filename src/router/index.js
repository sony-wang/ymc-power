import { createRouter, createWebHistory, RouterView } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/:lang(zh-TW|en)',
    component: RouterView,
    children: [
      {
        path: '',
        name: 'home',
        component: Home
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

export default router