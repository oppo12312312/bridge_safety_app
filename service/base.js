let baseUrl = "http://39.97.111.250:8181";
const code = '登录失效';
let haveModal = false;
export default {
	baseUrl,
	getHeader() {
		const value = uni.getStorageSync('userInfo');
		return {
			userToken: value.token
		};

	},
	async post(url, param) {
		const [err, res] = await uni.request({
			url: `${baseUrl}${url}`,
			method: "POST",
			header: this.getHeader(),
			data: param
		});
		this.returnLogin(res)
		return res.data;
	},
	async get(url, param) {
		const [err, res] = await uni.request({
			url: `${baseUrl}${url}`,
			method: "GET",
			header: this.getHeader(),
			data: param
		});
		this.returnLogin(res);
		return res.data;
	},
	returnLogin(res) {
		debugger
		let code = res.data.code;
		if (code === 300 || code === 200) {
			debugger
			if (!haveModal) {
				uni.showModal({
					content: res.data.msg,
					showCancel: false,
					success:function(){
						haveModal = false;
						uni.setStorageSync('userInfo', {
							password: '',
							userName: '',
							keep: false
						})
						uni.redirectTo({
							url: '/pages/login/index'
						});
					}
				});
				haveModal = true;
			}


		}

	}
}
