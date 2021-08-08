<template>
  <div v-if="user != null">
    <UserSettings ref="userSettings" :user="user" ></UserSettings>
    <v-menu offset-y content-class="mt-2">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="cyan" icon x-large v-bind="attrs" v-on="on">
          <v-icon>mdi-menu</v-icon>
        </v-btn>
      </template>
      <v-card>
        <v-list>
          <v-list-item two-line>
            <v-list-item-avatar>
              <v-img :src="user.avatar" ></v-img>
            </v-list-item-avatar>
            <v-list-item-content class="ml-2">
              <v-list-item-title class="text-h5 cyan--text text-capitalize">{{ user.firstName }} {{ user.lastName }}</v-list-item-title>
              <v-list-item-subtitle>{{ user.email }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-divider></v-divider>

          <v-list-item link @click="$refs.userSettings.show()">
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

import User from "@/models/User.model";
import UserSettings from "@/components/UserSettings";
export default {
  name: "UserController",
  components: {UserSettings},
  data: () => ({

  }),
  props : {
    user: {
      type: User
    },
  },
  mounted() {

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