import { createApp } from 'vue'
import router from './router/index'
import { store } from './store'
import App from './App.vue'
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import './style/style.less'

const app = createApp(App)
app.use(router).use(store).use(ElementPlus).mount('#app')
