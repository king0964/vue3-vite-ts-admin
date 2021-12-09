// createWebHistory路由模式路径不带#号(生产环境下不能直接访问项目，需要nginx转发)
// createWebHashHistory路由模式路径带#号

import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Login from '@/views/Login.vue'
import Home from '@/views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/form',
    name: 'Form',
    component: () => import('@/views/Form.vue') // 懒加载组件
  },
  {
    path: '/list',
    name: 'List',
    component: () => import('@/views/List.vue') // 懒加载组件
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
