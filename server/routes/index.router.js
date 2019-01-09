const express = require('express');
const router = express.Router();

const ctrlUser = require('../controllers/user.controller');
const category= require('../controllers/categories.controller');
const items=require('../controllers/item.controller');
const jwtHelper = require('../config/jwtHelper');

router.post('/register', ctrlUser.register);
router.post('/authenticate', ctrlUser.authenticate);
router.get('/userProfile',jwtHelper.verifyJwtToken, ctrlUser.userProfile);
//Category
router.get('/categories',category.categories);

router.get('/categories/:id',category.getCatById);
router.post('/categories/add',category.AddCategories);
router.post('/categories/delete/:id',category.deleteCategory);

router.post('/categories/update/:id',category.updateCategory);


//Item
router.get('/items',items.items);
router.get('/items_category',items.itemsCat);
router.get('/items_category_itemPrice',items.itemsCatDetail);

module.exports = router;



