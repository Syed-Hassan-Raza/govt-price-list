const mongoose = require("mongoose");
const passport = require("passport");
const _ = require("lodash");


const Category = mongoose.model("categories");

module.exports = {
  categories: async (req, res, next) => {
    const cat = await Category.find().populate('item itemDetail');
    res.status(200).json(cat);
  },
  
  getCatById: async (req, res, next) => {
    const {id} = req.params;
    const cat = await Category.findById(id);
   
    res.status(200).json(cat);
  },
  AddCategories: async (req, res, next) => {
    const newCat = new Category(req.body);
    const cat = await newCat.save();
    res.status(200).json(cat);
  },
  updateCategory: async (req, res, next) => {
    const { id} = req.params;
    const newCat = req.body;
    const result = await Category.findByIdAndUpdate(id, newCat);
    res.status(200).json({ success: true });
  },
  deleteCategory:async(req,res,next)=>{
const {id}=req.params;
const result=await Category.findByIdAndRemove(id);
res.status(200).json({success:true});
  }
 
};
