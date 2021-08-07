<template>
  <EditDialog ref="dialog" title="Educations" :color="user.settings.color" v-on:show="show" v-on:save="save" edge-less>
    <template v-slot:header>
      <v-btn color="green" text @click="addTab">
        <v-icon>mdi-plus</v-icon>
        ADD
      </v-btn>
    </template>

    <v-tabs v-model="tab" :color="user.settings.color" background-color="grey lighten-4" centered vertical hide-slider>

      <v-tab v-for="(education,index) in educations" :key="index" :title="education.field">
        <div class="text-truncate" style="max-width: 56px">
          {{ index+1 }}
        </div>
      </v-tab>

      <v-tabs-items v-model="tab" vertical >
        <v-tab-item v-for="(education,index) in educations" :key="index">
          <v-form ref="form" class="py-4 px-4">
            <div class="d-flex">
              <v-btn icon :disabled="index===0" title="Move Tab Up" @click="moveTabUp(index)">
                <v-icon>mdi-arrow-up</v-icon>
              </v-btn>
              <v-btn icon :disabled="index===educations.length-1" title="Move Tab Down" @click="moveTabDown(index)">
                <v-icon>mdi-arrow-down</v-icon>
              </v-btn>
              <v-btn class="ml-auto" color="red" text title="Delete Tab" @click="removeTab(index)">
                <v-icon left>mdi-delete</v-icon>
                Delete
              </v-btn>
            </div>
            <v-form :ref="'formEducations'+index" v-model="isFormValid">
              <v-text-field v-model="education.school" class="mt-4" label="School" prepend-inner-icon="mdi-office-building" :color="user.settings.color" :rules="schoolRules"></v-text-field>
              <v-text-field v-model="education.field" label="Field" prepend-inner-icon="mdi-school" :color="user.settings.color" :rules="fieldRules"></v-text-field>
              <v-text-field v-model="education.degree" label="Degree" prepend-inner-icon="mdi-license" :color="user.settings.color" :rules="degreeRules"></v-text-field>
              <DateSelector title="Start Date" v-model="education.startDate" required></DateSelector>
              <DateSelector title="End Date" v-model="education.endDate" required></DateSelector>
              <v-textarea v-model="education.description" :color="user.settings.color" rows="3" label="Description" hide-details></v-textarea>
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
  name: 'EducationsEditor',
  components: {EditDialog, DateSelector},
  data: () => ({
    tab: null,
    isFormValid: true,
    educations: [],
    schoolRules: [
      v => !!v || 'School is required',
    ],
    fieldRules: [
      v => !!v || 'Field is required',
    ],
    degreeRules: [
      v => !!v || 'Degree is required',
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
      this.educations = JSON.parse(JSON.stringify(this.user.educations));
    },
    hide() {
      this.isShow = false
    },

    addTab() {
      this.educations.push({
        school: "",
        degree : "",
        field : "",
        startDate : null,
        endDate : null,
        description : ""
      })

      this.$nextTick(() => {
        this.tab = this.educations.length - 1
      })
    },
    removeTab(index) {
      this.educations.splice(index, 1)
    },
    moveTabUp(index) {
      moveItemInArray(this.educations, index, index - 1)
      this.tab--
    },
    moveTabDown(index) {
      moveItemInArray(this.educations, index, index + 1)
      this.tab++
    },
    reviewTabs(index,callback){
      this.$nextTick(() => {
        this.tab = index
        if(index < this.educations.length - 1){
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
      let data = {
        "educations": this.educations
      }

      // review tabs for render $refs for form check
      this.reviewTabs(0,()=>{

        //find the tab with validation error
        let tab = -1
        this.educations.forEach((value, index) => {
          let f = `formEducations${index}`
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
    }
  }
}
</script>
