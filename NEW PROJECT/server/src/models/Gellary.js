const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://aswinpp:aswinpp@cluster0.pazz29g.mongodb.net/TRAVEL-WEBPAGE_db?retryWrites=true&w=majority')

const schema = mongoose.Schema

const Registrationschema = new schema ({
    
    image : {type:String,require:true},
  

})
 const GellaryModel = mongoose.model('admingellary',Registrationschema)

module.exports=GellaryModel