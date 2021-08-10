<template>
  <div>
    <v-avatar v-if="user.avatar !== ''" :size="size" class="" >
      <v-img :src="user.avatar"></v-img>
    </v-avatar>
    <v-icon v-else :size="size">mdi-account-circle</v-icon>
  </div>

</template>

<script>
import config from "@/config";
import User from "@/models/User.model";

export default {
  name: 'Avatar',
  components: {},
  props: {
    user: {
      type : User,
      require: true
    },
    size: {
      type : Number,
      default: 60
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

  }
}
</script>

<style scoped>

</style>
