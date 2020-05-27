<template>
	<view class="" v-if="show">
		<view class="mask" v-if="mask" :style="getMaskStyle" @click="clickMask"></view>
		<!-- 弹出框内容 -->
		<view ref="content" class="content round-md" :style="getBodyStyle"><slot></slot></view>
	</view>
</template>

<script>
// #ifdef APP-PLUS-NVUE
const animation = weex.requireModule('animation');
// #endif

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
			default: 240
		},
		// 动画方向
		transformOrigin: {
			type: String,
			default: 'left top'
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
			this.$nextTick(() => {
				this.animation();
			});
			this.show = true;
		},
		close() {
			// 动画
			this.animation('hide');
			this.show = false;
		},
		clickMask() {
			if (this.maskClick) return;
			this.close();
		},

		//动画
		animation(type) {
			let value;
			type == 'hide' ? (value = 0) : (value = 1);
			animation.transition(
				this.$refs.content,
				{
					styles: {
						transform: `scale(${value}, ${value})`,
						transformOrigin: this.transformOrigin,
						opacity: value
					},
					duration: 100, //ms
					timingFunction: 'ease'
				},
				() => {
					if (type == 'hide') {
						this.show = false;
					}
				}
			);
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

	/* 添加动效 */
	transform: scale(0, 0);
	opacity: 0;
}
</style>
