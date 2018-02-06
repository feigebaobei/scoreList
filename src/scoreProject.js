import Vue from 'vue'
import Index from './scoreProject.vue'
// import router from './router'

Vue.config.productionTip = false

new Vue({
  el: '#scoreProject',
  // router,
  components: { Index },
  template: '<Index/>'
  // render: h => h(Index)
})