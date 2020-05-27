import {
	Http
} from "../utils/http.js";
// 聊天类
class Chat {
	socket = null
	isOnline = false //是否在线
	chatObj = null // 聊天对象
	constructor(arg) {
		this.url = arg.url //ws地址
		// this.user = uni.getStorageSync("user") || {}
		// this.token = uni.getStorageSync("token") || ""
		this.user = arg.user
		this.token = arg.user.token

		this._init()
	}



	_init() {
		console.log(this.user, 111111111111)
		if (this.token) {
			this.socket = uni.connectSocket({
				// 这里应该传入token 后端进行验证
				url: `${this.url}?userId=${this.user._id}`,
				complete: e => {
					console.log(e, "complete")
				}
			})

			// 监听连接成功
			this.socket.onOpen(() => this.onOpen())
			this.socket.send(() => this.onOpen())
			// 监听接收信息
			this.socket.onMessage((res) => this.onMessage(res))
			// 监听断开
			this.socket.onClose(() => this.onClose())
			// 监听错误
			this.socket.onError(() => this.onError())
		}
	}

	// 监听打开
	onOpen() {
		console.log('socket连接成功')
		this.isOnline = true // 用户上线
	}

	// 监听关闭
	onClose() {
		console.log('socket连接关闭')
		this.isOnline = false // 用户下线
		this.socket = null
	}

	// 监听连接错误
	onError() {
		console.log('socket连接错误')
		this.isOnline = false // 用户下线
		this.socket = null
	}
	// 监听接收消息
	onMessage(msg) {
		console.log(msg, "msg11111")
	}

	// 关闭连接
	close() {
		this.socket.close()
	}

	// 创建聊天对象
	createChatObj(obj) {
		console.log("createChatObj")
		this.chatObj = obj
	}

	// 销毁聊天对象
	destroyObj() {
		console.log("destroyObj")
		this.chatObj = null
	}

	// 发送消息
	send(user_id,
		to_id,
		chat_type,
		type,
		data) {
		return Http.request({
			url: `/chat/send`,
			data: {
				user_id,
				to_id,
				chat_type,
				type,
				data
			}
		})
	}

}


export {
	Chat
}
