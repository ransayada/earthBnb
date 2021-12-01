import { orderService } from '../services/order.service.js';

export const orderStore = {
    state: {
        orders: [],
        // currOrder: null,

    },
    mutations: {
        setOrders(state, { orders }) {
            state.orders = orders
        },
        addOrder(state, { saveOrder }) {
            state.orders.push(saveOrder)
        },
        updateOrder(state, { saveOrder }) {
            const idx = state.orders.findIndex(currOrder => currOrder._id === saveOrder._id)
            state.orders.splice(idx, 1, saveOrder)
        },
        removeOrder(state, { orderId }) {
            const idx = state.orders.findIndex(currOrder => currOrder._id === orderId)
            state.orders.splice(idx, 1)
        },
    },
    actions: {
        loadOrders({ commit }) {
            return orderService.query()
                .then((orders) => {
                    commit({ type: 'setOrders', orders })
                })
        },
        addOrder({ commit }, { order }) {
            return orderService.save(order)
                .then((saveOrder) => {
                    commit({ type: 'addOrder', saveOrder })
                })
        },
        updateOrder({ commit }, { order }) {
            return orderService.save(order)
                .then((saveOrder) => {
                    commit({ type: 'updateOrder', saveOrder })
                })
                .catch(() => {
                    console.log('didnt update product');
                })
        },
        removeOrder({ commit }, { orderId }) {
            return orderService.remove(orderId)
                .then(() => {
                    commit({ type: 'removeOrder', orderId })

                })
        },

    },
    getters: {
        ordersToShow(state) {
            return state.orders
        },
        totalOrders(state) {
            return state.orders.length
        },
        // totalInStock(state) { //Type of Place???????????
        //     return state.orders.map((order => order.inStock))
        // },
        // totalOutStock(state) {
        //     return state.orders.map((order => !order.inStock))
        // },
        // getCurrOrder(state) {
        //     return state.currOrder
        // }
    }
}