const express = require('express');

const rotaService = require('./rota.service');
const rotaSchema = require('./rota.schema');
const validate = require('../validators');

const router = express.Router();

router.post('/', async (req, res, next) => {
  try {
    validate(req.body, rotaSchema);
    const rota = await rotaService.create();
    res.status(201).json(rota);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
