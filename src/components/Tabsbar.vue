<template>
  <div class="tabs">
    <el-tabs type="card" v-model="active" @tab-click="clickHandle" @tab-remove="removeHandle">
      <el-tab-pane
        v-for="tab in tabs"
        :key="tab.value"
        :label="tab.label"
        :name="tab.value"
        :closable="tab.closable"
      />
    </el-tabs>
  </div>
</template>

<script lang="ts" setup>
import { computed, defineComponent, nextTick, onBeforeMount } from 'vue'
import { onBeforeRouteUpdate, useRoute, useRouter } from 'vue-router'
import { useStore } from 'vuex'

const router = useRouter()
const route = useRoute()
const store = useStore()
console.log('store', store.state)

const tabActive = computed(() => store.state.tab.active)
const tabs = computed(() => store.state.tab.tabs)

const active = computed({
  get: () => {
    return tabActive.value
  },
  set: (val) => {
    store.dispatch('setActive', val)
  }
})

onBeforeRouteUpdate((to) => {
  console.log('to', to)
  store.dispatch('changeHandle', to)
})

onBeforeMount(() => {
  store.dispatch('changeHandle', route)
})

/**
 * @description: 标签点击路由跳转事件
 */
const clickHandle = ({ index }) => {
  const tab = tabs.value[+index]
  router.push({
    name: tab.name,
  })
}

/**
 * @description: 标签删除事件
 * @return {*}
 */
const removeHandle = (name) => {
  store.dispatch('removeHandle', [name])
}
</script>

<style lang="less" scoped>
.tabs {
  padding: 9px 20px 0 20px;
}
</style>
