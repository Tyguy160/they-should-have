const mongoose = require('mongoose');

const url = 'mongodb://localhost/test';

const connect = () => {
  return mongoose.connect(url, { useNewUrlParser: true });
};

module.exports = { connect };
