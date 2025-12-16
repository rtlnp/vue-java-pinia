import { createRouter, createWebHistory } from 'vue-router'
import RoleB from '../views/Role_B_View.vue'
import login from '../views/LoginView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      redirect: login,
    },
    {
      path: '/roleb',
      name: 'roleb',
      component: RoleB,
    },
    {
      path: '/rolea',
      name: 'rolea',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Role_A_View.vue'),
    },
  ],
})

export default router
