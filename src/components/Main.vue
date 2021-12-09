<template>
  <el-container>
    <el-aside width="200px">
      <Nav />
    </el-aside>
    <el-container>
      <el-header>
        <Header />
      </el-header>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
import Header from '@/components/Header.vue'
import Nav from '@/components/Nav.vue'
</script>

<style scoped lang="less">
  .el-container {
    height: 100vh;
  }

  .el-header {
    --el-header-padding: 0;
  }
</style>
