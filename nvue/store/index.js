import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
	state: {
		token: "",
		login: false,
		userInfo: {}
	},
	mutations: {
		INIT(state) {
			uni.getStorage({
				key: 'userInfo',
				success: (res) => {
					state.login = true
					state.token = res.userInfo.token
					state.userInfo = res.userInfo
				},
			});
		},
		LOGIN(state, provider) {
			if (provider) {
				state.login = true
				state.token = provider.token || ''
				state.userInfo = provider || {}
				uni.setStorage({
					key: "userInfo",
					data: provider
				})
			}
		},
		LOGOUT(state) {
			state.login = false
			state.token = ""
			state.userInfo = {}
			uni.removeStorage({
				key: "userInfo",
			})
		}
	},
	actions: {}
})
export default store
