
var express = require('express');
const { getAllAbsences, getAbsence, createAbsence, deleteAbsence, updateAbsence } = require('../controllers/absence');
var router = express.Router();

router.get('/', getAllAbsences);
router.get('/:absentId', getAbsence);
router.post('/', createAbsence);
router.put('/:absentId', updateAbsence);
router.delete('/:absentId', deleteAbsence);

module.exports = router;