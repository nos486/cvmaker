<template>

  <item title="Contact" :color="user.settings.color">
    <template v-slot:edit>
      <ContactEditor :user="user"></ContactEditor>
    </template>
    <IconText v-if="user.country !== ''" icon="mdi-map-marker" :text="`${user.country}, ${user.city}`"></IconText>
    <IconText v-if="user.phone !== ''" icon="mdi-phone" :text="user.phone" :href="`tel: ${user.phone}`"></IconText>
    <IconText v-if="user.email !== ''" icon="mdi-email" :text="user.email" :href="`mailto: ${user.email}`"></IconText>
    <IconText v-if="user.website !== ''" icon="mdi-web" :text="user.website" :href="`${user.website}`"></IconText>
    <IconText v-if="user.linkedin !== ''" icon="mdi-linkedin" :text="user.linkedin" :href="`${user.licenses}`"></IconText>
    <IconText v-if="user.github !== ''" icon="mdi-github" :text="user.github" :href="`${user.github}`"></IconText>
  </item>

</template>

<script>
import Item from "@/templates/basic/ui/Item";
import IconText from "@/templates/basic/ui/IconText";
import UserModel from "@/models/User.model";
import EditBox from "@/templates/basic/EditBox";
import IconSelector from "@/components/IconSelector";
import ContactEditor from "@/components/editors/ContactEditor";

export default {
  name: "Contact",
  components: {ContactEditor, IconText, Item},
  props: {
    user: {
      type: UserModel
    }
  },
  mounted() {

  },
  methods : {

  }
}
</script>

