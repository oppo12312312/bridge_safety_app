<template>
	<view class="content">
		<view class="menu">
			<uni-grid :options="menus" :show-border="false" column-num="5"></uni-grid>
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
			故障信息-测试-1
		</view>



	</view>
</template>

<script>
	import uniGrid from '../../components/uni-grid/uni-grid.vue'
	export default {
		data() {
			return {
				title: 'Hello',
				counts: [{
					name: '故障报警',
					count: 12
				}, {
					name: '故障报警',
					count: 12
				}, {
					name: '故障报警',
					count: 12
				}, {
					name: '故障报警',
					count: 12
				}, {
					name: '故障报警',
					count: 12
				}],
				menus: [{
						image: '../../static/set.png',
						text: '设置'
					},
					{
						image: '../../static/set.png',
						text: '设置'
					},
					{
						image: '../../static/set.png',
						text: '设置'
					},
					{
						image: '../../static/set.png',
						text: '设置'
					},
					{
						image: '../../static/set.png',
						text: '设置'
					},
					{
						image: '../../static/set.png',
						text: '设置'
					},
					{
						image: '../../static/set.png',
						text: '设置'
					},
					{
						image: '../../static/set.png',
						text: '设置'
					}
				]
			}
		},
		components: {
			uniGrid
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style lang="scss">
	.content {
		background: #f1f1f1;
		.menu {
			background: #ffffff;
			padding: 20upx 10upx;
			padding-top: 40upx;
		}

		.uni-row {
			height: 80upx;
		}

		.count {
			height: 120upx;
			padding: 20upx 10upx;
			margin-top: 20upx;
			background: #ffffff;
			text-align: center;

			.text {
				font-size: 20upx;

			}

			.number {
				color: red;
				height: 80upx;
				width: 80upx;
				margin: 0 auto;
				background: #e4e4e4;
				border-radius: 10upx;

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
	}
</style>
