const express = require("express");
const connectDB = require("./config/db");
require("dotenv").config();

const app = express();
connectDB();

app.get("/", (req, res) => {
  res.send("Server is up—Mongo should be connected!");
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`🚀 Server listening on http://localhost:${PORT}`);
});
