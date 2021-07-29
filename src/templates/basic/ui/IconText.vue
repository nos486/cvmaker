<template>
    <div class="d-flex align-center font-weight-thin mb-1">
        <v-icon left>{{icon}}</v-icon>
        <div v-if="href">
            <a :href="href" class="grey--text text--darken-2" style="text-decoration: none;"><b>{{text}}</b></a>
        </div>
      <div v-else class="grey--text text--darken-2"><b>{{text}}</b></div>
    </div>
</template>
<script>
export default {
    name: 'IconText',
    props : {
        icon : {
            type : String,
            default : "fa fa-code"
        },
        text : {
            type : String,
            default : "Code :)"
        },
        href : {
            type : String,
            default : null
        },
    }
}
</script>
