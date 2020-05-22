<template>
	<!-- 导航栏 -->
	<view class="navigation-bar flex sticky" style="background-color: #F5F5F5;">
		<!-- 状态栏 -->
		<view class="" :style="'height:' + statusBarHeight + 'px'"></view>
		<!-- 导航 -->
		<view class="w-100 flex justify-between align-center flex-row" style="height: 90rpx;">
			<!-- left -->
			<view class="flex flex-row ml-3 ">
				<!-- 标题 -->
				<text class="text-bold font-35" v-if="title">{{ title }}</text>
				<text class="font-35" v-if="number">({{ number }})</text>
			</view>
			<!-- right -->
			<view class="flex flex-row" v-if="hasRight">
				<icon-button icon="\ue6e3"></icon-button>
				<icon-button @click="add" icon="\ue682"></icon-button>
			</view>
		</view>
		<!-- 扩展菜单 -->
		<popup mask width="320" height="400" maskValue="1" bg="#4C4C4C" ref="popup">
			<view style="width: 320rpx;height: 400rpx;" class="flex ">
				<view class=" flex-1 flex-center" v-for="item in menus" @click="clickMenu(item)" :key="item.text">
					<text class="font-md text-white">{{ item.text }}</text>
				</view>
			</view>
		</popup>
	</view>
</template>

<script>
import iconButton from './icon-button.vue';
import popup from './popup.vue';
export default {
	components: {
		popup,
		iconButton
	},
	props: {
		title: String,
		number: Number,
		hasRight: {
			type: Boolean,
			default: true
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

		clickMenu(item) {
			console.log(11234);

			uni.navigateTo({
				url:"/pages/compage/addFriend/addFriend"
			})
		}
	}
};
</script>

<style scoped>
.sticky {
	position: sticky;
}
</style>
