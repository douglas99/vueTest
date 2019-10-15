<template>
	<div id="tabbar">
		<slot></slot>
	</div>
</template>

<script>
export default {
	name: 'TabBar',
	components: {},
	props: {},
	data() {
		return {}
	},
	watch: {},
	computed: {},
	methods: {},
	created() {},
	mounted() {}
}
</script>
<style scoped>
#tabbar {
	display: flex;
	position: fixed;
	left: 0;
	right: 0;
	bottom: 0;
	text-align: center;
	background-color: #f1f1f1;
	box-shadow: 0 -1px 1px rgba(100, 100, 100, 0.2);
}
</style>