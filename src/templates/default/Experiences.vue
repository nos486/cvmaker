<template>
  <item title="Experience" :color="user.settings.color" :hidden="user.experiences.length === 0" :editable="editable">
    <template v-slot:edit>
      <ExperiencesEditor :user="user"></ExperiencesEditor>
    </template>
    <div v-for="(experience,index) in user.experiences" :key="index" >
      <SubItem :title="experience.title" :icon="experience.icon" :color="user.settings.color">
        <div class="d-flex align-center">
          <b class="text-capitalize">{{ experience.company }}</b>
          <ChipDate class="ml-2" :date1="experience.startDate" :date2="experience.endDate" :present="experience.atThisRole" :color="user.settings.color"></ChipDate>
        </div>
        <div class="" style="white-space: pre-line">
          <small>
            {{ experience.description }}
          </small>
        </div>
      </SubItem>
    </div>
  </item>
</template>
<script>

import Item from "@/templates/default/ui/Item"
import SubItem from "@/templates/default/ui/SubItem"
import UserModel from "@/models/User.model";
import {numberToMonthName} from "@/helpers"
import ExperiencesEditor from "@/components/editors/ExpriencesEditor";
import ChipDate from "@/templates/default/ui/ChipDate";

export default {
  name: 'Experiences',
  components: {ChipDate, ExperiencesEditor, Item, SubItem},
  props: {
    user: {
      type: UserModel
    },
    editable: {
      type : Boolean,
      default : true
    },
  },

}
</script>