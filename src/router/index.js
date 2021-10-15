import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  //登录
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/acount/Login.vue')
  },
  //注册
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/acount/Register.vue')
  }
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
