import elInputComponent from './components/input.vue'
import testComponent from './components/test.vue'
// const elInput = {
// 	install(Vue,options){
// 		Vue.component(elInputComponent.name,elInputComponent)
// 	}
// }
const components = [
	elInputComponent,
	testComponent
]
const install = function(Vue,options={}){
	components.map(component => Vue.component(component.name,component));
}
export default elInput