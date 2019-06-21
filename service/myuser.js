import base from './base.js';
export default {
	async findUserByToken(param) {
		return await base.get('/myuser/findUserByToken', param);
	},
	async findDepartmentByOrgId(param) {
		return await base.get('/myuser/findDepartmentByOrgId', {
			orgId: param.orgId
		});
	},
	//修改密码
	async alterPassword(param) {
		return await base.post('/myuser/alterPassword', {
			"formerPassword": param.formerPassword,
			"password": param.password,
			"userName": param.userName
		});
	}
}
