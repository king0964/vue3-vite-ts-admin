<template>
  <div class="header">
    <div class="title" @click="router.push('/')">Vue3 admin</div>
    <div class="exit">
      <el-button type="text" @click="open">退出登录</el-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'
import { ElMessageBox, ElMessage } from 'element-plus'
import utils from '../utils'
const router = useRouter()
const open = () => {
  ElMessageBox.confirm('确定退出系统?', '提示信息', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning'
  })
    .then(() => {
      ElMessage({
        type: 'success',
        message: '成功退出'
      })
      utils.localRemove('token')
      router.push('/login')
    })
    .catch(() => {
      console.log('返回')
    })
}
</script>

<style scoped lang="less">
.header {
  height: 50px;
  border-bottom: 1px solid #e9e9e9;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;

  .title {
    font-size: 20px;
    cursor: pointer;
  }

  .exit {
    color: #409eff;
  }
}
</style>
