<template>
  <div class="d-flex align-center font-weight-light  mb-1" style="font-size: 17px">
    <v-icon v-if="icon !== ''" left :color="color+' darken-1'">{{ icon }}</v-icon>
    <div v-if="href">
      <a :href="'//'+href" :class="color+'--text'" class="text--darken-2"
         style="text-decoration: none;"><b>{{ text }}</b></a>
    </div>
    <div v-else :class="color+'--text'" class="text--darken-2"><b>{{ text }}</b></div>
  </div>
</template>
<script>
export default {
  name: 'IconText',
  props: {
    icon: {
      type: String,
      default: ""
    },
    text: {
      type: String,
      default: "Code :)"
    },
    color: {
      type: String,
      default: "grey"
    },
    href: {
      type: String,
      default: null
    },
  }
}
</script>
