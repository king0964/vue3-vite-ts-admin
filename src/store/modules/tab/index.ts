import router from '../../../router'

// value 格式：{a}-{b}
// a: 路由name b: 菜单ID
const defaultTabs = [{
  value: 'Home-home',
  label: '首页',
  name: 'Home',
  path: '/home',
  closable: false, // true：可以关闭
  menuId: 'home'
}]

export default {
  state: {
    active: 'Home-home',
    tabs: JSON.parse(JSON.stringify(defaultTabs))
  },
  getters: {
  },
  mutations: {
    SET_ACTIVE: (state: any, active: any) => {
      state.active = active
    },
    SET_TABS: (state: any, tabs: any) => {
      state.tabs = tabs
    },
    ADD_TAB: (state: any, tab: any) => {
      state.tabs.push(tab)
    }
  },
  actions: {
    setActive({ commit }: any, active: any) {
      commit('SET_ACTIVE', active)
    },
    changeHandle({ commit, state }: any, route: any) {
      console.log(route)
      const meta = route.meta
      console.log('meta', meta)

      if (meta.isTab) {
        let val = `${route.name}-${meta.id}`

        const tab = {
          value: val,
          label: meta.title,
          name: route.name,
          path: route.path,
          closable: true,
          menuId: meta.id
        }

        const exist = state.tabs.filter((item: { value: string }) => {
          return item.value === val
        })
        if (exist.length === 0) {
          commit('ADD_TAB', tab)
        }
        commit('SET_ACTIVE', val)
        console.log('tabs', state.tabs)
      }
    },
    removeHandle({ commit, state }: any, values: string | any[]) {
      let tabs = state.tabs.filter((item: { value: any }) => {
        return values.indexOf(item.value) === -1
      })
      const route = {
        name: 'Home',
      }
      console.log('values', values, tabs)
      if (tabs.length !== 0) {
        const tab = tabs[tabs.length - 1]
        route.name = tab.name
      } else {
        tabs = JSON.parse(JSON.stringify(defaultTabs))
      }
      commit('SET_TABS', tabs)
      // 判断删除的是否是当前路由
      let check = false
      tabs.forEach((tab: { name: any; menuId: any }) => {
        let val = `${tab.name}-${tab.menuId}`
        if (val === state.active) {
          check = true
        }
      })
      console.log('激活route', route)
      if (!check) {
        router.push(route)
      }
    }
  }
}
