
import mutations from "./mutations.js";
import actions from "./actions.js";
import getters from "./getters.js";

export default {
  namespaced: true,
  state: {
  
    product: [],
    counter:[],
    productcategory:[],
    totalproduct:Number,
    basketStateList:{},
    TabFilterProduct:[],
    FullProductInfo:[],
    TextHeaderBasketList:[],
    CategoryMegaMenue:[],
    TextFooterBasketList:[],
    ProductInfo:[],
    DetailProductInfo:[],
    ConterProduct:[],
// basketStateList:[
//   {
//     id: "0",
//     images: "https://picsum.photos/250/250/?image=1",
//     name: " سیب زرد ۱ کیلوگرمی ± ۸۰ گرم (تعداد تقریبی ۵ عدد) ",
//     Price: "5,600 ",
//     discount: "13%",
//     priceDiscount: "4,600",
//     Count: " 7",
//     Flag: false,
//   },
//   {
//     id: "1",
//     images: "https://picsum.photos/250/250/?image=59",
//     name: " سیب زرد ۱ کیلوگرمی ± ۸۰ گرم (تعداد تقریبی ۵ عدد) ",
//     Price: "5,600 ",
//     discount: "13%",
//     priceDiscount: "4,600",
//     Count: " 7",
//     Flag: false,
//   },
//   {
//     id: "2",
//     images: "https://picsum.photos/250/250/?image=59",
//     name: " سیب زرد ۱ کیلوگرمی ± ۸۰ گرم (تعداد تقریبی ۵ عدد) ",
//     Price: "5,600 ",
//     discount: "13%",
//     priceDiscount: "4,600",
//     Count: " 7",
//     Flag: false,
//   },
//   {
//     id: "3",
//     images: "https://picsum.photos/250/250/?image=59",
//     name: " سیب زرد ۱ کیلوگرمی ± ۸۰ گرم (تعداد تقریبی ۵ عدد) ",
//     Price: "5,600 ",
//     discount: "13%",
//     priceDiscount: "4,600",
//     Count: " 7",
//     Flag: false,
//   },
//   {
//     id: "4",
//     images: "https://picsum.photos/250/250/?image=59",
//     name: " سیب زرد ۱ کیلوگرمی ± ۸۰ گرم (تعداد تقریبی ۵ عدد) ",
//     Price: "5,600 ",
//     discount: "13%",
//     priceDiscount: "4,600",
//     Count: " 7",
//     Flag: false,
//   },
//   {
//     id: "5",
//     images: "https://picsum.photos/250/250/?image=59",
//     name: " سیب زرد ۱ کیلوگرمی ± ۸۰ گرم (تعداد تقریبی ۵ عدد) ",
//     Price: "5,600 ",
//     discount: "13%",
//     priceDiscount: "4,600",
//     Count: " 7",
//     Flag: false,
//   },
//   {
//     id: "6",
//     images: "https://picsum.photos/250/250/?image=59",
//     name: " سیب زرد ۱ کیلوگرمی ± ۸۰ گرم (تعداد تقریبی ۵ عدد) ",
//     Price: "5,600 ",
//     discount: "13%",
//     priceDiscount: "4,600",
//     Count: " 7",
//     Flag: false,
//   },
//   {
//     id: "7",
//     images: "https://picsum.photos/250/250/?image=59",
//     name: " سیب زرد ۱ کیلوگرمی ± ۸۰ گرم (تعداد تقریبی ۵ عدد) ",
//     Price: "5,600 ",
//     discount: "13%",
//     priceDiscount: "4,600",
//     Count: " 7",
//     Flag: false,
//   },
// ],
// listShop: [
//             {
//               id: 1,
//               title:"پنیر ورقه‌ای گودا کاله ۱۸۰ گرمی",
//               name: "AA",
//               seller: "BB",
//               brand: "CC",
//               image:
//                 "https://api.snapp.market/media/cache/product-variation_image_thumbnail/uploads/images/vendors/users/app/61c04f1f4218f.jpg",
//               price: "2,250",
//               pricePercentage:"15%",
//               priceoff:"1,02",
//               link:"https://www.google.com/"
  
//             },
//                 {
//               id: 2,
//               title:"پنیر ورقه‌ای گودا کاله ۱۸۰ گرمی",
//               name: "AA",
//               seller: "BB",
//               brand: "CC",
//               image:
//                 "https://api.snapp.market/media/cache/product-variation_image_thumbnail/uploads/images/vendors/users/app/61c04f1f4218f.jpg",
//               price: "2,250",
//               pricePercentage:"15%",
//               priceoff:"1,02",
//               link:"https://www.google.com/"
  
//             },
//                 {
//               id: 3,
//               title:"پنیر ورقه‌ای گودا کاله ۱۸۰ گرمی",
//               name: "AA",
//               seller: "BB",
//               brand: "CC",
//               image:
//                 "https://api.snapp.market/media/cache/product-variation_image_thumbnail/uploads/images/vendors/users/app/61c04f1f4218f.jpg",
//               price: "2,250",
//               pricePercentage:"15%",
//               priceoff:"1,02",
//               link:"https://www.google.com/"
  
//             },
//           ],
          productInfo:    [
            [
              {
                id: 0,
                title:" سیب زرد 0 کیلوگرمی ± ۸۰ گرم (تعداد تقریبی ۵ عدد)",
                name: "نام 0",
                seller: "فروشنده0 ",
                brand: "نام برند 0  ",
                image:
                  "https://picsum.photos/250/250/?image=14",
                price: "2,250",
                pricePercentage:"15%",
                priceoff:"1,02",
                link:"https://www.google.com/"
      
              },
              {
                id: 1,
                title:"  سیب زرد ۱ کیلوگرمی ± ۸۰ گرم (تعداد تقریبی ۵ عدد) ",
                name: "نام 1",
                seller: "فروشنده1 ",
                brand: "برند1 ",
                image:
                  "https://picsum.photos/250/250/?image=14",
                price: "2,250",
                pricePercentage:"15%",
                priceoff:"1,02",
                link:"https://www.google.com/"
      
              },
              {
                id: 2,
                title:" سیب زرد 2 کیلوگرمی ± ۸۰ گرم (تعداد تقریبی ۵ عدد)  2",
                name: "نام 2",
                seller: "فروشنده2 ",
                brand: "برند2 ",
                image:
                  "https://picsum.photos/250/250/?image=29",
                price: "2,250",
                pricePercentage:"15%",
                priceoff:"1,02",
                link:"https://www.google.com/"
      
              },
              {
                id: 3,
                title:" سیب زرد 3 کیلوگرمی ± ۸۰ گرم (تعداد تقریبی ۵ عدد)  3",
                name: "نام 3",
                seller: "فروشنده31 ",
                brand: "برند13 ",
                image:
                  "https://picsum.photos/250/250/?image=19",
                price: "2,250",
                pricePercentage:"15%",
                priceoff:"1,02",
                link:"https://www.google.com/"
      
              },
              {
                id: 4,
                title:" سیب زرد 4 کیلوگرمی ± ۸۰ گرم (تعداد تقریبی ۵ عدد)  4",
                name: "نام 34",
                seller: "فروشنده431 ",
                brand: "برند413 ",
                image:
                  "https://picsum.photos/250/250/?image=59",
                price: "2,250",
                pricePercentage:"15%",
                priceoff:"1,02",
                link:"https://www.google.com/"
      
              },
            ],
            [
              { id: 1, name: "بهداشتی" ,link:"https://www.google.com/"},
              { id: 2, name: "دستمال کاغدی" ,link:"https://www.google.com/"},
            ],
            [
              { id: 0, name: "A",link:"https://www.google.com/" },
              { id: 1, name: "A1",link:"https://bootstrap-vue.org/docs/icons" },
              { id: 2, name: "A2",link:"https://www.google.com/" },
              { id: 3, name: "A3",link:"https://bootstrap-vue.org/docs/icons" },
              { id: 4, name: "A4" ,link:"https://www.google.com/"},
            ],
            [
      
              {
                id: 1,
                image:
                  "https://api.snapp.market/media/cache/product-variation_image_thumbnail/uploads/images/vendors/users/app/61c04f1f4218f.jpg",
              },
              {
                id: 2,
                image:
                  "https://api.snapp.market/media/cache/product-variation_image_thumbnail/uploads/images/vendors/users/app/61c04f1f4218f.jpg",
              },
      
              {
                id: 3,
                image:
                  "https://api.snapp.market/media/cache/product-variation_image_thumbnail/uploads/images/vendors/users/app/20210725-274951-1.jpg",
              },
      
      
              {
                id: 4,
                image:
                  "https://api.snapp.market/media/cache/product-variation_image_thumbnail/uploads/images/vendors/users/app/60fd33ed08988.jpg",
              },
      
      
              {
                id: 5,
                image:
                  "https://api.snapp.market/media/cache/product-variation_image_thumbnail/uploads/images/vendors/users/app/60119c5c6a0fc.jpg",
              }
              ,
      
      
              {
                id: 6,
                image:
                  "https://api.snapp.market/media/cache/product-variation_image_thumbnail/uploads/images/vendors/users/app/20210801-72404-1.jpg",
              }
              ,
      
      
              {
                id: 7,
                image:
                  "https://api.snapp.market/media/cache/product-variation_image_thumbnail/uploads/images/vendors/users/app/5e52691de7c59.jpg",
              }
            ],
            [
              {
                id: 1,
                categoryName: "دسته1",
                products: [
                  {
                    Id: "1",
                    Image: "https://picsum.photos/250/250/?image=14",
                    Name: "کشکaaaaaaaaaaaaaaa خرم ",
                    PriceProducer: "5,600 ",
                    priceconsumer: "58,200,100",
                    priceCompany: "4,600",
                    SelectCount: "11",
                    Reserved: true,
                    category:"کشک"
                  },
                  {
                    Id: "2",
                    Image: "https://picsum.photos/250/250/?image=29",
                    Name: " کشک پارمیس ",
                    PriceProducer: "5,600 ",
                    priceconsumer: "58,200,100",
                    priceCompany: "4,600",
                    SelectCount: " 22",
                    Reserved: false,
                    category:"کشک"
                  },
                  {
                    Id: "3",
                    Image: "https://picsum.photos/250/250/?image=19",
                    Name: " کشک چوپان ",
                    PriceProducer: "5,600 ",
                    priceconsumer: "58,200,100",
                    priceCompany: "4,600",
                    SelectCount: " 333",
                    Reserved: false,
                    category:"کشک"
                  },
                 
                  {
                    Id: "4",
                    Image: "https://picsum.photos/250/250/?image=59",
                    Name: " کشک نیاوران ",
                    PriceProducer: "5,600 ",
                    priceconsumer: "58,200,100",
                    priceCompany: "4,600",
                    SelectCount: " 5",
                    Reserved: false,
                    category:"کشک"
                  },
                  {
                    Id: "5",
                    Image: "https://picsum.photos/250/250/?image=84",
                    Name: " کشک سمیه",
                    PriceProducer: "5,600 ",
                    priceconsumer: "58,200,100",
                    priceCompany: "4,600",
                    SelectCount: " 6",
                    Reserved: false,
                    category:"کشک"
                  },
                  {
                    Id: "6",
                    Image: "https://picsum.photos/250/250/?image=81",
                    Name: "روغن نی ",
                    PriceProducer: "5,600 ",
                    priceconsumer: "58,200,100",
                    priceCompany: "4,600",
                    SelectCount: " 66",
                    Reserved: false,
                    category:"روغن"
                  }
                  ,
                  {
                    Id: "7",
                    Image: "https://picsum.photos/250/250/?image=82",
                    Name: " روغن غنچه  ",
                    PriceProducer: "5,600 ",
                    priceconsumer: "58,200,100",
                    priceCompany: "4,600",
                    SelectCount: " 7",
                    Reserved: false,
                    category:"روغن"
                  }
                  ,
                  {
                    Id: "8",
                    Image: "https://picsum.photos/250/250/?image=79",
                    Name: " رغن اویلا ",
                    PriceProducer: "5,600 ",
                    priceconsumer: "58,200,100",
                    priceCompany: "4,600",
                    SelectCount: " 8",
                    Reserved: false,
                    category:"روغن"
                  }
                ],
              },
              {
                id: 2,
                categoryName: "دسته2",
                products: [
                  {
                    Id: "1",
                    Image: "https://picsum.photos/250/250/?image=14",
                    Name: "کشکaaaaaaaaaaaaaaa خرم ",
                    PriceProducer: "5,600 ",
                    priceconsumer: "58,200,100",
                    priceCompany: "4,600",
                    SelectCount: "11",
                    Reserved: true,
                    category:"کشک"
                  },
                  {
                    Id: "2",
                    Image: "https://picsum.photos/250/250/?image=29",
                    Name: " کشک پارمیس ",
                    PriceProducer: "5,600 ",
                    priceconsumer: "58,200,100",
                    priceCompany: "4,600",
                    SelectCount: " 22",
                    Reserved: false,
                    category:"کشک"
                  },
                  {
                    Id: "3",
                    Image: "https://picsum.photos/250/250/?image=19",
                    Name: " کشک چوپان ",
                    PriceProducer: "5,600 ",
                    priceconsumer: "58,200,100",
                    priceCompany: "4,600",
                    SelectCount: " 333",
                    Reserved: false,
                    category:"کشک"
                  },
                 
                  {
                    Id: "4",
                    Image: "https://picsum.photos/250/250/?image=59",
                    Name: " کشک نیاوران ",
                    PriceProducer: "5,600 ",
                    priceconsumer: "58,200,100",
                    priceCompany: "4,600",
                    SelectCount: " 5",
                    Reserved: false,
                    category:"کشک"
                  },
                  {
                    Id: "5",
                    Image: "https://picsum.photos/250/250/?image=84",
                    Name: " کشک سمیه",
                    PriceProducer: "5,600 ",
                    priceconsumer: "58,200,100",
                    priceCompany: "4,600",
                    SelectCount: " 6",
                    Reserved: false,
                    category:"کشک"
                  },
                  {
                    Id: "6",
                    Image: "https://picsum.photos/250/250/?image=81",
                    Name: "روغن نی ",
                    PriceProducer: "5,600 ",
                    priceconsumer: "58,200,100",
                    priceCompany: "4,600",
                    SelectCount: " 66",
                    Reserved: false,
                    category:"روغن"
                  }
                  ,
                  {
                    Id: "7",
                    Image: "https://picsum.photos/250/250/?image=82",
                    Name: " روغن غنچه  ",
                    PriceProducer: "5,600 ",
                    priceconsumer: "58,200,100",
                    priceCompany: "4,600",
                    SelectCount: " 7",
                    Reserved: false,
                    category:"روغن"
                  }
                  ,
                  {
                    Id: "8",
                    Image: "https://picsum.photos/250/250/?image=79",
                    Name: " رغن اویلا ",
                    PriceProducer: "5,600 ",
                    priceconsumer: "58,200,100",
                    priceCompany: "4,600",
                    SelectCount: " 8",
                    Reserved: false,
                    category:"روغن"
                  }
                ],
              },
              
            ],
          ],
  },
  mutations,
  actions,
  getters,
};

