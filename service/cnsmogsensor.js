import base from './base.js';
export default {
	//列表
	async cnSmogSensorList(param) {
		return await base.post('/cnsmogsensor/cnSmogSensorList', {
			"crossSectionId": param.crossSectionId,
			"orgId": param.orgId,
			"projectId": param.projectId,
			"strucunitId": param.strucunitId,
			"termComstatus": param.termComstatus,
		});
	},
	//数量
	async cnSmogSensorNumber(param) {
		return await base.post('/cnsmogsensor/cnSmogSensorNumber', param);
	},
	//详情
	async findCNSmogSensor(param) {
		return await base.post('/cnsmogsensor/findCNSmogSensor', {
			"ids": param.ids,
			"strs": param.strs,
		});
	},

	//项目
	async findProjectSelect(param) {
		return await base.get('/cnsmogsensor/findProjectSelect', {
			orgId: param.orgId
		});
	},
	//结构
	async findStrucunitSelect(param) {
		return await base.get('/cnsmogsensor/findStrucunitSelect', {
			projectId: param.projectId
		});
	},
	//位置
	async findCrosssectionSelect(param) {
		return await base.get('/cnsmogsensor/findCrosssectionSelect', {
			strucunitId: param.strucunitId,
		});
	},
}
