<template>
  <v-container v-if="user!=null">
    <v-row justify="center" align="stretch">
      <SegmentColumn class="col-sm-5 col-lg-4 d-flex flex-column grey lighten-3" :template-settings="user.settings.templateSettings" name="c1">
        <div class="mt-8"></div>
        <EmailVerifier class="mt-10" v-if="editable" :user="$store.getters.user"></EmailVerifier>
        <Segment v-for="(item,index) in user.settings.templateSettings.c1" :key="index" :user="user" :editable="editable" :name="item" parent="c1" class="mt-10">
          <template v-slot:overlay>
            <BasicEditor v-if="item === 'basic'" :user="user"></BasicEditor>
            <ContactEditor v-if="item === 'contact'" :user="user"></ContactEditor>
            <SkillsEditor v-if="item === 'skills'" :user="user"></SkillsEditor>
            <LanguageEditor v-if="item === 'languages'" :user="user"></LanguageEditor>
            <HighlightEditor v-if="item === 'highlights'" :user="user"></HighlightEditor>
            <AboutEditor v-if="item === 'about'" :user="user"></AboutEditor>
            <ExperiencesEditor v-if="item === 'experiences'" :user="user"></ExperiencesEditor>
            <EducationsEditor v-if="item === 'educations'" :user="user"></EducationsEditor>
            <LicensesEditor v-if="item === 'licenses'" :user="user"></LicensesEditor>
          </template>

          <UserBasic v-if="item === 'basic'" :user="user"></UserBasic>
          <Contact v-if="item === 'contact'" :user="user"></Contact>
          <Skills v-if="item === 'skills'" :user="user"></Skills>
          <Languages v-if="item === 'languages'" :user="user"></Languages>
          <Highlights v-if="item === 'highlights'" :user="user"></Highlights>
          <About v-if="item === 'about'" :user="user"></About>
          <Experiences v-if="item === 'experiences'" :user="user"></Experiences>
          <Education v-if="item === 'educations'" :user="user"></Education>
          <Licenses v-if="item === 'licenses'" :user="user"></Licenses>
        </Segment>
        <div class="mb-8"></div>
      </SegmentColumn>

      <SegmentColumn class="col-sm-7" :template-settings="user.settings.templateSettings" name="c2">
        <div class="mt-16"></div>
        <Segment v-for="(item,index) in user.settings.templateSettings.c2" :key="index" :user="user" :editable="editable" :name="item" parent="c2" class="mt-10">
          <template v-slot:overlay>
            <BasicEditor v-if="item === 'basic'" :user="user"></BasicEditor>
            <ContactEditor v-if="item === 'contact'" :user="user"></ContactEditor>
            <SkillsEditor v-if="item === 'skills'" :user="user"></SkillsEditor>
            <LanguageEditor v-if="item === 'languages'" :user="user"></LanguageEditor>
            <HighlightEditor v-if="item === 'highlights'" :user="user"></HighlightEditor>
            <AboutEditor v-if="item === 'about'" :user="user"></AboutEditor>
            <ExperiencesEditor v-if="item === 'experiences'" :user="user"></ExperiencesEditor>
            <EducationsEditor v-if="item === 'educations'" :user="user"></EducationsEditor>
            <LicensesEditor v-if="item === 'licenses'" :user="user"></LicensesEditor>
          </template>

          <UserBasic v-if="item === 'basic'" :user="user"></UserBasic>
          <Contact v-if="item === 'contact'" :user="user"></Contact>
          <Skills v-if="item === 'skills'" :user="user"></Skills>
          <Languages v-if="item === 'languages'" :user="user"></Languages>
          <Highlights v-if="item === 'highlights'" :user="user"></Highlights>
          <About v-if="item === 'about'" :user="user"></About>
          <Experiences v-if="item === 'experiences'" :user="user"></Experiences>
          <Education v-if="item === 'educations'" :user="user"></Education>
          <Licenses v-if="item === 'licenses'" :user="user"></Licenses>
        </Segment>
        <div class="mb-8"></div>

      </SegmentColumn>
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
import Segment from "@/components/Segment";
import BasicEditor from "@/components/editors/BasicEditor";
import ContactEditor from "@/components/editors/ContactEditor";
import Vue from "vue";
import vuetify from "@/plugins/vuetify";
import SkillsEditor from "@/components/editors/SkillsEditor";
import LanguageEditor from "@/components/editors/LanguageEditor";
import AboutEditor from "@/components/editors/AboutEditor";
import EducationsEditor from "@/components/editors/EducationsEditor";
import ExperiencesEditor from "@/components/editors/ExpriencesEditor";
import LicensesEditor from "@/components/editors/LicensesEditor";
import SegmentColumn from "@/templates/default/SegmentColumn";
import EmailVerifier from "@/components/ui/EmailVerifier";
import Highlights from "@/templates/default/Highlights";
import HighlightEditor from "@/components/editors/HighlightEditor";

export default {
  name: 'Default',

  components: {
    HighlightEditor,
    Highlights,
    EmailVerifier,
    SegmentColumn,
    LicensesEditor,
    ExperiencesEditor,
    EducationsEditor,
    AboutEditor,
    LanguageEditor,
    SkillsEditor,
    ContactEditor,
    BasicEditor,
    Segment,
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

  mounted() {

  },
  watch: {},

  methods: {}
}
</script>
