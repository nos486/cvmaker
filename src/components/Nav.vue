<template>
    <div style="position: relative">
    <v-app-bar class="px-2" color="transparent" flat height="70" style="position: absolute">
      <v-row>
        <UserController :user="user"></UserController>

        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn text color="green" icon x-large v-bind="attrs" v-on="on" @click="goToPublicPage">
              <v-icon>mdi-web</v-icon>
            </v-btn>
          </template>
         <span>Public Page</span>
        </v-tooltip>
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
    }
  }
}
</script>

<style scoped>

</style>