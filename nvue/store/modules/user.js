import {
	Chat
} from "@/model/Chat.js"
import {
	config
} from "@/config/config.js"
export default {
	state: {
		user: null,
		token: "",
		chat: null
	},
	mutations: {
		// 存储token
		SET_TOKEN: (state, token) => {
			state.token = token || ''
		},
		SET_USER: (state, user) => {
			state.user = user || null
		},
		SET_CHAT: (state, chat) => {
			state.chat = chat || null
		}
	},
	actions: {
		INITLOGIN: ({
			commit
		}) => {
			// 初始化登录信息
			const token = uni.getStorageSync("token")
			const user = uni.getStorageSync("user")
			console.log(token,user)
			if (token) {
				commit('SET_TOKEN', token)
				commit('SET_USER', user)

				// 连接socket
				let chat = new Chat({
					user,
					token,
					url: config.wsUrl
				})
				commit('SET_CHAT', chat)
			}
		},
		LOGIN: ({
			commit
		}, user) => {
			commit('SET_TOKEN', user.token)
			commit('SET_USER', user)

			// 存储到本地
			uni.setStorageSync("token", user.token)
			uni.setStorageSync("user", user)

			// 连接socket
			let chat = new Chat({
				user,
				url: config.wsUrl
			})
			commit('SET_CHAT', chat)
		},
		LOGOUT: ({
			commit,
			state
		}) => {
			commit('SET_TOKEN', "")
			commit('SET_USER', "")

			// 清除缓存
			uni.removeStorageSync("token")
			uni.removeStorageSync("user")
			// 关闭socket连接
			state.chat.close()
			commit('SET_CHAT', null)
		},
	}
}
