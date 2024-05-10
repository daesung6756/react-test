const express = require('express');
const router = express.Router();
const consolationController = require('../controllers/consolationController');

router.get('/', consolationController.getAllConsolation);
router.post('/', consolationController.createConsolation);


module.exports = router;