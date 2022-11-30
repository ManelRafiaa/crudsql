

var express = require('express');
const { createMatiere, getAllMatiere, updateMatiere, deleteMatiere, getMatiere, findAbsenceByMatiere } = require('../controllers/matiereController');
var router = express.Router();

router.get('/', getAllMatiere);
router.get('/:matiereId', getMatiere);
router.post('/', createMatiere);
router.put('/:matiereId', updateMatiere);
router.delete('/:matiereId', deleteMatiere);
router.get('/:matiereId', findAbsenceByMatiere);

module.exports = router;