<template>
	<view class="search">
		<view class="" :style="'height:' + statusBarHeight + 'px'"></view>
		<view class="flex-row align-center mt-2">
			<view class="search-input flex-1 ml-3 align-center bg-white  flex-row round-md">
				<icon class="mx-1" type="search" size="20" />
				<input confirm-type="search" @confirm="search" type="text" value="" v-model="keyword" focus="true" class="input flex-1 text-main-color font-30" />
			</view>
			<text class="cancel font-35 pl-3 pr-3" @click="calcel">取消</text>
		</view>

		<!-- 添加微信好友 -->
		<view class="chunk flex-row bg-white py-2 align-center mt-3" @click="search" v-if="keyword">
			<image src="/static/logo.png" class="search-icon ml-3 mr-4" mode=""></image>
			<view class="flex-row align-center">
				<text class="font-30 text-main-color">搜索:</text>
				<text class="font-30 value">{{ keyword }}</text>
			</view>
		</view>
	</view>
</template>

<script>
import { Search } from '@/model/Search.js';
import { _toast } from '@/utils/util.js';
export default {
	data() {
		return {
			statusBarHeight: 0,
			keyword: '',
		};
	},
	mounted() {
		// #ifdef APP-PLUS-NVUE
		// 获取状态栏高度
		this.statusBarHeight = plus.navigator.getStatusbarHeight();
		// #endif
	},
	methods: {
		calcel() {
			this.$emit('cancel');
			uni.hideKeyboard();
		},

		async search() {
			if (!this.keyword.trim()) return;
			// 搜索用户
			const res = await Search.searchUser(this.keyword);
			uni.hideKeyboard();
			// 如果没有所搜到用户
			if (!res.data) return _toast('您的朋友可能正在火星旅行!!', 'center');
			
			// 搜索到用户 跳转用户详情
			uni.navigateTo({
				url:`/pages/compage/visiting/visiting?id=${res.data._id}`
			})
				
		}
	}
};
</script>

<style scoped>
.search-input {
	height: 60rpx;
}

.cancel {
	color: red;
}

.search-icon {
	height: 90rpx;
	width: 90rpx;
}

.value {
	color: #00ad19;
}
</style>
