import { storageService } from './async-storage.service.js'
import { utilService } from './util.service.js'
// const axios = require('axios');
const KEY = 'stayDB';
// const STAY_URL = '/api/stay/'
import Axios from 'axios'
// var axios = Axios.create({
//     withCredentials: true
// })

// const TOY_URL = '//localhost:3030/api/stay/'

// const TOY_URL = (process.env.NODE_ENV !== 'development')
//     ? '/api/stay'
//     : '//localhost:3030/api/stay';

export const stayService = {
    query,
    getById,
    remove,
    save,
    getEmptyStay
}

// const labels = ["On wheels", "Box game", "Art", "Baby", "Doll", "Puzzle", "Outdoor"]


_createStays()

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

async function save(stay) {
    const savedStay = (stay._id) ? storageService.put(KEY, stay) : storageService.post(KEY, stay)
    return savedStay;
    // if (stay._id) {
    //     console.log('i am here');
    //     // return axios.put(TOY_URL, stay).then(res => res.data)
    //     // const res = await axios.put(TOY_URL + stay._id, stay)

    //     return res.data
    // } else {
    //     // return axios.post(TOY_URL, stay).then(res => res.data)
    //     // const res = await axios.post(TOY_URL, stay)
    //     // console.log(res.data);
    //     return res.data
    // }
}

function getEmptyStay(name = '', price = 100,) {
    return {
        _id: '',
        name,
        price,
        imgUrls: [],
        summary: '',
        createdAt: null,
        reviews: [],
        propertyType: '',
        capacity: 0,
        amenities: [],
        host: {
            _id: "",
            fullName: "",
            imgUrl: "",
        },
        loc: {
            country: "",
            countryCode: "",
            address: "",
            lat: 0,
            lng: 0
        },

    }
}


// Create Test Data:
function _createStays() {
    var stays = JSON.parse(localStorage.getItem(KEY))
    if (!stays || !stays.length) {
        stays = [
                _createStay('Buzz'),
                _createStay('woodie'),
                _createStay('tmnt'),
            ]
        localStorage.setItem(KEY, JSON.stringify(stays))
    }
    return stays;
}

function _createStay(name) {
    const stay = getEmptyStay(name, utilService.getRandomInt(80, 300))
    stay._id = utilService.makeId()
    stay.reviews.push({txt: 'good stay'})
    stay.createdAt = Date.now().toLocaleString()
    stay.imgUrls = ['../assets/logo.png','../assets/logo.png','../assets/logo.png','../assets/logo.png','../assets/logo.png']
    return stay
}
