import Vue from 'vue'
import Vuex from 'vuex'
import userInfo from "./modules/userInfo";
import product from "./modules/product/index.js";
import buyList from "./modules/buyList/index.js";

Vue.use(Vuex)

export default new Vuex.Store({
  // state: {
  // },
  // getters: {
  // },
  // mutations: {
  // },
  // actions: {
  // },
  modules: {
    userInfo,
    product,
    buyList,
  }
})