import Vue from 'vue'
import Vuex from 'vuex'
import {
	getStorage
} from "../utils/util.js"

Vue.use(Vuex)

// import userModule from '@/store/modules/userModule.js';
const state = {
	user: {},
	token: "",
	chat: null,
}

const mutations = {
	// 存储token
	SET_TOKEN: (state, token) => {
		state.token = token || ''
	},
	SET_USER: (state, user) => {
		state.user = user || {}
	},
	SET_CHAT: (state, chat) => {
		state.chat = chat || null
	}
}
const actions = {
	// app init 
	async init({
		commit
	}, data) {
		const user = await getStorage('user')
		const token = await getStorage('token')
		commit('SET_TOKEN', token)
		commit('SET_USER', user)
	},
	
	
	login: ({
		commit
	}, user) => {
		commit('SET_TOKEN', user.token)
		commit('SET_USER', user)

		// 存储到本地
		uni.setStorage({
			key: "user",
			data: user
		})
		uni.setStorage({
			key: "token",
			data: user.token
		})

		// 连接socket
		// let chat = new Chat({
		// 	user,
		// 	url: config.wsUrl
		// })
		// commit('SET_CHAT', chat)
	},
	logout: ({
		commit,
		state
	}) => {
		console.log("lout")
		commit('SET_TOKEN', "")
		commit('SET_USER', "")

		// 清除缓存
		uni.removeStorageSync('token')
		uni.removeStorageSync('user')
		uni.navigateTo({
			url: '/pages/login/login'
		})
		// 关闭socket连接
		// state.chat.close()
	},
}



const store = new Vuex.Store({
	strict: true, //开启严格模式后，只能通过mutation来改变状态（不支持异步）否则会报错
	state,
	mutations,
	actions
})


export default store
