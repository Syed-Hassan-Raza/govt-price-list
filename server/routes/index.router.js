const express = require('express');
const router = express.Router();

const ctrlUser = require('../controllers/user.controller');
const category= require('../controllers/categories.controller');
const items=require('../controllers/item.controller');
const jwtHelper = require('../config/jwtHelper');
var multer = require('multer');
var DIR = '../img_uploads';
//define the type of upload multer would be doing and pass in its destination, in our case, its a single file with the name photo
var upload = multer({dest: DIR}).single('photo');


router.post('/register', ctrlUser.register);
router.post('/authenticate', ctrlUser.authenticate);
router.get('/userProfile',jwtHelper.verifyJwtToken, ctrlUser.userProfile);
//Category
router.get('/categories',category.categories);

router.get('/categories/:id',category.getCatById);
router.get('/categoriess/:Category_Name',category.getCatByName);

router.post('/categories/add',category.AddCategories);
router.delete('/categories/delete/:id',category.deleteCategory);

router.put('/categories/update/:id',category.updateCategory);


//Item
router.get('/items',items.items);
router.get('/items/todayPrices',items.itemsTodayPrices);

router.put('/items_category/hide/:id',items.hideItem);
router.put('/items_category/show/:id',items.showItem);

router.get('/items_category',items.itemsCat);
router.get('/items_category/hidden',items.itemsHidden);

router.get('/items_category_itemPrice',items.itemsCatDetail);
router.post('/items/add',items.AddItem);
router.post('/items/addPricing',items.AddItemDetail);

router.put('/items/update/:id',items.updateItem);
router.delete('/items/delete/:id',items.deleteItem,jwtHelper.verifyJwtToken, ctrlUser.userProfile);
router.delete('/items_prices/delete/:id',items.deleteItemDetail);
router.post('/items_prices',items.itemsCatDetailFilter);



module.exports = router;



