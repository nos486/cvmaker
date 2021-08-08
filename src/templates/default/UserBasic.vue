<template>
  <div class="d-flex flex-column align-center justify-center">
    <div class="" style="width: 100%">
      <BasicEditor v-if="editable" :user="user" class="float-right"></BasicEditor>
    </div>

    <v-avatar size="200" class="" >
      <v-img :src="user.avatar"></v-img>
    </v-avatar>
    <div class="d-flex flex-column">

      <div :class="user.settings.color+'--text'" class="d-flex align-center justify-end mb-n4">
        <div v-if="user.birthday">
          {{ dateStingToString(user.birthday) }}
          <v-icon class="mb-3" :color="user.settings.color">mdi-cake-variant</v-icon>
        </div>

      </div>
      <div :class="user.settings.color+'--text'" class="display-3 font-weight-thin text--darken-3 text-capitalize">
        <b>{{ user.firstName }}</b> {{ user.lastName }}
      </div>

      <div v-if="user.headLine !== ''" class="d-flex align-center text-h6 font-weight-light mt-n2">
        <v-icon left :color="user.settings.color" size="26">{{ user.icon }}</v-icon>
        {{ user.headLine }}
      </div>
    </div>
  </div>
</template>

<script>

import UserModel from "@/models/User.model";
import BasicEditor from "@/components/editors/BasicEditor";
import {numberToMonthName} from "@/helpers";

export default {
  name: "UserBasic",
  components: {
    BasicEditor,
  },
  data: function () {
    return {
    }
  },
  props: {
    user: {
      type: UserModel
    },
    editable: {
      type : Boolean,
      default : true
    },
  },
  methods: {
    dateStingToString(date) {
      return numberToMonthName(new Date(date).getMonth()) + " " + new Date(date).getFullYear()
    }
  }
}
</script>

<style scoped>

</style>