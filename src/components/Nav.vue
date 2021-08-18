<template>
    <div style="position: relative">
    <v-app-bar class="px-2" color="transparent" flat height="70" style="position: absolute">
      <v-row justify="start" align="center">
        <UserController :user="user"></UserController>

        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn text color="green" icon x-large v-bind="attrs" v-on="on" @click="goToPublicPage">
              <v-icon>mdi-web</v-icon>
            </v-btn>
          </template>
         <span>Public Page</span>
        </v-tooltip>


        <div v-if="$store.getters.needToSaveScheme" class="ml-auto">
          <v-tooltip bottom >
            <template v-slot:activator="{ on, attrs }">
              <v-btn text color="red" icon x-large v-bind="attrs" v-on="on" @click="saveSchema">
                <v-icon>mdi-content-save</v-icon>
              </v-btn>
            </template>
            <span>Save Schema</span>
          </v-tooltip>
        </div>

      </v-row>
    </v-app-bar>
    </div>
</template>

<script>
import UserController from "@/components/UserController";
import UserModel from "@/models/User.model";

export default {
  name: "Nav",
  components: {UserController},
  data() {
    return {

    }
  },
  props :{
    user: {
      type: UserModel
    },
  },
  mounted() {

  },
  methods :{
    goToPublicPage(){
      let route = this.$router.resolve({path: `/cv/${this.user.username}`});
      window.open(route.href, '_blank');
    },
    saveSchema(){
      let data = {
        settings: this.user.settings
      }
      this.$store.dispatch("updateUserData",data).then(()=>{
        this.$toast.success("Schema updated.")
        this.$store.commit("needToSaveScheme",false)
      })
    }
  }
}
</script>

<style scoped>

</style>