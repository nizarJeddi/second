const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/rest_API")
  .then(() => console.log("Connected au mongodb sur local!"));
