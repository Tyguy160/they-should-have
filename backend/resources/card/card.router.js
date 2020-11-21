const { Router } = require('express');
const { getCardById, getCards, createCard } = require('./card.controllers');

const router = Router();

router.get('/:id', getCardById);
router.get('/', getCards);
router.post('/', createCard);

module.exports = { router };
