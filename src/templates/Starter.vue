<template>
    <v-container>
      <v-row align="start" justify="center">
        <div class="col-sm-6 col-md-5 col-xl-4 d-flex flex-column px-5 grey lighten-3">
          <UserSummery :user="user" class="mt-16"></UserSummery>
          <Contact :user="user" class="mt-10"></Contact>
          <Skills :user="user" class="mt-10"></Skills>
          <Languages :user="user" class="mt-10 mb-10"></Languages>
        </div>
        <div class="col-sm-6 col-md-7 p-4 ">
<!--          <div class="blue" style="width: 100%;height: 600px">-->
<!--dd-->
<!--          </div>-->
        </div>
        <div class="d-none d-xl-flex flex-column align-items-center col-xl-1 grey lighten-3 position-relative">
sdssss
        </div>
      </v-row>
    </v-container>
<!--    <div class="container-fluid container-lg">-->
<!--        <div v-if="user!== null" class="row">-->
<!--            <div class="col-sm-6 col-md-5 col-xl-4 d-flex flex-column p-4 bg-grey lighten-8">-->

<!--                <UserSummery :user="user" class="mt-5"/>-->
<!--                <Contact :user="user" class="mt-5"/>-->
<!--                <Skills />-->
<!--                <Languages :user="user" class="mt-5 mb-5"/>-->
<!--            </div>-->
<!--            <div class="col-sm-6 col-md-7 container p-4 ">-->
<!--                <About :user="user" class="mt-5"/>-->
<!--                <Experience :user="user" class="mt-5"/>-->
<!--                &lt;!&ndash;                <Education class="mt-5"/>&ndash;&gt;-->
<!--                &lt;!&ndash;                <Licenses class="mt-5"/>&ndash;&gt;-->
<!--            </div>-->

<!--            <div class="d-none d-xl-flex flex-column align-items-center col-xl-1 bg-grey lighten-8 position-relative">-->
<!--                &lt;!&ndash;                <div :class="'bg-'+$store.getters.mainColor" class="position-absolute h-100 start-0 lighten-8" style="width: 5px"></div>&ndash;&gt;-->
<!--                &lt;!&ndash;                <ResumeDownload class="mt-4"/>&ndash;&gt;-->
<!--                &lt;!&ndash;                <ShuffleColor class="mt-2"/>&ndash;&gt;-->
<!--            </div>-->
<!--        </div>-->

<!--    </div>-->
</template>
<script>
import axios from "axios";
import config from "@/config";
import UserModel from "@/models/User.model";
import UserSummery from "@/templates/basic/UserSummery";
import Contact from "@/templates/basic/Contact";
import Skills from "@/templates/basic/Skills";
import Languages from "@/templates/basic/Languages";
import About from "@/templates/basic/About";
import Experience from "@/templates/basic/Experience";

export default {
    name: 'Starter',
    components: {
      Languages,
      Skills,
      Contact,
      UserSummery
        // Experience,
        // About, Languages, Skills, Contact, UserSummery
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