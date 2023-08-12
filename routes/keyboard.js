const express = require('express');
const { createKeyboard, getKeyboardDetail, updateKeyboard, deleteKeyboard, searchKeyboard } = require('../controllers/keyboard.js');

const router = express.Router();

router.post('/create', createKeyboard);
router.get('/:id', getKeyboardDetail);
router.patch('/update/:id', updateKeyboard);
router.delete('/delete/:id', deleteKeyboard);
router.get('/', searchKeyboard);

module.exports = router;
