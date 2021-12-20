<template>
  <el-form :inline="true" :model="formInline" class="demo-form-inline">
    <el-form-item label="姓名">
      <el-input v-model="formInline.name" placeholder="请输入姓名"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">查询</el-button>
    </el-form-item>
  </el-form>
  <el-button type="primary" @click="batchDel">批量删除</el-button>
  <el-table
    ref="multipleTable"
    :data="state.tableData"
    style="width: 100%"
    empty-text="没有数据"
    @selection-change="handleSelectionChange"
  >
    <el-table-column type="selection" width="55" />
    <el-table-column label="Date" width="120">
      <template #default="scope">{{ scope.row.date }}</template>
    </el-table-column>
    <el-table-column property="name" label="Name" width="120" />
    <el-table-column property="address" label="Address" show-overflow-tooltip />
    <el-table-column fixed="right" label="操作" width="60">
      <template #default="scope">
        <el-button type="text" size="small">查看</el-button>
        <!-- <el-button type="text" size="small" @click="handleClick(scope.row)">删除</el-button> -->
      </template>
    </el-table-column>
  </el-table>
</template>

<script lang="ts" setup>
import { ElMessageBox, ElMessage } from 'element-plus'
import { reactive, toRefs } from 'vue'
import utils from '../utils'

const state = reactive({
  formInline: {
    // 搜索数据
    name: ''
  },
  tableData: [
    {
      date: '2016-05-03',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles'
    },
    {
      date: '2016-05-02',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles'
    },
    {
      date: '2016-05-04',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles'
    },
    {
      date: '2016-05-01',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles'
    },
    {
      date: '2016-05-08',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles'
    },
    {
      date: '2016-05-06',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles'
    },
    {
      date: '2016-05-07',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles'
    }
  ],
  multipleSelection: []
})

// 查询操作
const onSubmit = () => {}

const handleSelectionChange = (val: any) => {
  val.map((v: any, i: number) => {
    state.multipleSelection.push(v['date'] as never)
  })
}

const batchDel = () => {
  ElMessageBox.confirm('确定删除数据?', '提示信息', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning'
  })
    .then(() => {
      state.tableData = utils.delData(state.multipleSelection, 'date', tableData.value)
      ElMessage({
        type: 'success',
        message: '删除成功'
      })
    })
    .catch(() => {
      // ElMessage({
      //   type: 'info',
      //   message: 'Delete canceled',
      // })
    })
}

// 单独删除
// const handleClick = (row: any) => {
//   console.log(row, row['date'])
//   state.multipleSelection.push(row['date'] as never)
//   state.tableData = utils.delData(state.multipleSelection, 'date', tableData.value)
// }

const { tableData, formInline } = toRefs(state)
</script>
