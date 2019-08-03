<template>
	<view class="container">
		<view class="qiun-charts">
			<!--#ifdef MP-ALIPAY -->
			<!--#ifdef MP-ALIPAY -->
			<canvas canvas-id="canvasArea" id="canvasArea" class="charts" :width="cWidth*pixelRatio" :height="cHeight*pixelRatio" :style="{'width':cWidth+'px','height':cHeight+'px'}" @touchstart="touchArea" ></canvas>
			<!--#endif-->
			<!--#ifndef MP-ALIPAY -->
			<!-- <canvas canvas-id="canvasArea" id="canvasArea" class="charts" @touchstart="touchArea"></canvas> -->
			<!--#endif-->
		</view>
	</view>
</template>

<script>
	// import * as echarts from '@/components/echarts/echarts.simple.min.js';
	// import mpvueEcharts from '@/components/mpvue-echarts/src/echarts.vue';
	import uCharts from '@/components/uchar/u-charts.min.js';

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
				pixelRatio: 1,
				"LineA": {
					"categories": [
						"2012",
						"2013",
						"2014",
						"2015",
						"2016",
						"2017",
						"2013",
						"2014",
						"2015",
						"2016",
						"2019",
						"2020"
					],
					"series": [{
							"name": "成交量A",
							"data": [
								35,
								8,
								25,
								37,
								4,
								20,
								35,
								8,
								25,
								37,
								4,
								20
							]
						}
					]
				},
				cWidth: '',
				cHeight: '',
				updateStatus: false,
				item: {
					name: ""
				}

			}
		},
		onLoad(value) {
			let _self = this
			// uni.getSystemInfo({
			// 	success: function(res) {
			// 		console.log(res)
			// 		if (res.pixelRatio > 1) {
			// 			//正常这里给2就行，如果pixelRatio=3性能会降低一点
			// 			//_self.pixelRatio =res.pixelRatio;
			// 			_self.pixelRatio = 1;
			// 		}
			// 	}
			// });
			this.cWidth=uni.upx2px(750);
		    this.cHeight=uni.upx2px(500);
			this.showLineA("canvasArea", this.LineA);
			// 			this.item = JSON.parse(value.item);
			// 			this.$service.cnsmogsensor.findCNSmogSensor({
			// 				ids: [this.item.termId],
			// 				strs: [this.item.termName],
			// 			}).then(data => {
			// 
			// 				this.format(data.msg[0].value)
			// 			})
		},
		methods: {
			showLineA(canvasId, chartData) {
				let _self = this;
				this.canvaArea=new uCharts({
					$this:_self,
					canvasId: canvasId,
					type: 'area',
					fontSize:11,
					legend:true,
					background:'#FFFFFF',
					pixelRatio:_self.pixelRatio,
					categories: chartData.categories,
					animation: false,
					series: chartData.series,
					xAxis: {
						disableGrid:true,
					},
					yAxis: {
						//disabled:true
					},
					width: _self.cWidth*_self.pixelRatio,
					height: _self.cHeight*_self.pixelRatio,
					dataLabel: true,
					dataPointShape: true,
					extra: {
						lineStyle: 'curve'
					},
				});

			},
			format(data) {
				data.forEach(item => {
					lineOption.series[0].data.push(Number(item.alarmLevel));
					lineOption.xAxis[0].data.push(item.updateTime.slice(5, 16))
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
			},
			touchLineA(e) {
				this.canvaLineA.scrollStart(e);
			},
			moveLineA(e) {
				this.canvaLineA.scroll(e);
			},
			touchEndLineA(e) {
				this.canvaLineA.scrollEnd(e);
				//下面是toolTip事件，如果滚动后不需要显示，可不填写
				this.canvaLineA.showToolTip(e, {
					format: function(item, category) {
						return category + ' ' + item.name + ':' + item.data
					}
				});
			},
		},
		components: {
			// mpvueEcharts
		}
	}
</script>

<style>
	page,
	view {
		display: flex;
		/* uni-app默认使用flex布局。因为flex布局有利于跨更多平台，尤其是采用原生渲染的平台。如不了解flex布局，请参考http://www.w3.org/TR/css3-flexbox/。若不需要flex布局可删除本行*/
	}
	.qiun-charts{width: 750upx; height:500upx;background-color: #FFFFFF;}
 	.line{
		width: 100%;
		height: 100%;
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
