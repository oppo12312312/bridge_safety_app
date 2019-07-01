import base from './base.js';
export default {
	async addTerminalrepair(param) {
		return await base.get('/scancode/addTerminalrepair', {
			termCode: param.termCode
		});
	}
}
