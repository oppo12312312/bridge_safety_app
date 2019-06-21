import base from './base.js';
export default {
	async login(param) {
		return await base.post('/login/login',param);
	},
	async yangan(param) {
		return await base.post('/cnsmogsensor/cnSmogSensorList',param);
	}
}
