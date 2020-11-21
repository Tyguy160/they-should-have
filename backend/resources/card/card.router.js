const { Router } = require('express');
const { getCardById, getCards } = require('./card.controllers');

const router = Router();

router.get('/:id', getCardById);
router.get('/', getCards);

module.exports = { router };
