const mongoose = require("mongoose");
const schema = mongoose.Schema;
const userSchema=new schema({
  nom:{
    type:String,
    
  },
  email:{
    type:String,
  },
  listeAchats:[{type:mongoose.Schema.Types.ObjectId,ref:'produit'}]
}
, {timestamps : true , versionKey : false });
const User=mongoose.model('User',userSchema);
module.exports=User