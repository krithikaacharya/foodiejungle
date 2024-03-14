// const mongoose = require("mongoose");

// const CartSchema = mongoose.Schema({
//   title: String,
//   price: Number,
//   category: String,
// //   menuid:String
// });

// module.exports = mongoose.model("cart", CartSchema);

const mongoose =require("mongoose")
const { Schema } =mongoose
const  CartSchema =new Schema({

    title: {
        
        type:String
     },
     price: {

        type:String
     },
     category :{
        type:String
     },
     menuid : {
        type:String
     },
     imageProfile:{
      type:String
     },
     quantity:{
      type:String
     }
})

module.exports = mongoose.model("cart",CartSchema);
