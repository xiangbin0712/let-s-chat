<template>
	<view class="" v-if="show">
		<view class="mask" v-if="mask" :style="getMaskStyle" @click="clickMask"></view>
		<!-- 弹出框内容 -->
		<view class="content round-md" :style="getBodyStyle"><slot></slot></view>
	</view>
</template>

<script>
export default {
	props: {
		show: Boolean,
		maskClick: Boolean, // 点击mask是否关闭 默认关闭
		mask: {
			type: Boolean,
			default: true
		},
		maskColor: {
			type: [String, Number],
			default: 0
		},
		height: {
			type: [String, Number],
			default: 300
		},
		width: {
			type: [String, Number],
			default: 200
		}
	},
	data() {
		return {
			x: 0,
			y: 0,
			maxX: 0,
			maxY: 0
		};
	},
	computed: {
		getMaskStyle() {
			return `background-color:rgba(0,0,0,0.${this.maskColor})`;
		},
		getBodyStyle() {
			return `height:${this.height}rpx;width:${this.width}rpx;
					left:${this.x}px;top:${this.y}px`;
		}
	},
	mounted() {
		// 获取系统设置
		try {
			const res = uni.getSystemInfoSync();
			this.maxX = res.windowWidth - uni.upx2px(this.width + 30);
			this.maxY = res.windowHeight - uni.upx2px(this.height + 30);
		} catch (e) {}
	},

	methods: {
		open(x, y) {
			// 查看是否超出边界
			this.checkIsOut(x, y);
			this.show = true;
		},
		close() {
			this.show = false;
		},
		clickMask() {
			if (this.maskClick) return;
			this.close();
		},

		checkIsOut(x, y) {
			console.log(x, this.maxX);
			x > this.maxX ? (this.x = this.maxX) : (this.x = x);
			y > this.maxY ? (this.y = this.maxY) : (this.y = y);
			this.show = true;
		}
	}
};
</script>

<style scoped>
.popup {
	position: fixed;
}
.mask {
	position: fixed;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
}

.content {
	position: fixed;
}
</style>
