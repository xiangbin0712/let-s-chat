<template>
	<!-- 导航栏 -->
	<view class="navigation-bar flex sticky" style="background-color: #F5F5F5;">
		<!-- 状态栏 -->
		<view class="" :style="'height:' + statusBarHeight + 'px'"></view>
		<!-- 导航 -->
		<view class="w-100 flex justify-between align-center  flex-row" style="height: 90rpx;">
			<!-- left -->
			<view class="font-md flex flex-row ml-3 ">
				<!-- 标题 -->
				<text v-if="title">{{ title }}11</text>
				<text v-if="number">({{ number }})</text>
			</view>
			<!-- right -->
			<view class="flex flex-row">
				<icon-button @click="$emit('search')" icon="\ue6e3"></icon-button>
				<icon-button @click="$emit('add')" icon="\ue682"></icon-button>
			</view>
		</view>
	</view>
</template>

<script>
import iconButton from './icon-button.vue';
export default {
	components: {
		iconButton
	},
	props: {
		title: String,
		number: Number
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
.sticky {
	position: sticky;
}
</style>
