<template>
    <div class="d-flex flex-column align-center justify-center">
      <div class="" style="width: 100%">
        <BasicEditor :user="user" class="float-right"></BasicEditor>
      </div>

      <v-avatar size="200" class="" >
        <AvatarImage :id="user.id"></AvatarImage>
      </v-avatar>
      <div class="d-flex flex-column">

      <div :class="user.settings.color+'--text'" class="d-flex align-center justify-end mb-n4">

          {{monthNames[new Date(user.birthday).getUTCMonth()]}} {{ new Date(user.birthday).getFullYear() }}
          <v-icon class="mb-3" :color="user.settings.color">mdi-cake-variant</v-icon>

      </div>
      <div :class="user.settings.color+'--text'" class="display-3 font-weight-thin text--darken-3 text-capitalize"><b>{{ user.firstName }}</b> {{ user.lastName }}</div>

        <div v-if="user.headLine !== ''" class="d-flex align-center text-h6 font-weight-light mt-n2">
          <v-icon left :color="user.settings.color" size="26">{{user.icon}}</v-icon>
          {{ user.headLine }}
        </div>
      </div>
    </div>
<!--    <div class="d-flex flex-column justify-content-center align-items-center">-->

<!--        <div >-->
<!--            <div :class="user.settings.color+'-text'" class=" text-end" style="margin-bottom: -10px">-->
<!--                {{monthNames[user.birthday.getUTCMonth()]}} {{ user.birthday.getFullYear() }}-->
<!--                <i class="fa fa-clock"></i>-->
<!--            </div>-->
<!--            <div :class="user.settings.color+'-text'" class="display-4 darken-3 text-center"><b>{{ user.firstName }}</b> {{ user.lastName }}</div>-->
<!--            <h5 v-if="user.headLine !== ''" class="text-secondary"><i class="fa fa-laptop-code"></i> {{ user.headLine }}</h5>-->
<!--        </div>-->
<!--    </div>-->
</template>

<script>

import UserModel from "@/models/User.model";
import EditBox from "@/templates/basic/EditBox";
import Avatar from "@/components/ui/AvatarImage";
import AvatarImage from "@/components/ui/AvatarImage";
import BasicEditor from "@/components/editors/BasicEditor";

export default {
    name: "UserBasic",
    components: {
      BasicEditor,
      AvatarImage,
    },
    data : function (){
        return {
            monthNames : ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"]
        }
    },
    props: {
        user: {
            type: UserModel
        }
    },
    methods :{

    }
}
</script>

<style scoped>

</style>