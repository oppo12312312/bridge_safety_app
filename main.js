import Vue from 'vue'
import App from './App'
import service from "@/service/index.js"
Vue.config.productionTip = false

Vue.prototype.$service = service;

App.mpType = 'app'
const app = new Vue({
	...App
})
app.$mount()
