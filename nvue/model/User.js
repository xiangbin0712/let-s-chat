import {
	Http
} from "../utils/http.js";

class User {
	// 登录
	static login(form) {
		return Http.request({
			url: `/login`,
			data: {
				username: form.username,
				password: form.password,
			}
		})
	}

	// 注册
	static register(form) {
		return Http.request({
			url: `/register`,
			data: {
				username: form.username,
				password: form.password,
				rePassword: form.rePassword
			}
		})
	}

	// updataUser
	static updataUser(user_id,value, type) {
		return Http.request({
			url: `/user/update`,
			data: {
				user_id,
				value,
				type
			}
		})
	}


}

export {
	User
};
