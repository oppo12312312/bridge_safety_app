<template>
	<view class="yangan">
		<view class="top db uni-list-cell">
			<view class="db mutil-select">
				<view class="picker-v db">
					<checkLocation @change="pickerChange" class='fn12'></checkLocation>
					<image class="img" src="../../../static/yangan/down.png"></image>
				</view>
			</view>
			<selects :items="optDevice"></selects>
			<selects @change="changeStatus" :items="optStatus"></selects>
		</view>
		<scroll-view  scroll-y="true" class="scroll-Y list-t" >
			<uni-list-item v-for="item in list" :key="item.termId" @click="opanDetail(item)" :title="item.termName" />
		</scroll-view>

	</view>
</template>

<script>
	import uniPopup from "@/components/uni-popup-i/uni-popup.vue"
	import vUniIcon from "@/components/uni-icon/uni-icon.vue"
	import uniList from '@/components/uni-list/uni-list.vue'
	import uniListItem from '@/components/uni-list-item/uni-list-item.vue'
	import selects from '@/pages/index/yangan/selects.vue'
	import checkLocation from '@/pages/qrCode/checkLocation.vue'



	export default {
		name: "yangan",
		components: {
			uniPopup,
			vUniIcon,
			uniList,
			uniListItem,
			selects,
			checkLocation
		},
		data() {
			return {
				list: [],
				termComstatus: null,
				optStatus: [{
					name: '全部状态',
					value: null
				}, {
					name: '正常',
					value: '1'
				}, {
					name: '报警',
					value: '2'
				}, {
					name: '故障',
					value: '3'
				}],
				optDevice: [{
					name: '全部设备',
					value: null
				}],
				multiValue: [null, null, null]
			}
		},
		computed: {
			orgId() {
				const value = uni.getStorageSync('userInfo');
				return value.depInfo.orgId;
			},
			opt() {
				return {
					orgId: this.orgId,
					projectId: this.multiValue[0],
					strucunitId: this.multiValue[1],
					crossSectionId: this.multiValue[2],
					termComstatus: this.termComstatus
				}
			}
		},
		mounted() {
			this.getDevice();
		},
		methods: {
			changeStatus(value) {
				this.termComstatus = value;
				this.getList();
			},
			onShow() {
				this.getList();
			},
			changeSelect() {},
			getDevice() {
				this.$service.qrCode.findTermTypeAll().then(re => {
					re.msg.forEach(item => {
						if (item.termTypeName && item.termtypeId) {
							this.optDevice.push({
								name: item.termTypeName,
								value: item.termtypeId
							})
						}

					})
				})
			},
			pickerChange(values) {
				this.multiValue = values;
				this.getList();
			},
			opanDetail(item) {

				uni.navigateBack({
					url: `./detail?item=${JSON.stringify(item)}&opt= ${JSON.stringify(this.opt)}`
				})
				uni.setStorageSync('yangan', {
					item: item,
					opt: this.opt
				})
			},
			getList() {
				this.$service.cnsmogsensor.cnSmogSensorList(this.opt).then(data => {
					this.list = data.msg.terminals;
				})
			},

		},

	}
</script>

<style lang="scss">
	page {
		height: 100%;
	}

	.picker-v {
		margin: 0 auto;
	}
	.list-t{
		height: calc(100% - 44px);
	}

	.yangan {
		height: 100%;

		.list {
			.uni-list-cell {
				@extend .active;
			}
		}

		.top {
			&:after {
				left: 0;
			}

			.mutil-select {
				width: 214px;
				text-align: center;
				padding: 10upx;
				@extend .active;

			}

			.select {
				text-align: center;
				padding: 10upx;
				@extend .fx1;
				@extend .active;


			}

			.img {
				top: 2upx;
				margin-left: 10upx;
				margin-top: 26upx;
				width: 24upx;
				height: 24upx;
			}
		}

	}

	.uni-input {
		padding: 7px 0px;
		font-size: 24upx;
	}
</style>
