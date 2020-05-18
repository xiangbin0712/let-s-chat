<template>
	<view class="chat-list  flex flex-row align-center" @click="onClick" @longpress="longClick">
		<view class="avatar-container ml-3"><image class="avatar" src="/static/logo.png" mode=""></image></view>
		<view class="right pl-2 pr-3  flex  justify-center border-bottom flex-1 ">
			<view class="right-container flex justify-center">
				<view class="flex flex-row justify-between ">
					<text>123132</text>
					<text class="font-sm text-muted">time</text>
				</view>
				<text class="chat-info text-muted text-ellipsis font-sm">
					很骄傲和哈哈哈哈很骄傲和哈哈哈哈很骄傲和哈哈哈哈很骄傲和哈哈哈哈哈啊哈哈哈哈哈哈啊哈哈哈哈哈哈啊哈哈哈哈哈哈啊哈哈哈哈哈
				</text>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {};
	},
	methods: {
		// 长按获取坐标
		longClick(e) {
			let x = 0;
			let y = 0;
			if (e.changedTouches && e.changedTouches.length) {
				x = e.changedTouches[0].screenX;
				y = e.changedTouches[0].screenY;
			}
			this.$emit('longTouch', { x, y });
		}
	}
};
</script>

<style scoped>
.avatar {
	width: 90rpx;
	height: 90rpx;
}

.right {
	padding-bottom: 30rpx;
	padding-top: 30rpx;
}

.right-container {
	height: 90rpx;
}
</style>
