import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/viewHome/HomeView.vue')
    },
    {
      path: '/doc',
      name: 'doc',
      component: () => import('../views/viewDoc/DocView.vue')
    },
    {
      path: '/tool',
      name: 'tool',
      component: () => import('../views/viewTool/ToolView.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/viewAbout/AboutView.vue')
    }
  ]
})

export default router
