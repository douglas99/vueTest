import Vue from 'vue'
import App from './App'
import router from '@/router/'
import store from '@/store/'
import { request } from 'network/request'
Vue.config.productionTip = false
Vue.prototype.$axios = request
Vue.prototype.$qs = require('qs')

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')
