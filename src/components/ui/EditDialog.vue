<template>
  <div>
    <v-btn icon :color="color" @click="show">
      <v-icon>mdi-account-edit</v-icon>
    </v-btn>
    <v-dialog v-model="isShow" :max-width="width" v-on:click:outside="hide" scrollable>
      <v-card>
        <v-card-title class="text-h5 grey lighten-4 d-flex justify-space-between" :class="color+'--text'">
          <div>
          <v-icon left :color="color">mdi-account-edit</v-icon>{{title}}
          </div>
          <slot name="header"></slot>
        </v-card-title>

        <v-card-text class="overflow-auto" :class="{'py-4 px-4 px-sm-8':!edgeLess,'pa-0':edgeLess}" style="max-height: 90%">
          <slot></slot>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="grey" text @click="hide">
            Cancel
          </v-btn>
          <v-btn :color="color" text @click="save">
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>


export default {
  name: 'EditDialog',
  components: {},
  data: () => ({
    isShow: false,
  }),
  props: {
    title: {
      type : String,
      default : "Title"
    },
    color: {
      type : String,
      default : "grey"
    },
    width: {
      type : Number,
      default : 550
    },
    edgeLess: {
      type : Boolean,
      default : false
    },
  },
  computed: {},
  methods: {
    show() {
      this.isShow = true
      this.$emit("show")
    },
    hide() {
      this.isShow = false
      this.$emit("hide")
    },
    save() {
      this.$emit("save")
    }
  }
}
</script>
