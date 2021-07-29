<template>
    <item v-if="user.languages.length > 0" title="Languages" :color="user.settings.color">
        <li v-for="(language,index) in user.languages" :key="index">{{ language }}</li>
    </item>
</template>
<script>
import Item from "@/templates/basic/ui/Item"
import UserModel from "@/models/User.model";

export default {
    name: 'Languages',
    components: {Item},
    props: {
        user: {
            type: UserModel
        }
    }
}
</script>
