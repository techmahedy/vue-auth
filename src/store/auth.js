import axios from "axios";

export default{
  namespaced: true,
  state: {
    _token: null,
    user: null
  },
  getters: {
    authenticated (state){
        return state._token && state.user;
    },
    user(state) {
        return state.user;
    }
  },
  mutations: {
    SET_TOKEN(state,token) {
        state._token = token;
    },
    SET_USER(state,user) {
        state.user = user;
    }
  },
  actions: {
    async signIn({dispatch},credentials){
        let response = await axios.post('login',credentials);
        return dispatch('attempt',response.data.token);
    },
    async attempt({commit},token){
        commit('SET_TOKEN',token);
        try {
            let response = await axios.get('all_proposal');
            commit('SET_USER',response.data); 
        } catch (error) {
            commit('SET_TOKEN',null);
            commit('SET_USER',null); 
        }
    },
    signOut({commit}){
        // return axios.post('signout').then(()=>{
            commit('SET_TOKEN',null);
            commit('SET_USER',null); 
        // });
    }
  },
};
