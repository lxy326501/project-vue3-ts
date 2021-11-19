import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";
import * as echarts from "echarts";
import ElementPlus from 'element-plus'
import Antd from 'ant-design-vue';
import 'element-plus/dist/index.css'
import 'ant-design-vue/dist/antd.css';
import '@/assets/css/style.css'

const app = createApp(App);
// app.config.productionTip = false;
app.config.globalProperties.$echarts = echarts

app.use(router)
   .use(ElementPlus)
   .use(Antd)
   .mount('#app')
