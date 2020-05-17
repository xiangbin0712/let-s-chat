<template>
	<view class="flex-center iconfont" hover-class="bg-hover-light" style="height: 90rpx; width: 90rpx;">
		<text class="iconfont">{{_icon}}</text>
	</view>
</template>

<script>
	export default {
		props: {
			icon: String,
		},
		data() {
			return {

			};
		},
		computed: {
			_icon() {
				let str = this.icon
				return eval("'" + str + "'") 
			}
		}
	}
</script>

<style>
	/* @import url("../common/css/base.css"); */
	/* @import url("../common/css/common.css"); */
</style>
