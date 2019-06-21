<template>
	<view class="edit-password">
		<view class="uni-form-item uni-column">
			<input class="uni-input" v-model="oldPassword" type="password" placeholder="请输入当前密码" />
			<view class="meg-border"></view>
		</view>
		<view class="uni-form-item uni-column">
			<input class="uni-input" v-model="newPassword" type="password" placeholder="请输入新密码" />
			<view class="meg-border"></view>
		</view>
		<view class="uni-form-item uni-column">
			<input class="uni-input" v-model="newPasswordAgain" type="password" placeholder="请再次确认密码" />
			<view class="meg-border"></view>
		</view>
		<button @click="enter" class="button" type="primary">确认修改</button>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				oldPassword: '',
				newPassword: '',
				newPasswordAgain: ''
			}
		},
		methods: {
			enter() {
				if (this.oldPassword === '') {
					uni.showModal({
						content: '请输入当前密码',
						showCancel: false
					});
					return;
				}
				if (this.newPassword === '') {
					uni.showModal({
						content: '请输入新密码',
						showCancel: false
					});
					return;
				}
				if (this.newPasswordAgain === '') {
					uni.showModal({
						content: '请再次确认密码',
						showCancel: false
					});
					return;
				}
				if (this.newPasswordAgain !== this.newPassword) {
					uni.showModal({
						content: '两次输入的密码不一致',
						showCancel: false
					});
					return;
				}
				let user = uni.getStorageSync('userInfo');
				if (user.password !== this.oldPassword) {
					uni.showModal({
						content: '当前密码错误',
						showCancel: false
					});
					return;
				}
				if (this.oldPassword === this.newPassword) {
					uni.showModal({
						content: '当前密码和新密码相同',
						showCancel: false
					});
					return;
				}
				this.$service.myuser.alterPassword({
					"formerPassword": this.oldPassword,
					"password": this.newPassword,
					"userName": user.userName
				}).then(data => {
					uni.setStorageSync('userInfo', {
						password: '',
						userName: '',
						keep: false
					})
					uni.navigateTo({
						url: '/pages/login/index'
					});
				})
			}
		}
	}
</script>

<style lang="scss">
	.edit-password {

		margin: 20upx;
		margin-top: 100upx;

		.button {
			margin-top: 100upx;
		}
	}
</style>
