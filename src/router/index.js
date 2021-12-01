import Vue from 'vue'
import VueRouter from 'vue-router'
import homePage from '@/views/home-page.vue';
import stayEdit from '@/views/stay-edit.vue';
import explorePage from '@/views/explore-page.vue';
import stayDetails from '@/views/stay-details.vue';
import userDetails from '@/views/user-details.vue';

Vue.use(VueRouter)

const routes = [
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/About.vue')
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

]

const router = new VueRouter({
    routes
})

export default router