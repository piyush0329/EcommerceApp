import slugify from "slugify"
import categoryModel from "../models/categoryModel.js"


export const createCategoryController = async (req,res)=>{

    try {
        const {name}= req.body
        if(!name){
            return res.status(401).send({message:"Name is required"})
        }
        const existingCategory = await categoryModel.findOne({name})
        if(existingCategory){
            return res.status(200).send({
                success:true,
                message:'Category already exist'
            })
        }
        const category = await new categoryModel({name,slug:slugify(name)}).save()
        res.status(201).send({
            success:true,
            category
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            error,
            message:"Error in Category"
        })
    }

}

//update category

export const updateCategoryContoller=async(req,res)=>{
try {
    const {name} = req.body
    const {id} = req.params
    const category= await categoryModel.findByIdAndUpdate(id,{name,slug:slugify(name)},{new:true})
    res.status(200).send({
        success:true,
        message:'Category Updated Successfully',
        category,
    })
} catch (error) {
    console.log(error);
    res.status(500).send({
        success:false,
        message:"error while updating category",
        error
    })
}
}

//get all category

export const categoryController =async (req,res)=>{
try {
    const category = await categoryModel.find({})
    res.status(200).send({
        success:true,
        message:'All categories list',
        category
    })
} catch (error) {
    console.log(error)
    res.status(500).send({
        success:false,
        message: 'error while getting all categories',
        error
    })
}
}

//get single category
export const singleCategoryController =  async (req,res)=>{
try {
    const {slug} = req.params
    const category = await categoryModel.findOne({slug})
    res.status(200).send({
        success:true,
        message:"Single Category",
        category
    })
} catch (error) {
    console.log(error);
    res.status(500).send({
        success:false,
        message:"error in getting single category",
        error
    })
}
}

// delete category

export const deleteCategoryController = async(req,res)=>{
    try {
        const {id} = req.params
        const deletedCategory = await categoryModel.findByIdAndDelete(id)

        res.status(200).send({
            success:true,
            message:"Category deleted Successfully",
            deletedCategory
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success:false,
            message:"error while deleting category",
            error
        })
    }
}