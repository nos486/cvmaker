<template>
    <div class="mb-4">
        <IconText :icon="icon" :text="title"></IconText>
        <div class="d-flex justify-start flex-wrap mt-1">
          <v-chip v-for="(item,index) in list" :key="index" class="mr-1 mb-1" :color="color" label dark draggable>
            {{ item }}
          </v-chip>
        </div>

    </div>
</template>

<script>
import IconText from "@/templates/basic/ui/IconText";
export default {
    name: "SkillItems",
  components: {IconText},
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