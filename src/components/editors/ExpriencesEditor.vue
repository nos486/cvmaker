<template>
  <EditDialog ref="dialog" title="Experiences" :color="user.settings.color" v-on:show="show" v-on:save="save" edge-less>
    <template v-slot:header>
      <v-btn color="green" text @click="addTab">
        <v-icon>mdi-plus</v-icon>
        ADD
      </v-btn>
    </template>

    <v-tabs v-model="tab" :color="user.settings.color" background-color="grey lighten-4" centered vertical hide-slider>

      <v-tab v-for="(experience,index) in experiences" :key="index" :title="experience.title">
        <v-icon>{{ experience.icon }}</v-icon>
      </v-tab>

      <v-tabs-items v-model="tab" vertical >
        <v-tab-item v-for="(experience,index) in experiences" :key="index">
          <v-form ref="form" class="py-4 px-4">
            <div class="d-flex">
              <v-btn icon :disabled="index===0" title="Move Tab Up" @click="moveTabUp(index)">
                <v-icon>mdi-arrow-up</v-icon>
              </v-btn>
              <v-btn icon :disabled="index===experiences.length-1" title="Move Tab Down" @click="moveTabDown(index)">
                <v-icon>mdi-arrow-down</v-icon>
              </v-btn>
              <v-btn class="ml-auto" color="red" text title="Delete Tab" @click="removeTab(index)">
                <v-icon left>mdi-delete</v-icon>
                Delete
              </v-btn>
            </div>
            <v-form :ref="'formExperience'+index" v-model="isFormValid">
              <v-text-field v-model="experience.title" class="mt-4" label="Title" prepend-inner-icon="mdi-format-title" :color="user.settings.color" :rules="titleRules"></v-text-field>
              <IconSelector v-model="experience.icon" title="Experience Icon"></IconSelector>
              <v-text-field v-model="experience.company" class="mt-2" label="Company" prepend-inner-icon="mdi-office-building" :color="user.settings.color" :rules="companyRules"></v-text-field>
              <DateSelector title="Start Date" v-model="experience.startDate" :color="user.settings.color" required></DateSelector>
              <div class="d-flex align-center my-n2">
                <v-icon left>mdi-account-tie</v-icon>
                Currently working in this role:
                <v-switch v-model="experience.atThisRole" class="ml-auto" :color="user.settings.color" dense ></v-switch>
              </div>
              <DateSelector v-if="! experience.atThisRole" title="End Date" v-model="experience.endDate" :color="user.settings.color" required></DateSelector>
              <v-textarea v-model="experience.description" :color="user.settings.color" rows="3" label="Description" hide-details></v-textarea>
            </v-form>

          </v-form>
        </v-tab-item>
      </v-tabs-items>

    </v-tabs>
  </EditDialog>
</template>

<script>

import {moveItemInArray} from "@/helpers"
import UserModel from "@/models/User.model";
import IconSelector from "@/components/IconSelector";
import DateSelector from "@/components/DateSelector";
import EditDialog from "@/components/ui/EditDialog";

export default {
  name: 'ExperiencesEditor',
  components: {EditDialog, DateSelector, IconSelector},
  data: () => ({
    tab: null,
    isFormValid: true,
    experiences: [],
    titleRules: [
      v => !!v || 'Title is required',
    ],
    companyRules: [
      v => !!v || 'Company is required',
    ],
  }),
  props: {
    user: {
      type: UserModel
    }
  },
  computed: {},
  methods: {
    show() {
      // this.tab = null
      this.experiences = JSON.parse(JSON.stringify(this.user.experiences));
    },
    hide() {
      this.isShow = false
    },

    addTab() {
      this.experiences.push({
        title: "",
        icon: "mdi-emoticon",
        company : "",
        startDate : null,
        endDate : null,
        atThisRole : false,
        description : ""
      })

      this.$nextTick(() => {
        this.tab = this.experiences.length - 1
      })
    },
    removeTab(index) {
      this.experiences.splice(index, 1)
    },
    moveTabUp(index) {
      moveItemInArray(this.experiences, index, index - 1)
      this.tab--
    },
    moveTabDown(index) {
      moveItemInArray(this.experiences, index, index + 1)
      this.tab++
    },
    reviewTabs(index,callback){
      this.$nextTick(() => {
        this.tab = index
        if(index < this.experiences.length - 1){
          setTimeout(()=>{
            this.reviewTabs(index+1,callback)
          },400)
        }else {
          setTimeout(()=>{
            callback()
          },400)

        }
      })
    },
    save() {
      // review tabs for render $refs for form check
      this.reviewTabs(0,()=>{
        //if atThisRole is true but set end data before
        this.experiences.map(((value, index) => {
          if (value.atThisRole){
            value.endDate = null
          }
        }))

        //find the tab with validation error
        let tab = -1
        this.experiences.forEach((value, index) => {
          let f = `formExperience${index}`
          if(!this.$refs[f][0].validate()) tab = index
        })
        if(tab !== -1){
          //move to the tab has an error
          this.$nextTick(()=>{
            this.tab = tab
          })
        }else {
          this.$store.dispatch("updateUserData", data).then(() => {
            this.$toast.success("User updated.")
            this.tab = null
            this.$refs.dialog.hide()
          })
        }
      })

      let data = {
        "experiences": this.experiences
      }




    }
  }
}
</script>
