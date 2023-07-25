const express= require('express');
const path=require('path');
const routes=require('./routes/api');
const mongoose=require('mongoose');
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
dotenv.config();
const morgan=require("morgan");
const cors=require("cors");




const app=express();
 app.use(cors());
 app.use(morgan("tiny"));
app.use(express.static("public"));
app.use(express.json());
app.use(routes);
app.use(bodyParser.json());

require('./dataBase/connect')
// const connexionDataBase=async()=>{
//   try {
//      await mongoose
//   .connect("mongodb+srv://nizar:nizar@cluster0.qo9dnin.mongodb.net/", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   });
// console.log('connexion réussite à la base de données mongodb ');
//   } catch (error) {
//    console.log('erreur au connexion au database',error); 
//   }
 
// }

// connexionDataBase()

// mongoose.Promise = global.Promise;

app.listen(process.env.port||4000,function () {
  console.log("l'application Node.js a été montée avec succés dans le serveur localhost ayant le port 4000");
})

