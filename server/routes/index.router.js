const express = require('express');
const router = express.Router();

const ctrlUser = require('../controllers/user.controller');
const category= require('../controllers/categories.controller');
const items=require('../controllers/item.controller');
const jwtHelper = require('../config/jwtHelper');

router.post('/register', ctrlUser.register);
router.post('/authenticate', ctrlUser.authenticate);
router.get('/userProfile',jwtHelper.verifyJwtToken, ctrlUser.userProfile);

router.get('/categories',category);
router.get('/items',items);

module.exports = router;



