import Vue from 'vue'
import Router from 'vue-router'

const originalPush = Router.prototype.push
Router.prototype.push = function push(location, onResolve, onReject) {
	if (onResolve || onReject)
		return originalPush.call(this, location, onResolve, onReject)
	return originalPush.call(this, location).catch(err => err)
}
const originalReplace = Router.prototype.replace
Router.prototype.replace = function replace(location, onResolve, onReject) {
	if (onResolve || onReject)
		return originalReplace.call(this, location, onResolve, onReject)
	return originalReplace.call(this, location).catch(err => err)
}
Vue.use(Router)

const Home = () => import('views/home/Home')
const Category = () => import('views/cate/Category')
const Cart = () => import('views/cart/Cart')
const Profile = () => import('views/profile/Profile')

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home
	},
	{
		path: '/home',
		name: 'Home',
		component: Home
	},
	{
		path: '/category',
		name: 'Category',
		component: Category
	},
	{
		path: '/cart',
		name: 'Cart',
		component: Cart
	},
	{
		path: '/profile',
		name: 'Profile',
		component: Profile
	}
]
export default new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})
