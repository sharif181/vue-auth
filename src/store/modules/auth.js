import axios from "axios";

const state = {
    user: null
}

const getters = {
    isAuthenticated: state => (!!state.user || localStorage.getItem('accessToken'))
}

const actions = {
    async logIn({commit}, User) {
        await axios.post('accounts/login/', User).then(res => {
            commit('setUser', res.data)
        }).catch(
            e => console.log(e)
        )
    },
    async signUp({commit}, User) {
        await axios.post('accounts/signup/', User).then(res => {
            commit('registerUser', res.data)

        }).catch(e => console.log(e))
    },
    async logOut({commit}) {
        commit('removeUser')
    }
}

const mutations = {
    setUser(state, data) {
        state.user = data.user.username
        localStorage.setItem('accessToken', data.access_token)
    },
    removeUser(state) {
        state.user = null
        localStorage.removeItem('accessToken')
    }
}


export default {
    state,
    getters,
    actions,
    mutations
}

