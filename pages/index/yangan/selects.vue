<template>
	<view class="select db">
		<!-- <text>{{checked.project.name}}</text> -->
		<view class="picker-v db">
			<picker @change="change" :value="active" :range="range">
				<view class="ov-hi uni-input">{{range[active]}}</view>
			</picker>
			<image class="img" src="../../../static/yangan/down.png"></image>
		</view>

	</view>
</template>

<script>
	export default {
		props: {
			items: {
				default () {
					return [{
						name: '全部项目',
						value: 0
					}]
				},
				type: Array
			}
		},
		data() {
			return {
				active: 0
			}
		},
		computed: {
			range() {
				return this.items.map(item => {
					return item.name
				})
			}
		},
		methods: {
			change(e) {
			    this.active = e.detail.value;
				this.$emit('change', this.items[this.active].value);
			}
		}

	}
</script>

<style lang="scss">
	.select {
		text-align: center;
		padding: 10upx;
		@extend .fx1;
		@extend .active;

		.img {
			top: 2upx;
			margin-left: 10upx;
			margin-top: 26upx;
			width: 24upx;
			height: 24upx;
		}
	}

	.uni-input {
		padding: 7px 0px;
		font-size: 24upx;

	}
</style>
