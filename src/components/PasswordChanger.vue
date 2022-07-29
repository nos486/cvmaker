<template>
  <EditDialog ref="dialog" title="Password Changer" :color="user.settings.color" v-on:show="onShow" v-on:save="onSave"
              hide-button>

    <v-form ref="form" v-model="isFormValid">
      <v-text-field v-model="oldPassword" label="Old Password" prepend-inner-icon="mdi-alpha-o-circle"
                    color="cyan"></v-text-field>
      <v-text-field v-model="newPassword" label="New password" prepend-inner-icon="mdi-alpha-n-circle"
                    color="cyan"></v-text-field>
    </v-form>
  </EditDialog>

</template>
<script>


import UserModel from "@/models/User.model";
import EditDialog from "@/components/ui/EditDialog";

export default {
  name: 'PasswordChanger',
  components: {EditDialog},
  data: () => ({
    isFormValid: false,
    oldPassword: "",
    newPassword: "",
  }),
  props: {
    user: {
      type: UserModel
    }
  },
  computed: {},
  methods: {
    show() {
      this.$refs.dialog.show()
    },
    onShow() {

    },
    onSave() {

      let data = {
        oldPassword: this.oldPassword,
        newPassword: this.newPassword,
      }

      this.$store.dispatch("updatePassword", data).then(() => {
        this.$toast.success("Password updated.")
        this.$refs.dialog.hide()
      })
    },
  }
}
</script>
