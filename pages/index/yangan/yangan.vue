<template>
	<view class="yangan">
		<view class="top db">
			<view class="select" @click="showPopup('project')">
				<text>{{checked.project.name}}</text>
				<image class="img" src="../../../static/yangan/down.png"></image>
			</view>
			<view class="select" @click="showPopup('device')">
				<text>{{checked.device.name}}</text>
				<image class="img" src="../../../static/yangan/down.png"></image>
			</view>

		</view>
		<uni-popup class="popup" :show="popup" @hidePopup="hidePopup" position="top" type="top" mode="fixed">
			<view class="uni-list">
				<radio-group @change="radioChange">
					<label class="uni-list-cell uni-list-cell-pd" v-for="(item, index) in items[this.activeName]" :key="item.value">
						<view>{{item.name}}</view>
						<view>
							<radio :value="item.value" :checked="index === current" />
						</view>
					</label>
				</radio-group>
			</view>
		</uni-popup>
		<uni-list>
			<uni-list-item v-for="item in list" :key="item.termId" @click="opanDetail(item)" :title="item.termName" />
		</uni-list>


	</view>
</template>

<script>
	import uniPopup from "@/components/uni-popup-i/uni-popup.vue"
	import vUniIcon from "@/components/uni-icon/uni-icon.vue"
	import uniList from '@/components/uni-list/uni-list.vue'
	import uniListItem from '@/components/uni-list-item/uni-list-item.vue'


	export default {
		name: "yangan",
		components: {
			uniPopup,
			vUniIcon,
			uniList,
			uniListItem
		},
		data() {
			return {
				popup: false,
				current: '-1',
				activeName: 'project',
				list: [{
					name: '查看详情'
				}, {
					name: '查看详情'
				}],
				items: {
					project: [{
						name: '全部项目',
						value: '1'
					}, {
						name: '项目',
						value: '3'
					}],
					device: [{
						name: '全部设备',
						value: null
					},{
						name: '正常',
						value: '1'
					}, {
						name: '报警',
						value: '2'
					}, {
						name: '故障',
						value: '3'
					}],
					location: [{
						name: '全部结构',
						value: '1'
					}]
				},
				checked: {
					project: {
						name: '全部项目',
						projectId: "null"
					},
					device: {
						name: '全部设备',
						value: "null"
					},
					location: {
						name: '全部位置',
						value: "null"
					},
				},
				all: {
					project: {
						name: '全部项目',
						value: null
					},
					device: {
						name: '全部结构',
						value: null
					}
				}
			}
		},
		computed:{
			orgId(){
				const value = uni.getStorageSync('userInfo');
				return value.depInfo.orgId;
			}
		},
		methods: {
			showPopup(value) {
				if(this.activeName === value){
					this.popup = !this.popup;
				}else{
					this.popup = true;
				}
				this.activeName = value;
				
			},
			hidePopup() {
				this.popup = false;
			},
			radioChange(value) {
				debugger
				let val = value.detail.value;
				let re = this.items[this.activeName].filter(item => {
					return item.value === val;
				})
				this.checked[this.activeName] = re[0];
				this.getList()
			},
			opanDetail(item) {
				
				uni.navigateTo({
					url: "./detail?item=" + JSON.stringify(item)
				})
			},
			getProject() {
				this.$service.cnsmogsensor.findProjectSelect({
					orgId: this.orgId
				}).then(data => {
					this.initProject(data.msg);
				})
			},
			initProject(data) {
				debugger
				data.forEach(item => {
					item.value = item.projectId+'';
					item.name = item.projectName;
				})
				data.unshift(this.all.project);
				this.items.project = data;
			},
			getList(){
				this.$service.cnsmogsensor.cnSmogSensorList({
					orgId: this.orgId,
					projectId: Number(this.checked.project.value) || null,
					termComstatus: Number(this.checked.device.value)|| null
				}).then(data => {
					this.list = data.msg.terminals;
				})
			}
		},
		onLoad() {
			this.getProject();
			this.getList();

		}
	}
</script>

<style lang="scss">
	.yangan {
		.list {
			.uni-list-cell {
				@extend .active;
			}
		}

		.top {
			.select {
				text-align: center;
				padding: 10upx;
				@extend .fx1;
				@extend .active;

				.img {
					top: 2upx;
					margin-left: 10upx;
					width: 24upx;
					height: 24upx;
				}
			}
		}

	}
</style>
