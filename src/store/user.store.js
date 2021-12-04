import { userService } from '../services/user.service.js';

export const userStore = {
    state: {
        user: null,
        users: [],
    },
    mutations: {
        login(state, { user }) {
            state.user = user;
        },

        signup(state, { user }) {
            state.user = user;
        },

        logout(state) {
            state.user = null;
        },

        setUser(state, { user }) {
            state.user = user;
        },
    },
    actions: {
        async login({ commit }, { username, password }) {
            try {
                const user = await userService.login(username, password);
                commit({ type: 'login', user })
                return user;
            } catch (err) {
                console.log('Error in Login (user.store):', err);
                throw err;
            }
        },

        async signup({ commit }, { username, password, fullname }) {
            try {
                const user = await userService.signup(username, password, fullname);
                commit({ type: 'signup', user })
                return user;
            } catch (err) {
                console.log('Error in SignUp (user.store):', err);
                throw err;
            }
        },

        async logout({ commit }) {
            try {
                const res = await userService.logout();
                commit({ type: 'logout' })
                return res.data;
            } catch (err) {
                console.log('Error in LogOut (user.store):', err);
                throw err;
            }
        },

        async loadUser({ commit }) {
            try {
                const user = await userService.getLoggedinUser();
                commit({ type: 'setUser', user });
            } catch (err) {
                console.log('Error in load user (user.store):', err);
                throw err;
            }
        },

        async getLoggedUsers() {
            try {
                const users = await userService.getLoggedinUsers();
                // commit({ type: 'setUsers', users });
                return users;
            } catch (err) {
                console.log('Error in getLoggedUsers (user.store):', err);
                throw err;
            }
        },
    },
    getters: {
        user(state) {
            return state.user;
        },
        users(state) {
            return state.users;
        }
    }
}