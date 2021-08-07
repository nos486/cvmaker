<template>
  <v-chip :color="color" class="darken-2" dark @mouseenter="focus=true" @mouseleave="focus=false" :class="{normal: focus,dense:!focus}">
    <v-icon>mdi-calendar</v-icon>
    <div class="d-flex align-center text-center ml-2" style="white-space: pre-line;line-height: 10px">
      <div class="font-weight-bold" style="font-size: 12px">
        {{ dateStingToString(date1) }}
      </div>
      <div v-if="date2 != null || present" class="ma-1">-</div>
      <div v-if="date2 != null || present" class="font-weight-bold" style="font-size: 12px">
        {{ present ? "Present" : dateStingToString(date2) }}
      </div>
    </div>
  </v-chip>
</template>

<script>
import IconText from "@/templates/default/ui/IconText";
import {numberToMonthName} from "@/helpers";

export default {
  name: "ChipDate",
  components: {},
  data : ()=>{
    return {
      focus : false
    }
  },
  props: {
    date1: {
      type: String,
      default: null
    },
    date2: {
      type: String,
      default: null
    },
    present : {
      type : Boolean,
      default : false
    },
    month : {
      type : Boolean,
      default : true
    },
    color: {
      type: String,
      default: "grey"
    },
  },
  computed : {

  },
  methods: {
    dateStingToString(date) {
      if(this.focus){
        return numberToMonthName(new Date(date).getMonth()) + "\n" + new Date(date).getFullYear()
      }else {
        return new Date(date).getFullYear()
      }
    }
  }
}
</script>

<style scoped>
.normal {
  height: 30px;
  transition: height 200ms;
}
.dense {
  height: 22px;
  transition: height 200ms;
}
</style>