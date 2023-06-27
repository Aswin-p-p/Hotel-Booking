const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://aswinpp:aswinpp@cluster0.pazz29g.mongodb.net/TRAVEL-WEBPAGE_db?retryWrites=true&w=majority')

const schema = mongoose.Schema

const Registrationschema = new schema ({
    username : {type:String,require:true},
    email : {type:String,require:true},
    number : {type:String,require:true},
    password : {type:String,require:true},
     role : {type:String,require:true},
     status : {type:String,require:true}
})
 const RegModel = mongoose.model('register',Registrationschema)

module.exports=RegModel