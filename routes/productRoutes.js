import express from 'express'
import { isAdmin, requireSignIn } from './../middlewares/authMiddleware.js';
import { createProductController, deleteProductController, getProductController, getSingleProductController, productPhotoController, updateProductController, productFiltersController, productCountController, productListController,  searchProductController, relatedProductController, productCategoryController, braintreeTokenController, braintreePaymentController} from '../controllers/productController.js';

import formidable from 'express-formidable';

const router = express.Router()

//routes

//create product
router.post('/create-product', requireSignIn, isAdmin, formidable(), createProductController)

//get all product

router.get('/get-product', getProductController)

//get single product

router.get('/get-product/:slug', getSingleProductController)

//get photo

router.get('/product-photo/:pid', productPhotoController)

//delete product
router.delete('/product/:pid', deleteProductController)

//update product
router.put('/update-product/:pid', requireSignIn, isAdmin, formidable(), updateProductController)


//filter product
router.post('/product-filters', productFiltersController)

//product count
router.get('/product-count', productCountController)

//product per page
router.get('/product-list/:page', productListController)

//search product
router.get('/search/:keyword',searchProductController)


//similar products
router.get('/related-product/:pid/:cid',relatedProductController)

//categorywise product
router.get('/product-category/:slug',productCategoryController)


//payments route
//token
router.get('/braintree/token',braintreeTokenController)

//payments
router.post('/braintree/payment',requireSignIn,braintreePaymentController)


export default router