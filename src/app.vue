<template>
	<div class="app">
		<section>
			<p>{{msg}}</p>
		</section>
		<section>
			<h1>输入框</h1>
			<el-input placeholder="msg"></el-input>
		</section>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				msg:'hello world'
			}
		}
	}
</script>
<style lang="scss" scoped="">
</style>
