const { register } = require("../controller/usercontroller");

const userroute = require("express").Router();

userroute.get("/",register)

module.exports =userroute;