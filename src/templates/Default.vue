<template>
  <v-container v-if="user!=null">
    <v-row justify="center">
      <!--      <v-row align="align-stretch" justify="center" >-->

      <div class="col-sm-6 col-md-5 col-lg-4 d-flex flex-column px-8 grey lighten-3">
        <UserBasic :user="user" :editable="editable" class="mt-16"></UserBasic>
        <Contact :user="user" :editable="editable" class="mt-16"></Contact>
        <Skills :user="user" :editable="editable" class="mt-10"></Skills>
        <Languages :user="user" :editable="editable" class="mt-10 mb-10"></Languages>
      </div>
      <div class="col-sm-6 col-md-7 px-8">
        <About :user="user" :editable="editable" class="mt-16"></About>
        <Experiences :user="user" :editable="editable" class="mt-10"></Experiences>
        <Education :user="user" :editable="editable" class="mt-10"></Education>
        <Licenses :user="user" :editable="editable" class="mt-10"></Licenses>

      </div>
      <div class="d-none d-lg-flex col-lg-1 grey lighten-3 ">

      </div>
    </v-row>
  </v-container>

</template>
<script>

import Contact from "@/templates/default/Contact";
import Skills from "@/templates/default/Skills";
import Languages from "@/templates/default/Languages";
import About from "@/templates/default/About";
import Experiences from "@/templates/default/Experiences";
import Education from "@/templates/default/Education";
import Licenses from "@/templates/default/Licenses";
import UserBasic from "@/templates/default/UserBasic";

export default {
  name: 'Default',
  components: {
    UserBasic,
    Licenses,
    Education,
    Experiences,
    About,
    Languages,
    Skills,
    Contact,
  },
  props: {
    user: {
      type: Object
    },
    editable: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {}
  },
  watch: {},

  methods: {}
}
</script>