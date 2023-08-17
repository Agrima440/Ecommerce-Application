const express=require("express");
const {addOrderItem, getOrderById, updateOrderToPaid, getMyOrders} = require("../controllers/orderController")
const {protect} = require("../middlewares/authMiddleware")
const router=express.Router();

// create new order
router.route("/").post(protect,addOrderItem);

// getUserOrder
router.route("/myorders").get(protect,getMyOrders)

// update order
router.route('/:id/pay').put(protect,updateOrderToPaid)

// get order by id
router.route("/:id").get(protect,getOrderById)



module.exports=router;
