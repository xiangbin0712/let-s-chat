import {
	Http
} from "../utils/http.js";

class Friend {
	// 申请添加好友
	static applyFriend(params) {
		console.log(params)
		return Http.request({
			url: `/friend/apply`,
			data: {
				apply_value: params.applyValue,
				nickname: params.nickname,
				user_id: params.userId,
				friend_id: params.friendId
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

}

export {
	Friend
};
