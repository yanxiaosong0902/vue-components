<template>
	<div class="select">
		<input type="hidden" :value="val">
		<select-input 
		:options="itemList" 
		:placeholder="place"
		@getChild="getChildValue">
		</select-input>
	</div>
</template>
<script>
	import selectInput from './input.vue'
	export default{
		name:'yc-select',
		data(){
			return{
				itemList:this.dataList,
				val:this.value,
				place:this.placeholder
			}
		},
		components:{
			selectInput:selectInput
		},
		props:{
			dataList:{
				type:[Array,Object]
			},
			value:{
				require:true
			},
			placeholder:{
				type:String
			}
		},
		watch:{
			val(val){
				this.$emit('input',val);
			}
		},
		mounted(){
			
		},
		methods:{
			getChildValue(val){
				console.log(val);
				this.val = val;
			}
		}
	}
</script>
<style lang="scss">
</style>