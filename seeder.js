const mongoose=require('mongoose');
const dotenv=require('dotenv');
require('colors');
const users=require('./data/users');
const User= require('./models/user');
const Product= require('./models/ProductModel');
const Order= require('./models/OrderModel');
const products=require('./data/products');
const connectDb=require('./config/config');

dotenv.config();
connectDb();


const importdata = async()=>{
    try{
await Order.deleteMany();
await Product.deleteMany();
await User.deleteMany();
const createuser=await User.insertMany(users);
const adminUser=createuser[0]._id;
const Sampledata=products.map(product=>{
    return{...product,user:adminUser};
});
await Product.insertMany(Sampledata);
console.log("Imported Data!!".green);
process.exit();
    }
    catch(error){
console.log(`Error: ${error.message}`.red.inverse);

    }
}


const dataDestroy=async()=>{
    await Order.deleteMany();
await Product.deleteMany();
await User.deleteMany();
console.log(`${error}`.green);
process.exit();
}


if(process.argv[2]=== "-d"){
    dataDestroy();
}
else{
    importdata();
}
