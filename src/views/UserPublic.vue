<template>
  <div class="container px-0 py-0">
    <Default :user="$store.getters.user" :editable="false"></Default>
  </div>
</template>
<script>


import Default from "@/templates/Default";

export default {
    name:'UserPublic',
    components: {Default},
    mounted() {
        this.$store.dispatch("getUser",this.$route.params.username).catch(()=>{
          this.$router.push("/")
        })
    },
    methods : {

    }
}
</script>

<style>

</style>
