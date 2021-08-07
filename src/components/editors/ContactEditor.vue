<template>
  <EditDialog ref="dialog" title="Contact Info" :color="user.settings.color" v-on:show="show" v-on:save="save">
    <v-form ref="form" v-model="isFormValid">
      <div class="d-flex">
        <v-text-field v-model="country" label="Country" prepend-inner-icon="mdi-earth"
                      :color="user.settings.color"></v-text-field>
        <v-text-field class="ml-2" v-model="city" label="City" prepend-inner-icon="mdi-city"
                      :color="user.settings.color"></v-text-field>
      </div>
      <v-text-field v-model="phone" label="Phone" prepend-inner-icon="mdi-phone" :color="user.settings.color"></v-text-field>
      <v-text-field v-model="email" label="Email" prepend-inner-icon="mdi-email" :color="user.settings.color"></v-text-field>
      <v-text-field v-model="website" label="Website" prepend-inner-icon="mdi-web" :color="user.settings.color"></v-text-field>
      <v-text-field v-model="linkedin" label="Linkedin" prepend-inner-icon="mdi-linkedin"
                    :color="user.settings.color"></v-text-field>
      <v-text-field v-model="github" label="GitHub" prepend-inner-icon="mdi-github" :color="user.settings.color"></v-text-field>
    </v-form>
  </EditDialog>
</template>

<script>


import UserModel from "@/models/User.model";
import EditDialog from "@/components/ui/EditDialog";

export default {
  name: 'ContactEditor',
  components: {EditDialog},
  data: () => ({
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
      this.country = this.user.country
      this.city = this.user.city
      this.phone = this.user.phone
      this.email = this.user.email
      this.website = this.user.website
      this.linkedin = this.user.linkedin
      this.github = this.user.github
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
        this.$refs.dialog.hide()
      })
    }
  }
}
</script>
