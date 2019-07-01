<template>
	<view class="user-manage">
		<view class="top">
			<uni-collapse :accordion="true">
				<uni-collapse-item title="员工信息">
					<view class="list uni-list">
						<label v-for="item in  users" :key="item.key" class="uni-list-cell uni-list-cell-pd">
							<view class="title">{{item.name}}</view>
							<view class="text">{{userInfo[item.key]}}</view>
						</label>
					</view>
					<button class="edit-password" @click="editPassword" type="default">修改密码</button>
				</uni-collapse-item>
				<uni-collapse-item title="公司信息">
					<view class="list uni-list">
						<label v-for="item in  deps" :key="item.key" class="uni-list-cell uni-list-cell-pd">
							<view class="title">{{item.name}}</view>
							<view class="text">{{depInfo[item.key]}}</view>
						</label>
					</view>
				</uni-collapse-item>
			</uni-collapse>
		</view>

		<button @click="exit" class="button" type="warn">退出登录</button>
	</view>
</template>

<script>
	import uniCollapse from '@/components/uni-collapse/uni-collapse.vue'
	import uniCollapseItem from '@/components/uni-collapse-item/uni-collapse-item.vue'
	export default {
		components: {
			uniCollapse,
			uniCollapseItem
		},
		data() {
			return {
				userInfo: {},
				depInfo: {},
				users: [{
					key: 'userName',
					name: '账号名称'
				}, {
					key: 'fullName',
					name: '用户名称'
				}, {
					key: 'phone',
					name: '手机号'
				}, {
					key: 'email',
					name: '邮箱'
				}],
				deps: [{
					key: 'orgName',
					name: '公司名称'
				}, {
					key: 'phone',
					name: '公司电话'
				}, {
					key: 'site',
					name: '公司地址'
				}, {
					key: 'orgDescribe',
					name: '描述'
				}]
			}
		},
		methods: {
			editPassword() {
				uni.navigateTo({
					url: '/pages/user/editPassword/index'
				});
			},
			exit() {
				uni.setStorageSync('userInfo', {
					password: '',
					userName: '',
				    keep: false
				})
				uni.navigateTo({
					url: '/pages/login/index'
				});
			}
		},
		onLoad() {
			const value = uni.getStorageSync('userInfo');
			this.userInfo = value.user;
			this.depInfo = value.depInfo;
		}
	}
</script>

<style lang="scss">
	page {
		height: 100%;
	}
	.user-manage {
		.uni-list {
			margin-bottom: 60upx;

			.title {
				margin-left: 40upx;
			}

			.text {
				color: $uni-text-color-grey;
			}
		}

		.top {
			height: 900upx;
		}

		.button {
			margin: 0 40upx;
		}
		.edit-password{
			margin: 40upx 40upx;
		}
	}
</style>
