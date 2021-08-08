<template>
  <v-container class="fill-height">
    <Login ref="login"></Login>
    <Register ref="register"></Register>
    <v-row class="" align="center" justify="center">
      <div class="d-flex flex-column">
        <v-icon size="280" color="grey" class="">mdi-file-account-outline</v-icon>
        <div class="text-center display-4 grey--text"><b class="cyan--text">Resu</b>Max</div>
        <v-row class="mt-5" justify="center" align="center">
          <v-btn color="cyan" large dark @click="loginClicked">
            <v-icon>mdi-login</v-icon>
            Login
          </v-btn>
          <v-btn color="blue" large dark class="ml-3" @click="registerClicked">
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
import Register from "@/components/Register";
export default {
  name: 'Home',

  components: {Register, Login},
  methods :{
    loginClicked(){
        this.$refs.login.show()
    },
    registerClicked(){
      this.$refs.register.show()
    }
  }
}
</script>
