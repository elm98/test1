import mutations from "./mutations.js";
import actions from "./actions.js";
import getters from "./getters.js";

export default {
    namespaced: true,
    state: {
      indexPhone: [12345678910],
      indexVerificationCode: [1, 2, 3],
      AddressList: [],
      OrderList: [],
      // CreditInfo:[],
      PersonInfo: [],
      customerOpinion: null,
      userName: "الهام ملکی"
    },
    mutations,
    actions,
    getters,
  };