let baseUrl = "http://39.97.111.250:8181";
const code = '登录失效';
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
		debugger
		return res.data;
	},
	returnLogin(res) {
		if (res.data.msg === code) {
			uni.setStorageSync('userInfo', {
				password: '',
				userName: '',
				keep: false
			})
			uni.navigateTo({
				url: '/pages/login/index'
			});
		}

	}
}
