import {
	Http
} from "../utils/http.js";

class Search {
	// 搜索用户
	static searchUser(keyword, id = "") {
		return Http.request({
			url: `/search/user`,
			data: {
				keyword,
				id
			}
		})
	}

}

export {
	Search
};
