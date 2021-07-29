<template>
    <Item v-if="user.skills.length > 0" title="Skills" :color="user.settings.color">
        <SkillItems v-for="(skill,index) in user.skills" :key="index" :color="user.settings.color" :title="skill.title" :icon="skill.icon" :list="skill.list"></SkillItems>
    </Item>
</template>
<script>
import Item from "@/templates/basic/ui/Item"
import SkillItems from "@/templates/basic/ui/SkilIltems"
import UserModel from "@/models/User.model";

export default {
    name: 'Skills',
    components: {Item, SkillItems},
    data: function () {
        return {

        }
    },
    props: {
        user: {
            type: UserModel
        }
    }
}
</script>