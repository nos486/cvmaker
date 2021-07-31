<template>
    <item v-if="user.about !== ''" title="About" :color="user.settings.color">
        <div style="white-space: pre-line;">{{ user.about}}</div>
    </item>
</template>
<script>
import Item from "@/templates/basic/ui/Item"
import UserModel from "@/models/User.model";

export default {
    name: 'About',
    components: {Item},
    props: {
        user: {
            type: UserModel
        }
    }
}
</script>
