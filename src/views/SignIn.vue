<template>
    <div class="Signin">
        <form @submit.prevent="login">
            <input type="text" placeholder="UserID" v-model="form.UserID">
            <input type="text" placeholder="password" v-model="form.Password">
            <input type="submit" value="Login">
        </form>
    </div>
</template>
  
<script>
  import { mapActions } from 'vuex';
  export default {
    name: "sign-in",
    data(){
       return {
           form: {
             UserID: '',
             Password : ''
           }
       }
    },
    methods: {
        ...mapActions({
            signIn: 'auth/signIn'
        }),
        login(){
          this.signIn(this.form).then(()=>{
            this.$router.replace({
               'name': 'dashboard'
            });
          });
        }
    }
  };
</script>
  