const express = require('express');
const { createWatch, getWatchDetail, updateWatch, deleteWatch, searchWatch } = require('../controllers/watch.js');

const router = express.Router();

router.post('/create', createWatch);
router.get('/:id', getWatchDetail);
router.patch('/update/:id', updateWatch);
router.delete('/delete/:id', deleteWatch);
router.get('/', searchWatch);

module.exports = router;
