const mongoose = require('mongoose');
const passport = require('passport');
const _ = require('lodash');

const itm = mongoose.model('items');
const itmD = mongoose.model('itemdetails');

//in populate string consist of property name which declare in child model

module.exports = {
    items: async (req, res, next) => {
      const it = await itm.find()
      res.status(200).json(it);
    },
    itemsCat: async (req, res, next) => {
        const cat = await itm.find().populate('category','Category_Name');
        res.status(200).json(cat);
      },
      itemsCatDetail: async (req, res, next) => {
        const it = await itmD.find().populate({path:'item',populate:{path:'category'}});
        res.status(200).json(it);
      },
    getItmById: async (req, res, next) => {
        const {id} = req.params;
        const cat = await itm.findById(id).populate
       
        res.status(200).json(cat);
      },
}