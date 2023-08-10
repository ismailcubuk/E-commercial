const express = require('express');
const { createTshirt, getTshirtDetail, updateTshirt, deleteTshirt, searchTshirt } = require('../controllers/tshirt.js');

const router = express.Router();

router.post('/create', createTshirt);
router.get('/:id', getTshirtDetail);
router.patch('/update/:id', updateTshirt);
router.delete('/delete/:id', deleteTshirt);
router.get('/', searchTshirt);

module.exports = router;
