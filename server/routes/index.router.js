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
router.get('/categoriess/:Category_Name',category.getCatByName);

router.post('/categories/add',category.AddCategories);
router.post('/categories/delete/:id',category.deleteCategory);

router.post('/categories/update/:id',category.updateCategory);


//Item
router.get('/items',items.items);
router.get('/items/todayPrices',items.itemsTodayPrices);

router.post('/items_category/hide/:id',items.hideItem);
router.post('/items_category/show/:id',items.showItem);

router.get('/items_category',items.itemsCat);
router.get('/items_category/hidden',items.itemsHidden);

router.get('/items_category_itemPrice',items.itemsCatDetail);
router.post('/items/add',items.AddItem);
router.post('/items/addPricing',items.AddItemDetail);

router.post('/items/update/:id',items.updateItem);
router.post('/items/delete/:id',items.deleteItem,jwtHelper.verifyJwtToken, ctrlUser.userProfile);
router.post('/items_prices/delete/:id',items.deleteItemDetail);
router.post('/items_prices',items.itemsCatDetailFilter);



module.exports = router;



