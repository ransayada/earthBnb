import Vue from 'vue'
import App from './App.vue'
// import './registerServiceWorker'
import element from 'element-ui';
import router from './router'
import store from './store'
import '@/assets/main.scss'
import locale from 'element-ui/lib/locale/lang/en'
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';
import * as VueGoogleMaps from 'vue2-google-maps'; 

Vue.use(element, { locale })
Vue.config.productionTip = false

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyCXvZqRU_DCYIFXrUgXmAar8vH_PiQY9BU',
    libraries: 'places', // This is required if you use the Autocomplete plugin
  },
})

new Vue({
  created() {
    this.$store.dispatch({ type: 'loadStays' })
    // this.$store.dispatch({ type: 'loadUser' })
    this.$store.dispatch({ type: 'loadOrders' })

  },
  router,
  store,
  render: h => h(App)
}).$mount('#app')