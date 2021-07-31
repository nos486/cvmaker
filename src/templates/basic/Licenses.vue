<template>
  <item v-if="user.licenses.length > 0" title="Licenses & certifications" :color="user.settings.color">
    <div v-for="(license,index) in user.licenses" :key="index" >
      <SubItem :title="license.name"  :color="user.settings.color">
        <div class="d-flex align-center">
          <b>{{ license.credentialID}}</b>
          <v-chip :color="user.settings.color" class="darken-2 ml-2" dark small>
            <v-icon left>mdi-school</v-icon>
            <strong>
              {{ license.issuingOrganization }}
            </strong>
          </v-chip>
        </div>
        <div >
          <small>
            {{ license.issueDate.getFullYear()}}
          </small>
        </div>
      </SubItem>
    </div>
  </item>
</template>
<script>

import Item from "@/templates/basic/ui/Item"
import SubItem from "@/templates/basic/ui/SubItem"
import UserModel from "@/models/User.model";

export default {
  name: 'Licenses',
  components: {Item, SubItem},
  props: {
    user: {
      type: UserModel
    }
  }
}
</script>