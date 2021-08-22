<template>
  <div class="segment rounded" :class="{editable,'grey lighten-2':allowDrag,'grey lighten-4':dragEnterCount>0}" :draggable="editable"
       @dragover="allowDrop"
       @drop="drop($event)"
       @dragstart="drag($event)"
       @dragenter="dragenter($event)"
       @dragleave="dragleave($event)"
       @dragend="dragEnd($event)"
  >

      <div v-if="editable" style="position: absolute;width: 100%;z-index: 1">
        <div class="handle flex-fill" @mouseover="handleMouseDown" @mouseleave="handleMouseleave"></div>
      </div>

    <div v-if="editable" class="d-flex align-center" style="position: absolute;right: 0px">
      <v-chip v-if="!allowDrag" small disabled>{{name}}</v-chip>
      <div style="z-index: 2">
        <slot class="ml-2" name="overlay" ></slot>
      </div>
    </div>

    <div class="pa-4">
      <slot></slot>
    </div>
  </div>

</template>

<script>

import UserModel from "@/models/User.model";
import {moveItemInArrayByValue, removeItemFromArray, numberToMonthName, addItemToArray} from "@/helpers";

export default {
  name: "Segment",
  components: {},
  data: function () {
    return {
      allowDrag : false,
      dragEnterCount : 0
    }
  },
  props: {
    user: {
      type: UserModel
    },
    editable: {
      type: Boolean,
      default: true
    },
    name : {
      type : String,
      default: ""
    },
    parent : {
      type : String,
      default: "default"
    }
  },
  computed :{

  },
  mounted() {
  },
  methods: {
    allowDrop(ev) {
      ev.preventDefault();
    },
    handleMouseDown(ev){
      this.allowDrag = true
    },
    handleMouseleave(ev){
      this.allowDrag = false
    },
    drag(ev) {
      if(this.allowDrag){
        ev.dataTransfer.setData("segmentName", this.name);
        ev.dataTransfer.setData("segmentParent", this.parent);
      }else {
        ev.preventDefault();
      }
    },
    dragenter(ev){
      ev.preventDefault(); // needed for IE
      this.dragEnterCount ++
    },
    dragleave(ev){
      this.dragEnterCount --
    },
    dragEnd(ev){
      console.log("end")
      this.dragEnterCount = 0
    },
    drop(ev) {
      console.log("child")

      let draggedSegmentName = ev.dataTransfer.getData("segmentName");
      let draggedSegmentParent = ev.dataTransfer.getData("segmentParent");
      removeItemFromArray(this.user.settings.templateSettings[draggedSegmentParent],draggedSegmentName)
      addItemToArray(this.user.settings.templateSettings[this.parent],draggedSegmentName,this.$vnode.key)

      this.dragEnterCount = 0
      ev.stopPropagation()
    },
  }
}
</script>

<style scoped>
.segment {
  position: relative;
  user-select: none;
}

.handle {
  cursor: move;
  height: 40px;
}

.editable {
  /*border: 1px dotted lightgray;*/
  min-height: 60px;
}

</style>