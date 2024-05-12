const express = require('express');
const router = express.Router();
const consolationController = require('../controllers/consolationController');

router.get('/', consolationController.getAllConsolation);
router.post('/', consolationController.getTempConsolationSave);



module.exports = router;