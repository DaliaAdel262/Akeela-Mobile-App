const express = require("express");
const connectDB = require("./config/db");
const restaurantsRoutes = require('./routes/restaurantsRoutes');
const cafesRoutes = require('./routes/cafesRoutes');
const productsRoutes = require('./routes/productsRoutes');
const cors = require("cors");
require("dotenv").config();
require('./models/products');

const app = express();
connectDB();

app.use(cors());

app.get("/", (req, res) => {
  res.send("Server is up—Mongo should be connected!");
});

app.use('/api/cafes', cafesRoutes);
app.use('/api/products', productsRoutes);
app.use('/api/restaurants', restaurantsRoutes);

const PORT = process.env.PORT;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Server listening on http://localhost:${PORT}`);
});
