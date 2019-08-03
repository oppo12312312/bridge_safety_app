<template>
	<view>
		<view class="uni-padding-wrap uni-common-mt">

			<form>
				<view class="uni-form-item uni-column">
					<view class="title">维保类型</view>
					<radio-group name="radio" @change="radioChange">
						<label>
							<radio value="1" :checked="radioValue === '1'" />添加设备
						</label>
						<label>
							<radio value="2" :checked="radioValue === '2'" />维修维保
						</label>
					</radio-group>
				</view>
				<view class="uni-form-item uni-column">
					<view class="title">设备编号 </view>
					<input class="uni-input" v-model="termCode" name="input" :disabled="disabled" />
					<view class="recode" @click="scanCode">重新扫码</view>
				</view>

				<view v-show="radioValue === '2'" class="">
					<view class="uni-form-item uni-column">
						<view class="title">下单日期</view>
						<picker mode="date" :value="date" @change="bindDateChange">
							<view class="uni-input">{{date}}</view>
						</picker>
					</view>

					<view class="uni-form-item uni-column">
						<view class="title">服务类型</view>
						<view class="uni-list">
							<view class="uni-list-cell">
								<view class="uni-list-cell-left">
									当前选择
								</view>
								<view class="uni-list-cell-db">
									<picker @change="bindPickerChange" :value="index" :range="array">
										<view class="uni-input">{{array[index]}}</view>
									</picker>
								</view>
							</view>
						</view>
					</view>
					<view class="uni-form-item uni-column">
						<view class="title">维保位置</view>
						<view class="uni-list-cell-db">
							<checkLocation ref='checkLocation1'></checkLocation>
						</view>
					</view>
				</view>
				<view v-show="radioValue === '1'" class="">
					<view class="uni-form-item uni-column">
						<view class="title">位置</view>
						<view class="uni-list-cell-db">
							<checkLocation ref='checkLocation2'></checkLocation>
						</view>

					</view>
					<view class="uni-form-item uni-column">
						<view class="title">传感器编码 </view>
						<input class="uni-input" v-model="code" name="input" />
					</view>
					<view class="uni-form-item uni-column">
						<view class="title">传感器名称 </view>
						<input class="uni-input" v-model="name" name="input" />
					</view>
					<view class="uni-form-item uni-column">
						<view class="title">传感器说明 </view>
						<input class="uni-input" v-model="info" name="input" />
					</view>
					<view class="uni-form-item uni-column">
						<view class="title">传感器类型</view>
						<view class="uni-list">

							<view class="uni-list-cell">
								<view class="uni-list-cell-left">
									当前选择
								</view>
								<view class="uni-list-cell-db">
									<picker @change="advChange" :value="advIndex" :range="optAdvType">
										<view class="uni-input">{{optAdvType[advIndex]}}</view>
									</picker>
								</view>
							</view>
						</view>
					</view>
				</view>


			</form>
			<button class="bu" @click="enter" type="primary">确认</button>
		</view>
	</view>
</template>

<script>
	import checkLocation from '@/pages/qrCode/checkLocation.vue'
	import util from '@/common/util.js'
	export default {
		components: {
			checkLocation
		},
		data() {
			return {
				radioValue: '1',
				termCode: "",
				index: 1,
				date: '',
				disabled: false,
				code:'',
				name:'',
				info: '',
				array: ['类型1', '类型2', '类型3'],
				advIndex: 0,
				optAdvType: []

			}
		},
		methods: {
			onShow() {
				this.radioValue = '1';
				this.termCode = "";
				this.index = 1;
				this.disabled = false;
				this.code = '';
				this.info = '';
				this.name = '';
				this.advIndex = 0;
				this.date = util.dateUtils.formatNowDate();
				if(this.$refs.checkLocation1){
					this.$refs.checkLocation1.init();
					this.$refs.checkLocation2.init();
				}
				this.scanCode();
				this.getAdvType();
			},
			advChange(evt){
				this.advIndex = evt.target.value;
			},
			bindDateChange(evt){
				this.date = evt.target.value;
			},
			radioChange(evt) {
				debugger
				this.radioValue = evt.target.value;
			},
			getAdvType() {
				this.$service.qrCode.findTermTypeAll().then(re => {
					this.optAdvType = [];
					re.msg.forEach(item => {
						if (item.termTypeName) {
							this.optAdvType.push(item.termTypeName)
						}
					})
				})
			},
			scanCode() {
				let scope = this;
				uni.scanCode({
					success: function(res) {
						scope.disabled = true;
						scope.termCode = res.result;
					},
				});
			},
			enter() {
				this.$service.qrCode.addTerminalrepair({
					termCode: this.termCode
				}).then((data) => {
					uni.showModal({
						content: data.msg,
						showCancel: false
					});
				})
			}
		}
	}
</script>

<style>
	page {
		background-color: #F4F5F6;

	}

	.uni-form-item .title {
		padding: 10px 0;
	}

	.bu {
		margin-top: 20upx;
		margin-bottom: 40upx;
	}

	.recode {
		color: #007AFF;
		margin-top: 10upx;
	}
</style>
