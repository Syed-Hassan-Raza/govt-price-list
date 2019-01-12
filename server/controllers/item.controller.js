const mongoose = require('mongoose');
const passport = require('passport');
const _ = require('lodash');

const itm = mongoose.model('items');
const itmD = mongoose.model('itemdetails');
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1; //January is 0!
var yyyy = today.getFullYear();
//in populate string consist of property name which declare in child model
module.exports = {

    items: async (req, res, next) => {
      const it = await itm.find()
      res.status(200).json(it);
    },
    itemsCat: async (req, res, next) => {
        const cat = await itm.find({hidden:false}).populate('category','Category_Name');
        res.status(200).json(cat);
      },
      
      itemsHidden: async (req, res, next) => {
        const cat = await itm.find({hidden:true}).populate('category','Category_Name');
        res.status(200).json(cat);
      },
     
      hideItem: async (req, res, next) => {
        const { id} = req.params;
       
        const result = await itm.findByIdAndUpdate(id,{hidden:true });
        res.status(200).json({ success: true });
      },
      showItem: async (req, res, next) => {
        const { id} = req.params;
     
        const result = await itm.findByIdAndUpdate(id, {hidden:false });
        res.status(200).json({ success: true });
      },


      itemsTodayPrices: async (req, res, next) => {
        const it = await itmD.find({date:today = mm + '/' + dd + '/' + yyyy}).populate('item');
        res.status(200).json(it);
      },
      itemsCatDetail: async (req, res, next) => {
        const it = await itmD.find().populate({path:'item',populate:{path:'category'}});
        res.status(200).json(it);
      },

      itemsCatDetailFilter: async (req, res, next) => {

        const it = await itmD.find(req.body);
        res.status(200).json(it);
      },


    getItmById: async (req, res, next) => {
        const {id} = req.params;
        const cat = await itm.findById(id).populate
       
        res.status(200).json(cat);
      },
      AddItem: async (req, res, next) => {
        const newitm = new itm(req.body);
        const it = await newitm.save();
        res.status(200).json(it);
      },
      AddItemDetail: async (req, res, next) => {
        const newitm = new itmD(req.body);
        const itD = await newitm.save();
        res.status(200).json(itD);
      },

      updateItem: async (req, res, next) => {
        const { id} = req.params;
        const newItm = req.body;

        const result = await itm.findByIdAndUpdate(id, newItm);
        res.status(200).json({ success: true });
      },
      deleteItem:async(req,res,next)=>{
    const {id}=req.params;
    const result=await itm.findByIdAndRemove(id);
    res.status(200).json({success:true});
      },
      deleteItemDetail:async(req,res,next)=>{
        const {id}=req.params;
        const result=await itmD.findByIdAndRemove(id);
        res.status(200).json({success:true});
          }
}