import { stayService } from '../services/stay.service.js';

export const stayStore = {
    state: {
        stays: [],
        filterBy: {
            name: '',
            labels: [],
            amenities: [],
            typeOfPlace: '',
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
        staysToShow(state) {
            return state.stays
        },
        totalStays(state) {
            return state.stays.length
        },
        // totalInStock(state) { //Type of Place???????????
        //     return state.stays.map((stay => stay.inStock))
        // },
        // totalOutStock(state) {
        //     return state.stays.map((stay => !stay.inStock))
        // },
        getCurrStay(state) {
            return state.currStay
        }
    }
}