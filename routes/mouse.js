const express = require('express');
const { createMouse, getMouseDetail, updateMouse, deleteMouse, searchMouse } = require('../controllers/mouse.js'); // Update the import path

const router = express.Router();

router.post('/create', createMouse); 
router.get('/:id', getMouseDetail); 
router.patch('/update/:id', updateMouse); 
router.delete('/delete/:id', deleteMouse); 
router.get('/', searchMouse); 

module.exports = router;
