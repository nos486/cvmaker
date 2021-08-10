<template>
  <v-app>
    <v-overlay :value="$store.getters.overlay" z-index="1024">
      <v-progress-circular
          indeterminate
          size="64"
      ></v-progress-circular>
    </v-overlay>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

import axios from "axios";
import baseConfig from "@/config";

export default {
  name: 'App',

  data: () => ({
    //
  }),
  beforeMount() {
    this.setupAxios()
  },
  methods: {
    setupAxios: function () {
      axios.interceptors.request.use((config) => {
        config.baseURL = baseConfig.apiUrl

        const token = this.$store.getters.jwtToken;
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        config.onUploadProgress = function (progressEvent) {
        }
        config.onDownloadProgress = function (progressEvent) {
        }
        return config
      })

      axios.interceptors.response.use((response) => {
        return response;
      }, (error) => {

        if (error.config && error.response && error.response.status === 401) {
          return this.$store.dispatch("updateToken").then(() => {
            return axios.request(error.config);
          })
        }

        // if (error.response.status === 500 || error.code === 'ECONNABORTED') {
        //     console.log(`A timeout happend on url ${error.config.url}`)
        // }
        //
        //

        if (!error.response) {
          this.$toast.error("Network Error")
          this.$router.push("/")
        }


        if (Array.isArray(error.response.data)) {
          for (let err of error.response.data) {
            this.$toast.error(err.message)
          }
        } else if (typeof error.response.data == "object") {
          let data = error.response.data
          this.$toast.error(data.message)

        } else if (typeof error.response.data == "string") {
          this.$toast.error(error.response.data)

        }
        //
        // this.$store.commit("isLoading", false)
        return Promise.reject(error);
      });
    },
  }
};
</script>
<style>

</style>
