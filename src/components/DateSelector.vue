<template>
    <v-menu ref="menu" v-model="menu" :close-on-content-click="false" transition="scale-transition" offset-y min-width="auto">
      <template v-slot:activator="{ on, attrs }">
        <v-text-field v-model="date" :label="title" prepend-inner-icon="mdi-calendar" color="cyan" readonly v-bind="attrs" v-on="on"></v-text-field>
      </template>
      <v-date-picker v-model="date" min="1950-01-01" color="cyan" @change="save"></v-date-picker>
    </v-menu>
</template>

<script>

export default {
  name: 'DateSelector',
  components: {},
  data: () => ({
    activePicker: null,
    date : null,
    menu: false,
  }),
  props: {
    value: {
      type: Date
    },
    title : {
      type : String
    }
  },
  mounted() {
    this.date = this.value.toISOString().substr(0, 10)
  },
  computed : {

  },
  methods: {
    show() {
      this.isShow = true
    },
    hide() {
      this.isShow = false
    },
    save(){
      this.$emit("input",new Date(this.date))
      this.$refs.menu.save(this.date)
    }
  }
}
</script>
