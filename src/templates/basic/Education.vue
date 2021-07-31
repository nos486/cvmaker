<template>
  <item v-if="user.educations.length > 0" title="Educations" :color="user.settings.color">
    <div v-for="(education,index) in user.educations" :key="index" >
      <SubItem :title="education.school"  :color="user.settings.color">
        <div class="d-flex align-center">
          <b>{{ education.field }}</b>
          <v-chip :color="user.settings.color" class="darken-2 ml-2" dark small>
            <v-icon left>mdi-school</v-icon>
            <strong>
              {{ education.degree}}
            </strong>
          </v-chip>
        </div>
        <div >
          <small>
            {{ education.startDate.getFullYear() }} - {{ education.endDate.getFullYear()}}
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

export default {
  name: 'Education',
  components: {Item, SubItem},
  props: {
    user: {
      type: UserModel
    }
  }
}
</script>