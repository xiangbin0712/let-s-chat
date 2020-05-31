<template>
	<view class="flex-row border-bottom ">
		<image v-if="data.avatar" :src="data.avatar" class="avatar ml-3 mr-2" mode=""></image>
		<view class="right mr-3 flex-1">
			<text class="name mb-1 text-blue">{{ data.username }}</text>
			<!-- 文字 -->
			<text class="text-main-color font-35">{{ data.contextx }}</text>
			<!-- 图片 -->
			<view class="pic-box flex-row flex-wrap    mt-2" v-if="data.imgs.length" style="overflow: hidden;">
				<block v-for="(item, i) in data.imgs" :key="i">
					<!-- 单张图片 -->
					<c-image v-if="data.imgs.length === 1" @click="preview(item.src)" :src="item.src"></c-image>
					<!-- 多张图片 -->
					<image v-else class="img" @click="preview(item.src)" :src="item.src"></image>
				</block>
			</view>

			<!-- 视屏 -->
			<view class="video" v-if="data.video"><video style="height: 300rpx; width: 500rpx ;" :src="data.video.src" :poster="data.video.poster"></video></view>

			<!-- time action -->
			<view class="time-action flex-row justify-between my-3">
				<text class="time font-30 text-three-color">{{ data.create_time }}</text>
				<text class="action iconfont  bg-color-1 pl-1  round-sm pr-1" @click="$emit('action', { data, index })">&#xe61d;</text>
			</view>
			<!-- 评论-点赞 -->
			<view class="like-comment bg-color-1 round-sm">
				<view class="like border-bottom pl-1 pr-1 align-center  py-1 flex-row flex-wrap" v-if="data.supports.length">
					<text class="iconfont font-30 text-blue">icon</text>
					<text class="liked-user font-30 text-blue" v-for="(item, i) in data.supports" :key="i">{{ item.username }}</text>
				</view>
				<!-- 评论 -->
				<view class="comment  pl-1 pr-1 py-1 flex-1 flex-row" v-for="(item, i) in data.comments" :key="i">
					<text class="font-30 text-blue ">{{ item.username }}</text>
					<text class="font-30 flex-1 ">{{ item.content }}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
import cImage from './image.vue';
export default {
	components: {
		cImage
	},
	props: {
		data: Object,
		index: {
			type: [String, Number],
			default: 0
		}
	},
	computed: {
		urls() {
			return this.data.imgs.map(item => item.src);
		}
	},

	methods: {
		preview(src) {
			uni.previewImage({
				current: src,
				urls: this.urls,
				indicator: 'default'
			});
		}
	}
};
</script>

<style scoped>
.right {
	width: 500rpx;
}
.avatar {
	height: 80rpx;
	width: 80rpx;
}

.img {
	width: 160rpx;
	height: 160rpx;
	margin-right: 6rpx;
	margin-bottom: 6rpx;
}

.liked-user {
	margin-right: 4rpx;
}
</style>
