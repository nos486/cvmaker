<template>
    <div>
        <div :class="color+'--text'" class="text-h5 font-weight-light text--darken-3"><b>{{ title }}</b></div>
        <div class="grey--text text--darken-2 mt-2">
            <slot></slot>
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
        color : {
            type: String,
        }
    }
}
</script>

<style scoped>

</style>