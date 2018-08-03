import vueFormUi from './main.js'

import Vue from 'vue'
import app from './app.vue'

window.vue = Vue;
Vue.use(vueFormUi);

new Vue({
	el:'#app',
	render:h => h(app)
})
