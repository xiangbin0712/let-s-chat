const promisic = function(func) {
	return function(params = {}) {
		return new Promise((resolve, reject) => {
			const args = Object.assign(params, {
				success: (res) => {
					resolve(res);
				},
				fail: (error) => {
					reject(error);
				}
			});
			func(args);
		});
	};
}

// showToast
const _toast = function(title, position, icon) {
	uni.showToast({
		title: title,
		icon: icon || "none",
		position: position || "top"
	})
}


const getStorage = (key) => {
	return new Promise((resolve, reject) => {
		uni.getStorage({
			key: key,
			success: res => {
				resolve(res.data)
			},
			fail: (error) => {
				reject(error)
			}
		})
	})
}

export {
	_toast,
	getStorage
};
