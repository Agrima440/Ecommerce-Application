const express = require("express");
 const {errorHandler}= require('./middlewares/errorMiddleware')
 require("colors");
 const products = require("./data/products");
 const connectDb=require("./config/config")
 const dotenv=require("dotenv");
 const productRoutes=require('./routes/productsRoute');
 const usersRoute=require('./routes/UsersRoute')
const path=require('path')
const orderRoutes=require('./routes/orderRoute')

//dotenv connection
 dotenv.config();

//connection to mongodb
 connectDb();
 const app = express();

 app.use(express.json());
 app.use(express.static(path.join(__dirname,'./client/build')))


 //var cors = require('cors')n
// app.use(cors())
// app.get("/", (req, res) => {
//   res.send("Welcome to Node Server");
// });


app.use("/api",productRoutes);
app.use("/api/users",usersRoute);
app.use("/api/orders",orderRoutes);
app.get("/api/config/paypal", (req,res)=>{
  res.send(process.env.PAYPAL_CLIENT_ID);
})


app.get('*',function(req,res){
  res.sendFile(path.join(__dirname,'./client/build/index.html'))

})
 app.use(errorHandler);
 const PORT=8080;
app.listen( process.env.PORT || PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});





