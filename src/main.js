/* eslint-disable no-unused-vars */
import Input from './components/input/index.js'
import TestCo from './components/test/index.js'
import Select from './components/select/index.js'
// const elInput = {
// 	install(Vue,options){
// 		Vue.component(elInputComponent.name,elInputComponent)
// 	}
// }
const components = [
  Input,
  TestCo,
  Select
]
const install = function(Vue, options = {}) {
  components.map(component => Vue.component(component.name, component))
}
if(typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
export default {
  install
}
