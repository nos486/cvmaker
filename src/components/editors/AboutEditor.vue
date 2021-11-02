<template>
  <EditDialog ref="dialog" title="About" :color="user.settings.color" v-on:show="show" v-on:save="save">
    <v-textarea label="About" v-model="about" :color="user.settings.color" rows="8" no-resize hide-details></v-textarea>
    <small><a href="https://guides.github.com/features/mastering-markdown/" target="_blank">markdown</a> supported.</small>
  </EditDialog>
</template>

<script>


import UserModel from "@/models/User.model";
import EditDialog from "@/components/ui/EditDialog";

export default {
  name: 'AboutEditor',
  components: {EditDialog},
  data: () => ({
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
      this.about = this.user.about
    },
    save() {
      let data = {
        about: this.about
      }

      this.$store.dispatch("updateUserData", data).then(() => {
        this.$toast.success("User updated.")
        this.$refs.dialog.hide()
      })
    }
  }
}
</script>
