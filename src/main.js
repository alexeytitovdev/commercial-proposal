import Vue from 'vue'
import App from './App.vue'
import store from './store'


import TextareaAutosize from 'vue-textarea-autosize'
Vue.use(TextareaAutosize)


import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/sass/main.sass'

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
