<template>
  <Item title="Skills" :color="user.settings.color" :hidden="user.educations.length === 0" :editable="editable">
    <template v-slot:edit>
      <SkillsEditor :user="user"></SkillsEditor>
    </template>
    <SkillItems v-for="(skill,index) in user.skills" :key="index" :color="user.settings.color" :title="skill.title"
                :icon="skill.icon" :list="skill.list"></SkillItems>
  </Item>
</template>
<script>
import Item from "@/templates/default/ui/Item"
import SkillItems from "@/templates/default/ui/SkilIltems"
import UserModel from "@/models/User.model";
import SkillsEditor from "@/components/editors/SkillsEditor";

export default {
  name: 'Skills',
  components: {SkillsEditor, Item, SkillItems},
  data: function () {
    return {}
  },
  props: {
    user: {
      type: UserModel
    },
    editable: {
      type: Boolean,
      default: true
    },
  }
}
</script>