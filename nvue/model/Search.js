import {
	Http
} from "../utils/http.js";

class Search {
	// 搜索用户
	static searchUser(keyword) {
		return Http.request({
			url: `/search/user`,
			data: {
				keyword
			}
		})
	}

}

export {
	Search
};
