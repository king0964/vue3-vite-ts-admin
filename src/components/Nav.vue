<template>
  <el-menu
    :default-active="currentPath"
    :router="true"
    class="el-menu-vertical-demo"
    @open="handleOpen"
    @close="handleClose"
  >
    <el-menu-item index="/">
      <el-icon><icon-menu /></el-icon>
      <span>首页</span>
    </el-menu-item>
    <el-sub-menu index="1">
      <template #title>
        <el-icon><location /></el-icon>
        <span>系统管理</span>
      </template>
      <el-sub-menu index="1-1">
        <template #title>常用页面</template>
        <el-menu-item index="/form">表单</el-menu-item>
        <el-menu-item index="/list">列表</el-menu-item>
      </el-sub-menu>
    </el-sub-menu>
  </el-menu>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { Location, Menu as IconMenu } from '@element-plus/icons'

let currentPath = ref<any>('/')
// const router = useRouter()
const route = useRoute()

const handleOpen = (key: any, keyPath: any) => {
  // console.log(key, keyPath)
}
const handleClose = (key: any, keyPath: any) => {
  // console.log(key, keyPath)
}
console.log(route.path)
currentPath = computed(() =>route.path)
</script>

<style scoped lang="less">
@import '../style/style.less';
.el-menu {
  height: 100%;
}
</style>
