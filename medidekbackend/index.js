const express =require("express");
const app =express();
const cors =require("cors");
require("dotenv").config();
require("./config/conn")
const port =process.env.PORT;
const userroute =require("./Router/userroute");
const productroute =require("./Router/Productroute");

app.use(express.json());
app.use(cors());
app.use("/",userroute)
app.use("/",productroute)

app.listen(port,()=>{
    console.log(`server listening on port no ${port}`);
})


