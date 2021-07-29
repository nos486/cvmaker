<template>
    <div class="mb-4">
        <div class="d-flex align-center font-weight-thin">
          <v-icon left>{{icon}}</v-icon> <b>{{title}}</b>
        </div>
        <div class="d-flex justify-content-start flex-wrap mt-1">
          <v-chip v-for="(item,index) in list" :key="index" class="mr-1 mb-1" :color="color" label dark draggable>
            {{ item }}
          </v-chip>
        </div>

    </div>
</template>

<script>
export default {
    name: "SkillItems",
    props: {
        title: {
            type: String,
            default: "Title"
        },
        icon: {
            type: String,
            default: "mdi-information"
        },
        list : {
            type : Array,
            default : ()=>{
                return ["Skill 1","Skill 2"]
            }
        },
        color : {
            type: String,
        }
    }
}
</script>

<style scoped>

</style>