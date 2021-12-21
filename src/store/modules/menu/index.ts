export default {
  state: {
    isCollapse: false, // 是否折叠
  },
  getters: {
  },
  mutations: {
    SET_IS_COLLAPSE: (state: any, isCollapse: boolean) => {
      state.isCollapse = isCollapse
    }
  },
  actions: {
    setIsCollapse({ commit }: any, isCollapse = false) {
      commit('SET_IS_COLLAPSE', isCollapse)
    }
  }
}
