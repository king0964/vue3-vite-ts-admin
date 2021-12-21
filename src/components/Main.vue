<template>
  <el-container>
    <el-aside width="200px">
      <Nav />
    </el-aside>
    <el-container>
      <el-header>
        <Header />
        <tabsbar class="tabsbar" />
      </el-header>
      <el-main>
        <!-- <router-view /> -->
        <router-view v-slot="{ Component }">
          <keep-alive :include="$route.meta.keepAlive ? '' : []">
            <component :is="Component" class="component" />
          </keep-alive>
        </router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
import Header from '@/components/Header.vue'
import Nav from '@/components/Nav.vue'
import Tabsbar from '@/components/Tabsbar.vue'
</script>

<style scoped lang="less">
.el-container {
  height: 100vh;
}

.el-header {
  --el-header-padding: 0;
  --el-header-height: 100px;
}
.el-aside {
  width: auto;
}
</style>
