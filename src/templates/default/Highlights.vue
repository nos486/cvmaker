<template>
    <item title="Highlights of Qualifications" :color="user.settings.color" :hidden="user.languages.length === 0" :editable="editable">
        <li v-for="(highlight,index) in user.highlights" :key="index">{{ highlight }}</li>
    </item>
</template>
<script>
import Item from "@/templates/default/ui/Item"
import UserModel from "@/models/User.model";
import LanguageEditor from "@/components/editors/LanguageEditor";
import HighlightEditor from "@/components/editors/HighlightEditor";

export default {
    name: 'Highlights',
    components: {Item},
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
