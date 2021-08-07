<template>
    <item title="Languages" :color="user.settings.color" :hidden="user.languages.length === 0" :editable="editable">
      <template v-slot:edit>
        <LanguageEditor :user="user"></LanguageEditor>
      </template>
        <li v-for="(language,index) in user.languages" :key="index">{{ language }}</li>
    </item>
</template>
<script>
import Item from "@/templates/default/ui/Item"
import UserModel from "@/models/User.model";
import LanguageEditor from "@/components/editors/LanguageEditor";

export default {
    name: 'Languages',
    components: {LanguageEditor, Item},
    props: {
        user: {
            type: UserModel
        },
      editable: {
        type : Boolean,
        default : true
      },
    }
}
</script>
