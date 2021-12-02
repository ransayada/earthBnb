import Vue from 'vue'
import App from './App.vue'
// import './registerServiceWorker'
import element from 'element-ui';
import router from './router'
import store from './store'
import '@/assets/main.scss'
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';

Vue.use(element)
Vue.config.productionTip = false

new Vue({
    created(){
        this.$store.dispatch({ type: 'loadStays' })
        // this.$store.dispatch({ type: 'loadUser' })
        this.$store.dispatch({ type: 'loadOrders' })

      },
    router,
    store,
    render: h => h(App)
}).$mount('#app')