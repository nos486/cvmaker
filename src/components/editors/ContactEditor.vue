<template>
  <div>
    <v-btn icon color="cyan" @click="show">
      <v-icon>mdi-account-edit</v-icon>
    </v-btn>
    <v-dialog v-model="isShow" max-width="450" v-on:click:outside="hide">
      <v-card>
        <v-card-title class="text-h5 grey lighten-4 cyan--text">
          <v-icon left class="cyan--text">mdi-account-edit</v-icon>
          Contact Info
        </v-card-title>

        <v-card-text class="py-4 px-4 px-sm-8">

          <v-form ref="form" v-model="isFormValid">
            <div class="d-flex">
              <v-text-field v-model="country" label="Country" prepend-inner-icon="mdi-earth"
                            color="cyan"></v-text-field>
              <v-text-field class="ml-2" v-model="city" label="City" prepend-inner-icon="mdi-city"
                            color="cyan"></v-text-field>
            </div>
            <v-text-field v-model="phone" label="Phone" prepend-inner-icon="mdi-phone" color="cyan"></v-text-field>
            <v-text-field v-model="email" label="Email" prepend-inner-icon="mdi-email" color="cyan"></v-text-field>
            <v-text-field v-model="website" label="Website" prepend-inner-icon="mdi-web" color="cyan"></v-text-field>
            <v-text-field v-model="linkedin" label="Linkedin" prepend-inner-icon="mdi-linkedin"
                          color="cyan"></v-text-field>
            <v-text-field v-model="github" label="GitHub" prepend-inner-icon="mdi-github" color="cyan"></v-text-field>
          </v-form>
        </v-card-text>


        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="grey" text @click="hide">
            Cancel
          </v-btn>
          <v-btn color="cyan" text @click="save">
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
  name: 'ContactEditor',
  components: {},
  data: () => ({
    isShow: false,
    isFormValid: false,
    country: "",
    city: "",
    phone: "",
    email: "",
    website: "",
    linkedin: "",
    github: "",
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
      this.country = this.user.country
      this.city = this.user.city
      this.phone = this.user.phone
      this.email = this.user.email
      this.website = this.user.website
      this.linkedin = this.user.linkedin
      this.github = this.user.github
    },
    hide() {
      this.isShow = false
    },
    save() {
      let data = {
        country: this.country,
        city: this.city,
        phone: this.phone,
        email: this.email,
        website: this.website,
        linkedin: this.linkedin,
        github: this.github,
      }

      this.$store.dispatch("updateUserData", data).then(() => {
        this.$toast.success("User updated.")
        this.hide()
      })
    }
  }
}
</script>
