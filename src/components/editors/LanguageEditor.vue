<template>
  <div>
    <v-btn icon color="cyan" @click="show">
      <v-icon>mdi-account-edit</v-icon>
    </v-btn>
    <v-dialog v-model="isShow" max-width="450" v-on:click:outside="hide">
      <v-card>
        <v-card-title class="text-h5 grey lighten-4 cyan--text">
          <v-icon left class="cyan--text">mdi-account-edit</v-icon>
          Languages
        </v-card-title>

        <v-card-text class="py-4 px-4 px-sm-8">

          <v-text-field v-model="languageItemName" label="Add Language" prepend-inner-icon="mdi-card-plus"
                        color="cyan" append-icon="mdi-plus-thick"
                        @click:append="addLanguageItem"></v-text-field>
          <div class="d-flex flex-wrap mt-2">
            <v-chip v-for="(language,index) in languages" :key="index" class="mr-1 mb-1" color="cyan"
                    draggable close dark @click:close="removeLanguageItem(index)" @dragover="allowDrop"
                    @drop="itemDrop($event,index)" @dragstart="itemDrag($event,index)">
              {{ language }}
            </v-chip>
          </div>
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
import {moveItemInArray} from "@/helpers";

export default {
  name: 'LanguageEditor',
  components: {},
  data: () => ({
    isShow: false,
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
      this.isShow = true
      this.languages = this.user.languages
      this.languageItemName = ""
    },
    hide() {
      this.isShow = false
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
        this.hide()
      })
    }
  }
}
</script>
