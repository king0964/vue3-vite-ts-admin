<template>
  <el-menu
    :default-active="currentPath"
    :router="true"
    class="el-menu-vertical-demo"
    @open="handleOpen"
    @close="handleClose"
    :collapse="isCollapse"
  >
    <el-menu-item index="/home">
      <el-icon><Menu /></el-icon>
      <span>首页</span>
    </el-menu-item>
    <el-sub-menu index="1">
      <template #title>
        <el-icon><Document /></el-icon>
        <span>常用页面</span>
      </template>
      <el-sub-menu index="1-1">
        <template #title>列表</template>
        <el-menu-item index="/list">普通列表</el-menu-item>
      </el-sub-menu>
      <el-menu-item index="/form">表单</el-menu-item>
      <el-menu-item index="/statistics">统计报表</el-menu-item>
    </el-sub-menu>
    <el-sub-menu index="2">
      <template #title>
        <el-icon><Setting /></el-icon>
        <span>系统管理</span>
      </template>
      <el-menu-item index="/role">角色管理</el-menu-item>
      <el-menu-item index="/menu">菜单管理</el-menu-item>
      <!-- <el-sub-menu index="2-1">
        <template #title>常用页面</template>
        <el-menu-item index="/form">表单</el-menu-item>
        <el-menu-item index="/list">列表</el-menu-item>
      </el-sub-menu> -->
    </el-sub-menu>
  </el-menu>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'

let currentPath = ref<any>('/')
const route = useRoute()
const store = useStore()

const handleOpen = (key: any, keyPath: any) => {
  // console.log(key, keyPath)
}
const handleClose = (key: any, keyPath: any) => {
  // console.log(key, keyPath)
}
const isCollapse = computed(() => store.state.menu.isCollapse)

currentPath = computed(() =>route.path)
</script>

<style scoped lang="less">
.el-menu {
  height: 100%;
}
</style>
