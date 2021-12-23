<template>
  <div>
    <el-table
      :data="tableData"
      style="width: 100%"
      row-key="id"
      border
      lazy
      :load="load"
      :tree-props="{ children: 'children', hasChildren: 'hasChildren' }"
    >
      <el-table-column prop="zhName" label="中文名称" width="180" />
      <el-table-column prop="enName" label="英文名称" />
      <el-table-column prop="icon" label="图标" align="center">
        <template v-slot="{ row }">
          <el-icon v-if="row.icon">
            <component :is="row.icon" />
          </el-icon>
          <span v-else>—</span>
        </template>
      </el-table-column>
      <el-table-column prop="type" label="类型" align="center">
        <template v-slot="{ row }">
          <span><el-tag>{{ row.type == 1 || row.type == 2 ? '菜单' : '目录' }}</el-tag></span>
        </template>
      </el-table-column>
      <el-table-column prop="url" label="地址">
        <template v-slot="{ row }">
          <span>{{ row.type == 1 || row.type == 2 ? row.url : '—' }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="authorizationId" label="授权标识" />
      <el-table-column prop="sort" label="排序" />
      <el-table-column prop="isShow" label="是否显示">
        <template v-slot="{ row }">
          <el-switch
            v-if="row.type == 1 || row.type == 2"
            @change="showHandle(row)"
            v-model="row.isShow"
            :active-value="1"
            :inactive-value="0"
          />
          <span v-else>—</span>
        </template>
      </el-table-column>
      <el-table-column prop="isKeepAlive" label="是否缓存">
        <template v-slot="{ row }">
          <el-switch
            v-if="row.type == 1 || row.type == 2"
            @change="keepAliveHandle(row)"
            v-model="row.isKeepAlive"
            :active-value="1"
            :inactive-value="0"
          />
          <span v-else>—</span>
        </template>
      </el-table-column>
      <el-table-column prop="isShowTab" label="是否在tab显示" width="120">
        <template v-slot="{ row }">
          <el-switch
            v-if="row.type == 1 || row.type == 2"
            @change="showTabHandle(row)"
            v-model="row.isShowTab"
            :active-value="1"
            :inactive-value="0"
          />
          <span v-else>—</span>
        </template>
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="60">
        <template #default="scope">
          <el-button type="text" size="small">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script lang="ts" setup>
import { reactive, toRefs } from 'vue'
const state = reactive({
  tableData: [
    {
      id: 1,
      zhName: '首页',
      enName: 'home',
      icon: 'Menu',
      type: 1, // 0目录 1菜单 2子项菜单
      url: '/home',
      authorizationId: '—',
      sort: 1,
      isShow: true,
      isKeepAlive: true,
      isShowTab: true
    },
    {
      id: 2,
      zhName: '常用页面',
      enName: 'commonPage',
      icon: 'Document',
      type: 0,
      url: '',
      authorizationId: '—',
      sort: 2,
      isShow: true,
      isKeepAlive: true,
      isShowTab: true,
      hasChildren: true
    },
    {
      id: 3,
      zhName: '系统管理',
      enName: 'sysManagent',
      icon: 'Setting',
      type: 0,
      url: '',
      authorizationId: '—',
      sort: 3,
      isShow: true,
      isKeepAlive: true,
      isShowTab: true,
      hasChildren: true
    }
  ],
  2: [
    {
      id: 21,
      zhName: '列表',
      enName: 'list',
      icon: '',
      type: 0,
      url: '',
      authorizationId: '—',
      sort: 21,
      isShow: true,
      isKeepAlive: true,
      isShowTab: true,
      hasChildren: true
    },
    {
      id: 22,
      zhName: '表单',
      enName: 'form',
      icon: '',
      type: 2,
      url: '/form',
      authorizationId: '—',
      sort: 22,
      isShow: true,
      isKeepAlive: true,
      isShowTab: true
    },
    {
      id: 23,
      zhName: '统计报表',
      enName: 'statistics',
      icon: '',
      type: 2,
      url: '/statistics',
      authorizationId: '—',
      sort: 23,
      isShow: true,
      isKeepAlive: true,
      isShowTab: true
    }
  ],
  21: [
    {
      id: 211,
      zhName: '普通列表',
      enName: 'list',
      icon: '',
      type: 2,
      url: '/list',
      authorizationId: '—',
      sort: 21,
      isShow: true,
      isKeepAlive: true,
      isShowTab: true
    }
  ],
  3: [
    {
      id: 31,
      zhName: '角色管理',
      enName: 'role',
      icon: '',
      type: 2,
      url: '/role',
      authorizationId: '—',
      sort: 31,
      isShow: true,
      isKeepAlive: true,
      isShowTab: true
    },
    {
      id: 32,
      zhName: '菜单管理',
      enName: 'menu',
      icon: '',
      type: 2,
      url: '/menu',
      authorizationId: '—',
      sort: 32,
      isShow: true,
      isKeepAlive: true,
      isShowTab: true
    }
  ]
})
const load = (row: any, treeNode: any, resolve) => {
  // 模拟接口，可改成传row.id调用接口数据
  setTimeout(() => {
    resolve(state[row.id])
  }, 500)
}
const showHandle = (row) => {}
const keepAliveHandle = (row) => {}
const showTabHandle = (row) => {}

const { tableData } = toRefs(state)
</script>
