<template>
  <v-dialog v-model="isShow" persistent max-width="450">
    <v-card>
      <v-card-title class="text-h5 grey lighten-4 cyan--text">
        <v-icon class="mr-1 cyan--text">mdi-login</v-icon>Login
      </v-card-title>

      <v-card-text class="py-4 px-4 px-sm-8">
        <div v-if="$store.getters.isLoggedIn">
          <v-icon size="34">mdi-account</v-icon>
          You are already logged in, click to continue or log out and log in with a different account.
        </div>

        <v-form v-else ref="form" v-model="isFormValid">
          <v-text-field v-model="username" label="Username" :rules="usernameRules"
                        prepend-inner-icon="mdi-account" color="cyan"></v-text-field>
          <v-text-field v-model="password" label="Password" prepend-inner-icon="mdi-key"
                        :type="showPassword ? 'text' : 'password'"
                        :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                        @click:append="showPassword = !showPassword" :rules="passwordRules" color="cyan"></v-text-field>
          <Captcha ref="captcha" v-model="captcha" color="cyan" v-on:enter="sendData"></Captcha>
        </v-form>
      </v-card-text>


      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="grey" text @click="hide">
          Cancel
        </v-btn>
        <v-btn v-if="$store.getters.isLoggedIn" color="red" text @click="logoutClicked">
          Logout
        </v-btn>
        <v-btn v-if="$store.getters.isLoggedIn" color="green" text @click="continueClicked">
          Continue
        </v-btn>
        <v-btn v-else color="cyan" text @click="sendData">
          Login
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>


</template>

<script>
import Captcha from "@/components/ui/Captcha";
export default {
  name: 'Login',
  components: {Captcha},
  data: () => ({
    isShow: false,
    isFormValid: true,
    username: "",
    usernameRules: [
      v => !!v || 'Username is required',
      v => (v && v.length > 3) || 'Username must be more than 4 characters',
    ],
    password: "",
    showPassword: "",
    passwordRules: [
      v => !!v || 'Password is required',
    ],
    captcha :{key:"",value :""}
  }),
  methods: {
    show() {
      this.isShow = true
    },
    hide() {
      this.isShow = false
      if (!this.$store.getters.isLoggedIn) this.$refs.form.reset()
    },
    sendData : function (){
      let data = {
        username: this.username,
        password: this.password,
        key: this.captcha.key,
        captcha: this.captcha.value
      };

      if (this.$refs.form.validate()){
        this.$store.commit("overlayShow")
        this.$store.dispatch("login",data).then(()=>{
          this.continueClicked()
          this.$store.commit("overlayHide")
        }).catch(()=>{
          this.$refs.captcha.refresh()
          this.$store.commit("overlayHide")
        })
      }
    },
    continueClicked: function (){
      this.$router.push("/cv")
    }
    ,
    logoutClicked: function (){
      this.$store.dispatch("logout")
    }
  }
}
</script>
