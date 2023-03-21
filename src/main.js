import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import ButtonCounter from '@/components/ButtonCounter'


Vue.config.productionTip = false
Vue.component('button-counter', ButtonCounter)


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
