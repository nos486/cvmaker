<template>
    <div style="position: relative">
    <v-app-bar class="px-2" color="transparent" flat height="70" style="position: absolute">
      <v-row align="center">
        <UserController></UserController>

        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn text color="green" icon x-large v-bind="attrs"
                   v-on="on">
              <v-icon>mdi-web</v-icon>
            </v-btn>
          </template>
         <span>Public Page</span>
        </v-tooltip>
      </v-row>
    </v-app-bar>
    </div>



  <!--    <div class="d-flex justify-content-between align-items-center w-100 p-2 bg-light shadow-sm lighten-8">-->
  <!--        <div class="">-->
  <!--            <UserController></UserController>-->
  <!--        </div>-->
  <!--&lt;!&ndash;        <b-button variant="success" >&ndash;&gt;-->
  <!--&lt;!&ndash;            <i class="fa fa-globe"></i> Public&ndash;&gt;-->
  <!--&lt;!&ndash;        </b-button>&ndash;&gt;-->

  <!--    </div>-->
</template>

<script>
import UserController from "@/components/UserController";

export default {
  name: "Nav",
  components: {UserController},
  data() {
    return {
      drawer: true,
      items: [
        {title: 'Home', icon: 'mdi-home-city'},
        {title: 'My Account', icon: 'mdi-account'},
        {title: 'Users', icon: 'mdi-account-group-outline'},
      ],
      mini: true,
    }
  },
  mounted() {

  }
}
</script>

<style scoped>

</style>