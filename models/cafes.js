const mongoose = require('mongoose');

const cafeSchema = new mongoose.Schema({
  name: String,
  image: String,
  location: String,
  products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }]
});

module.exports = mongoose.model('Cafe', cafeSchema, 'cafes');
