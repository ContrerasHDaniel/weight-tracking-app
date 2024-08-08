import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import LogIn from '@/views/LogIn.vue'
import { useSessionStore } from "@/stores/userSession";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      beforeEnter(to, from, next) {
        const store = useSessionStore();
        if (store.isLoggedIn) {
          next()
        } else {
          next('/login')
        }
      },
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: LogIn
    }
  ]
})

export default router
