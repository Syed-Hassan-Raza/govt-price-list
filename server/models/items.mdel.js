const mongoose = require('mongoose');
const categories=require('./categories.model.js');

const itemSchema = new mongoose.Schema({
    Item_Name: {
        type: String,
        required: 'Full name can\'t be empty',
        unique : true,
    },
    categories : { type: Schema.Types.ObjectId, ref: 'categories' }

});

const Item =mongoose.model('items', itemSchema);
module.exports=Item;