<template>
  <div>
    <v-btn icon color="cyan" @click="show">
      <v-icon>mdi-account-edit</v-icon>
    </v-btn>
    <v-dialog v-model="isShow" max-width="450" v-on:click:outside="hide">
      <v-card>
        <v-card-title class="d-flex justify-space-between text-h5 grey lighten-4 cyan--text">
          <div class="d-flex align-center">
            <v-icon left class="cyan--text">mdi-account-edit</v-icon>
            Educations
          </div>
          <div class="d-flex align-center ml-2">
            <v-btn color="green" text @click="addTab">
              <v-icon>mdi-plus</v-icon>
              ADD
            </v-btn>
          </div>
        </v-card-title>

        <div class="d-flex flex-column pa-0">

          <v-tabs v-model="tab" color="cyan" background-color="grey lighten-4" centered vertical hide-slider>

            <v-tab v-for="(education,index) in educations" :key="index" :title="education.title">
              <div class="text-truncate" style="max-width: 50px">
              {{ education.field === "" ? index+1 : education.field }}
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
                    <v-text-field v-model="education.school" class="mt-4" label="School" prepend-inner-icon="mdi-office-building" color="cyan" :rules="schoolRules"></v-text-field>
                    <v-text-field v-model="education.field" label="Field" prepend-inner-icon="mdi-school" color="cyan" :rules="fieldRules"></v-text-field>
                    <v-text-field v-model="education.degree" label="Degree" prepend-inner-icon="mdi-license" color="cyan" :rules="degreeRules"></v-text-field>
                    <DateSelector title="Start Date" v-model="education.startDate" required></DateSelector>
                    <DateSelector title="End Date" v-model="education.endDate" required></DateSelector>
                    <v-textarea v-model="education.description" color="cyan" rows="3" label="Description" hide-details></v-textarea>
                  </v-form>

                </v-form>
              </v-tab-item>
            </v-tabs-items>

          </v-tabs>
          
        </div>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="grey" text @click="hide">
            Cancel
          </v-btn>
          <v-btn color="cyan" text @click="save">
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>


</template>

<script>

import {moveItemInArray} from "@/helpers"
import UserModel from "@/models/User.model";
import IconSelector from "@/components/IconSelector";
import DateSelector from "@/components/DateSelector";

export default {
  name: 'EducationsEditor',
  components: {DateSelector},
  data: () => ({
    isShow: false,
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
      this.isShow = true
      // this.tab = null
      this.educations = JSON.parse(JSON.stringify(this.user.educations));
      console.log(this.educations)
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
            this.hide()
          })
        }
      })
    }
  }
}
</script>
