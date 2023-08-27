import express from 'express';
import { isAdmin, requireSignIn } from './../middlewares/authMiddleware.js'
import { createCategoryController, updateCategoryContoller,categoryController, singleCategoryController, deleteCategoryController } from '../controllers/categoryContoller.js';

const router = express.Router()


//routes
//create Category
router.post('/create-category', requireSignIn, isAdmin, createCategoryController)


//update category 
router.put('/update-category/:id',requireSignIn,isAdmin,updateCategoryContoller)


//get all category
router.get('/get-category',categoryController)

//single category

router.get('/single-category/:slug',singleCategoryController)

//delete category
router.delete('/delete-category/:id',requireSignIn,isAdmin,deleteCategoryController)

export default router