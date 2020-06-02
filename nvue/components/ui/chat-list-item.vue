<template>
	<view class="chat-info mb-3 mx-3">
		<!-- 时间显示 -->
		<view class="time align-self-centter mt-1 mb-2" v-if="time">
			<text class="font-25 text-three-color">{{ time }}</text>
		</view>
		<!-- mine -->
		<view class="self justify-end flex-row" v-if="data.user_id == 1">
			<!-- 群聊有昵称 -->
			<text class="font-25 text-sec-color text-right" style="margin-bottom: 6rpx;" v-if="type == 'group'">nickname</text>
			<view class="info">
				<text class="font-30 bg-success round-md align-self-end py-2 flex-1 pl-2 pr-2">{{ data.content }}</text>
			</view>
			<image class="avatar ml-2" src="/static/images/friend.png" mode=""></image>
		</view>
		<!-- other -->
		<view class="other flex-row" v-else>
			<image class="avatar mr-2" src="/static/images/friend.png" mode=""></image>
			<!-- 聊天气泡 -->
			<view class="">
				<!-- 群聊有昵称 -->
				<text class="font-25 text-sec-color" style="margin-bottom: 6rpx;" v-if="type == 'group'">nickname</text>
				<view class="info">
					<text class="font-30 bg-white round-md align-self-start py-2 pl-2 pr-2">{{ data.content }}</text>
				</view>
			</view>
		</view>
	</view>
</template>
<script>
import $time from '@/utils/time.js';
export default {
	props: {
		data: Object,
		index: Number, //消息索引
		pretime: [String, Number], // 上一条消息的时间戳
		type: {
			//单聊但是群聊
			type: String,
			default: 'user'
		}
	},
	computed: {
		// 根据上一条消息时间戳判断该消息时间是否显示
		time() {
			return $time.getChatTime(this.data.create_time, this.pretime);
		}
	}
};
</script>

<style scoped>
.avatar {
	height: 80rpx;
	width: 80rpx;
}

.info {
	width: 490rpx;
}
</style>
