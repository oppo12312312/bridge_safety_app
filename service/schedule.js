import base from './base.js';
export default {
	//上传图片
	async ftpfileUpload(param) {
		const [err, res] = await uni.uploadFile({
			url: `${base.baseUrl}/schedule/ftpfileUpload`,
			filePath: param.imageSrc,
			header: base.getHeader(),
			fileType: 'image',
			name: 'file',
		});
		return res;
	},
	//打卡确认
	async addSchedule(param) { 
		return await base.post('/schedule/addSchedule', 
			{
				"latitude": param.latitude,
				"longitude": param.longitude,
				"scheduleDate": param.scheduleDate,
				"scheduleExplain":param.scheduleExplain,
				"scheduleId": "null",
				"scheduleStatic": param.scheduleStatic,
				"url": param.url,
				"userId": param.userId
			}
		);
	}
}
