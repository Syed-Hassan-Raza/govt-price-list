const mongoose = require("mongoose");
const itemSchema = new mongoose.Schema({
  category: { type: mongoose.Schema.Types.ObjectId, ref: "categories" },
  Item_Name: {
    type: String,
    required: "Full name can't be empty",
    unique: true
  },
  unit: {
    type: String,
    required: true
  },
 itemDetail: [{ type: mongoose.Schema.Types.ObjectId, ref: "itemdetails" }]
});


module.exports = mongoose.model("items", itemSchema);

