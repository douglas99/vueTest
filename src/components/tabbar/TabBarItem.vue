<template>
	<div class="tab-bar-item"
			 @click="btnClick">
		<div v-if="!isActive">
			<slot name='item-icon'></slot>
		</div>
		<div v-else>
			<slot name='item-icon-active'></slot>
		</div>
		<div :style="isAcolor">
			<slot name='item-text'></slot>
		</div>
	</div>
</template>

<script>
export default {
	name: 'TabBarItem',
	components: {},
	props: {
		dcolor: {
			type: String,
			default: 'red'
		},
		path: {
			type: String
		}
	},
	data() {
		return {}
	},
	watch: {},
	computed: {
		isActive() {
			return this.$route.path.indexOf(this.path) !== -1
		},
		isAcolor() {
			return this.isActive ? { color: this.dcolor } : {}
		}
	},
	methods: {
		btnClick() {
			this.$router.push(this.path)
		}
	},
	created() {},
	mounted() {}
}
</script>
<style scoped>
.tab-bar-item {
	height: 49px;
	flex: 1;
	font-size: 13px;
	cursor: pointer;
}
.tab-bar-item img {
	height: 24px;
	width: 24px;
	margin-top: 5px;
	vertical-align: middle;
}
.item-text {
	font-size: 12px;
	margin-top: 3px;
	color: #333;
}
</style>