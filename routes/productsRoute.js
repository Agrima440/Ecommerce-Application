const express= require('express');
const {getProduct,getProducts} =require('../controllers/productsController')
const router=express.Router();

router.route('/products').get(getProducts)

  //GET ROUTE FOR ALL PRODUCTS
  router.route('/products/:id').get(getProduct)

  module.exports=router;