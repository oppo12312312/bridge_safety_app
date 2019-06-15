<template>
	<view class="login">
		<view class="title">欢迎使用固安云平台</view>
		<view class="user">
			<view class="uni-form-item uni-column">
				<input class="uni-input" v-model="userName" type="text" placeholder="请输入登录账号" />
				<view class="border"></view>
			</view>
			<view class="uni-form-item uni-column">
				<input class="uni-input" password v-model="password" type="text" placeholder="请输入登录密码" />
				<view class="border"></view>
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
	import service from "../../service/index.js"

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
					let data= res.data;
					scope.userName = data.userName;
					scope.password = data.password;
					scope.keep = true;
					console.log(res);
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
				service.login({
					"password": this.password,
					"userName": this.userName
				}).then(data => {
					if (data.data.code === 0) {
						console.log(this.keep);
						uni.setStorage({
							key: 'userInfo',
							data: {
								password: scope.password,
								userName: scope.userName
							},
							success: function() {
								console.log('success');
							}
						});
						uni.switchTab({
							url: '/pages/index/index'
						});
					} else {
						scope.keep = false;
						uni.showModal({
							content: "账号或密码错误",
							showCancel: false
						});
					}

				})
			}
		},
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

			.border {
				position: relative;

				&:after {
					position: absolute;
					z-index: 3;
					right: 0;
					bottom: 0;
					left: 12upx;
					right: 12upx;
					height: 1px;
					content: '';
					-webkit-transform: scaleY(0.5);
					-ms-transform: scaleY(0.5);
					transform: scaleY(0.5);
					background-color: #c8c7cc;
				}
			}

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
