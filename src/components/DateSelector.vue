<template>
    <v-menu ref="menu" v-model="menu" :close-on-content-click="false" transition="scale-transition" offset-y min-width="auto">
      <template v-slot:activator="{ on, attrs }">
        <v-text-field ref="date" v-model="date" :label="title" prepend-inner-icon="mdi-calendar" color="cyan" readonly append-icon="mdi-close" @click:append="clear" v-bind="attrs" v-on="on" :rules="(required) ? dateRules : []"></v-text-field>
      </template>
      <v-date-picker v-model="date" type="month" min="1950-01" color="cyan" @change="save" ></v-date-picker>
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
    dateRules: [
      v => !!v || 'Date is required',
    ],
  }),
  props: {
    value: {
      type: String
    },
    title : {
      type : String
    },
    required : {
      type : Boolean,
      default : false,
    }
  },
  watch : {
    value: function (newValue,oldValue){
      if(this.value != null) this.date = this.value.substr(0, 7)
    }
  },
  mounted() {
    if(this.value != null) this.date = this.value.substr(0, 7)
  },
  methods: {
    validate : function () {
      return this.$refs.date.validate()
    },
    save(){
      this.$emit("input",new Date(this.date).toISOString())
      this.$refs.menu.save(this.date)
    },
    clear(){
      this.date = null
      this.$emit("input",null)
    }
  }
}
</script>
