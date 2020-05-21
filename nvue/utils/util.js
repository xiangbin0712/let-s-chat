// showToast
function _toast(title, position, icon) {
	uni.showToast({
		title: title,
		icon: icon || "none",
		position: position || "top"
	})
}


export {
	_toast
};
