<template>
  <el-form :inline="true" :model="formInline" class="demo-form-inline">
    <el-form-item label="姓名">
      <el-input v-model="formInline.name" placeholder="请输入姓名"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">查询</el-button>
    </el-form-item>
  </el-form>
  <el-table
    stripe
    :data="
      jokeMes.slice(
        (paginObj.currentPage - 1) * paginObj.pagesize,
        paginObj.currentPage * paginObj.pagesize
      )
    "
    style="width: 100%"
    v-loading="loading"
    empty-text="没有数据"
  >
    <el-table-column fixed prop="passtime" label="时间" width="150" />
    <el-table-column prop="name" label="名字" width="120" />
    <el-table-column prop="text" label="信息" width="600" />
    <el-table-column prop="header" label="图片" width="600" />
    <el-table-column prop="video" label="视频" width="600" />
    <el-table-column prop="top_comments_content" label="内容" width="300" />
    <el-table-column fixed="right" label="操作" width="60">
      <template #default="scope">
        <el-button type="text" size="small" @click="handleClick(scope.row)">查看</el-button>
      </template>
    </el-table-column>
  </el-table>
  <el-pagination
    background
    v-model:currentPage.sync="cPage"
    layout="prev, pager, next"
    :total="paginObj.total"
    @current-change="current_change"
    style="margin-top: 15px"
  ></el-pagination>
  <el-drawer v-model="drawer" title="详情页面">
    <el-form :inline="true" :model="formInline" class="demo-form-inline details">
      <el-form-item label="姓名">
        <el-input v-model="details.name" placeholder="" disabled></el-input>
      </el-form-item>
      <el-form-item label="内容">
        <el-input v-model="details.top_comments_content" placeholder="" disabled></el-input>
      </el-form-item>
      <el-form-item label="时间">
        <el-input v-model="details.passtime" placeholder="" disabled></el-input>
      </el-form-item>
    </el-form>
    <div style="text-align: center">
      <el-button type="primary" @click="drawer = false">关闭</el-button>
    </div>
  </el-drawer>
</template>

<script setup lang="ts">
import { ref, Ref, reactive, toRefs, onMounted } from 'vue'
import axios from '../utils/axios'

const loading = ref(false) // 是否显示加载效果
const jokeMes: Ref = ref([]) // 表格数据
const temJokeMes: Ref = ref([]) // 临时表格数据
const cPage = ref(1)
const drawer = ref(false)
const details: Ref = ref(null)
const state = reactive({
  formInline: {
    // 搜索数据
    name: ''
  },
  paginObj: {
    // 翻页数据
    currentPage: 1,
    pagesize: 10,
    total: 0
  }
})

onMounted(() => {
  loading.value = true
  // 调用接口，获取列表数据
  axios
    .get('/getJoke?page=1&count=100&type=video')
    .then((response) => {
      console.log('response: ', response.data.result)
      jokeMes.value = response.data.result
      temJokeMes.value = response.data.result
      state.paginObj.total = response.data.result.length
      loading.value = false
    })
    .catch((error) => {
      loading.value = false
      console.error(error)
    })
})

// 查询操作
const onSubmit = () => {
  jokeMes.value = temJokeMes.value.filter(
    // 查询过滤数据
    (item: any) => item.name.indexOf(state.formInline.name) >= 0
  )
  current_change(1) // 切换到第一页
  state.paginObj.total = jokeMes.value.length // 重新设置总数量
}

const handleClick = (row: any) => {
  console.log(row)
  drawer.value = true
  details.value = row
}

// 点击翻页
const current_change = (currentPage: number) => {
  state.paginObj.currentPage = currentPage
  cPage.value = currentPage
}

const { formInline, paginObj } = toRefs(state)
</script>

<style lang="less">
.el-table .el-table__cell {
  height: 48px;
  padding: 0;
}
.details .el-form-item {
  width: 100%;
}
</style>
