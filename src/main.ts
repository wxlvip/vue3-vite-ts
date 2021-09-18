import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";
import store from "./store";

import ElementPlus from "element-plus";
import "dayjs/locale/zh-cn";
// import locale from "element-plus/lib/locale/lang/zh-cn";
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import 'element-plus/dist/index.css' //  一定要引入

createApp(App).use(ElementPlus, { locale: zhCn, size: "mini" }).use(store).use(router).mount('#app');


