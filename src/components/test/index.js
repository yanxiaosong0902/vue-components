import TestCo from './test.vue'

TestCo.install = function(Vue){
	Vue.component(TestCo.name,TestCo)
}

export default TestCo