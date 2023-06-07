import { createApp } from 'vue';
import Antd from 'ant-design-vue';
import App from './App.vue';
import 'ant-design-vue/dist/antd.css';
import router from "@/router";
// import axios from "axios";

// axios.defaults.baseURL='/api'
// Vue.prototype.$http = axios

const app = createApp(App);

app.use(router);
app.use(Antd);
app.mount('#app');
