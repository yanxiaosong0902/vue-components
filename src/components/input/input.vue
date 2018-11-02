<template>
	<div class="yc-input">
		<input type="text" 
		:value="value"
		ref="input" 
		@input="handlerInput"
		@focus="handlerFocus"
		@blur="handlerOnblur" 
		:placeholder="placeholder"
		:class="{focusClass:focusClass}"
		>
	</div>
</template>
<script>
	export default{
		name:'yc-input',
		data(){
			return{
				focusClass:false
			}
		},
		props:{
			value:{
				type:String,
				require:true
			},
			placeholder:String
		},
		mounted(){
		},
		methods:{
			handlerInput(event){
				const input_value = event.target.value;
				this.$emit('input',input_value);
				this.$emit('change',input_value);
			},
			handlerFocus(event){
				//this.focusClass = true;
			},
			handlerOnblur(event){
				console.log('123');
				//this.focusClass = false;
			}
		}
	}
</script>
<style lang="scss" scoped="">
	.yc-input{
		input{
			font-size: 14px;
			color:#333;
			-webkit-appearance:none;
			border-radius:4px;
			border:1px solid #c1c1c1;
			height:40px;
			width:180px;
			line-height:40px;
			box-sizing:border-box;
			padding:0 10px;
			&:focus{
				outline: none;
    			border-color: #409eff;
			}
		}
	}
</style>
