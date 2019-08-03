<template>
	<view class="container">
		<view class="top db">
			<text class="left fx1">
				设备总数: {{count}} 台
			</text>
			<view class="fx1 db v">
				<view class="">
					<view class="g-base g1">
					</view>
					<text>正常设备 {{normal}} 台</text>
				</view>
				<view class="">
					<view class="g-base g2">
					</view>
					<text>告警设备 {{warning}} 台</text>
				</view>
				<view class="">
					<view class="g-base g3">
					</view>
					<text>故障设备 {{malfunction}} 台</text>
				</view>
			</view>
		</view>

		<view class="tabs db">
			<text @click="clickTab(index)" v-for="(item,index) in tabs" :key="item" :class="{'active-li':activeTab===index }" class="li">{{item}}</text>
		</view>
		<view class="">
			<mpvue-echarts class="ec-canvas" @onInit="lineInit" canvasId="line" ref="lineChart" />
		</view>

		<view class="info">
			<view class="li">
				<text class="title">传感器编号: </text>
				<text class="ml10">BVG-121</text>
			</view>
			<view class="li">
				<text class="title">传感器版本: </text>
				<text class="ml10">v53</text>
			</view>
			<view class="li">
				<text class="title">参数名称: </text>
				<text class="ml10">电压</text>
			</view>
			<view class="li">
				<text class="title">参数单位: </text>
				<text class="ml10">%</text>
			</view>
			<view class="li">
				<text class="title">预警值: </text>
				<text class="ml10">50</text>
			</view>
			<view class="li">
				<text class="title">告警值: </text>
				<text class="ml10">30</text>
			</view>

		</view>

	</view>
</template>

<script>
	import * as echarts from '@/components/echarts/echarts.min.js';
	import mpvueEcharts from '@/components/mpvue-echarts/src/echarts.vue';

	const cityList = [{
		value: 55,
		name: '北京'
	}, {
		value: 38,
		name: '上海'
	}, {
		value: 20,
		name: '广州'
	}];

	let lineOption = {
		animation: false,
		color: ['#37A2DA', '#9FE6B8'],
		grid: {
			x: 35,
			x2: 10,
			y: 20,
			y2: 25
		},
		calculable: false,
		xAxis: [{
			type: 'category',
			data: []
		}],
		yAxis: [{
			type: 'value',
			splitArea: {
				show: true
			}
		}],
		series: [{
			name: '值',
			type: 'line',
			data: []
		}]
	};
	let pointOpt = {
		xAxis: [{
			type: 'value',
			axisLabel: {
				formatter(value) {
					let re = '';
					value = value;
					switch (value) {
						case 1:
							re = "一"
							break;
						case 2:
							re = "二"
							break;
						case 3:
							re = "三"
							break;
						case 4:
							re = "四"
							break;
						case 5:
							re = "五"
							break;
						case 6:
							re = "六"
							break;
						case 7:
							re = "天"
							break;
						default:
							break;
					}
					if (re) {
						return `星期${re}`
					} else {
						return "";
					}

				}
			}
		}],
		yAxis: {},

		series: [{
			symbolSize: 20,
			data: [
				// [0, 3.04],
				[1, 8.04],
				[2, 6.95],
				[3, 4.95],
				[4, 6.95],
				[5, 8.95],
				[6, 5.95],
				[7, 2.95]
			],
			type: 'scatter'
		}]
	}

	export default {
		data() {
			return {
				tabs: ['烟雾报警', '电压', '烟雾浓度'],
				activeTab: 1,
				normal: 0,
				warning: 0,
				malfunction: 0,
				opt: {
					orgId: this.orgId,
					projectId: null,
					strucunitId: null,
					crossSectionId: null,
					termComstatus: null
				},
				updateStatus: false,
				item: {
					name: ""
				}

			}
		},
		computed: {
			orgId() {
				debugger
				const value = uni.getStorageSync('userInfo');
				return value.depInfo.orgId;
			},
			count() {
				return this.normal + this.warning + this.malfunction
			}
		},
		methods: {
			clickTab(index) {
				this.activeTab = index;
			},
			onNavigationBarButtonTap() {
				uni.navigateTo({
					url: `./yangan`
				})
			},
			onShow(value) {
				this.$service.cnsmogsensor.cnSmogSensorList({
					orgId: this.orgId,
					projectId: null,
					termComstatus: null
				}).then(data => {
					debugger
					this.$service.cnsmogsensor.findCNSmogSensor({
						ids: data.msg.ids,
						strs: data.msg.names,
					}).then(data => {
						this.format(data.msg[0].value)
					})
				})

				this.getNumber()

			},
			getNumber() {
				const yangan = uni.getStorageSync('yangan');
				if (yangan) {
					this.opt = yangan.opt;
				}
				this.$service.cnsmogsensor.cnSmogSensorNumber({ ...this.opt,
					orgId: this.orgId
				}).then(re => {
					this.normal = re.msg.normal;
					this.malfunction = re.msg.malfunction
					this.warning = re.msg.warning
				})
			},
			format(data) {
				lineOption.series[0].data = [1, 4, 3, 6, 7];
				lineOption.xAxis[0].data = ['07-12', '07-13', '07-14', '07-15'];
				// data.forEach(item => {
				// 	lineOption.series[0].data.push(Number(item.alarmLevel));
				// 	lineOption.xAxis[0].data.push(item.updateTime.slice(5, 16))
				// })
				// this.$refs.lineChart.init();
			},
			lineInit(e) {
				let {
					width,
					height
				} = e;
				let canvas = this.$refs.lineChart.canvas
				echarts.setCanvasCreator(() => canvas);
				let lineChart = echarts.init(canvas, null, {
					width: width,
					height: height
				})
				canvas.setChart(lineChart)
				lineChart.setOption(pointOpt)
				// this.$refs.lineChart.setChart(lineChart)
			}
		},
		components: {
			mpvueEcharts
		}
	}
</script>

<style lang="scss">
	page,
	view {
		display: flex;
		/* uni-app默认使用flex布局。因为flex布局有利于跨更多平台，尤其是采用原生渲染的平台。如不了解flex布局，请参考http://www.w3.org/TR/css3-flexbox/。若不需要flex布局可删除本行*/
	}

	.tabs {
		margin: 40upx 0upx;
		background: #e6e6e6;

		.active-li {
			background-color: #ffffff;
		}

		.li {
			margin: 4upx;
			padding: 16upx;
			@extend .fx1;
			text-align: center;


			&:active {
				background-color: #ffffff;
			}
		}
	}

	.top {
		padding: 100upx 0upx;
		text-align: center;
		background: #e6e6e6;

		.g-base {
			margin-top: 10upx;
			margin-right: 10upx;
			background-color: #ffec00;
			width: 30upx;
			height: 30upx;
			border-radius: 30upx;
		}

		.g1 {
			background-color: #ffec00;
		}

		.g2 {
			background-color: #ecaf00;
		}

		.g3 {
			background-color: #ff5f00;
		}


	}

	.info {
		@extend .db;
		@extend .v;
		margin: 20upx 20upx;

		.li {
			padding: 0 10upx;

			.ml10 {
				margin-left: 20upx;
			}

			.title {
				text-align: right;
				width: 160upx;
			}
		}
	}

	page {
		min-height: 100%;
	}

	.page-section-title {
		padding: 0 30upx;
	}

	.title {
		margin-left: 30upx;
		color: #8f8f94;
	}

	.container {
		padding-bottom: 30upx;
		box-sizing: border-box;
	}

	.container,
	.canvasView {
		flex: 1;
		flex-direction: column;
	}

	.ec-canvas {
		width: 100%;
		height: 500upx;
		flex: 1;
	}

	.canvas-bar {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}

	.update-btn {
		margin-right: 30upx;
	}
</style>
