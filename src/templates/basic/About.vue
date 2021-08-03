<template>
    <item v-if="user.about !== ''" title="About" :color="user.settings.color">
      <template v-slot:edit>
        <AboutEditor :user="user"></AboutEditor>
      </template>
        <div style="white-space: pre-line;">{{ user.about}}</div>
    </item>
</template>
<script>
import Item from "@/templates/basic/ui/Item"
import UserModel from "@/models/User.model";
import AboutEditor from "@/components/editors/AboutEditor";

export default {
    name: 'About',
    components: {AboutEditor, Item},
    props: {
        user: {
            type: UserModel
        }
    }
}
</script>
