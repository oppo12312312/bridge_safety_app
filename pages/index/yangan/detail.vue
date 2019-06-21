<template>
	<view class="container">
		<view class="">
			<mpvue-echarts class="ec-canvas" @onInit="lineInit" canvasId="line" ref="lineChart" />
		</view>
	</view>
</template>

<script>
	import * as echarts from '@/components/echarts/echarts.simple.min.js';
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

	export default {
		data() {
			return {
				updateStatus: false,
				item: {
					name: ""
				}

			}
		},
		onLoad(value) {
			this.item = JSON.parse(value.item);
			this.$service.cnsmogsensor.findCNSmogSensor({
				ids: [this.item.termId],
				strs: [this.item.termName],
			}).then(data => {
				this.format(data.msg[0].value)
			})
		},
		methods: {
			format(data) {
				data.forEach(item => {
					lineOption.series[0].data.push(Number(item.alarmLevel));
					lineOption.xAxis[0].data.push(item.updateTime.slice(5,16))
				})
				this.$refs.lineChart.init();
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
				lineChart.setOption(lineOption)
				this.$refs.lineChart.setChart(lineChart)
			}
		},
		components: {
			mpvueEcharts
		}
	}
</script>

<style>
	page,
	view {
		display: flex;
		/* uni-app默认使用flex布局。因为flex布局有利于跨更多平台，尤其是采用原生渲染的平台。如不了解flex布局，请参考http://www.w3.org/TR/css3-flexbox/。若不需要flex布局可删除本行*/
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
