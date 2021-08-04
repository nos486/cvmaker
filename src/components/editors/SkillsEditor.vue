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
            Skills
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

            <v-tab v-for="(skill,index) in skills" :key="index" :title="skill.title">
              <v-icon>{{ skill.icon }}</v-icon>
            </v-tab>

            <v-tabs-items v-model="tab" vertical>
              <v-tab-item v-for="(skill,index) in skills" :key="index">
                <v-form ref="form" class="py-4 px-4">
                  <div class="d-flex">
                    <v-btn icon :disabled="index===0" title="Move Tab Up" @click="moveTabUp(index)">
                      <v-icon>mdi-arrow-up</v-icon>
                    </v-btn>
                    <v-btn icon :disabled="index===skills.length-1" title="Move Tab Down" @click="moveTabDown(index)">
                      <v-icon>mdi-arrow-down</v-icon>
                    </v-btn>
                    <v-btn class="ml-auto" color="red" text title="Delete Tab" @click="removeTab(index)">
                      <v-icon left>mdi-delete</v-icon>
                      Delete
                    </v-btn>
                  </div>

                  <v-text-field v-model="skill.title" class="mt-4" label="Title" prepend-inner-icon="mdi-format-title"
                                color="cyan"></v-text-field>
                  <IconSelector v-model="skill.icon" title="Skill Icon"></IconSelector>
                  <v-text-field v-model="skillItemName" label="Add Sub Skill" prepend-inner-icon="mdi-card-plus"
                                color="cyan" append-icon="mdi-plus-thick"
                                @click:append="addSkillItem(skill)"></v-text-field>
                  <div class="d-flex flex-wrap mt-2">
                    <v-chip v-for="(skillItem,index) in skill.list" :key="index" class="mr-1 mb-1" color="cyan"
                            draggable close dark @click:close="removeSkillItem(skill,index)" @dragover="allowDrop"
                            @drop="skillItemDrop($event,skill.list,index)" @dragstart="skillItemDrag($event,index)">
                      {{ skillItem }}
                    </v-chip>
                  </div>


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


import {moveItemInArray} from "@/helpers";
import UserModel from "@/models/User.model";
import IconSelector from "@/components/IconSelector";

export default {
  name: 'SkillsEditor',
  components: {IconSelector},
  data: () => ({
    isShow: false,
    tab: null,
    skills: [],
    skillItemName: ""
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
      this.tab = null
      this.skills = JSON.parse(JSON.stringify(this.user.skills));
    },
    hide() {
      this.isShow = false
    },
    addTab() {
      this.skills.push({
        icon: "mdi-emoticon",
        title: "",
        list: []
      })

      this.$nextTick(() => {
        this.tab = this.skills.length - 1
      })
    },
    removeTab(index) {
      this.skills.splice(index, 1)
    },
    moveTabUp(index) {
      moveItemInArray(this.skills, index, index - 1)
      this.tab--
    },
    moveTabDown(index) {
      moveItemInArray(this.skills, index, index + 1)
      this.tab++
    },
    addSkillItem(skill) {
      skill.list.push(this.skillItemName)
      this.skillItemName = ""
    },
    /**
     *
     * @param {Object} skill
     * @param {string[]} skill.list
     * @param index
     */
    removeSkillItem(skill, index) {
      skill.list.splice(index, 1)
    },
    allowDrop(ev) {
      ev.preventDefault();
    },
    skillItemDrag(ev, index) {
      ev.dataTransfer.setData("index", index);
    },
    skillItemDrop(ev, array, ownIndex) {
      ev.preventDefault();
      let index = ev.dataTransfer.getData("index");
      moveItemInArray(array, parseInt(index), ownIndex)
    },
    save() {

      let data = {
        "skills": this.skills
      }

      this.$store.dispatch("updateUserData", data).then(() => {
        this.$toast.success("User updated.")
        this.hide()
      })
    }
  }
}
</script>
