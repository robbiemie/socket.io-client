import Vue from 'vue'
import App from '@/module/App.vue' // eslint-disable-line
import initVueFilters from '@/common/vue-filters'

function init () {
  // Define a EventBus Globally
  Vue.prototype.$bus = new Vue()
  //  Define a Filter Globally
  initVueFilters(Vue)

  new Vue({ // eslint-disable-line
    el: '#app',
    render: h => h(App)
  })
}

init()
