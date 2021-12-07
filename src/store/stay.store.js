import { stayService } from '../services/stay.service.js';

export const stayStore = {
    state: {
        stays: [],
        filterBy: {
            name: '',
            place: '',
            labels: [],
            amenities: [],
            typeOfPlace: [],
            price: {
                fromPrice: -Infinity,
                toPrice: Infinity
            }
        },
        currStay: null,

    },
    mutations: {
        setStays(state, { stays }) {
            state.stays = stays
        },
        addStay(state, { saveStay }) {
            state.stays.push(saveStay)
        },
        updateStay(state, { saveStay }) {
            const idx = state.stays.findIndex(currStay => currStay._id === saveStay._id)
            state.stays.splice(idx, 1, saveStay)
        },
        removeStay(state, { stayId }) {
            const idx = state.stays.findIndex(currStay => currStay._id === stayId)
            state.stays.splice(idx, 1)
        },
        setFilterBy(state, { filterBy }) {
            state.filterBy = filterBy
        },
        setCurrStay(state, { stay }) {
            console.log('currStay', state.currStay)
            state.currStay = stay
            console.log('currStay', state.currStay)
        },


    },
    actions: {
        loadStays({ commit, state }) {
            return stayService.query(state.filterBy)
                .then((stays) => {
                    commit({ type: 'setStays', stays })
                })
        },
        addStay({ commit }, { stay }) {
            return stayService.save(stay)
                .then((saveStay) => {
                    commit({ type: 'addStay', saveStay })
                })
        },
        updateStay({ commit }, { stay }) {
            return stayService.save(stay)
                .then((saveStay) => {
                    commit({ type: 'updateStay', saveStay })
                })
                .catch(() => {
                    console.log('didnt update product');
                })
        },
        removeStay({ commit }, { stayId }) {
            return stayService.remove(stayId)
                .then(() => {
                    commit({ type: 'removeStay', stayId })

                })
        },
        setCurrStay({ commit }, { stayId }) {
            return stayService.getById(stayId).then((stay) => {
                console.log(stay)
                commit({ type: 'setCurrStay', stay })
            })
        },
        getStayById({ commit }, { stayId }) {
            console.log(commit);
            return stayService.getById(stayId)
        }


    },
    getters: {
        // staysToShow(state) {
        //     return state.stays
        // },
        staysToShow(state) {
            var stays = JSON.parse(JSON.stringify(state.stays));
            let filteredStays = [];
            //filtered by location
            const regex = new RegExp(state.filterBy.place, 'i');
            filteredStays = stays.filter(stay => regex.test(stay.loc.country) || regex.test(stay.loc.city));
            //by Price
            var minPrice = state.filterBy.price.fromPrice;
            var maxPrice = state.filterBy.price.toPrice;
            filteredStays = filteredStays.filter(stay => ((stay.price >= minPrice) && (stay.price <= maxPrice)))
            //by Type
            if (state.filterBy.typeOfPlace.length) {
                filteredStays = filteredStays.filter(stay => {
                    var propType = stay.propertyType.charAt(0).toUpperCase() + stay.propertyType.slice(1);
                    console.log(propType);
                    return state.filterBy.typeOfPlace.includes(propType)
                })
            }
            // by amenities
            if (state.filterBy.amenities.length)
                state.filterBy.amenities.forEach(amenity => {
                    filteredStays = filteredStays.filter(stay => {
                        return stay.amenities.includes(amenity)
                    })
                })

            return filteredStays;
        },
        totalStays(state) {
            return state.stays.length
        },
        allStays(state) {
            return state.stays;
        },
        getEmptyReview(state) {
            console.log(state);
            return stayService.createEmptyReview()
        },
        // totalInStock(state) { //Type of Place???????????
        //     return state.stays.map((stay => stay.inStock))
        // },
        // totalOutStock(state) {
        //     return state.stays.map((stay => !stay.inStock))
        // },
        getCurrStay(state) {
            return state.currStay
        },
        getFilterBy(state) {
            return state.filterBy
        }
    }
}