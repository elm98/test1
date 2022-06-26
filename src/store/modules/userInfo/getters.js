export default {
    getAddressList(state) {
      return state.AddressList;
    },
    getOrderList(state) {
      return state.OrderList;
    },
  
    getPersonInfo(state) {
      return state.PersonInfo;
    },
    
  getUserName(state) {
return state.userName
  },
    
    // getAddressToAdd(context, payload) {   
    //   context.commit("setAddressToAdd", payload);
    //   console.log(context);
    // },
    getInfoEditeAddress(state) {
      return state.AddressList;
    
    },
  
    phoneValidation: (state) => (userInput) => {
      for (let i = 0; i < state.indexPhone.length; i++) {
        if (state.indexPhone[i] == userInput) return true;
      }
      return false;
    },

    // phoneValidation() { 
    //   return true;
    // },
  
    codeValidation: (state) => (codeInput) => {
      for (let i = 0; i < state.indexVerificationCode.length; i++) {
        if (state.indexVerificationCode[i] == codeInput) return true;
      }
      return false;
    },
  
    checkLogin() {
      return localStorage["userStatus"] != null ? true : false;
    },
  
  };
  