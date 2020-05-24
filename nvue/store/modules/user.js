export default {
	state: {
		user: null,
		token: ""
	},
	mutations: {
		// 存储token
		SET_TOKEN: (state, token) => {
			state.token = token || ''
		},
		SET_USER: (state, user) => {
			state.user = user || null
		}
	},
	actions: {
		INITLOGIN: ({
			commit
		}) => {
			// 初始化登录信息
			const token = uni.getStorageSync("token")
			const user = uni.getStorageSync("user")
			if (token) {
				commit('SET_TOKEN', token)
				commit('SET_USER', user)

				// 连接socket
				let socket = uni.connectSocket({
					url: "ws://192.168.1.100:4000/ws",
					complete: e => {
						console.log(e, "complete")
					}
				})

				// 监听连接成功
				socket.onOpen(() => {
					console.log('已连接')
				})
				// 监听接收信息
				socket.onMessage((msg) => {
					console.log(msg, "msg")
				})
				// 监听断开
				socket.onClose(() => {
					console.log('已断开')
				}),
				// 监听错误
				socket.onError((err) => {
					console.log(err, "err")
				})

				// 获取离线信息
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
		},
		LOGOUT: ({
			commit
		}) => {
			commit('SET_TOKEN', "")
			commit('SET_USER', "")

			// 存储到本地
			uni.removeStorageSync("token")
			uni.removeStorageSync("user")
		},
	}
}
