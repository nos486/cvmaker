<template>
  <v-container class="fill-height">
    <Login ref="login"></Login>
    <Register ref="register"></Register>
    <v-row class="" align="center" justify="center">
      <div class="d-flex flex-column">
        <v-icon size="140" color="grey" class="">mdi-file-account-outline</v-icon>
        <div class="text-center display-3 grey--text"><b class="cyan--text">Resu</b>Max</div>
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
    <v-footer fixed class="d-flex justify-center align-center">
      <small class="ml-1">
        <a href="https://github.com/nos486/resumax">v{{version}}</a>
      </small>
    </v-footer>
  </v-container>
</template>

<script>

import Login from "@/components/Login";
import Register from "@/components/Register";
import {version} from '@/../package.json'

export default {
  name: 'Home',

  components: {Register, Login},
  data : ()=>{
    return {
      version : version
    }
  },
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
