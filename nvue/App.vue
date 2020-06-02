<script>
import { mapState, mapMutations, mapActions } from 'vuex';
export default {
	onLaunch: function() {
		// #ifdef APP-PLUS-NVUE
		// 加载公共图标库
		const domModule = weex.requireModule('dom');
		domModule.addRule('fontFace', {
			fontFamily: 'iconfont',
			// src: "url('https://at.alicdn.com/t/font_1365296_2ijcbdrmsg.ttf')",
			src: "url('http://at.alicdn.com/t/font_1630639_7potdwwxdq5.ttf')"
		});
		// #endif

		// 这里可以调用刷新token有效期

		// init
		this.$store.dispatch('init');
	},
	computed: {},
	methods: {},

	onShow: function() {
		console.log('App Show');
	},
	onHide: function() {
		console.log('App Hide');
	}
};
</script>

<style>
/*每个页面公共css */
@import url('./common/css/base.css');
@import url('./common/css/common.css');
</style>
