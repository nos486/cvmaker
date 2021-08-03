<template>

  <div>

    <v-btn v-if="btn" icon @click="show">
      <v-icon>{{value}}</v-icon>
    </v-btn>

    <v-text-field ref="textField" v-else v-model="value" :label="title" :prepend-inner-icon="value" color="cyan" readonly @click="show" append-icon="mdi-close" @click:append="$emit('input','mdi-blank')"></v-text-field>

    <v-dialog v-model="isShow" max-width="400" v-on:click:outside="clickOutside">
      <v-card>
        <v-card-title class="text-h5 grey lighten-4 cyan--text">
          <v-icon class="mr-1 cyan--text">mdi-file-table-box-multiple-outline</v-icon>
          Icons
        </v-card-title>

        <v-card-text class="py-4 px-4">
          <div class="">
            <v-text-field v-model="search" label="Search Icon" append-icon="mdi-magnify" :hint="searching.length+ ' icons'" color="cyan" clearable></v-text-field>
          </div>
          <div class="overflow-auto" style="max-height: 400px">

            <v-virtual-scroll ref="virtualScroll" :bench="benched" :items="searching" height="330" item-height="60">
              <template v-slot:default="{ item }">
                <v-list-item :key="item" class="grey lighten-4" link style="height: 54px" @click="setIcon(item)">
                  <v-list-item-avatar>
                    <v-icon color="cyan">{{ item }}</v-icon>
                  </v-list-item-avatar>

                  <v-list-item-content>
                    <v-list-item-title class="text-capitalize">
                      {{ iconNameGenerator(item) }}
                    </v-list-item-title>
                    <v-list-item-subtitle>
                      {{ item }}
                    </v-list-item-subtitle>
                  </v-list-item-content>


                </v-list-item>
              </template>
            </v-virtual-scroll>


          </div>
        </v-card-text>


        <!--      <v-divider></v-divider>-->

        <!--      <v-card-actions>-->
        <!--        <v-spacer></v-spacer>-->
        <!--        <v-btn color="grey" text @click="hide">-->
        <!--          Cancel-->
        <!--        </v-btn>-->
        <!--        <v-btn color="cyan" text>-->
        <!--          Select-->
        <!--        </v-btn>-->
        <!--      </v-card-actions>-->
      </v-card>
    </v-dialog>
  </div>


</template>

<script>

import {icons} from "@/assets/statics";


export default {
  name: 'IconSelector',
  components: {},
  data: () => ({
    benched: 0,
    isShow: false,
    search: '',
    icons: []
  }),
  props : {
    value : {
      default : "mdi-blank"
    },
    title : {
      default: "Icon"
    },
    btn : {
      default: false
    }
  },
  computed: {
    searching() {
      if (!this.search) return this.icons

      const search = this.search.toLowerCase()

      return this.icons.filter(icon => {
        const text = icon.toLowerCase()
        return text.indexOf(search) > -1
      })
    },
  },
  methods: {
    show() {
      this.isShow = true
      this.icons = icons
    },
    hide() {
      this.isShow = false
      this.search = ""
    },
    validate : function () {
      return true
    },
    /**
     *
     * @param {string} iconName
     * @return {string}
     */
    iconNameGenerator(iconName) {
      return iconName.replace("mdi-", "").replaceAll("-", " ")
    },
    setIcon(icon){
      this.$emit("input",icon)
      this.hide()
      this.$refs.virtualScroll.$el.scrollTop = 0
      if(!this.btn) this.$refs.textField.blur()
    },
    clickOutside(){
      this.search = ""
      this.$refs.virtualScroll.$el.scrollTop = 0
      if(!this.btn) this.$refs.textField.blur()
    },


  }
}
</script>
<style scoped>
/*::-webkit-scrollbar {*/
/*  display: none;*/
/*}*/
</style>