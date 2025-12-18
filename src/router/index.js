import { createRouter, createWebHistory } from 'vue-router'
import Role from '../views/RoleView.vue'
import RoleB from '../views/Role_B_View.vue'
import RoleA from '../views/Role_A_View.vue'
import login from '../views/LoginView.vue'
import RenderingView from '../views/QuestionRenderingView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/role',
      name: 'role',
      component: Role,
    },
    {
      path: '/rolea',
      name: 'rolea',
      component: RoleA,
    },
    {
      path: '/roleb',
      name: 'roleb',
      component: RoleB,
    },
    {
      path: '/rend',
      name: 'rend',
      component: RenderingView,
    },
  ],
})

export default router
