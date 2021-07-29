<template>
    <div v-if="$store.getters.editable" class="border position-relative" style="min-height: 100px">
        <button class="btn position-absolute no-outline" title="edit" style="right: 0;z-index: 1">
            {{title}} <i class="fa fa-edit"></i>
        </button>
        <slot></slot>
    </div>
    <div v-else class="">
        <slot></slot>
    </div>
</template>

<script>
import UserModel from "@/models/User.model";

export default {
    name: "EditBox",
    props: {
        title: {
            type: String,
            default : "Edit"
        }
    }
}
</script>

<style scoped>

</style>