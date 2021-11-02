<template>
  <EditDialog ref="dialog" title="Highlights" :color="user.settings.color" v-on:show="show" v-on:save="save">
    <v-text-field v-model="newHighlights" label="Add Highlight" prepend-inner-icon="mdi-card-plus"
                  :color="user.settings.color" append-icon="mdi-plus-thick"
                  @click:append="addHighlight" @keydown.enter="addHighlight"></v-text-field>
    <div class="d-flex flex-column">
      <div v-for="(highlight,index) in highlights" :key="index" class="pa-2 mb-1 rounded grey lighten-3"
           draggable="true" @dragover="allowDrop" @drop="itemDrop($event,index)"
           @dragstart="itemDrag($event,index)" style="position: relative; min-height: 36px">

        <div class="d-flex align-center" style="position: absolute;right: 0px;top: 0px">
          <v-btn :color="user.settings.color" @click="removeHighlight(index)" icon>
            <v-icon>mdi-delete-circle</v-icon>
          </v-btn>
        </div>


        {{ highlight }}
      </div>
      <!--      <v-chip v-for="(highlight,index) in highlights" :key="index" class="mr-1 mb-1" :color="user.settings.color"-->
      <!--              draggable close dark @click:close="removeHighlight(index)" @dragover="allowDrop"-->
      <!--              @drop="itemDrop($event,index)" @dragstart="itemDrag($event,index)">-->
      <!--        {{ highlight }}-->
      <!--      </v-chip>-->
    </div>
  </EditDialog>
</template>

<script>


import UserModel from "@/models/User.model";
import {moveItemInArray} from "@/helpers";
import EditDialog from "@/components/ui/EditDialog";

export default {
  name: 'HighlightEditor',
  components: {EditDialog},
  data: () => ({
    newHighlights: "",
    highlights: []
  }),
  props: {
    user: {
      type: UserModel
    }
  },
  computed: {},
  methods: {
    show() {
      this.highlights = [...this.user.highlights]
      this.newHighlights = ""
    },

    addHighlight() {
      if (this.newHighlights.length > 0) {
        this.highlights.push(this.newHighlights)
        this.newHighlights = ""
      }
    },
    removeHighlight(index) {
      this.highlights.splice(index, 1)
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
      moveItemInArray(this.highlights, parseInt(index), ownIndex)
    },
    save() {
      let data = {
        highlights: this.highlights,
      }

      this.$store.dispatch("updateUserData", data).then(() => {
        this.$toast.success("Highlights updated.")
        this.$refs.dialog.hide()
      })
    }
  }
}
</script>
