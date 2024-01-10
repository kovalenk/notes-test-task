import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '',
      name: 'Home',
      redirect: { path: '/home' },
      component: () => import(/* webpackChunkName: "MainLayout" */ '@/layouts/MainLayout.vue'),
      children: [
        {
          path: '/home',
          name: 'HomeView',
          component: () => import(/* webpackChunkName: "HomeView" */ '@/views/HomeView.vue')
        },
        {
          path: '/statistics',
          name: 'StatisticsView',
          component: () =>
            import(/* webpackChunkName: "StatisticsView" */ '@/views/StatisticsView.vue')
        }
      ]
    }
  ]
})

export default router
