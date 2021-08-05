<template>
  <div>
    <v-btn icon color="cyan" @click="show">
      <v-icon>mdi-account-edit</v-icon>
    </v-btn>
    <v-dialog v-model="isShow" max-width="750" v-on:click:outside="hide">
      <v-card>
        <v-card-title class="d-flex justify-space-between text-h5 grey lighten-4 cyan--text">
          <div class="d-flex align-center">
            <v-icon left class="cyan--text">mdi-account-edit</v-icon>
            Licenses
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

            <v-tab v-for="(license,index) in licenses" :key="index" :title="license.name">
              <div class="text-truncate" style="max-width: 56px">
              {{ index+1 }}
              </div>
            </v-tab>

            <v-tabs-items v-model="tab" vertical >
              <v-tab-item v-for="(license,index) in licenses" :key="index">
                <v-form ref="form" class="py-4 px-4">
                  <div class="d-flex">
                    <v-btn icon :disabled="index===0" title="Move Tab Up" @click="moveTabUp(index)">
                      <v-icon>mdi-arrow-up</v-icon>
                    </v-btn>
                    <v-btn icon :disabled="index===license.length-1" title="Move Tab Down" @click="moveTabDown(index)">
                      <v-icon>mdi-arrow-down</v-icon>
                    </v-btn>
                    <v-btn class="ml-auto" color="red" text title="Delete Tab" @click="removeTab(index)">
                      <v-icon left>mdi-delete</v-icon>
                      Delete
                    </v-btn>
                  </div>
                  <v-form :ref="'formLicenses'+index" v-model="isFormValid">
                    <v-text-field v-model="license.name" class="mt-4" label="Name" prepend-inner-icon="mdi-license" color="cyan" :rules="nameRules"></v-text-field>
                    <v-text-field v-model="license.issuingOrganization" label="Issuing Organization" prepend-inner-icon="mdi-office-building" color="cyan" :rules="issuingOrganizationRules"></v-text-field>
                    <DateSelector title="Issue Date" v-model="license.issueDate" required></DateSelector>
                    <v-text-field v-model="license.credentialID" label="Credential ID" prepend-inner-icon="mdi-identifier" color="cyan" ></v-text-field>
                    <v-text-field v-model="license.credentialUrl" label="Credential Url" prepend-inner-icon="mdi-web" color="cyan" ></v-text-field>
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
  name: 'LicensesEditor',
  components: {DateSelector},
  data: () => ({
    isShow: false,
    tab: null,
    isFormValid: true,
    licenses: [],
    nameRules: [
      v => !!v || 'School is required',
    ],
    issuingOrganizationRules: [
      v => !!v || 'Field is required',
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
      this.licenses = JSON.parse(JSON.stringify(this.user.licenses));
    },
    hide() {
      this.isShow = false
    },

    addTab() {
      this.licenses.push({
        name: "",
        issuingOrganization : "",
        issueDate : null,
        credentialID : "",
        credentialUrl : ""
      })

      this.$nextTick(() => {
        this.tab = this.licenses.length - 1
      })
    },
    removeTab(index) {
      this.licenses.splice(index, 1)
    },
    moveTabUp(index) {
      moveItemInArray(this.licenses, index, index - 1)
      this.tab--
    },
    moveTabDown(index) {
      moveItemInArray(this.licenses, index, index + 1)
      this.tab++
    },
    reviewTabs(index,callback){
      this.$nextTick(() => {
        this.tab = index
        if(index < this.licenses.length - 1){
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
        "licenses": this.licenses
      }
      console.log(data)

      // review tabs for render $refs for form check
      this.reviewTabs(0,()=>{

        //find the tab with validation error
        let tab = -1
        this.licenses.forEach((value, index) => {
          let f = `formLicenses${index}`
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
