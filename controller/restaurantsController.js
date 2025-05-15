const Restaurant = require('../models/restaurants');

exports.getAllRestaurants = async (req, res) => {
  try {
    const restaurants = await Restaurant.find().populate('products');
    res.json(restaurants);
  } catch (err) {
    console.error('Error fetching restaurants:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

