const express = require('express');
const { createTracksuit, getTracksuitDetail, updateTracksuit, deleteTracksuit, searchTracksuit } = require('../controllers/tracksuit.js'); // Make sure to adjust the controller path accordingly

const router = express.Router();

router.post('/create', createTracksuit);
router.get('/:id', getTracksuitDetail);
router.patch('/update/:id', updateTracksuit);
router.delete('/delete/:id', deleteTracksuit);
router.get('/', searchTracksuit);

module.exports = router;
