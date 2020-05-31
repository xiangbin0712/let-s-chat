<template>
	<view class="list-itme  flex-row align-center bg-white" @click="onClick" @longpress="longpress">
		<view class="align-center justify-center" :class="iconClass">
			<image v-if="data.img" :style="iconStyle" class="" :src="data.img" mode=""></image>
			<text v-if="data.icon" class="iconfont" style="font-size: 50rpx;">{{ data.icon }}</text>
		</view>
		<view class="rigth border-bottom mr-3 justify-between align-center flex-row py-2 flex-1">
			<view class="right-container flex-1 " :class="chat ? 'justify-between' : 'justify-center'" :style="rightStyle">
				<view class="flex-row justify-between align-center">
					<text class="title text-main-color  text-ellipsis font-35">{{ data.title }}</text>
					<text class="time text-three-color  font-30">{{ data.time }}</text>
				</view>
				<view class="flex-row justify-between align-center" v-if="chat">
					<text class="title font-25 text-three-color flex-1  text-ellipsis">{{ data.info }}</text>
					<text class="font-20 text-three-color" v-if="data.mute">静音</text>
				</view>
			</view>
			<!-- <text class="iconfont">\ue612</text> -->
			<text v-if="more" class="iconfont text-three-color font-30 ">&#xe93d;</text>
			<!-- status -->
			<view class=""><slot></slot></view>
		</view>
	</view>
</template>

<script>
export default {
	props: {
		data: Object,
		more: Boolean, //是否有more 图标
		chat: Boolean, //是否聊天列表
		iconSize: {
			type: [String, Number],
			default: '80'
		},
		iconClass: {
			type: String,
			default: 'mx-3 '
		},
		rightHeight: {
			type: [String, Number],
			default: '110'
		}
	},
	data() {
		return {
			baseImg: '/static/logo.png'
		};
	},
	computed: {
		iconStyle() {
			return `width:${this.iconSize}rpx;height:${this.iconSize}rpx`;
		},
		rightStyle() {
			return `height:${this.iconSize}rpx`;
		}
	},

	methods: {
		onClick() {
			this.$emit('onCLick',this.data);
		},
		// 长按
		longpress(e) {
			const x = e.touches[0].screenX;
			const y = e.touches[0].screenY;
			this.$emit('longpress', { x, y });
		}
	}
};
</script>

<style scoped></style>
