const mongoose=require('mongoose');
const schema=mongoose.Schema;
const productSchema = new schema({
  nom: {
    
    type: String,
   default:"si nizar"
  },
  prix: {
    type: Number,
    
  },
  quantité:{
    type:Number,
    
  },
  
});
const Product=mongoose.model('produit',productSchema);
module.exports=Product