import {
	Http
} from "../utils/http.js";

class Friend {
	// 申请添加好友
	static applyFriend(params) {
		console.log(params.lookme, params.lookhim, "params")
		return Http.request({
			url: `/friend/apply`,
			data: {
				apply_value: params.apply_value,
				nickname: params.nickname,
				user_id: params.user_id,
				friend_id: params.friend_id,
				lookme: params.lookme,
				lookhim: params.lookhim,
			},
		})
	}

	// 检测是否好友
	static checkIsFriend(userId, friendId) {
		return Http.request({
			url: `/friend/check?userId=${userId}&friendId=${friendId}`,
			method: "GET",
		})
	}

	// 获取申请列表
	static getApplyList(userId) {
		return Http.request({
			url: `/apply/list?friend_id=${userId}`,
			method: "GET",
		})
	}

	// 同意好友申请
	static applyAgree(id) {
		return Http.request({
			url: `/apply/agree`,
			data: {
				_id: id
			}
		})
	}

	// 获取好友列表
	static getFriendList(_id) {
		return Http.request({
			url: `/friend/list?user_id=${_id}`,
			method: "GET"
		})
	}

}

export {
	Friend
};
