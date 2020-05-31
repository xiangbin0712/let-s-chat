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
		<cPopup ref="popup" transformOrigin="right top" :width="270" :height="height">
			<view class="popup-content flex-1 round-md">
				<view @click="clickMenu(item)" class="popup-list-item pl-3 align-center  flex-1 flex-row" v-for="(item, i) in menus" :key="i">
					<text class="text-white iconfont mr-2 font-30">{{ item.icon }}</text>
					<text class="text-white font-30">{{ item.text }}</text>
				</view>
			</view>
		</cPopup>
	</view>
</template>

<script>
import iconButton from '@/components/ui/icon-button.vue';
import cPopup from './cPopup.vue';
export default {
	components: {
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
	computed: {
		height() {
			return this.menus.length * 100;
		}
	},

	data() {
		return {
			statusBarHeight: 0,
			menus: [
				{
					text: '发起群聊',
					icon: '\ue701',
					event: 'groupChat'
				},
				{
					text: '添加朋友',
					icon: '\ue701',
					event: 'addFriend',
					path: '/pages/friend/addFriend/addFriend'
				},
				{
					text: '扫一到',
					icon: '\ue701',
					event: 'qrCode'
				},
				{
					text: '帮助与反馈',
					icon: '\ue701',
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
	methods: {
		add() {
			let x = uni.upx2px(465);
			let y = uni.upx2px(170);
			this.$refs.popup.open(x, y);
		},

		search() {
			console.log('search');
		},

		clickMenu(item) {
			// console.log(item, 123);
			uni.navigateTo({
				url: item.path
			});
		},
		close() {
			this.$refs.popup.close();
		}
	}
};
</script>

<style scoped>
.sticky {
	position: sticky;
}

.popup-content {
	background-color: #4c4c4c;
}
</style>
