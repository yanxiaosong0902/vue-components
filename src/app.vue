<template>
	<div class="app">
		<section>
			<p>{{msg}}</p>
		</section>
		<section>
			<h1>输入框</h1>
			<test-co :txt="msg" @at-input="onTestChange"></test-co>
			<yc-input v-model="msg" @input="editTxt()" placeholder="请输入内容"></yc-input>
		</section>
		<section>
			<p>选择框</p>
			<yc-select :dataList="testList" v-model="select_value" placeholder="请选择"></yc-select>
		</section>
	</div>
</template>
<script>
	export default{
	  data(){
	    return{
	      msg:'',
	      ttt:'red',
	      select_value:'',
	      testList:[
	        {'name':'yanxiaosong','age':25},
	        {'name':'cj','age':25},
	        {'name':'wasingthon','age':26},
	        {'name':'tomcrus','age':40},
	        {'name':'kalvenKeith','age':29},
	        {'name':'testtest','age':15},
	        {'name':'everybody','age':60}
	      ]
	    }
	  },
	  methods:{
	    editTxt(){
	      window.console.log(111)
	      this.ttt = this.msg
	    },
	    onTestChange(pa){
	      window.console.log(pa)
	      this.msg = pa
	    }
	  }
	}
</script>
<style lang="scss" scoped="">
</style>
