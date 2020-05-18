<template>
	<view class="popup" re v-if="show">
		<!-- mask -->
		<view v-if="mask" class="mask" :style="maskStyle" @click="hide"></view>
		<!-- 弹出框内容 -->
		<!-- bottom -->
		<view v-if="type == 'bottom'" class="content" :style="bottomStyle"><slot></slot></view>
		<!-- free -->
		<view v-if="type == 'free'" class="content animated" :style="freeStyle"><slot></slot></view>
	</view>
</template>

<script>
export default {
	props: {
		// 是否显示
		mask: {
			type: Boolean,
			default: true
		},
		// 点击mask是否关闭
		maskClick: {
			type: Boolean,
			default: true
		},
		// mask颜色
		maskValue: {
			type: [String, Number],
			default: 1
		},
		//位置  bototom / free
		type: {
			type: String,
			default: 'free'
		},
		// 主体内容背景
		bg: {
			type: String,
			default: '#ffffff'
		},
		width: {
			type: [String, Number],
			default: 0
		},
		height: {
			type: [String, Number],
			default: 0
		}
	},

	data() {
		return {
			show: false,
			style: '',
			// x,y 为显示内容弹窗的坐标 为了不超过屏幕 设定maxX和maxY
			x: 0,
			y: 0,
			maxX: 0,
			maxY: 0
		};
	},
	mounted() {
		// 获取系统设置
		try {
			const res = uni.getSystemInfoSync();
			this.maxX = res.windowWidth - uni.upx2px(this.width);
			this.maxY = res.windowHeight - uni.upx2px(this.height);
		} catch (e) {}
	},
	computed: {
		// mask 样式
		maskStyle() {
			if (this.maskValue) return `background-color:rgba(0,0,0,0.${this.maskValue})`;
			return ``;
		},

		bottomStyle() {
			return `bottom:0;left:0;right:0;
					background-color:${this.bg};`;
		},
		freeStyle() {
			return `background-color:${this.bg};
					width:${this.width}rpx;height:${this.height};
					left:${this.x}px;top:${this.y}px;`;
		}
	},
	methods: {
		open(x, y) {
			this.x = x;
			this.y = y;
			this.isOut(x, y);
			this.show = true;
		},
		close() {
			this.show = false;
		},
		// 是否关闭mask
		hide() {
			if (!this.maskClick) return;
			this.close();
		},

		// 判断是否超出边界
		// @ 后续修改
		isOut(x, y) {
			this.x = x > this.maxX ? this.maxX - 20 : x;
			this.y = y > this.maxY ? this.maxY : y;
		}
	}
};
</script>

<style scoped>
.popup {
	z-index: 999;
	overflow: hidden;
}

.mask {
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
}
.content {
	position: fixed;
}
</style>
