<template>
	<view>
		<button @click="upload">upload</button>
		<image class="img temp-border" :src="url" mode=""></image>
		<view class="">url:{{ url }}</view>
		<view class="">text:{{ text }}</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			data: {},
			url: 'http://localhost:4000/uploads/defaultUser',
			text: ''
		};
	},
	methods: {
		upload() {
			uni.chooseImage({
				count: 6, //默认9
				sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
				sourceType: ['album'], //从相册选择
				success: chooseImageRes => {
					const tempFilePaths = chooseImageRes.tempFilePaths;
					const uploadTask = uni.uploadFile({
						url: 'http://192.168.1.100:4000/upload', //仅为示例，非真实的接口地址
						filePath: tempFilePaths[0],
						name: 'file',
						formData: {
							user: 'test'
						},
						success: uploadFileRes => {
							// console.log(uploadFileRes.data);
							let demo = uploadFileRes.data;
							// console.log(JSON.parse(demo));
							let a = JSON.parse(demo);

							this.url = a.url;
							this.text = 123;
						}
					});
					uploadTask.onProgressUpdate(res => {
						console.log('上传进度' + res.progress);
						console.log('已经上传的数据长度' + res.totalBytesSent);
						console.log('预期需要上传的数据总长度' + res.totalBytesExpectedToSend);

						// 测试条件，取消上传任务。
						// if (res.progress > 50) {
						// 	uploadTask.abort();
						// }
					});
				}
			});
		}
	}
};
</script>

<style>
.img {
	height: 400rpx;
	width: 400rpx;
}
</style>
