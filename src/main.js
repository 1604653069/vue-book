import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-plus'
import 'element-plus/dist/index.css'
import axios from 'axios'
import VueAxios from "vue-axios"
import * as ElementPlusIconsVue from '@element-plus/icons-vue'



axios.defaults.baseURL = "http://localhost:8080"

const app = createApp(App)
app.use(ElementUI)
app.use(VueAxios, axios)
app.config.productionTip = false
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
app.use(router).mount('#app')
