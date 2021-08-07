<template>
  <div class="container px-0 py-0">
    <Nav></Nav>
    <Starter :user="$store.getters.user" editable></Starter>
  </div>
</template>
<script>


import Nav from "@/components/Nav";
import Starter from "@/templates/Default";
export default {
    name:'Cv',
    components: {Starter, Nav},
    mounted() {
        if(!this.$store.getters.isLoggedIn){
            this.$router.push("/")
        }else {
            this.$store.dispatch("getUser")
        }
    },
    methods : {

    }
}
</script>

<style>

</style>
