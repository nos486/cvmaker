<template>
  <div>

    <v-menu v-if="$store.getters.user != null" offset-y content-class="mt-2">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="cyan" icon x-large v-bind="attrs" v-on="on">
          <v-icon>mdi-menu</v-icon>
        </v-btn>
      </template>
      <v-card>
        <v-list>
          <v-list-item two-line>
            <v-list-item-avatar>
              <AvatarImage :id="$store.getters.user.id" size="60"></AvatarImage>
            </v-list-item-avatar>
            <v-list-item-content class="ml-2">
              <v-list-item-title class="text-h5 cyan--text">{{ $store.getters.user.firstName }} {{ $store.getters.user.lastName }}</v-list-item-title>
              <v-list-item-subtitle>{{ $store.getters.user.email }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

        <v-divider></v-divider>

          <v-list-item link disabled>
            <v-list-item-icon>
              <v-icon>mdi-account-cog</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>User Settings</v-list-item-title>
            </v-list-item-content>
          </v-list-item>


          <v-list-item link @click="logoutClicked">
            <v-list-item-icon>
              <v-icon color="red">mdi-logout</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title class="red--text">Logout</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

        </v-list>

      </v-card>
    </v-menu>

  </div>
</template>

<script>

import AvatarImage from "@/components/ui/AvatarImage";
export default {
  name: "UserController",
  components: {AvatarImage},
  data: () => ({

  }),
  mounted() {


    if(!this.$store.getters.isLoggedIn){
      this.$router.push("/")
    }else {
      this.$store.dispatch("updateUser")
    }
  },
  methods: {
    logoutClicked: function () {
      this.$store.dispatch("logout").then(()=>{
        this.$router.push("/")
      })
    }
  }
}
</script>

<style scoped>
.dropdown:hover .dropdown-menu {
  display: block;
  margin-top: 0;
}
</style>