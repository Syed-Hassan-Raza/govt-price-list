const mongoose = require('mongoose');
const items=require('./items.mdel.js');

const catSchema = new mongoose.Schema({
    Category_Name: {
        type: String,
        required: 'Full name can\'t be empty',
        unique : true,
        items : [{ type: Schema.Types.ObjectId, ref: 'items' }]
    }
});

const Category=mongoose.model('categories', catSchema);
module.exports=Category;