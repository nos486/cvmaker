<template>
    <v-img :src="generateUrl()"></v-img>
</template>

<script>
import axios from "axios";
import config from "@/config";

export default {
  name: 'AvatarImage',
  components: {},
  props: {
    id: {
      type : String,
      require: true
    },
  },
  data() {
    return {
      url: null,
    }
  },
  mounted() {
  },
  watch: {

  },
  methods: {
    generateUrl(){
      return config.apiUrl + `/avatar/${this.id}`
    }
  }
}
</script>

<style scoped>

</style>
