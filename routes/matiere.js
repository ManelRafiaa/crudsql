

var express = require('express');
const { createMatiere, getAllMatiere, updateMatiere, deleteMatiere, getMatiere, findAbsenceByMatiere } = require('../controllers/matiereController');
var router = express.Router();

router.get('/', getAllMatiere);
router.get('/:absentId', getMatiere);
router.post('/', createMatiere);
router.put('/:absentId', updateMatiere);
router.delete('/:absentId', deleteMatiere);
router.get('/:matiereId', findAbsenceByMatiere);

module.exports = router;