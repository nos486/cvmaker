<template>
    <div class="mb-2">
        <div :class="$store.getters.mainColor+'-text'" class="darken-1" style="font-size: 13pt">
            <i :class="icon"></i> <b>{{ title }}</b>
        </div>
        <div class="text-secondary small mt-n2">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: "SubItem",
    props: {
        title: {
            type: String,
            default: "Title"
        },
        icon: {
            type: String,
            default: ""
        },
    }
}
</script>

<style scoped>

</style>