<template>
  <div>
    <v-btn icon :color="user.settings.color" @click="show">
      <v-icon>mdi-account-edit</v-icon>
    </v-btn>
    <v-dialog v-model="isShow" max-width="450" v-on:click:outside="hide">
      <v-card>
        <v-card-title class="text-h5 grey lighten-4" :class="user.settings.color+'--text'">
          <v-icon left :color="user.settings.color">mdi-account-edit</v-icon>
          About
        </v-card-title>

        <v-card-text class="py-4 px-4">
          <v-textarea label="About" v-model="about" :color="user.settings.color" rows="8" no-resize hide-details filled></v-textarea>
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

export default {
  name: 'AboutEditor',
  components: {},
  data: () => ({
    isShow: false,
    about: "",
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
      this.about = this.user.about
    },
    hide() {
      this.isShow = false
    },
    save() {

      let data = {
        about: this.about
      }

      this.$store.dispatch("updateUserData", data).then(() => {
        this.$toast.success("User updated.")
        this.hide()
      })
    }
  }
}
</script>
