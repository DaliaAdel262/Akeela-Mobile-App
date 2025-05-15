const Cafe = require('../models/cafes');

exports.getAllCafes = async (req, res) => {
  const cafes = await Cafe.find().populate('products');
  res.json(cafes);
};
