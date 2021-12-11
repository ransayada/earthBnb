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
            state.orders.unshift(saveOrder)
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
        // getOrderStatus({ commit }) {
        //     console.log(commit);
        //     return orderService.query().then((orders) => {
        //         orders.filter(order => order.buyer.fullname === "Ran Sayada"  )
        //     })
        // }

    },
    getters: {
        ordersToShow(state) {
            return state.orders
        },
        totalOrders(state) {
            return state.orders.length
        },
        getEmptyOrder(state) {
            console.log(state);
            return orderService.getEmptyOrder()
        },
        getOrderStatus(state) {
            return state.orders.find(order => order.buyer.fullname === "Ran Sayada" )
        }
        // totalOutStock(state) {
        //     return state.orders.map((order => !order.inStock))
        // },
        // getCurrOrder(state) {
        //     return state.currOrder
        // }
    }
}