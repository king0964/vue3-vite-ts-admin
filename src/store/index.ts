import { createStore } from 'vuex'

import tab from './modules/tab'
import menu from './modules/menu'

// const path = require('path')
// const requireModules = require.context('./modules', true, /index\.(ts|js)$/iu)

// const modules = {}

// requireModules.keys().forEach(filePath => {
//   const modular = requireModules(filePath)
//   let name = path.resolve(filePath, '..')
//   name = name.split('/').pop()
//   modules[name] = {
//     namespaced: true,
//     ...modular.default
//   }
// })


export const store = createStore({
  state: {
    text: 'This is Vuex Root.state.text'
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    tab,
    menu
  }
})
