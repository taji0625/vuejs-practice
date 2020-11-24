import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.component('my-component', {
  data: function(){
    return {
      number: 12
    }
  },
  template: '<p>いいね{{number}}</p>'
})

new Vue({
  render: h => h(App),
}).$mount('#app')