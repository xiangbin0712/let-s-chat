<script>
import store from '@/store'
export default {
	onLaunch: function() {
		// console.log('App Launch')
		// #ifdef APP-PLUS-NVUE
		// 加载公共图标库
		const domModule = weex.requireModule('dom');
		domModule.addRule('fontFace', {
			fontFamily: 'iconfont',
			src: "url('https://at.alicdn.com/t/font_1365296_2ijcbdrmsg.ttf')"
		});
		// #endif
		let userInfo = uni.getStorageSync('userInfo');
		if (userInfo) {
			// this.LOGIN(userInfo);
			store.commit('LOGIN',userInfo)
		}
	},

	onShow: function() {
		console.log('App Show');
	},
	onHide: function() {
		console.log('App Hide');
	},
	methods: {
	}
};
</script>

<style>
/*每个页面公共css */
@import url('./common/css/base.css');
@import url('./common/css/common.css');
</style>
