<template>
  <div v-if="user != null">
    <div v-if="!user.isEmailVerified" class="white pa-5 rounded">
      <div class="d-flex  justify-space-between">
        <div class="text--white">
          <v-icon left small>mdi-email</v-icon>
          You need to verify your email address.
        </div>
        <v-btn class="ml-2" @click="sendCode" :color="user.settings.color" dark elevation="0">
          Send
        </v-btn>
      </div>
      <v-text-field class="mt-2" label="Enter verification code" placeholder="Verification code"
                    v-model="code"
                    hide-details
                    append-icon="mdi-email-send"
                    :color="user.settings.color"
                    @click:append="verify"
      ></v-text-field>
    </div>

  </div>

</template>
<script>
import Item from "@/templates/default/ui/Item"
import UserModel from "@/models/User.model";
import AboutEditor from "@/components/editors/AboutEditor";

export default {
  name: 'EmailVerifier',
  components: {},
  data: () => ({
    code : ""
  }),
  props: {
    user: {
      type: UserModel,
    },
  },
  computed: {

  },
  watch: {

  },
  methods: {
    sendCode(){
      this.$store.dispatch("sendEmailVerificationCode").then((res)=>{
        this.$toast.success(res.message)
      })
    },
    verify(){
      this.$store.dispatch("verifyEmail",this.code).then((res)=>{
        this.$toast.success(res.message)
      })
    }
  }

}
</script>
