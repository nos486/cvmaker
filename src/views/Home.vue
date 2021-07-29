<template>
  <v-container class="fill-height">
    <Login ref="login"></Login>
    <v-row class="" align="center" justify="center">
      <div class="d-flex flex-column">
        <v-icon size="200" color="grey">mdi-file-account-outline</v-icon>
        <div class="text-center display-3 grey--text"><b class="cyan--text">CV</b> Maker</div>
        <v-row class="mt-5" justify="center" align="center">
          <v-btn color="cyan" large dark @click="loginClicked">
            <v-icon>mdi-login</v-icon>
            Login
          </v-btn>
          <v-btn color="blue" large dark class="ml-3">
            <v-icon>mdi-account-plus</v-icon>
            Register
          </v-btn>
        </v-row>
      </div>
    </v-row>
  </v-container>
</template>

<script>

import Login from "@/components/Login";
export default {
  name: 'Home',

  components: {Login},
  methods :{
    loginClicked(){
        this.$refs.login.show()
    }
  }
}
</script>
