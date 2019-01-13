import Vue from 'vue'
import App from '@/module/App.vue' // eslint-disable-line

function init () {
  new Vue({ // eslint-disable-line
    el: '#app',
    render: h => h(App)
  })
}

init()
