import Vue from 'vue'
import App from './App.vue'
import { stroe } from '/store/store.js'

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
