import Vue from 'vue'
import VueRouter from 'vue-router'
import homePage from '@/views/home-page.vue';
import stayEdit from '@/views/stay-edit.vue';
import explorePage from '@/views/explore-page.vue';
import stayDetails from '@/views/stay-details.vue';
import userDetails from '@/views/user-details.vue';
import allOrders from '@/views/all-orders.vue';
import dashboard from '@/views/dashboard.vue';
import underConstruction from '@/views/underConstruction.vue';


Vue.use(VueRouter)

const routes = [{
        path: '/uc',
        name: 'Uc',
        component: underConstruction,
    },
    {
        path: '/',
        name: 'homePage',
        component: homePage,
    },
    {
        path: '/explore/edit/:stayId?',
        name: 'stayEdit',
        component: stayEdit,
    },
    {
        path: '/explore',
        name: 'explorePage',
        component: explorePage,
    },
    {
        path: '/explore/:stayId',
        name: 'stayDetails',
        component: stayDetails,
    },
    {
        //fetch user id from the store ( logedInUserId )
        path: '/user',
        name: 'userDetails',
        component: userDetails,
    },
    // {
    //     //fetch the all user orders
    //     path: '/user/:orderId',
    //     name: 'userOrders',
    //     component: userOrders,
    // },
    {
        //fetch the all orders
        path: '/orders',
        name: 'allOrders',
        component: allOrders,
    },
    {
        path: '/dashboard/:userId',
        name: 'dashboard',
        component: dashboard
    }

]

const router = new VueRouter({
    routes
})

export default router