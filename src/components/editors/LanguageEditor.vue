<template>
  <EditDialog ref="dialog" title="Languages" :color="user.settings.color" v-on:show="show" v-on:save="save">
    <v-text-field v-model="languageItemName" label="Add Language" prepend-inner-icon="mdi-card-plus"
                  :color="user.settings.color" append-icon="mdi-plus-thick"
                  @click:append="addLanguageItem"></v-text-field>
    <div class="d-flex flex-wrap mt-2">
      <v-chip v-for="(language,index) in languages" :key="index" class="mr-1 mb-1" :color="user.settings.color"
              draggable close dark @click:close="removeLanguageItem(index)" @dragover="allowDrop"
              @drop="itemDrop($event,index)" @dragstart="itemDrag($event,index)">
        {{ language }}
      </v-chip>
    </div>
  </EditDialog>
</template>

<script>


import UserModel from "@/models/User.model";
import {moveItemInArray} from "@/helpers";
import EditDialog from "@/components/ui/EditDialog";

export default {
  name: 'LanguageEditor',
  components: {EditDialog},
  data: () => ({
    languageItemName : "",
    languages : []
  }),
  props: {
    user: {
      type: UserModel
    }
  },
  computed: {},
  methods: {
    show() {
      this.languages = this.user.languages
      this.languageItemName = ""
    },

    addLanguageItem(){
      this.languages.push(this.languageItemName)
      this.languageItemName = ""
    },
    removeLanguageItem(index){
      this.languages.splice(index,1)
    },
    allowDrop(ev) {
      ev.preventDefault();
    },
    itemDrag(ev, index) {
      ev.dataTransfer.setData("index", index);
    },
    itemDrop(ev, ownIndex) {
      ev.preventDefault();
      let index = ev.dataTransfer.getData("index");
      moveItemInArray(this.languages, parseInt(index), ownIndex)
    },
    save() {
      let data = {
        languages: this.languages,
      }

      this.$store.dispatch("updateUserData", data).then(() => {
        this.$toast.success("Languages updated.")
        this.$refs.dialog.hide()
      })
    }
  }
}
</script>
