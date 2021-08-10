<template>
  <div class="d-flex mt-4 align-content-center">
    <div v-if="xmlData !== ''" v-html="xmlData"></div>
    <v-btn v-else style="width: 150px;height: 50px" loading text></v-btn>
    <v-text-field ref="captcha" class="ml-2" v-model="input" label="Captcha" append-icon="mdi-refresh"
                  @click:append="refresh" :color="color" :rules="inputRules" @keydown.enter="onEnter"></v-text-field>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: 'Captcha',
  components: {},
  props: {
    value: Object,
    color: {
      type: String,
      default: "blue"
    },
  },

  data() {
    return {
      url: null,
      key: "",
      input: "",
      inputRules: [
        v => !!v || 'Captcha is required',
      ],
      xmlData: ""
    }
  },
  mounted() {
    this.refresh()
  },
  watch: {
    key: function () {
      this.$emit('input', {"key": this.key, value: this.input})
    },
    input: function () {
      this.$emit('input', {"key": this.key, value: this.input})
    }
  },
  methods: {
    validate : function () {
        return this.$refs.captcha.validate()
    },
    refresh: function () {
      this.xmlData = ""
      this.key = ""
      this.input = ""

      axios.get("captcha/")
          .then(function (response) {
            this.xmlData = response.data
            this.key = response.headers.key
          }.bind(this))
          .catch(function (error) {
            console.log(error);
          });

    },
    onEnter: function(){
      this.$emit("enter")
    }
  }
}
</script>

<style scoped>

</style>
