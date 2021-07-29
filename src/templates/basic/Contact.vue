<template>
  <item title="Contact" :color="user.settings.color">
    <IconText v-if="user.country !== ''" icon="mdi-map-marker" :text="`${user.country}, ${user.city}`"></IconText>
    <IconText v-if="user.phone !== ''" icon="mdi-phone" :text="user.phone" href="tel: +989128895140"></IconText>
    <IconText v-if="user.email !== ''" icon="mdi-email" :text="user.email" :href="`mailto: ${user.email}`"></IconText>
    <IconText v-if="user.github !== ''" icon="mdi-github" :text="user.github" :href="`${user.github}`"></IconText>
    <IconText v-if="user.linkedin !== ''" icon="mdi-linkedin" :text="user.linkedin" :href="`${user.licenses}`"></IconText>
    <IconText v-if="user.website !== ''" icon="mdi-web" :text="user.website" :href="`${user.website}`"></IconText>
  </item>
</template>

<script>
import Item from "@/templates/basic/ui/Item";
import IconText from "@/templates/basic/ui/IconText";
import UserModel from "@/models/User.model";
import EditBox from "@/templates/basic/EditBox";

export default {
  name: "Contact",
  components: {IconText, Item},
  props: {
    user: {
      type: UserModel
    }
  }
}
</script>

