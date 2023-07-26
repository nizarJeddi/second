const express=require('express');
const routes=express.Router();

const dotenv = require("dotenv");
dotenv.config();


const { getAllProduct, addProduct, setProduct } = require('../controller/productController');
const { addUser, setUser, getAllUsers, setUserDelete } = require('../controller/userController');
const { emailSend } = require('../controller/sendEmailController');
routes.get('/product',getAllProduct);
routes.post('/product',addProduct)
routes.put('/product/:id',setProduct);



routes.post('/user',addUser)
routes.put("/user/:userId/:produitId",setUser);
routes.put("/userDelete/:userId/:produitId", setUserDelete);

routes.get('/user',getAllUsers);




routes.post("/send-email",emailSend );


module.exports=routes;
