export default {
    loadUserInfo(context) {
      const data = [
        [
          {
            Id: 1,
            Title: "عنوان آدرس اول",
            Address: "مشهد -سید رضی 123 پلاک 384",
          },
          {
            Id: 2,
            Title: "عنوان آدرس دوم",
            Address: "مشهد -قائم 12-پرستار 13",
          },
        ],
  
        [
          {
            Row: "1",
            Date: "سه شنبه 22 آبان",
            Time: "در حال بررسی",
            Condition: "250000تومان",
            Total: "sdsd",
            State: "تایید شده",
          },
          {
            Row: "1",
            Date: "سه شنبه 22 آبان",
            Time: "در حال بررسی",
            Condition: "250000تومان",
            Total: "sdsd",
            State: "تایید شده",
          },
        ],
        [
          {
            Id: "1",
            Name: "الهام",
            Family: " ملکی",
            Phone: "09156250277",
            Email: "mrselmaleki@mail.com",
            Credit: "500تومن",
          },
        ],
      ];
      context.commit("setAddressList", data[0]);
      context.commit("setOrderList", data[1]);
      context.commit("setPersonInfo", data[2]);
    },
  
    loadAddressToAdd(context, payload) {   
      context.commit("setAddressToAdd", payload);
    },
  
    getRemoveAddress(context, payload) {   
      context.commit("setRemoveAddress", payload);
     
    
    },
    getEditeAddress(context, payload) {
   
      context.commit("setEditeAddress", payload);
    },
  
    fillTheLocalstorage(_,PL) {
      localStorage.setItem(
        "userStatus",
        JSON.stringify(PL)
      );
      console.log("action-fillTheLocalstorage : " + localStorage.getItem("userStatus"))
      //console.log(_);
    },

    customerOpinion(context, co) {
      context.commit("customerOpinion", co)
    },
    
    clearStorages() {
      localStorage.clear();
      // sessionStorage.clear();
    },
    
  };
  