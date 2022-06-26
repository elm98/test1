export default {
  setAddressList(state, data) {
    state.AddressList = data;
  },

  setOrderList(state, data) {
    state.OrderList = data;
  },

  setPersonInfo(state, data) {
    state.PersonInfo = data;
  },
  setAddressToAdd(state, payload) {
    state.AddressList.push( payload.index);
  },

  setRemoveAddress(state, payload) {
    // const arr = [{id: 1}, {id: 3}, {id: 5}];

    const indexOfObject = state.AddressList.findIndex(object => {
      return object.Id === payload.index[0];
    });
    
   
    
    state.AddressList.splice(indexOfObject, 1);
    console.log(state.AddressList); 


  },

  setEditeAddress(state, payload) {

    // console.log(payload.index[0]); 
    const indexOfObject = state.AddressList.filter(object => {
      return object.Id === payload.index[0];
    });
    // console.log(indexOfObject[0].Address); 
    indexOfObject[0].Address=payload.index[1];
 
  },

    customerOpinion(state, co) {
      state.customerOpinion = co
    },
  
  
  
  
  
  
  
  
    
  
    
    
  };
  