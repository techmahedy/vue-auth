import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from 'axios';
axios.defaults.baseURL = 'https://app.acibd.com/cheque_receive/api/';
Vue.config.productionTip = false;
require('@/config/subscriber');
store.dispatch('auth/attempt',localStorage.getItem('token')).then(()=>{
  new Vue({
    router,
    store,
    render: (h) => h(App),
  }).$mount("#app");
});

