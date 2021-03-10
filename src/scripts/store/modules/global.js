import api from './../../api'
export default {
    namespaced: true,
    state: {
        auth_data:{},
    },

    mutations: {
        SET_AUTH_DATA(state, value) {
            state.auth_data = value
        }
    },

    getters: {
        getAuthData: (state) => state.auth_data
    },

    actions: {
        fetchGeneralData(){
            return window.localStorage.getItem('token')
            // return axios.get(ADMIN.endpoint + "/general/data")
            // .then(response => {
            //     commit("SET_AUTH_DATA", response.data);
            // });
        },
        login(state, payload){
            return axios.post(api.base_url+api.login, payload, {
                headers: { "Content-Type": "multipart/form-data" }
            })
        },
        logout(){
            window.localStorage.removeItem('token')
        }
    },
};