const mongoose = require('mongoose');

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
      default:Date.now(),
    }
  });
  module.exports = mongoose.model("itemdetails", itemDetailSchema);
