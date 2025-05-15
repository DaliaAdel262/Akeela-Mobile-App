const mongoose = require('mongoose');

const restaurantSchema = new mongoose.Schema({
  name: String,
  image: String,
  location: String,
  products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }]
});

module.exports = mongoose.model('Restaurant', restaurantSchema);
