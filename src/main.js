import Vue from 'vue'
import App from './App.vue'
import router from './router'
import {store} from './store'
import vuetify from './plugins/vuetify'
import Toast from "vue-toastification";
// Import the CSS or use your own!
import "vue-toastification/dist/index.css";


Vue.config.productionTip = false


Vue.use(Toast, {timeout:3000,position:"top-right",});

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
