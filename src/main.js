import Vue from 'vue'
import App from './App.vue'
import besties from './Besties.vue'

Vue.component('Globalcomponent',besties);
new Vue({
  el: '#app',
  render: h => h(App)
})
