<template>
  <item title="About" :color="user.settings.color" :hidden="user.about === ''"
        :editable="editable">
    <template v-slot:edit>
      <AboutEditor :user="user"></AboutEditor>
    </template>
    <div style="white-space: pre-line;">{{ user.about }}</div>
  </item>
</template>
<script>
import Item from "@/templates/default/ui/Item"
import UserModel from "@/models/User.model";
import AboutEditor from "@/components/editors/AboutEditor";

export default {
  name: 'About',
  components: {AboutEditor, Item},
  props: {
    user: {
      type: UserModel
    },
    editable: {
      type: Boolean,
      default: true
    },

  }
}
</script>
