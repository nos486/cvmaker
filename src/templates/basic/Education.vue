<template>
  <item v-if="user.educations.length > 0" title="Educations" :color="user.settings.color">
    <template v-slot:edit>
      <EducationsEditor :user="user"></EducationsEditor>
    </template>
    <div v-for="(education,index) in user.educations" :key="index" >
      <SubItem :title="education.school"  :color="user.settings.color">
        <div class="d-flex align-center">
          <b>{{ education.field }}</b> <div class="ml-1">({{ education.degree}})</div>
        </div>
        <ChipDate :date1="education.startDate" :date2="education.endDate" :color="user.settings.color"></ChipDate>
      </SubItem>
    </div>
  </item>
</template>
<script>

import Item from "@/templates/basic/ui/Item"
import SubItem from "@/templates/basic/ui/SubItem"
import UserModel from "@/models/User.model";
import EducationsEditor from "@/components/editors/EducationsEditor";
import {numberToMonthName} from "@/helpers";
import ChipDate from "@/templates/basic/ui/ChipDate";

export default {
  name: 'Education',
  components: {ChipDate, EducationsEditor, Item, SubItem},
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