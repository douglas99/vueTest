import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { request } from './network/request'
Vue.config.productionTip = false
Vue.prototype.$axios = request
new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')
const qs = require('qs')
const data = {
	pageNum: 1,
	masterId: 1
}
request({
	url: '?s=Diy.Template.searchMaterial',
	data: qs.stringify(data),
	method: 'post'
}).then(res => {
	console.log(res)
})
