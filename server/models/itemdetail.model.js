const mongoose = require('mongoose');
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1; //January is 0!
var yyyy = today.getFullYear();
const itemDetailSchema = new mongoose.Schema({
    item: { type: mongoose.Schema.Types.ObjectId, ref: "items" },
   
    ratea: {
      type: Number,
      required: true,
      unique: false
    },
    rateb: {
      type: Number,
      required: true
    },
    ratec: {
      type: Number,
      required: true
    },
    date: {
      type:Date,
      default:today = mm + '/' + dd + '/' + yyyy,
    }
  });
  module.exports = mongoose.model("itemdetails", itemDetailSchema);
