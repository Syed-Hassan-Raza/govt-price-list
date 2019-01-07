const mongoose = require('mongoose');
const passport = require('passport');
const _ = require('lodash');

const Category = mongoose.model('categories');



module.exports.categories = (req, res, next) =>{
    Category.find({},
        (err, cat) => {
            if (!cat)
                return res.status(404).json({ status: false, message: 'record not found.' });
            else
                return res.status(200).json({ status: true, cat : _.pick(cat,['Category_Name']) });
        }
    );
}