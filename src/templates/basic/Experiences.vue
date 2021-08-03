<template>
  <item v-if="user.experiences.length > 0" title="Experience" :color="user.settings.color">
    <template v-slot:edit>
      <ExperiencesEditor :user="user"></ExperiencesEditor>
    </template>
    <div v-for="(experience,index) in user.experiences" :key="index" >
      <SubItem :title="experience.title" :icon="experience.icon" :color="user.settings.color">
        <div class="d-flex align-center">
          <b>{{ experience.company }}</b>
          <v-chip :color="user.settings.color" class="darken-2 ml-2" dark small>
            <v-icon left>mdi-calendar</v-icon>
            <strong>
              {{ new Date(experience.startDate).getFullYear() }} – {{ experience.atThisRole ? "Present" : new Date(experience.endDate).getFullYear() }}
            </strong>
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
import ExperiencesEditor from "@/components/editors/ExpriencesEditor";

export default {
  name: 'Experiences',
  components: {ExperiencesEditor, Item, SubItem},
  props: {
    user: {
      type: UserModel
    }
  }
}
</script>