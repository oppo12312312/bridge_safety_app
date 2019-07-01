<template>
	<view>
		<view class="page-body">
			<view class="page-section page-section-gap">
				<map id="map" ref="map" :show-location="true" style="width: 100%; height: 300px;" :markers="covers" :latitude="latitude" :longitude="longitude">
				</map>
			</view>
			<view class="db location">
				<image class="img" src="../../static/home/location.png" mode=""></image>
				<view class="name fx1">
					{{locationName}}
				</view>
				<view class="reset" @click="getLocation">
					重新定位
				</view>
			</view>

			<view class="upload">
				<view class="title">
					上传图片：
				</view>
				<view class="demo">
					<block v-if="imageSrc">
						<image :src="imageSrc" @click="chooseImage" class="image-up" mode="widthFix"></image>
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
		<button type="primary" class="bu" @click="enter">确认打卡</button>

		</view>

		

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
				latitude: 30.52,
				longitude: 114.31,
			}
		},
		onLoad() {
			// this.covers[0].latitude =  38.909;
			// this.latitude =  38.909;
			this.getLocation();
			debugger
			
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
			},
			covers(){
				return [{
					latitude: this.latitude,
					longitude: this.longitude,
					iconPath: '../../static/home/location.png'
				}]
			}
		},
		methods: {
			enter(){
				if(this.url === ""){
					uni.showModal({
						content: '请上传图片',
						showCancel: false
					});
					return;
				}
				uni.showLoading({
					title: '加载中'
				});
	
				this.$service.schedule.addSchedule({
					"latitude": this.latitude,
					"longitude": this.longitude,
					"scheduleDate": null,
					"scheduleExplain":this.text,
					"scheduleId": null,
					"scheduleStatic": this.scheduleStatic,
					"url": this.url,
					"userId": this.userId
				}).then(data => {
					uni.hideLoading();
					if(data.statusCode === 200){
						uni.showModal({
						content: '打卡成功',
						showCancel: false
					});
					}else{
						uni.showModal({
							content: data.msg,
							showCancel: false
						});
					}
					
				})
			},
			getLocation() {
				let scope = this;
				uni.showLoading({
					title: '加载中'
				});
				uni.getLocation({
					type: 'gcj02',
					geocode: true,
					success: function(res) {
						uni.hideLoading();
						let map = uni.createMapContext("map",scope.$refs.map)
						map.moveToLocation()
						scope.longitude = res.longitude+0.00001;
						scope.latitude = res.latitude;
						scope.locationName = res.address.city +" "+res.address.district + " " + res.address.street
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
							if(data.statusCode === 200){
								this.url = data.data;
							}else{
								uni.showModal({
									content: '上传失败',
									showCancel: false
								});
							}
							
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
		background-color: #F4F5F6;
	}
	.page-body{
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
			margin-bottom: 20upx;
		}

	}
			.bu{
			margin-top: 40upx;
		}
		
</style>
