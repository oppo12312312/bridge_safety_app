export default {
	async login(param) {
		const [err, res] = await uni.request({
			url: "http://39.97.111.250:8181/login/login",
			method: "POST",
			data: param
		});
		return res;
	}
}
