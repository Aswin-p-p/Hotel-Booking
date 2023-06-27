const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://aswinpp:aswinpp@cluster0.pazz29g.mongodb.net/TRAVEL-WEBPAGE_db?retryWrites=true&w=majority')

const schema = mongoose.Schema

const Registrationschema = new schema ({
    
    rate : {type:String,require:true},
    image : {type:String,require:true},
    location : {type:String,require:true},
    facilities : {type:String,require:true},
    extrainfo: {type:String,require:true},
    discount : {type:String,require:true},
    nearbyplace : {type:String,require:true},
    roomrating : {type:String,require:true},
    status: {type:String,require:true},

})
 const AddRoom = mongoose.model('Adminpanel',Registrationschema)

module.exports=AddRoom