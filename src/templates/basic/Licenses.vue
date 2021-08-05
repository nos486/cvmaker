<template>
  <item v-if="user.licenses.length > 0" title="Licenses & certifications" :color="user.settings.color">
    <template v-slot:edit>
      <LicensesEditor :user="user"></LicensesEditor>
    </template>
    <div v-for="(license,index) in user.licenses" :key="index" >
      <SubItem :title="license.name"  :color="user.settings.color">
        <div class="d-flex">

        <b>{{ license.issuingOrganization }}</b>
        <ChipDate class="ml-2" :date1="license.issueDate" :color="user.settings.color"></ChipDate>
        </div>
        <small class="d-flex align-center">
          No. <b>{{ license.credentialID }}</b>
          <div v-if="license.credentialUrl !== ''" class="ml-1">
            - {{license.credentialUrl}}
          </div>
        </small>
        <div>


        </div>
      </SubItem>
    </div>
  </item>
</template>
<script>

import Item from "@/templates/basic/ui/Item"
import SubItem from "@/templates/basic/ui/SubItem"
import UserModel from "@/models/User.model";
import LicensesEditor from "@/components/editors/LicensesEditor";
import {numberToMonthName} from "@/helpers";
import ChipDate from "@/templates/basic/ui/ChipDate";

export default {
  name: 'Licenses',
  components: {ChipDate, LicensesEditor, Item, SubItem},
  props: {
    user: {
      type: UserModel
    }
  },
  methods :{
    dateStingToString(date){
      return  numberToMonthName(new Date(date).getMonth()) + "\n" + new Date(date).getFullYear()
    }
  }
}
</script>