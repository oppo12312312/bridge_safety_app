<template>
	<view>
		<view class="page-body">
			<view class="page-section page-section-gap">
				<map style="width: 100%; height: 300px;" :latitude="latitude" :longitude="longitude" :markers="covers">
				</map>
			</view>
		</view>
		<view class="db location">
			<image class="img" src="../../static/home/location.png" mode=""></image>
			<view class="name fx1">
				{{locationName}}
			</view>
			<view class="reset">
				重新定位
			</view>
		</view>

		<view class="upload">
			<view class="title">
				上传图片：
			</view>
			<view class="demo">
				<block v-if="imageSrc">
					<image :src="imageSrc" class="image-up" mode="widthFix"></image>
				</block>
				<block v-else>
					<view class="img-b" @click="chooseImage">
						<image class="image" src="../../static/jia.png" mode=""></image>
					</view>
				</block>
			</view>
		</view>

		<view class="text">
			<view class="title">
				备注说明：
			</view>
			<view class="uni-textarea">
				<textarea v-model="text" placeholder="请输入备注" />
				</view>
			
		</view>
		<button type="primary" @click="enter">确认打卡</button>

		

	</view>
</template>

<script>
	import util from '../../common/util.js'
	export default {
		data() {
			return {
				imageSrc: "",
				text: '',
				url:'',
				locationName: '当前位置',
				title: 'map',
				latitude: 39.909,
				longitude: 116.39742,
				covers: [{
					latitude: 39.909,
					longitude: 116.39742,
					iconPath: '../../static/home/location.png'
				}]
			}
		},
		onLoad() {
			this.covers[0].latitude =  38.909;
			this.latitude =  38.909;
			this.getLocation()
		},
		computed:{
			userId(){
				const userInfo = uni.getStorageSync('userInfo');
				return userInfo.user.userId;
			},
			scheduleDate(){
				return util.dateUtils.formatNow();
			},
			scheduleStatic(){
				var date = new Date();
				return date.getHours() < 12 ? 1 : 2;
			}
		},
		methods: {
			enter(){
				this.$service.schedule.addSchedule({
					"latitude": this.latitude,
					"longitude": this.longitude,
					"scheduleDate": this.scheduleDate,
					"scheduleExplain":this.text,
					"scheduleId": "null",
					"scheduleStatic": this.scheduleStatic,
					"url": this.url,
					"userId": this.userId
				}).then(data => {
					uni.showModal({
						content: '打卡成功',
						showCancel: false
					});
				})
			},
			getLocation() {
				uni.getLocation({
					// type: 'gcj02',
					success: function(res) {
						this.longitude = res.longitude;
						this.latitude = res.latitude;
						this.locationName = res.district + " " + res.street
					}
				});
			},
			chooseImage: function() {
				uni.chooseImage({
					count: 1,
					sizeType: ['compressed'],
					sourceType: ['album'],
					success: (res) => {
						console.log('chooseImage success, temp path is', res.tempFilePaths[0])
						var imageSrc = res.tempFilePaths[0];
						this.imageSrc = imageSrc;
						this.$service.schedule.ftpfileUpload({
							imageSrc
						}).then(data => {
							uni.hideLoading();
							this.url = data.data;
						})
					},
					fail: (err) => {
						console.log('chooseImage fail', err)
					}
				})
			}
		}
	}
</script>

<style lang="scss">
	page {
		min-height: 100%;
		padding: 20upx;
	}

	.location {
		margin: 20upx 0;

		.img {
			margin-top: 0upx;
			width: 50upx;
			height: 50upx;
		}

		.name {
			margin-left: 4upx;
		}

		.reset {
			color: #007AFF;
		}

	}

	.upload {
		.title{
			margin-bottom: 20upx;
		}
		.image {
			width: 60upx;
			height: 60upx;
		}
		.image-up{
			width: 220upx;
			height: 220upx;
		}

		.demo {
			border: 1px dashed #c0ccda;
            border-radius: 6px;
			background: #FFF;
			width: 220upx;
		}
		.img-b{
			padding: 80upx;
		}
	}
	.text{
		.title{
			margin-top: 40upx;
		}
	}
</style>
