const Product=require('../models/produits');








exports.getAllProduct=async(req,res)=>{
 try {
   const fetch = await Product.find({});
   res.send(fetch);
 } catch (error) {
   res.send(error);
 }
}
exports.addProduct=async(req,res)=>{
  try {
   const found = await Product.findOne({ nom: req.body.name });
   if (found) {
     res.status(400).send(`nom : ${req.body.name} déjà existe `);
   } else {
     const data = await Product.create({
       nom: req.body.name,
       prix: req.body.price,
       quantité: req.body.quantity,
     });
     res.status(200).send({ message: "produit ajouté avec succés" });
   }
  
  } catch (error) {
   res.status(500).send({message:"erreur serveur"||error})
  }
 
  // res.send(req.body);
 
}
exports.setProduct = async (req, res) => {
  const { id } = req.params;
  const { name, price, quantity } = req.body;
  try {
    const cible = await Product.findById(id);
    // console.log(cible);
    // console.log(typeof cible);
    if (!cible) {
      return res.send("Produit non trouvé");
    }

    cible.set({ ...cible, nom: name });
    const enregistrement = await cible.save();
    res.send("produit mise à jour avec succés" + "\n" + enregistrement);
  } catch (error) {
    res.status(500).send("Erreur lors de la mise à jour du produit");
    console.error("Erreur lors de la mise à jour du produit", error);
  }
};