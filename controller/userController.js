const User=require('../models/user');


exports.addUser = async (req, res) => {
  try {
    const user = await User.create({
      nom: req.body.nom,
      email: req.body.email,
      listeAchats: [],
    });
    res.send(
      user + "\n user a été ajouté avec succés dans la base de données "
    );
  } catch (error) {
    res.status(500).send("Erreur création user");
    console.error("Erreur lors de la création user", error);
  }
};
exports.setUser = async (req, res) => {
  const { userId, produitId } = req.params;
  try {
    const user = await User.findById(userId).populate("listeAchats");

    if (!user) {
      return res.send("user non trouvé");
    }
    const trouve = user.listeAchats.find((el) => {
      return el._id.toString() === produitId;
    });

    if (trouve) {
      return res.send(
        `oops! le produit : "${trouve.nom}" se trouve dans la liste d'achats de ${user.nom}`
      );
    }
    user.set({ ...user, listeAchats: user.listeAchats.concat(produitId) });
    const newUser = await user.save();
    const updatedUser = await User.findById(userId).populate("listeAchats");
    res.send(
      updatedUser +
        "\n user a été mise à jour avec succés dans la base de données "
    );
  } catch (error) {
    res.status(500).send("Erreur lors de la mise à jour user");
    console.error("Erreur lors de la mise à jour user", error);
  }
};



exports.setUserDelete = async (req, res) => {
  const { userId, produitId } = req.params;
  try {
    const user = await User.findById(userId).populate("listeAchats");

    if (!user) {
      return res.send("user non trouvé");
    }
    const trouve = user.listeAchats.find((el) => {
      return el._id.toString() === produitId;
    });

    if (!trouve) {
      return res.send(
        `oops! le produit ne se trouve pas dans la liste d'achats de ${user.nom}`
      );

    }
    const updatedList=user.listeAchats.filter((el)=>{
      return el._id.toString() !== produitId;
    })
    user.set({ ...user, listeAchats: updatedList });
    const newUser = await user.save();
    const updatedUser = await User.findById(userId).populate("listeAchats");
    res.send(
      updatedUser +
        "\n user a été mise à jour avec succés dans la base de données "
    );
  } catch (error) {
    res.status(500).send("Erreur lors de la mise à jour user");
    console.error("Erreur lors de la mise à jour user", error);
  }
};
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find({}).populate("listeAchats");
    res.send(users);
  } catch (error) {
    res.status(500).send("Erreur ");
    console.error("Erreur lors de la GET user", error);
  }
};