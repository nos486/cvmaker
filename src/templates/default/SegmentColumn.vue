<template>
  <div  :class="{'grey lighten-2':dragEnterCount > 0}"
       @dragover="allowDrop"
       @drop="drop($event)"
       @dragenter="dragenter($event)"
       @dragleave="dragleave($event)"
       @dragend="dragEnd($event)"
  >
    <slot></slot>
  </div>
</template>

<script>
import {addItemToArray, removeItemFromArray} from "@/helpers";
import UserModel from "@/models/User.model";

export default {
  name: "SegmentColumn",
  data: function () {
    return {
      dragEnterCount : 0
    }
  },
  props: {
    templateSettings: {
      type: Object
    },
    name : {
      type : String,
      default: ""
    },
  },
  computed : {
    length(){
      return this.templateSettings[this.name].length
    }
  },
  watch : {
    length(){
      this.dragEnterCount = 0
      this.$store.commit("needToSaveScheme")
    }
  },
  methods: {
    allowDrop(ev) {
      ev.preventDefault();
    },
    dragenter(ev){
      ev.preventDefault(); // needed for IE
      this.dragEnterCount ++
    },
    dragleave(ev){
      this.dragEnterCount --
    },
    dragEnd(ev){
      this.dragEnterCount = 0
    },
    drop(ev) {
      console.log("parent")
      ev.preventDefault();
      let draggedSegmentName = ev.dataTransfer.getData("segmentName");
      let draggedSegmentParent = ev.dataTransfer.getData("segmentParent");
      removeItemFromArray(this.templateSettings[draggedSegmentParent],draggedSegmentName)
      addItemToArray(this.templateSettings[this.name],draggedSegmentName)

      // moveItemInArrayByValue(this.user.settings.templateSettings[this.parent], draggedSegmentName, this.name)
      this.dragEnterCount = 0
    },
  }
}
</script>

<style scoped>

</style>