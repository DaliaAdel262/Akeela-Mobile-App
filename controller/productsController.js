const Product = require('../models/products');
const Restaurant = require('../models/restaurants');
const Cafe = require('../models/cafes');

exports.getAllProducts = async (req, res) => {
  const products = await Product.find();
  res.json(products);
};

exports.searchByProduct = async (req, res) => {
  try {
    const searchTerm = req.query.product;

    if (!searchTerm) {
      return res.status(400).json({ message: "Product name is required." });
    }

    const products = await Product.find({
      name: { $regex: searchTerm, $options: 'i' }
    });

    const productIds = products.map(p => p._id);

    const restaurants = await Restaurant.find({ products: { $in: productIds } });
    const cafes = await Cafe.find({ products: { $in: productIds } });

    res.json({
      restaurants,
      cafes
    });

  } catch (error) {
    console.error("Error in search:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

