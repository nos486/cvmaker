<template>
  <EditDialog ref="dialog" title="Basic" :color="user.settings.color" v-on:show="show" v-on:save="save">
    <v-form ref="form" v-model="isFormValid">
      <div class="d-flex align-center">
        <v-avatar size="60">
          <v-img :src="user.avatar"></v-img>
        </v-avatar>
        <v-file-input v-model="uploadAvatar" class="ml-2" accept="image/*" label="Avatar picture" :color="user.settings.color" append-icon="mdi-trash-can" @click:append="deleteAvatar"></v-file-input>
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
  </EditDialog>

</template>

<script>


import UserModel from "@/models/User.model";
import IconSelector from "@/components/IconSelector";
import DateSelector from "@/components/DateSelector";
import EditDialog from "@/components/ui/EditDialog";

export default {
  name: 'BasicEditor',
  components: {EditDialog, DateSelector, IconSelector},
  data: () => ({
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
      this.firstName = this.user.firstName
      this.lastName = this.user.lastName
      this.birthday = this.user.birthday
      this.headLine = this.user.headLine
      this.icon = this.user.icon
    },
    save() {

      let data = {
        firstName: this.firstName,
        lastName: this.lastName,
        birthday: this.birthday,
        headLine: this.headLine,
        icon: this.icon,
      }

      this.$store.dispatch("updateUserData", data).then(() => {
        this.$toast.success("User updated.")

        if(this.uploadAvatar != null){
          let formData = new FormData()
          formData.append("avatar",this.uploadAvatar)
          this.$store.dispatch("uploadAvatar", formData).then(()=>{
            this.$toast.success("Avatar updated.")
            this.$refs.dialog.hide()
          })
          this.uploadAvatar = null
        }else {
          this.$refs.dialog.hide()
        }
      })
    },
    deleteAvatar(){
      this.$store.dispatch("deleteAvatar").then(()=>{
        this.$toast.success("Avatar deleted.")
      })
    }
  }
}
</script>
