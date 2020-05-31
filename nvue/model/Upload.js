import {
	Http
} from "../utils/http.js";

class Upload {
	// 上传图片
	static upLoad() {
		return Http.request({
			url: `/upload`,
			data: {
			}
		})
	}

}

export {
	Upload
};
