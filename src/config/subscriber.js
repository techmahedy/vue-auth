import store from "@/store";
import axios from "axios";

store.subscribe(({type,payload}) => {
    switch (type) {
        case 'auth/SET_TOKEN':
            if(payload) {
               axios.defaults.headers.common['Authorization'] = `Bearer ${payload}`;
               localStorage.setItem('token',payload);
            }else{
                axios.defaults.headers.common['Authorization'] = null;
                localStorage.removeItem('token');
            }
            break;
    
        default:
            break;
    }
});