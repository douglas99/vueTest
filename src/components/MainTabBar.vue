<template>
	<div class="">
		<tab-bar>
			<tab-bar-item v-for="(item, index) in tabbars"
										:key="index"
										:path="item.url"
										dcolor="red">
				<img :src="item.icon"
						 slot="item-icon" />
				<img :src="item.aicon"
						 slot="item-icon-active" />
				<div slot="item-text">{{item.name}}</div>
			</tab-bar-item>
		</tab-bar>
	</div>
</template>

<script>
import TabBar from 'components/tabbar/TabBar'
import TabBarItem from 'components/tabbar/TabBarItem'
export default {
	name: 'MainTabBar',
	components: {
		TabBar,
		TabBarItem
	},
	props: {},
	data() {
		return {
			tabbars: []
		}
	},
	watch: {},
	computed: {},
	methods: {},
	created() {
		this.tabbars = [
			{
				name: '首页',
				url: '/home',
				icon: require('assets/img/tabbar/home.svg'),
				aicon: require('assets/img/tabbar/home_active.svg')
			},
			{
				name: '分类',
				url: '/category',
				icon: require('assets/img/tabbar/category.svg'),
				aicon: require('assets/img/tabbar/category_active.svg')
			},
			{
				name: '购物车',
				url: '/cart',
				icon: require('assets/img/tabbar/shopcart.svg'),
				aicon: require('assets/img/tabbar/shopcart_active.svg')
			},
			{
				name: '我的',
				url: '/profile',
				icon: require('assets/img/tabbar/profile.svg'),
				aicon: require('assets/img/tabbar/profile_active.svg')
			}
		]
	},
	mounted() {}
}
</script>
<style scoped>
</style>