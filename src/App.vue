<template>
  <Main v-if="state.showMenu" />
  <router-view v-else />
</template>

<script setup lang="ts">
import { reactive, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import Main from '@/components/Main.vue'
import utils from './utils'
const noMenu = ['/login']
const router = useRouter()
const state = reactive({
  showMenu: true,
  currentPath: '/'
})

const unwatch = router.beforeEach((to, from, next) => {
  if (to.path == '/login') {
    // 如果路径是 /login 则正常执行
    next()
  } else {
    // 如果不是 /login，判断是否有 token
    if (!utils.localGet('token')) {
      // 如果没有，则跳至登录页面
      next({ path: '/login' })
    } else {
      // 否则继续执行
      next()
    }
  }
  state.showMenu = !noMenu.includes(to.path)
  state.currentPath = to.path
})

onUnmounted(() => {
  unwatch()
})
</script>

<style>
* {
  padding: 0;
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
