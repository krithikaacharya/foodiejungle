const mongoose =require("mongoose")
const { Schema } =mongoose
const  userSchema =new Schema({

     name: {
        
        type:String
     },
     email: {

        type:String
     },
     phone :{
        type:String
     },
     password : {
        type:String
     }
})

module.exports = mongoose.model("user",userSchema);