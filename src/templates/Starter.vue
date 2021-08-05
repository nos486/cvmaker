<template>
    <v-container v-if="user!=null" >
      <v-row align="align-stretch" justify="center" >

        <div class="col-sm-6 col-md-5 col-lg-4 d-flex flex-column px-8 grey lighten-3">
          <UserBasic :user="user" class="mt-16"></UserBasic>
          <Contact :user="user" class="mt-16"></Contact>
          <Skills :user="user" class="mt-10"></Skills>
          <Languages :user="user" class="mt-10 mb-10"></Languages>
        </div>
        <div class="col-sm-6 col-md-7 px-8">
          <About :user="user" class="mt-16"></About>
          <Experiences :user="user" class="mt-10"></Experiences>
          <Education :user="user" class="mt-10"></Education>
          <Licenses :user="user" class="mt-10"></Licenses>

        </div>
        <div class="d-none d-lg-flex col-lg-1 grey lighten-3 ">

        </div>
      </v-row>
    </v-container>

</template>
<script>

import Contact from "@/templates/basic/Contact";
import Skills from "@/templates/basic/Skills";
import Languages from "@/templates/basic/Languages";
import About from "@/templates/basic/About";
import Experiences from "@/templates/basic/Experiences";
import Education from "@/templates/basic/Education";
import Licenses from "@/templates/basic/Licenses";
import UserBasic from "@/templates/basic/UserBasic";

export default {
    name: 'Starter',
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
        value: Object,
        user : Object
    },

    data() {
        return {
        }
    },
    watch: {},

    methods: {
    }
}
</script>