<template>
	<div class="el-input">
		<input type="text" v-model="model">
	</div>
</template>
<script>
	export default{
		data(){
			return{
				model:this.vModel
			}
		},
		props:{
			vModel:{
				type:String
			}
		}
	}
</script>
<style lang="scss" scoped="">
	.el-input{
		font-size: 15px;
		color:#333;
		input{
			font-size: 12px;
			color:#ff0000;
		}
	}
</style>
