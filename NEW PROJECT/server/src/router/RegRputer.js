const express = require('express')
const RegModel = require('../models/RegModel')
const RegRouter = express.Router()
var jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const mongoose  = require('mongoose')
const objectId = mongoose.Types.ObjectId



RegRouter.post('/check-register',async(req,res)=>{
try {
    const {username,email,number,password}= req.body
    const old = await RegModel.findOne({username:username})
    if(old){
        return res.status(400).json({
            success : false,
            error : true,
            message : 'username already existed'
                                                                                         
        })
    }
    if(old==null){
        return res.status(400).json({
            success : false,
            error : true,
            message : 'enter the username'
                                                                                         
        })
    }
    const hashpass = await bcrypt.hash(password, 10);
        const result = await RegModel.create({username,email,number,password:hashpass,role:1,status:0})
        if(result){
            res.status(200).json({
                success : true,
                error: false,
                message : 'registeration completed'
            })
        }
    
} catch (error) {
    return res.status(400),json({   
        success : false,
        error : true,
        message : 'something went wrong'
    })
}
})

//------------------------Login------------------------
RegRouter.post('/login',async(req,res)=>{
    try {
        const{email,password} = req.body

     const   old= await RegModel.findOne({email})
   
        if(!old){
            return res.status(400).json({
                success : false,
                error : true,
                message : 'email not matching'
            })
        }
        const check = await bcrypt.compare(password, old.password)  //true or false
        console.log(check);
        if(!check){
            return res.status(400).json({
                success : false,
                error : true,
                message : "password not matching"
            })
           
        }
        const token = jwt.sign(
            {userId:old._id,userRole:old.role},
            "secret_this_should_be_longer",
            {expiresIn:"1h"}
        )

        return res.status(200).json({
            success : true,
            error : false,
            data : old,
            token:token,
            expiresIn:3600,
            userRole:old.role,
            message : "succesfuly logined"
        })
    } catch (error) {
        return res.status(500).json({

            message : "something went wrong"
        })
    }
})
//--------------------single view-----------------------
RegRouter.post('/single/:id',async(req,res)=>{
    try {
        const id = req.params.id
        const user_id = new objectId(id)
        const user = await RegModel.findOne({_id:user_id})
        return res.status(200).json({
            success : true,
            error : false,
            data : user
          })
    } catch (error) {
        console.log(error);
    }
})

//---------------update-------------------------
RegRouter.post('/update/:id',async(req,res)=>{
    try {
        const id = req.params.id
         const user_id = new objectId(id)
        const user = await RegModel.updateOne({_id:user_id},{$set:{status:1}})
        return res.status(200).json({
            success : true,
            data : user,
            error : false,
          message : "Admin Approved"
            
        })
    } catch (error) {
        console.log(error);
    }
   
})

//----------------delete---------------------
RegRouter.post('/delete/:id',async(req,res)=>{
    try {
        const id = req.params.id
        const user = await RegModel.deleteOne({_id:id})
        return res.status(200).json({
             success :true,
             error : false ,
            
        })
    } catch (error) {
     console.log(error);
    }
    })

module.exports=RegRouter