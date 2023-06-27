const express = require('express')
const AddRoom = require('../models/Addroom')
const AddRouter = express.Router()
  const multer = require("multer")
const RegModel = require('../models/RegModel')
const mongoose  = require('mongoose')
const objectId = mongoose.Types.ObjectId



const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, '../client/public/upload/')
    },
    filename: function (req, file, cb) {
      cb(null, req.body.name)
    }
  })
  
  const upload = multer({ storage: storage })

   AddRouter.post('/upload',upload.single("file",(req,res)=>{
    return res.json("file upload")
   }))


   //..............adddetails..................
   
   AddRouter.post('/check-room',async(req,res)=>{
   try {
    const {rate,image,location,facilities,extrainfo,discount, nearbyplace,roomrating} = req.body
    console.log(req.body);
    const result = await AddRoom.create({rate,image,location,facilities,extrainfo,discount,nearbyplace,roomrating,status:0})
  
  if(result){
  return res.status(200).json({
    success : true,
    error : false,
    data : result,
    message : 'successfuly added' 
  })
}
console.log(result);

   } catch (error) {
     console.log(error);
   }
   })

   //...............viewrooms................
  
   AddRouter.post('/viewroom',async(req,res)=>{
       try {
         const user = await AddRoom.find({status:0})
         return res.status(200).json({
            success : true ,
            error : false,
            data : user
         })
       } catch (error) {

          console.log(error);
       }
   })

   //------------------single view---------------
   AddRouter.post('/single/:id',async(req,res)=>{

    try {
      const id = req.params.id
      const room_id = new objectId(id)
      const user = await AddRoom.findOne({_id:room_id})
      return res.status(200).json({
        success : true,
        error : false,
        data : user
      })
    } catch (error) {
      console.log(error);
    }
   })


   //-------------deleteone----------------
   AddRouter.post('/delete/:id',async(req,res)=>{
   try {
       const id = req.params.id
       const user = await AddRoom.deleteOne({_id:id})
       return res.status(200).json({
            success :true,
            error : false ,
           
       })
   } catch (error) {
    console.log(error);
   }
   })

   //------------------update-------------------
   AddRouter.post('/update/:id',async(req,res)=>{
    const data = {
         rate : req.body.rate,
         location : req.body.location,
         facilities : req.body.facilities,
         extrafnfo : req.body.extranfo,
         discount : req.body.discount,
         nearbyplace : req.body.nearbyplace,
         roomrating : req.body.roomrating

    }
    try {
      const id = req.params.id
      const user = await AddRoom.updateOne({_id:id},{$set:data})
      return res.status(200).json({
        success :true,
        error : false,
        data : user
      })
    } catch (error) {
      console.log(error);
    }
   })


 AddRouter.post('/userview',async(req,res)=>{
     try {
      const user = await RegModel.find({role:1})
      
      return res.status(200).json({
        success: true,
        error : false,
        data : user
      })

     } catch (error) {
        console.log("error",error);
     }
 })
//-----------------------availibility------------------------




   module.exports=AddRouter
