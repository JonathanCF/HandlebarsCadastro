const express = require('express');
const router = express.Router();
const ControllerForm = require('../Controllers/ControllersForm');

router.get('/', ControllerForm.index);

router.post('/add', ControllerForm.cadastro)

router.get('/lista', ControllerForm.lista)

router.get('/deletar', ControllerForm.deletar)



module.exports = router