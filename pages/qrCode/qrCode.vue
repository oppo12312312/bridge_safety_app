<template>
	<view>
		<view class="uni-padding-wrap uni-common-mt">
			<view class="uni-form-item uni-column">
				<view class="title">设备编号 </view>
				<input class="uni-input" v-model="termCode" name="input"  :disabled="disabled" />
				<view class="recode" @click="scanCode">重新扫码</view>
			</view>
			<!-- <form>
				<view class="uni-form-item uni-column">
					<view class="title">维保类型</view>
					<radio-group name="radio">
						<label>
							<radio value="1" />添加设备
						</label>
						<label>
							<radio value="2" />维修维保
						</label>
					</radio-group>
				</view>
				<view class="uni-form-item uni-column">
					<view class="title">设备编号 </view>
					<input class="uni-input" name="input" placeholder="这是一个输入框" />
					<view class="recode" @click="scanCode">重新扫码</view>

				</view>
				<view class="uni-form-item uni-column">
					<view class="title">下单日期</view>
					<input class="uni-input" name="input" placeholder="这是一个输入框" />
				</view>
				<view class="uni-form-item uni-column">
					<view class="title">选择项目</view>
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
					<input class="uni-input" name="input" placeholder="" />
				</view>
				
			</form> -->
			<button class="bu" @click="enter" type="primary">确认</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				termCode: "",
				index: 1,
				disabled: false,
				array: ['中国', '美国', '巴西', '日本'],

			}
		},
		onLoad() {
			this.scanCode();
		},
		methods: {
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
