export default {
  state: {
    isCollapse: false, // 是否折叠（false否，true是）
    menuWidth: '200px', // 左菜单宽度
  },
  getters: {
  },
  mutations: {
    SET_IS_COLLAPSE: (state: any, isCollapse: boolean) => {
      state.isCollapse = isCollapse
      state.menuWidth = isCollapse ? 'auto' : '200px'
    }
  },
  actions: {
    setIsCollapse({ commit }: any, isCollapse = false) {
      commit('SET_IS_COLLAPSE', isCollapse)
    }
  }
}
