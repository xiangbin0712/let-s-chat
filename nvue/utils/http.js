import {
	config
} from "@/config/config";
import store from '@/store'

const errors = {
	"400001": "数据不合法",
}

class Http {
	static request({
		url,
		data = {},
		method = "POST",
	}) {
		return new Promise((resolve, reject) => {
			// 这里从store中拿到token
			let token = store.state.token||''
			console.log(token,"token")
			uni.request({
				url: `${config.apiBaseUrl}${url}`,
				data,
				method,
				header: {
					"Authorization": token,
					'Content-Type':'application/json;charset=UTF-8',
				},
				success: res => {
					const statusCode = res.statusCode.toString()
					// console.log(res, "http")
					if (statusCode.startsWith('2')) {
						if (res.data.status == 0) {
							return resolve(res.data)
						}
						// uni.showToast({
						// 	title: res.data.msg,
						// 	icon: "none"
						// })

					}else {
						// 错误
						uni.showToast({
							title: res.data.message,
							icon: "none"
						})
					}
				},
				fail: err => {
					reject(err)
					console.log(err, "fail")
					uni.showToast({
						title: "请稍后再试",
						icon: "none"
					})
				}
			})
		})
	}
}

export {
	Http
};
