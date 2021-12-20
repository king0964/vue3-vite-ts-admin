// createWebHistory路由模式路径不带#号(生产环境下不能直接访问项目，需要nginx转发)
// createWebHashHistory路由模式路径带#号

import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Login from '@/views/Login.vue'
import Main from '@/components/Main.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/',
    name: 'Main',
    component: Main,
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: 'Home',
        component: () => import('@/views/Home.vue'), // 懒加载组件
        meta: {
          id: 'home',
          title: '首页',
          isTab: true,
          keepAlive: true,
        }
      },
      {
        path: '/form',
        name: 'Form',
        component: () => import('@/views/Form.vue'),
        meta: {
          id: 'form',
          title: '表单',
          isTab: true,
          keepAlive: true,
        }
      },
      {
        path: '/list',
        name: 'List',
        component: () => import('@/views/List.vue'),
        meta: {
          id: 'list',
          title: '普通列表',
          isTab: true,
          keepAlive: true,
        }
      },
      {
        path: '/statistics',
        name: 'Statistics',
        component: () => import('@/views/Statistics.vue'),
        meta: {
          id: 'statistics',
          title: '统计报表',
          isTab: true,
          keepAlive: true,
        }
      },
      {
        path: '/role',
        name: 'Role',
        component: () => import('@/views/Role.vue'),
        meta: {
          id: 'role',
          title: '角色管理',
          isTab: true,
          keepAlive: true,
        }
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
