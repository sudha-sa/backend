const express =require("express");
const app =express();
const cors =require("cors");
require("dotenv").config();
const port =process.env.PORT;
const userroute =require("./Router/userroute");

app.use(express.json());
app.use(cors());
app.use("/",userroute)

app.listen(port,()=>{
    console.log(`server listening on port no ${port}`);
})


