/* eslint-disable no-unused-vars */
import vueFormUi from './main.js'
import Input from './components/input/index.js'
import Vue from 'vue'
import app from './app.vue'

Vue.use(vueFormUi)
//Vue.use(Input)

window.vue = Vue

new Vue({
  el: '#app',
  render: h => h(app)
})
