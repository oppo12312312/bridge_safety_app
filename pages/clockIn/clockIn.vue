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
		

	</view>
</template>

<script>
	export default {
		data() {
			return {
				imageSrc: "",
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
		mounted() {
			this.getLocation()
		},
		methods: {
			getLocation() {
				uni.getLocation({
					// type: 'gcj02',
					success: function(res) {
						debugger
						console.log('当前位置的经度：' + res.longitude);
						console.log('当前位置的纬度：' + res.latitude);
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
						var imageSrc = res.tempFilePaths[0]
						uni.uploadFile({
							url: 'https://unidemo.dcloud.net.cn/upload',
							filePath: imageSrc,
							fileType: 'image',
							name: 'data',
							success: (res) => {
								console.log('uploadImage success, res is:', res)
								uni.showToast({
									title: '上传成功',
									icon: 'success',
									duration: 1000
								})
								this.imageSrc = imageSrc
							},
							fail: (err) => {
								console.log('uploadImage fail', err);
								uni.showModal({
									content: err.errMsg,
									showCancel: false
								});
							}
						});
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
			margin-top: 5upx;
			width: 40upx;
			height: 40upx;
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
</style>
