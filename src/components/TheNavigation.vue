<template>
    <nav>
      <router-link to="/">Home</router-link>
      <template v-if="authenticated">
        <router-link to="/dashboard">Dashboard</router-link>
        <a href="#" @click.prevent="signOut">Logout</a>
      </template>
      <template v-else>
        <router-link to="/signin">Sign in</router-link>
      </template>
    </nav>
</template>
  
<script>
  import { mapGetters, mapActions } from 'vuex';
  export default {
    name: "navi-gation",
    computed: {
        ...mapGetters({
          authenticated: 'auth/authenticated',
          user: 'auth/user'
        })
    },
    methods: {
      ...mapActions({
        signOutAction: 'auth/signOut'
      }),
      signOut() {
        this.signOutAction().then(()=>{
            return this.$router.replace({
              name: 'signin'
            })
        });
      }
    }
  };
</script>
  