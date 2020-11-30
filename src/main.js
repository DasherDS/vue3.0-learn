import { createApp } from "vue";
import ElementPlus from "element-plus";
import "element-plus/lib/theme-chalk/index.css";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueParticles from "vue-particles"


createApp(App)
App.use(store)
App.use(router)
App.use(ElementPlus)
App.use(VueParticles)
App.mount("#app");
