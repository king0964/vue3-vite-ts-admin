<template>
  <el-container>
    <el-aside :width="menuWidth">
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

import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const menuWidth = computed(() => store.state.menu.menuWidth)
</script>

<style scoped lang="less">
.el-container {
  height: 100vh;
}

.el-header {
  --el-header-padding: 0;
  --el-header-height: 100px;
}
</style>
