const { Card } = require('./card.model');

const getCardById = async (req, res) => {
  try {
    const card = await Card.findById(req.params.id);
    if (!card) {
      res.status(404).json({
        message: "Uh oh, looks like there isn't a card with that ID.",
      });
    }
    res.status(200).json(card);
  } catch (err) {
    console.error(err);
    res.status(400).end();
  }
};

const getCards = async (req, res) => {
  try {
    const cards = await Card.find({});
    if (!cards) {
      res
        .status(404)
        .json({ message: 'Uh oh, looks like there are no cards.' });
    }
    return res.status(200).json(cards);
  } catch (err) {
    console.error(err);
    res.status(400).end();
  }
};

const createCard = async (req, res) => {
  try {
    const newCard = new Card({ description: req.body.description });
    await newCard.save();
    res.status(200).json({ message: 'card created' });
  } catch (err) {
    console.error(err);
    res.status(400).end();
  }
};

module.exports = { getCardById, getCards, createCard };
