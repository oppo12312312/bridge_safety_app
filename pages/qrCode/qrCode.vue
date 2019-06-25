<template>
	<view>
		扫码结果{{codeText}}
	</view>
</template>

<script>
	export default {
		data() {
			return {
				codeText: ""
			}
		},
		onLoad() {
			uni.scanCode({
				success: function(res) {
					console.log('条码类型：' + res.scanType);
					console.log('条码内容：' + res.result);
					this.codeText = res.result;
				}
			});
		},
		methods: {

		}
	}
</script>

<style>

</style>
