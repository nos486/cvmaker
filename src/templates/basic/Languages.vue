<template>
    <item v-if="user.languages.length > 0" title="Languages" :color="user.settings.color">
      <template v-slot:edit>
        <LanguageEditor :user="user"></LanguageEditor>
      </template>
        <li v-for="(language,index) in user.languages" :key="index">{{ language }}</li>
    </item>
</template>
<script>
import Item from "@/templates/basic/ui/Item"
import UserModel from "@/models/User.model";
import LanguageEditor from "@/components/editors/LanguageEditor";

export default {
    name: 'Languages',
    components: {LanguageEditor, Item},
    props: {
        user: {
            type: UserModel
        }
    }
}
</script>
