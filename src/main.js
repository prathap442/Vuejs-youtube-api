import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

// single line arraw function
// (eve)=>{console.log(eve)} can be converted to eve => console.log(eve)