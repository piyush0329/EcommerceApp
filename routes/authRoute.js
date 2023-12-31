import express from "express";
import { registerController, loginController, testController, forgotPasswordController,updateProfileController, getOrderController,getAllOrderController, orderStatusController} from '../controllers/authController.js'
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
//router object 

const router = express.Router()

//routing 
//REGISTER || METHOD POST 

router.post('/register', registerController)

// LOGIN || POST
router.post('/login', loginController)

//forgot password || POST

router.post('/forgot-password',forgotPasswordController)

//test route
router.get('/test', requireSignIn,isAdmin, testController)

//protected route auth for user
router.get('/user-auth',requireSignIn,(req,res)=>{
    res.status(200).send({ok:true})
})
//protected route auth for admin
router.get('/admin-auth',requireSignIn,isAdmin,(req,res)=>{
    res.status(200).send({ok:true})
})

//update profile
router.put('/profile',requireSignIn, updateProfileController)

//orders

router.get('/orders',requireSignIn,getOrderController)

//all orders
router.get('/all-orders',requireSignIn,isAdmin,getAllOrderController)

//order status update
router.put('/order-status/:orderId',requireSignIn,isAdmin,orderStatusController)
export default router