const express = require('express');
const { createPhone, getPhoneDetail, updatePhone, deletePhone, searchPhone } = require('../controllers/phone.js');

const router = express.Router();

router.post('/create', createPhone);
router.get('/:id', getPhoneDetail);
router.patch('/update/:id', updatePhone);
router.delete('/delete/:id', deletePhone);
router.get('/', searchPhone);

module.exports = router;
