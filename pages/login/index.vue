<template>
	<view class="login">
		<view class="title">欢迎使用固安云平台</view>
		<view class="user">
			<view class="uni-form-item uni-column">
				<input class="uni-input" v-model="userName" type="text" placeholder="请输入登录账号" />
				<view class="meg-border"></view>
			</view>
			<view class="uni-form-item uni-column">
				<input class="uni-input" password v-model="password" type="text" placeholder="请输入登录密码" />
				<view class="meg-border"></view>
			</view>
			<label class="uni-list-cell-re uni-list-cell-pd">
				<checkbox-group @change="changeKeep">
					<label>
						<checkbox ref="checkbox" value="1" :checked="keep" />记住密码
					</label>
				</checkbox-group>
			</label>
			<button class="button" type="primary" @click="login">登录</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				userName: '',
				password: '',
				keep: false
			};
		},
		onReady() {
			let scope = this;
			uni.getStorage({
				key: 'userInfo',
				success: function(res) {
					let data = res.data;
					scope.userName = data.userName;
					scope.password = data.password;
					scope.keep = data.keep;
					console.log(res);
				}
			});
			uni.showModal({
				content: "测试蓝牙",
				showCancel: true
			});
			uni.showModal({
				content: plus,
				showCancel: true
			});
			uni.showModal({
				content: plus.bluetooth,
				showCancel: true
			});
			plus.bluetooth.getBluetoothAdapterState({
				success:function(e){
					uni.showModal({
						content: 'state success: '+JSON.stringify(e),
						showCancel: true
					});
				},
				fail:function(e){
					uni.showModal({
						content: 'state error: '+JSON.stringify(e),
						showCancel: true
					});
				}
			});
			plus.bluetooth.openBluetoothAdapter({
					success:function(e){
						console.log('open success: '+JSON.stringify(e));
						plus.bluetooth.startBluetoothDevicesDiscovery({
							success:function(e){
								console.log('start discovery success: '+JSON.stringify(e));
								uni.showModal({
									content: 'start discovery success: '+JSON.stringify(e),
									showCancel: true
								});
							},
							fail:function(e){
								console.log('start discovery failed: '+JSON.stringify(e));
								uni.showModal({
									content: 'start discovery failed: '+JSON.stringify(e),
									showCancel: true
								});
							}
						});
					},
					fail:function(e){
						console.log('open failed: '+JSON.stringify(e));
					}
				});
				setTimeout(function(){
					uni.showModal({
						content:'定时器20s',
						showCancel: true
					});
					plus.bluetooth.getBluetoothDevices({
						success:function(e){
							var devices = e.devices;
							uni.showModal({
								content: '获取成功',
								showCancel: true
							});
							uni.showModal({
								content: JSON.stringify(e.devices),
								showCancel: true
							});
						},
						fail:function(e){
							uni.showModal({
								content: 'get devices failed: '+JSON.stringify(e),
								showCancel: true
							});
						}
					});
					
						plus.bluetooth.createBLEConnection({
							deviceId:'8E66A0F4-4005-4EFB-37F2-5C3FB0793E0F',
							success:function(e){
								
								var value = new ArrayBuffer(8);
								var iv = new Int32Array(value);
								iv[0] = 120, iv[2]=100;
								// 写入低功耗蓝牙设备的特征值
								function writeCharacteristics(){
									plus.bluetooth.writeBLECharacteristicValue({
										deviceId:deviceId,
										serviceId:serviceId,
										characteristicId:characteristicId,
										value:value,
										success:function(e){
											uni.showModal({
												content: 'write characteristics success: '+JSON.stringify(e),
												showCancel: true
											});
										},
										fail:function(e){
											uni.showModal({
												content: 'write characteristics failed: '+JSON.stringify(e),
												showCancel: true
											});
										}
									});
								}
								writeCharacteristics();
								
								uni.showModal({
									content: '连接成功',
									showCancel: true
								});
							},
							fail:function(e){
								uni.showModal({
									content: 'create connection failed: '+JSON.stringify(e),
									showCancel: true
								});
							}
						});
						

						
						
				},20000)
				
				plus.bluetooth.getBluetoothDevices({
					success:function(e){
						var devices = e.devices;
						uni.showModal({
							content: '获取成功',
							showCancel: true
						});
						uni.showModal({
							content: JSON.stringify(e.devices),
							showCancel: true
						});
					},
					fail:function(e){
						uni.showModal({
							content: 'get devices failed: '+JSON.stringify(e),
							showCancel: true
						});
					}
				});
				
		},
		methods: {
			changeKeep(value) {
				this.keep = value.detail.value.length > 0;
			},
			login() {
				console.log(this.keep)

				if (this.userName === '') {
					uni.showModal({
						content: '请输入登录账号',
						showCancel: false
					});
					return;
				}
				if (this.password === '') {
					uni.showModal({
						content: '请输入登录密码',
						showCancel: false
					});
					return;
				}
				let scope = this;
				this.$service.login.login({
					"password": this.password,
					"userName": this.userName
				}).then(data => {

					if (data.code === 0) {
						scope.setUserInfo(data.msg);

					} else {
						scope.keep = false;
						uni.showModal({
							content: "账号或密码错误",
							showCancel: false
						});
					}

				})
			},
			setUserInfo(token) {
				let scope = this;
				uni.setStorageSync('userInfo', {
					token: token
				})
				this.$service.myuser.findUserByToken({
					token
				}).then(data => {
					this.$service.myuser.findDepartmentByOrgId({
						orgId: data.msg.user.orgId
					}).then(depInfo => {
						let keepValue = {};
						uni.setStorageSync('userInfo', {
							user: data.msg.user,
							token: token,
							depInfo: depInfo.msg.department,
							keep: scope.keep,
							password: scope.password,
							userName: scope.userName
						})
						uni.switchTab({
							url: '/pages/index/index'
						});
					})

				})
			}
		}

	}
</script>

<style lang="scss">
	.login {
		border-top: 1upx solid #A6ABBF;

		.title {
			margin: 200upx 0upx;
			font-size: 36upx;
			color: $uni-color-title;
			text-align: center;
		}

		.user {
			margin: 0 50upx;



			.uni-input {
				input {
					height: 30px !important;
					line-height: 30px !important;
				}

				padding: 7px 20px;

			}

			.button {
				margin: 0upx 12upx;
				margin-top: 140upx;

			}

			.uni-list-cell-re {
				width: 200upx;
				position: relative;
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				align-items: center;
			}
		}
	}
</style>
