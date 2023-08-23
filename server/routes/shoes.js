const express = require('express');
const { createShoes, getShoesDetail, updateShoes, deleteShoes, searchShoes } = require('../controllers/shoes.js');

const router = express.Router();

router.post('/create', createShoes);
router.get('/:id', getShoesDetail);
router.patch('/update/:id', updateShoes);
router.delete('/delete/:id', deleteShoes);
router.get('/', searchShoes);

module.exports = router;
