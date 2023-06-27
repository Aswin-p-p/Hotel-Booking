const express = require('express')
const GellaryModel = require('../models/Gellary')
const Gellaryrouter = express.Router()
const multer = require("multer")



const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, '../client/public/upload/')
    },
    filename: function (req, file, cb) {
      cb(null, req.body.name)
    }
  })

  const upload = multer({ storage: storage })

  Gellaryrouter.post('/upload',upload.single("file"),(req,res)=>{
   return res.json("file upload")
  })

  Gellaryrouter.post('/viewgellary',async(req,res)=>{
    try {
       const user = await GellaryModel.find()
       return res.status(200).json({
        success : true,
        error: false,
        data : user
       })
    } catch (error) {
       console.log(error);
    }
  })

  //-------------add image------------------------
  Gellaryrouter.post('/check-register',async(req,res)=>{
      try {
        const {image}= req.body
        const result = await GellaryModel.create({image})
        return res.status(200).json({
          success : true,
          error : false,
          message : "saved"
        })
        
      } catch (error) {
        console.log(error);
      }
  })
  //................delete.................
  Gellaryrouter.post('/delete',async(req,res)=>{
    try {
      const id = req.params.id
      const user = await GellaryModel.deleteOne({_id:id})
      return res.status(200).json({
        success : true,
        error : false,
        
      })
    } catch (error) {
      console.log(error);
    }
  })

  module.exports= Gellaryrouter