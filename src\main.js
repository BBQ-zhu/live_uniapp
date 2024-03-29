import Vue from 'vue'
import App from './App'
import uView from "uview-ui";
import commonJS from "@/common/js/common";
import {
  get,
  post
} from "@/common/js/http";
import api from "@/common/js/api";
import 'default-passive-events'

// html解析器默认请求网址
Vue.prototype.$URL = 'http://localhost:3033' //测试后端接口
// Vue.prototype.$URL = 'http://zlc.zhulif.com:3033' //线上接口地址

Vue.prototype.$commonJS = commonJS
Vue.prototype.$axios = {
  get,
  post
} //封装的axios
Vue.prototype.$api = api
Vue.use(uView);

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
  ...App
})
app.$mount()
