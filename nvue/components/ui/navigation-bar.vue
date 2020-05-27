<template>
	<!-- 导航栏 -->
	<view class="navigation-bar  flex sticky" :style="{ backgroundColor: bgc }">
		<!-- 状态栏 -->
		<view class="" :style="'height:' + statusBarHeight + 'px'"></view>
		<!-- 导航 -->
		<view class="w-100 flex  justify-between align-center flex-row" style="height: 90rpx;">
			<!-- left -->
			<view class="flex flex-row ml-3 ">
				<!-- 标题 -->
				<text class="text-bold font-35" v-if="title">{{ title }}</text>
				<text class="font-35" v-if="number">({{ number }})</text>
			</view>
			<!-- right -->
			<!-- 自定义 -->
			<view class="" v-if="custom"><slot></slot></view>
			<!-- 默认 -->
			<view class="flex-row" v-else>
				<icon-button @clickIcon="search" icon="\ue630"></icon-button>
				<icon-button @clickIcon="add" icon="\ue629"></icon-button>
			</view>
		</view>
		<!-- 扩展菜单 -->
		<!-- <popup mask width="320" height="400" maskValue="1" bg="#4C4C4C" ref="popup">
			<view style="width: 320rpx;height: 400rpx;" class="flex ">
				<view class=" flex-1 flex-center" v-for="item in menus" @click="clickMenu(item)" :key="item.text">
					<text class="font-md text-white">{{ item.text }}</text>
				</view>
			</view>
		</popup> -->
		<cPopup></cPopup>
	</view>
</template>

<script>
import iconButton from '@/components/ui/icon-button.vue';
// import popup from './popup.vue';
import cPopup from './cPopup.vue';
export default {
	components: {
		// popup,
		cPopup,
		iconButton
	},
	props: {
		title: String,
		number: {
			type: [String, Number]
		},
		// 导航栏右边自定义
		custom: {
			type: Boolean,
			default: false
		},
		bgc: {
			type: String,
			default: '#ededed'
		}
	},
	data() {
		return {
			statusBarHeight: 0,
			menus: [
				{
					text: '发起群聊',
					event: 'groupChat'
				},
				{
					text: '添加朋友',
					event: 'addFriend'
				},
				{
					text: '扫一到',
					event: 'qrCode'
				},
				{
					text: '帮助与反馈',
					event: ''
				}
			]
		};
	},
	mounted() {
		// #ifdef APP-PLUS-NVUE
		// 获取状态栏高度
		this.statusBarHeight = plus.navigator.getStatusbarHeight();
		// #endif
	},
	onLoad() {},
	methods: {
		add() {
			let x = uni.upx2px(415);
			let y = uni.upx2px(150);
			this.$refs.popup.open(x, y);
		},

		search() {
			console.log('search');
		}
	}
};
</script>

<style scoped>
.sticky {
	position: sticky;
}
</style>
