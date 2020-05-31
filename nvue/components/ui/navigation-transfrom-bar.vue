<template>
	<!-- 导航栏 -->
	<view class="navigation-bar" :style="style">
		<!-- 状态栏 -->
		<view class="" :style="'height:' + statusBarHeight + 'px'"></view>
		<!-- 导航 -->
		<view class="w-100   justify-between align-center flex-row" style="height: 90rpx;">
			<!-- left -->
			<view class="flex flex-row ml-3">
				<!-- 标题 -->
				<text class="text-bold font-35" v-if="title">{{ title }}</text>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	props: {
		title: String,
		custom: Boolean, // 导航栏右边自定义
		transNum: {
			type: [String, Number],
			default: 0
		}
	},
	computed: {
		style() {
			return `background-color: rgba(240,240,240,${this.transNum});
			        opacity: ${this.transNum}`;
		}
	},

	data() {
		return {
			statusBarHeight: 0
		};
	},
	mounted() {
		// #ifdef APP-PLUS-NVUE
		// 获取状态栏高度
		this.statusBarHeight = plus.navigator.getStatusbarHeight();
		// #endif
	},
	onLoad() {},
	methods: {}
};
</script>

<style scoped>
.navigation-bar {
	position: fixed;
}
</style>
