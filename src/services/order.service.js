import { storageService } from './async-storage.service.js'
import { utilService } from './util.service.js'
// const axios = require('axios');
const KEY = 'orderDB';
// const STAY_URL = '/api/order/'
// import Axios from 'axios'
// var axios = Axios.create({
//     withCredentials: true
// })

// const TOY_URL = '//localhost:3030/api/order/'

// const TOY_URL = (process.env.NODE_ENV !== 'development')
//     ? '/api/order'
//     : '//localhost:3030/api/order';

export const orderService = {
    query,
    getById,
    remove,
    save,
    getEmptyOrder
}

// const labels = ["On wheels", "Box game", "Art", "Baby", "Doll", "Puzzle", "Outdoor"]


_createOrders()

// TODO: support paging and filtering and sorting
async function query() {
    return storageService.query(KEY)
        //  return axios.get(TOY_URL).then(res => res.data)
        // const res = await axios.get(TOY_URL)
        // return res.data
}

async function getById(id) {
    return storageService.get(KEY, id)
        // return axios.get(TOY_URL + id).then(res => res.data)
        // const res = await axios.get(TOY_URL + id)
        // return res.data
}

async function remove(id) {
    return storageService.remove(KEY, id)
        // return axios.delete(TOY_URL + id).then(res => res.data)
        // const res = await axios.delete(TOY_URL + id)
        // return res.data
}

async function save(order) {
    const savedOrder = (order._id) ? storageService.put(KEY, order) : storageService.post(KEY, order)
    return savedOrder;
    // if (order._id) {
    //     console.log('i am here');
    //     // return axios.put(TOY_URL, order).then(res => res.data)
    //     // const res = await axios.put(TOY_URL + order._id, order)

    //     return res.data
    // } else {
    //     // return axios.post(TOY_URL, order).then(res => res.data)
    //     // const res = await axios.post(TOY_URL, order)
    //     // console.log(res.data);
    //     return res.data
    // }
}

function getEmptyOrder() {
    return {
        _id: "",
        hostId: "",
        createdAt: 0,
        buyer: {
            _id: "",
            fullname: ""
        },
        totalPrice: 0,
        startDate: "",
        endDate: "",
        guests: {
            adults: 0,
            kids: 0,
            pets: 0
        },
        stay: {
            _id: "",
            name: "",
            price: 0
        },
        status: "pending"
    }

}



// Create Test Data:
function _createOrders() {
    var orders = JSON.parse(localStorage.getItem(KEY))
    if (!orders || !orders.length) {
        orders = [
            _createOrder(),
            _createOrder(),
            _createOrder(),
        ]
        localStorage.setItem(KEY, JSON.stringify(orders))
    }
    return orders;
}

function _createOrder() {
    const order = getEmptyOrder();
    order._id = utilService.makeId()
    order.createdAt = Date.now();
    return order
}