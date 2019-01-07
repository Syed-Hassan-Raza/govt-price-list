const mongoose = require('mongoose');
const passport = require('passport');
const _ = require('lodash');

const itm = mongoose.model('items');



module.exports.categories = (req, res, next) =>{
    itm.find({},
        (err, itms) => {
            if (!itms)
                return res.status(404).json({ status: false, message: 'record not found.' });
            else
                return res.status(200).json({ status: true, itms : _.pick(itms,['Category_Name','Item_Name']) });
        }
    );
}