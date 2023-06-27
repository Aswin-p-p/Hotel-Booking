const bodyParser = require( "body-parser")
const express =require('express')
var cors = require('cors');
const RegRouter = require('./src/router/RegRputer');
const AddRouter = require("./src/router/AddRouter");
const OrderRouter = require("./src/router/Regorder");
const multer = require("multer");
const Gellaryrouter = require("./src/router/GellaryRouter");
const app = express()


app.use(cors())
app.use(bodyParser.json())
app.use(express.urlencoded({ extended: true }))

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader( 
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});

 app.use('/gellary',Gellaryrouter) 
app.use('/register',RegRouter)
app.use('/roomorder',OrderRouter)
app.use('/imageupload',AddRouter)
app.listen(2000,()=>{
  console.log("server started at http://localhost:2000");
})