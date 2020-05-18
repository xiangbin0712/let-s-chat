<template>
	<image :src="src" :style="_style" mode="widthFix"></image>
</template>

<script>
export default {
	props: {
		src: String,
		size: {
			type: [String, Number],
			default: 90
		}
	},
	data() {
		return {};
	},
	computed:{
		_style(){
			return `width:${this.size}rpx;height:${this.size}rpx`
		}
	}
};
</script>

<style></style>
