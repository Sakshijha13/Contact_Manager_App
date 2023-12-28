const express = require("express");
const mongoose = require("mongoose");

const errorHandler = require("./middleware/errorHandler.js");

const app = express();
app.use(express.json());
mongoose.connect("mongodb://localhost:27017/contactDB")
.then(()=>console.log("server connected to the database"))
.catch((err)=> console.log(err))

app.use("/api/contacts", require("./routes/contactRoutes.js"))
app.use("/api/users", require("./routes/userRoutes.js"))
app.use(errorHandler);


app.listen("3000", (req, res)=>{
    console.log("sever is running at 3000")
})