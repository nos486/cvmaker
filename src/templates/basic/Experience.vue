<template>
    <EditBox title="Experience">
        <item v-if="user.experiences.length > 0" title="Experience">
            <div v-for="(experience,index) in user.experiences" :key="index">
                <SubItem :title="experience.title" :icon="experience.icon">
                    <b>{{experience.company}}</b>  {{ experience.startDate.getFullYear() }} – {{ experience.atThisRole ? "Present" :experience.endDate.getFullYear()}}
                    <li class="mt-1">
                        {{experience.description}}
                    </li>
                </SubItem>
            </div>
        </item>
    </EditBox>
</template>
<script>

import Item from "@/templates/basic/ui/Item"
import SubItem from "@/templates/basic/ui/SubItem"
import EditBox from "@/templates/basic/EditBox"
import UserModel from "@/models/User.model";

export default {
    name: 'Experience',
    components: {EditBox,Item, SubItem},
    props: {
        user: {
            type: UserModel
        }
    }
}
</script>