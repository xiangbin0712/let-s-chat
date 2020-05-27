<template>
	<view class="flex-center icon-box" @click="$emit('clickIcon')" hover-class="bg-hover-light">
		<text class="iconfont">{{ _icon }}</text>
	</view>
</template>

<script>
export default {
	props: {
		icon: String
	},
	data() {
		return {};
	},
	computed: {
		_icon() {
			let str = this.icon;
			return eval("'" + str + "'");
		}
	}
};
</script>

<style scoped>
.icon-box {
	height: 90rpx;
	width: 110rpx;
}
</style>
