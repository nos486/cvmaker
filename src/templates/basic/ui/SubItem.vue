<template>
  <div class="mb-4">
    <div class="d-flex align-start justify-space-between">
      <IconText :color="color" :text="title" :icon="icon" class="text-capitalize"></IconText>
      <slot name="header"></slot>
    </div>
    <div class="text-secondary mt-n1">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import IconText from "@/templates/basic/ui/IconText";

export default {
  name: "SubItem",
  components: {IconText},
  props: {
    title: {
      type: String,
      default: "Title"
    },
    icon: {
      type: String,
      default: ""
    },
    color: {
      type: String,
      default: "grey"
    },
  }
}
</script>

<style scoped>

</style>