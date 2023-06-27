const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://aswinpp:aswinpp@cluster0.pazz29g.mongodb.net/TRAVEL-WEBPAGE_db?retryWrites=true&w=majority')

const schema = mongoose.Schema

const Registrationschema = new schema ({
    userId: {type:mongoose.Types.ObjectId,ref:"register"},
    username : {type:String,require:true},
    number : {type:String,require:true},
    checkin : {type:String,require:true},
    checkout : {type:String,require:true},
    nopeoples : {type:String,require:true},
    payment : {type:String,require:true},

})
 const RegBook = mongoose.model('Orders',Registrationschema)

module.exports=RegBook