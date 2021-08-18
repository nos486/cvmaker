<template>
  <EditDialog ref="dialog" title="Skills" :color="user.settings.color" v-on:show="show" v-on:save="save" edge-less>
    <template v-slot:header>
      <v-btn color="green" text @click="addTab">
        <v-icon>mdi-plus</v-icon>
        ADD
      </v-btn>
    </template>
    <v-tabs v-model="tab" :color="user.settings.color" background-color="grey lighten-4" centered vertical
            hide-slider>

      <v-tab v-for="(skill,index) in skills" :key="index" :title="skill.title">
        <v-icon v-if="skill.icon !== 'mdi-blank'">{{ skill.icon }}</v-icon>
        <div v-else class="text-truncate" style="max-width: 56px">{{ skill.title }}</div>
      </v-tab>

      <v-tabs-items v-model="tab" vertical>
        <v-tab-item v-for="(skill,index) in skills" :key="index">
          <v-form ref="form" class="py-4 px-4">
            <div class="d-flex">
              <v-btn icon :disabled="index===0" title="Move Tab Up" @click="moveTabUp(index)">
                <v-icon>mdi-arrow-up</v-icon>
              </v-btn>
              <v-btn icon :disabled="index===skills.length-1" title="Move Tab Down"
                     @click="moveTabDown(index)">
                <v-icon>mdi-arrow-down</v-icon>
              </v-btn>
              <v-btn class="ml-auto" color="red" text title="Delete Tab" @click="removeTab(index)">
                <v-icon left>mdi-delete</v-icon>
                Delete
              </v-btn>
            </div>

            <v-text-field v-model="skill.title" class="mt-4" label="Title"
                          prepend-inner-icon="mdi-format-title"
                          :color="user.settings.color"></v-text-field>
            <IconSelector v-model="skill.icon" title="Skill Icon"
                          :color="user.settings.color"></IconSelector>
            <v-text-field v-model="skillItemName" label="Add Sub Skill" prepend-inner-icon="mdi-card-plus"
                          :color="user.settings.color" append-icon="mdi-plus-thick"
                          @click:append="addSkillItem(skill)"
                          @keydown.enter="addSkillItem(skill)"></v-text-field>
            <div class="d-flex flex-wrap mt-2">
              <v-chip v-for="(skillItem,index) in skill.list" :key="index" class="mr-1 mb-1"
                      :color="user.settings.color"
                      draggable close dark @click:close="removeSkillItem(skill,index)"
                      @dragover="allowDrop"
                      @drop="skillItemDrop($event,skill.list,index)"
                      @dragstart="skillItemDrag($event,index)">
                {{ skillItem }}
              </v-chip>
            </div>


          </v-form>
        </v-tab-item>
      </v-tabs-items>

    </v-tabs>
  </EditDialog>
</template>

<script>


import {moveItemInArray} from "@/helpers";
import UserModel from "@/models/User.model";
import IconSelector from "@/components/IconSelector";
import EditDialog from "@/components/ui/EditDialog";

export default {
  name: 'SkillsEditor',
  components: {EditDialog, IconSelector},
  data: () => ({
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
      this.tab = null
      this.skills = JSON.parse(JSON.stringify(this.user.skills));
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
        this.$refs.dialog.hide()
      })
    }
  }
}
</script>
