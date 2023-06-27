const express = require('express')
const checkAuth = require('../middleware/check-auth')
const RegBook = require('../models/RegBook')
const AddRoom = require('../models/Addroom')
const mongoose  = require('mongoose')
const objectId = mongoose.Types.ObjectId
const OrderRouter = express.Router()





OrderRouter.get('/view-bookings', async(req,res)=>{
try {
    const result = await RegBook.aggregate([
        {
          '$lookup': {
            'from': 'registers', 
            'localField': 'userId', 
            'foreignField': '_id', 
            'as': 'user'
          }
        },
        {
            "$unwind":"$user"
        },
        {
            '$match':{
                'status':'0'
            }
        },
        {
            "$group":{
                '_id':'$_id',
                'username':{"$first":"$user.username"},
                'number':{"$first":"$user.number"},
                'email':{"$first":"$user.email"},
                'checkin':{"$first":"$checkin"},
                'checkout':{"$first":"$checkout"},
                'nopeoples':{"$first":"$nopeoples"},
                'payment':{"$first":"$payment"},
               
             
            }
        }
      ])
        if(result[0]!=undefined){
            res.status(200).json({
                success : true,
                error: false,
                data : result
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
OrderRouter.post('/roombook/:id', checkAuth,async(req,res)=>{
try {
 
    const {username,email,number,checkin,checkout,count,payment}= req.body
    const result = await RegBook.create({username,email,number,checkin,checkout,count,payment,userId:req.userData.userId})
    console.log(result);
        if(result){
            const id = req.params.id
             const user_id = new objectId(id)
         const user = await AddRoom.updateOne({_id:user_id},{$set:{status:1}})
          return  res.status(200).json({
                success : true,
                error: false,
                message : 'thanks for booking'
            })
        }
    
} catch (error) {
    return res.status(400).json({   
        success : false,
        error : true,
        message : 'something went wrong'
    })
}
})

OrderRouter.post('/vacate/:id',async(req,res)=>{
 try {
    const id = req.params.id
    console.log(req.params.id);
    const user_id = new objectId(id)
    console.log(user_id);
    const user = await AddRoom.updateOne({_id:user_id},{$set:{status:0}})
    return res.status(200).json({
        success : true,
        error: false,
        message : 'vacated'
    })
 } catch (error) {
    console.log(error);
 }
})
module.exports=OrderRouter
