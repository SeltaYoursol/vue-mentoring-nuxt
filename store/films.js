import axios from "axios";

export const state = () => ({
    list: []
})
export const mutations = {
    setList(state, payload) {
        state.list = payload
    }
}

export const getters = {
    films(state) {
        return state.list
    }
}

export const actions = {
    async getList({commit}) {
        try {
            const result = await axios.get("https://reactjs-cdp.herokuapp.com/movies");
            if (result.status === 200) {
                commit('setList', result.data.data)
            }
        } catch (e) {
            console.error(e);
        }
    }
}
