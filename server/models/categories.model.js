const mongoose = require('mongoose');
const catSchema = new mongoose.Schema({
    item : [{ type:mongoose.Schema.Types.ObjectId, ref: 'items' }],
    
    Category_Name: {
        type: String,
        required: 'Full name can\'t be empty',
        unique : true
    }

});
module.exports=mongoose.model("categories", catSchema);
