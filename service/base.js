let baseUrl = "http://39.97.111.250:8181";

export default {
	baseUrl,
	getHeader(){
		const value = uni.getStorageSync('userInfo');
	    return {
			userToken:value.token
		};
		
	},
	async post(url ,param) {
		const [err, res] = await uni.request({
			url: `${baseUrl}${url}`,
			method: "POST",
			header:this.getHeader(),
			data: param
		});
		return res.data;
	},
	async get(url ,param) {
		const [err, res] = await uni.request({
			url: `${baseUrl}${url}`,
			method: "GET",
			header:this.getHeader(),
			data: param
		});
		return res.data;
	}
}

