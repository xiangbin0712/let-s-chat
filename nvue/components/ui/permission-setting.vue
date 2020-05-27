<template>
	<view class="">
		<!-- 权限 -->
		<view class="chunk mt-4 mx-5">
			<text class="title font-30 text-sec-color">设置朋友圈权限</text>
			<view class="box round-md mt-1 bg-color-1 pl-2  pr-2">
				<radio-group @change="radioChange">
					<label class="flex-row  align-center justify-between item" v-for="(item, index) in items" :key="item.value">
						<text class="font-35">{{ item.name }}</text>
						<view><radio :value="item.value" color="#00AD19" :checked="index === current" /></view>
					</label>
				</radio-group>
			</view>
		</view>

		<view class="chunk mt-4 mx-5" v-if="!current">
			<text class="title font-30 text-sec-color">朋友圈和视频动态</text>
			<view class="box round-md mt-1 bg-color-1 pl-2  pr-2">
				<view class="item flex-row align-center justify-between border-bottom" v-for="(item, i) in switchs" :key="i">
					<text class="font-35">{{ item.text }}</text>
					<switch :checked="item.checked" @change="switchChange(i)" />
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			show: true,
			items: [
				{
					value: '0',
					name: '聊天,朋友圈,微信运动等'
				},
				{
					value: '1',
					name: '仅聊天'
				}
			],
			current: 0, // 0 是放开权限选择 1是仅聊天
			switchs: [{ text: '不让他看我', checked: false }, { text: '不看他', checked: false }]
		};
	},

	methods: {
		switchChange(e) {
			this.switchs[e].checked = !this.switchs[e].checked;
			this.emit();
		},

		radioChange(e) {
			const value = e.detail.value;
			this.current = value / 1;
			this.emit();
		},

		// 数据上传
		emit() {
			let lookme = this.switchs[0].checked;
			let lookhim = this.switchs[1].checked;
			// 如果是仅聊天 将switch都设置为false
			if (this.current) {
				lookme = false;
				lookhim = false;
			}
			this.$emit('permission', {
				lookme,
				lookhim
			});
		}
	}
};
</script>

<style scoped>
.item {
	height: 90rpx;
}
</style>
