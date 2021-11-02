<template>
  <item title="About" :color="user.settings.color" :hidden="user.about === ''">
    <div style="white-space: pre-line;" v-html="markdownToHtml"></div>
  </item>
</template>
<script>
import Item from "@/templates/default/ui/Item"
import UserModel from "@/models/User.model";
import marked from "marked"

export default {
  name: 'About',
  components: {Item},
  data: function () {
    return {
      about : ""
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
  },
  computed : {
    markdownToHtml(){
      return marked(this.user.about);
    }
  },
}
</script>

<style>
p {
  margin-bottom: 0px !important;
}
</style>
