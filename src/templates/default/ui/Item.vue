<template>
    <div v-if="!hidden">
        <div class="d-flex justify-space-between">
            <div :class="color+'--text'" class="text-h5 text--darken-3"><b>{{ title }}</b></div>
        </div>
        <div class="grey--text text--darken-2 mt-2">
            <slot name="default"></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: "Item",
    props: {
        title: {
            type: String,
            default: "Title"
        },
        color: {
            type: String,
        },
        hidden: {
            type: Boolean,
            default: false
        },
    }
}
</script>

<style scoped>

</style>