import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//ant-desgin-vue
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
//axios
import Axios from "axios";
const app = createApp(App);
app.config.globalProperties.$axios = Axios;
app.use(store).use(router).use(Antd).mount('#app')