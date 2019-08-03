<template>
	<view class="content">
		<view class="menu-content">
			<view class="menu menu-1 uni-flex">
				<view @click="openPage(item)" class="uni-flex-item" v-for="(item, index) in menu1" :key="index">
					<view class="">
						<image class="menu-image" :class="'img-'+index" :src="item.image" mode=""></image>
					</view>
					<text class="text">{{ item.text }}</text>
				</view>
			</view>
			<view class="menu menu-2 uni-flex">
				<view @click="openPage(item)" class="uni-flex-item" v-for="(item, index) in menu2" :key="index">
					<view class="">
						<image class="menu-image" :class="'img-'+index" :src="item.image" mode=""></image>
					</view>
					<text class="text">{{ item.text }}</text>
				</view>
			</view>
		</view>


		<view class="count uni-flex uni-row">
			<view class="uni-flex-item" v-for="(item, index) in counts" :key="index">
				<view class="number">
					<text class="text">{{ item.count }}</text>
				</view>
				<text class="text">{{ item.name }}</text>
			</view>
		</view>
		<view class="info">
			测试
		</view>

	</view>
</template>

<script>
	export default {
		name: "home",
		data() {
			return {
				title: 'Hello',
				counts: [{
					name: '消防报警',
					count: 12
				}, {
					name: '故障报警',
					count: 12
				}, {
					name: '压力液位',
					count: 12
				}, {
					name: '烟感报警',
					count: 12
				}, {
					name: '用电报警',
					count: 12
				}],

				menu1: [{
						image: '../../static/menu/waring.png',
						text: '报警信息'
					},
					{
						image: '../../static/menu/crt.png',
						text: '网络CRT'
					},
					{
						image: '../../static/menu/set.png',
						text: '维保'
					},
					{
						image: '../../static/menu/qian.png',
						text: '增值服务'
					},
					{
						image: '../../static/menu/yangan.png',
						"path": "yangan/detail",
						text: '烟感'
					},

				],
				menu2: [{
						image: '../../static/menu/yali.png',
						text: '压力'
					},
					{
						image: '../../static/menu/yeweitu.png',
						text: '液位'
					},
					{
						image: '../../static/menu/yongdianliang.png',
						text: '智慧用电'
					},
					{
						image: '../../static/menu/xiaofang.png',
						text: '消防设备'
					},
					{
						image: '../../static/menu/all.png',
						text: '全部'
					}
				]
			}
		},
		onLoad() {

		},
		methods: {
			openPage(item) {
				if (item.path) {
					uni.navigateTo({
						url: item.path
					});
				} else {
					uni.showModal({
						content: "模块开发中",
						showCancel: false
					});
				}
			}

		}
	}
</script>

<style lang="scss">
	.content {
		background: #f1f1f1;


		.uni-row {
			height: 80upx;
		}

		.count {
			height: 126upx;
			padding: 20upx 10upx;
			margin-top: 20upx;
			background: #ffffff;
			text-align: center;

			.text {
				font-size: 24upx;

			}

			.number {
				color: red;
				height: 80upx;
				width: 80upx;
				margin: 0 auto;
				background: #e4e4e4;
				border-radius: 10upx;
				margin-bottom: 6upx;

				.text {
					font-size: 28upx;
					line-height: 80upx;
				}

			}
		}

		.info {
			background: #ffffff;
			margin-top: 20upx;
			text-align: center;
		}

		.menu-content {
			padding: 20upx 0;
			background: #ffffff;
		}

		.menu {
			padding: 20upx 10upx;

			text-align: center;

			.uni-flex-item {
				padding: 5px;

				&:active {
					background-color: #e4e4e4;
				}
			}

			.menu-image {
				width: 22px !important;
				padding: 11px !important;
				height: 22px !important;
				border-radius: 22px !important;

			}
		}

		.menu-1 {
			padding-bottom: 0;

			.img-0 {
				background: #f25743
			}

			.img-1 {
				background: #f37e4d
			}

			.img-2 {
				background: #fec067
			}

			.img-3 {
				background: #1eb0c3
			}

			.img-4 {
				background: #8199d2
			}
		}

		.menu-2 {
			.img-0 {
				background: #1eb0c3
			}

			.img-1 {
				background: #6dc18c
			}

			.img-2 {
				background: #a5cb65;
			}

			.img-3 {
				background: #30c29f
			}

			.img-4 {
				background: #7778ac
			}
		}



	}
</style>
