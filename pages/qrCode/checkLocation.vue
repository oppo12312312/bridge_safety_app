<template>
	<picker mode="multiSelector" @change="change" @columnchange="bindMultiPickerColumnChange" :value="multiIndex" :range="multiArray">
		<view class="ov-hi uni-input">{{multiArray[0][multiIndex[0]]}}，{{multiArray[1][multiIndex[1]]}}，{{multiArray[2][multiIndex[2]]}}</view>
	</picker>
</template>

<script>
	export default {
		name: 'checkLocation',
		data() {
			return {
				multiIndex: [0, 0, 0],
				multiArray: [
					['全部项目'],
					['全部建筑'],
					['全部楼层']
				],
				multiValue: [
					[],
					[],
					[]
				],
				all: ['全部项目', '全部建筑', '全部楼层']
			}
		},
		computed: {
			orgId() {
				return uni.getStorageSync('userInfo').depInfo.orgId;
			}
		},
		mounted() {
			this.load();
		},
		methods: {
			load(){
				this.initAll();
				this.getProject();
			},
			init(){
				this.multiIndex=  [0, 0, 0];
			},
			initAll() {
				for (let i = 0; i < this.multiArray.length; i++) {
					this.multiArray[i] = [this.all[i]];
				}
			},
			getProject() {
				this.$service.cnsmogsensor.findProjectSelect({
					orgId: this.orgId
				}).then(data => {
					this.initProject(data.msg || []);
					this.$forceUpdate()
				})
			},
			initProject(data) {
				let re = data.map(item => {
					return item.projectName;
				})
				this.multiArray[0] = [this.all[0], ...re];
				let values = data.map(item => {
					return item.projectId;
				})
				this.multiValue[0] = [null, ...values];
			},
			getBuilding(projectId) {
				this.$service.cnsmogsensor.findStrucunitSelect({
					projectId: projectId
				}).then(data => {
					this.initBuilding(projectId !==null ? data.msg: []);
					this.initFloor([]);
					this.$forceUpdate()
				})
			},
			initBuilding(data) {
				debugger
				let re = data.map(item => {
					return item.strucunitName;
				})
				this.multiArray.splice(1,1,[this.all[1], ...re]);
				let values = data.map(item => {
					return item.strucunitId;
				})
				this.multiIndex[1] = 0;
				this.multiIndex[2] = 0;
				this.multiValue[1] = [null, ...values];
				
			},
			getFloor(strucunitId) {
				this.$service.cnsmogsensor.findCrosssectionSelect({
					strucunitId: strucunitId
				}).then(data => {
					this.initFloor(strucunitId !==null ? data.msg: []);
					this.$forceUpdate()
				})
			},
			initFloor(data) {
				let re = data.map(item => {
					return item.crossSectionName;
				})
				this.multiArray.splice(2,1,[this.all[2], ...re]);
				let values = data.map(item => {
					return item.crossSectionId;
				})
				this.multiIndex[2] = 0;
				this.multiValue[2] = [null, ...values];
			},
			bindMultiPickerColumnChange: function(e) {
				debugger
				console.log('修改的列为：' + e.detail.column + '，值为：' + e.detail.value)
				this.multiIndex.splice(e.detail.column,1,e.detail.value);
				let value = this.multiValue[e.detail.column][e.detail.value];
				if (e.detail.column === 0) {
					this.getBuilding(value)
				}
				if (e.detail.column === 1) {
					this.getFloor(value)
				}
				
			},
			change(){
				let check = []
				for(let i = 0; i< 3; i++){
					check.push(this.multiValue[i][this.multiIndex[i]])
				}
				this.$emit('change',check)
			}
		}
	}
</script>

<style>
	 
</style>
