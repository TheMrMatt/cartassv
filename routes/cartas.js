const express = require('express');
const router = express.Router();
const { CreateCarta, DeleteCarta, GetMazo } = require('../controllers/cartas');

router
    .route('/')
    .post(CreateCarta)
    .get(GetMazo);

router
    .route('/:id')
    .delete(DeleteCarta);

module.exports = router;    