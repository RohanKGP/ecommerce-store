const express = require("express");
var cors = require("cors");

const app = express();

const PORT = 3000;

app.use(cors());
app.use(express.json());

const user_routes = require("./routes/user");
const products_routes = require("./routes/products");
const orders_routes = require("./routes/orders");

app.get("/", (req, res) => {
  res.send("Hi there on MainPage");
});

// middleware or to set router
app.use("/api/user", user_routes);
app.use("/api/products", products_routes);
app.use("/api/orders", orders_routes);

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`);
});
