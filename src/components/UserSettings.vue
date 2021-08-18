<template>
  <EditDialog ref="dialog" title="Settings" :color="user.settings.color" v-on:show="onShow" v-on:save="onSave" hide-button>
      <v-select v-model="template" :items="templateItems" label="Template"  :color="user.settings.color" :item-color="user.settings.color" prepend-inner-icon="mdi-page-layout-header"></v-select>
      <v-select v-model="color" :items="colorList" label="Color"  :color="user.settings.color" :item-color="user.settings.color" prepend-inner-icon="mdi-format-color-fill">
        <template v-slot:item="{item}" >
          <div :class="item+'--text'">
            <v-icon :color="item">mdi-circle</v-icon>
            {{item}}
          </div>
        </template>
      </v-select>

  </EditDialog>

</template>

<script>


import UserModel from "@/models/User.model";
import IconSelector from "@/components/IconSelector";
import DateSelector from "@/components/DateSelector";
import EditDialog from "@/components/ui/EditDialog";

export default {
  name: 'UserSettings',
  components: {EditDialog},
  data: () => ({
    isFormValid: false,
    template : "",
    templateItems : ["default"],
    color :"",
    colorList : ["red","pink","purple","deep-purple","indigo","blue","light-blue","cyan","teal","green","light-green","lime","amber","orange","deep-orange","brown","blue-grey","grey"]
  }),
  props: {
    user: {
      type: UserModel
    }
  },
  computed: {},
  methods: {
    show(){
      this.$refs.dialog.show()
    },
    onShow() {
      this.template = this.user.settings.template
      this.color = this.user.settings.color
    },
    onSave() {

      let data = {
        settings: {
          color : this.color,
          template : this.template,
          templateSettings : this.user.settings.templateSettings
        }
      }

      this.$store.dispatch("updateUserData", data).then(() => {
        this.$toast.success("User updated.")
        this.$refs.dialog.hide()
      })
    },
  }
}
</script>
