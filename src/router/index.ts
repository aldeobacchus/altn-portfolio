import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/CVView.vue'
import CVView from '../views/CVView.vue'

// The router is not used for the project but the file stays here if changes are needed

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: CVView,
    },
  ],
})

export default router
