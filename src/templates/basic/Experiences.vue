<template>
  <item v-if="user.experiences.length > 0" title="Experience" :color="user.settings.color">
    <template v-slot:edit>
      <ExperiencesEditor :user="user"></ExperiencesEditor>
    </template>
    <div v-for="(experience,index) in user.experiences" :key="index" >
      <SubItem :title="experience.title" :icon="experience.icon" :color="user.settings.color">
        <div class="d-flex align-center">
          <b class="text-capitalize">{{ experience.company }}</b>
          <v-chip :color="user.settings.color" class="darken-2 text--darken-2 ml-2" dark outlined>
            <v-icon left>mdi-calendar</v-icon>
            <div class="d-flex align-center text-center" style="white-space: pre-line;line-height: 10px">
              <small class="font-weight-bold">
                {{ dateStingToString(experience.startDate) }}
              </small>
              <div class="ma-1">-</div>
              <small class="font-weight-bold">
                 {{ experience.atThisRole ? "Present" : dateStingToString(experience.endDate) }}
              </small>
            </div>
          </v-chip>
        </div>
        <div class="ml-4">
          <small>
            {{ experience.description }}
          </small>
        </div>
      </SubItem>
    </div>
  </item>
</template>
<script>

import Item from "@/templates/basic/ui/Item"
import SubItem from "@/templates/basic/ui/SubItem"
import UserModel from "@/models/User.model";
import {numberToMonthName} from "@/helpers"
import ExperiencesEditor from "@/components/editors/ExpriencesEditor";

export default {
  name: 'Experiences',
  components: {ExperiencesEditor, Item, SubItem},
  props: {
    user: {
      type: UserModel
    }
  },
  methods :{
    dateStingToString(date){
      return  numberToMonthName(new Date(date).getMonth()) + "\n" + new Date(date).getFullYear()
    }
  }
}
</script>