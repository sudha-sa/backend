const usermodel =require("../models/userschema");
const bcrypt =require("bcrypt")
exports.register =async(req,res)=>{
    const { firstname, lastname, phone, email,password } = req.body;
    if (!firstname||!lastname ||!phone || !email ||!password) {
      return res.status(200).send({ msg: "Pls filled all given field" });
    }
try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const userdata = await usermodel.create({
        firstname,lastname,phone,email,password:hashedPassword
    })
    return res.status(200).send({msg:"user register succesfully",userdata});
    
    
} catch (error) {
    return res.status(500).send(error);
}
}