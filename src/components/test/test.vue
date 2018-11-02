<template>
	<div class="test">
		<p>测试测试</p>
		<span>{{test}}</span>
		<input type="text" v-model="result">
	</div>
</template>
<script>
	export default{
		name:'test-co',
		data(){
			return{
				result:'',
				test:this.txt
			}
		},
		props:{
			txt:{
				type:String
			}
		},
		watch:{
			txt(value){
				this.test = value;
			},
			result(value){
				this.$emit('at-input',value);
			}
		},
		methods:{
			editTxt(){
				//this.test = this._txt;
			}
		}
	}
</script>