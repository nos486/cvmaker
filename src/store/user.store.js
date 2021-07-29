import axios from "axios";
import config from "@/config";
import User from "@/models/User.model";
import router from "@/router";

export default {
    state: {
        jwtToken: localStorage.getItem("jwtToken") || "",
        refreshToken: localStorage.getItem("refreshToken") || "",
        user: null
    },
    getters: {
        isLoggedIn: state => !!state.refreshToken,
        jwtToken: state => state.jwtToken,
        user: state => state.user
    }
    ,
    mutations: {
        /**
         *
         * @param state
         * @param {{jwtToken:String,refreshToken:String}} data
         */
        setToken: (state, data) => {
            state.jwtToken = data.jwtToken
            state.refreshToken = data.refreshToken
            localStorage.setItem("refreshToken", data.refreshToken)
            localStorage.setItem("jwtToken", data.jwtToken)
            axios.defaults.headers.common['Authorization'] = "Bearer "+ data.jwtToken
        },

        clearTokens: (state) => {
            state.jwtToken = ""
            state.refreshToken = ""
            localStorage.removeItem("refreshToken")
            localStorage.removeItem("jwtToken")
        }
    },
    actions: {
        /**
         *
         * @param context
         * @param {{password: string, captcha: string, key: string, username: string}} data
         */
        login(context, data) {
            return new Promise((resolve, reject) => {
                axios.post(`${config.apiUrl}/authenticate`, data).then((response) => {
                    console.log(response.data)
                    context.commit("setToken", response.data)
                    context.dispatch("updateUser").then(response => {
                        resolve(response)
                    }).catch((err)=>{
                        reject(err)
                    })
                }).catch(err => {
                    reject(err)
                })
            })
        },
        logout(context){
            return new Promise((resolve, reject) => {
                let data = {"token": context.state.refreshToken}
                axios.post(`${config.apiUrl}/authenticate/revoke`, data).then((response) => {
                    context.commit("clearTokens")
                    resolve()
                }).catch(err => {
                    // this.$bvToast.toast(err.toString())
                    reject()
                })
            })
        },
        updateUser(context) {
            return new Promise((resolve, reject) => {
                axios.post(`${config.apiUrl}/user`).then((response) => {
                    context.state.user = new User(response.data)
                    resolve(response)
                }).catch(err => {
                    reject(err)
                })
            })
        },
        updateToken(context) {
            return new Promise((resolve, reject) => {
                let data = {"token": context.state.refreshToken}
                axios.post(`${config.apiUrl}/authenticate/refresh`, data).then((response) => {
                    context.commit("setToken", response.data)
                    resolve(response)
                }).catch(err => {
                    context.commit("clearTokens")
                    router.push("/").then(()=>{
                        reject(err)
                    })
                })
            })
        },
    },
}

