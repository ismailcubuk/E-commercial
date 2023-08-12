const express = require('express');
const { createHeadphones, getHeadphonesDetail, updateHeadphones, deleteHeadphones, searchHeadphones } = require('../controllers/headphones.js');

const router = express.Router();

router.post('/create', createHeadphones);
router.get('/:id', getHeadphonesDetail);
router.patch('/update/:id', updateHeadphones);
router.delete('/delete/:id', deleteHeadphones);
router.get('/', searchHeadphones);

module.exports = router;
