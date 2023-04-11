const express = require("express");
var cors = require("cors");

const app = express();

const PORT = 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hi there on MainPage");
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Express server listening on port ${PORT}`);
});
