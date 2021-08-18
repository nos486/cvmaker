import Vue from 'vue'
import Vuex from 'vuex'

import userModule from "@/store/user.store";

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        editable : true,
        overlay : false
    },
    getters :{
        editable : state => {
            return state.editable
        },
        overlay : state => {
            return state.overlay
        }
    },
    mutations: {
        setEditable : (state,value)=>{
            state.editable = value
        },
        overlayShow : (state => {
            state.overlay = true
        }),
        overlayHide : (state => {
            state.overlay = false
        })
    },
    actions: {

    },
    modules: {
        user : userModule
    }
})
