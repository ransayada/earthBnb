import Vue from 'vue'
import Vuex from 'vuex'
import { orderStore } from './order.store.js'
import { stayStore } from './stay.store.js'
import { userStore } from './user.store.js'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {},
    mutations: {},
    actions: {},
    modules: {
        orderStore,
        userStore,
        stayStore
    }
})