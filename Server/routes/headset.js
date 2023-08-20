const express = require('express');
const { createHeadset, getHeadsetDetail, updateHeadset, deleteHeadset, searchHeadset } = require('../controllers/headset.js');

const router = express.Router();

router.post('/create', createHeadset);
router.get('/:id', getHeadsetDetail);
router.patch('/update/:id', updateHeadset);
router.delete('/delete/:id', deleteHeadset);
router.get('/', searchHeadset);

module.exports = router;
