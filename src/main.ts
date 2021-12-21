import { createApp } from 'vue'
import router from './router/index'
import { store } from './store'
import App from './App.vue'
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import './style/style.less'
import * as Icons from '@element-plus/icons'

const app = createApp(App)

// 注册全局组件
Object.keys(Icons).forEach(key => {
  app.component(key, Icons[key as keyof typeof Icons])
})

app.use(router).use(store).use(ElementPlus).mount('#app')
