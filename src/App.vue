<template>
  <div id="app">
    <TheNavigation />
    <router-view />
  </div>
</template>

<script>
  import TheNavigation from "@/components/TheNavigation";
  export default {
    name: "home-page",
    components: {
      TheNavigation
    },
  };
</script>
  
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
}
nav {
  padding: 30px;
}
nav a {
  font-weight: bold;
  color: #2c3e50;
}
nav a.router-link-exact-active {
  color: #42b983;
}
</style>
