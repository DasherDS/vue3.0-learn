import { createApp } from "vue";
// import ElementPlus from "element-plus";
// import "element-plus/lib/theme-chalk/index.css";
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css';
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueParticles from "vue-particles"


createApp(App)
    .use(store)
    .use(router)
    // .use(ElementPlus)
    .use(VueParticles)
    .use(Antd)
    .mount("#app");
