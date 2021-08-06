<template>
  <div>
    <v-btn icon :color="user.settings.color" @click="show">
      <v-icon>mdi-account-edit</v-icon>
    </v-btn>
    <v-dialog v-model="isShow" max-width="450" v-on:click:outside="hide">
      <v-card>
        <v-card-title class="text-h5 grey lighten-4 " :class="user.settings.color+'--text'">
          <v-icon left :color="user.settings.color">mdi-account-edit</v-icon>
          Basic
        </v-card-title>

        <v-card-text class="py-4 px-4 px-sm-8">


          <v-form ref="form" v-model="isFormValid">
            <div class="d-flex align-center">
              <v-avatar>
                <AvatarImage :id="$store.getters.user.id" size="60"></AvatarImage>
              </v-avatar>
              <v-file-input v-model="uploadAvatar" class="ml-2" accept="image/*" label="Avatar picture" :color="user.settings.color"></v-file-input>
            </div>
            <div class="d-flex">
              <v-text-field v-model="firstName" label="First Name" prepend-inner-icon="mdi-account-details"
                            :color="user.settings.color"></v-text-field>
              <v-text-field class="ml-2" v-model="lastName" label="Last Name" prepend-inner-icon="mdi-account-details"
                            :color="user.settings.color"></v-text-field>
            </div>
            <DateSelector v-model="birthday" title="Birthday Date" :color="user.settings.color"></DateSelector>
            <v-text-field v-model="headLine" label="Head Line" prepend-inner-icon="mdi-head-lightbulb-outline"
                          :color="user.settings.color"></v-text-field>
            <IconSelector v-model="icon" title="Main Icon" :color="user.settings.color"></IconSelector>
          </v-form>
        </v-card-text>


        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="grey" text @click="hide">
            Cancel
          </v-btn>
          <v-btn :color="user.settings.color" text @click="save">
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>


</template>

<script>


import UserModel from "@/models/User.model";
import IconSelector from "@/components/IconSelector";
import DateSelector from "@/components/DateSelector";
import AvatarImage from "@/components/ui/AvatarImage";

export default {
  name: 'BasicEditor',
  components: {AvatarImage, DateSelector, IconSelector},
  data: () => ({
    isShow: false,
    isFormValid: false,
    uploadAvatar : null,
    firstName: "",
    lastName: "",
    birthday: null,
    headLine: "",
    icon: "",
  }),
  props: {
    user: {
      type: UserModel
    }
  },
  computed: {},
  methods: {
    show() {
      this.isShow = true
      this.firstName = this.user.firstName
      this.lastName = this.user.lastName
      this.birthday = this.user.birthday
      this.headLine = this.user.headLine
      this.icon = this.user.icon
    },
    hide() {
      this.isShow = false
    },
    save() {

      let data = {
        firstName: this.firstName,
        lastName: this.lastName,
        birthday: this.birthday,
        headLine: this.headLine,
        icon: this.icon,
      }

      console.log(this.uploadAvatar)

      this.$store.dispatch("updateUserData", data).then(() => {
        this.$toast.success("User updated.")

        if(this.uploadAvatar != null){
          let formData = new FormData()
          formData.append("avatar",this.uploadAvatar)
          this.$store.dispatch("uploadAvatar", formData).then(()=>{
            this.$toast.success("Avatar updated.")
            this.hide()
          })
        }else {
          this.hide()
        }
      })
    }
  }
}
</script>
