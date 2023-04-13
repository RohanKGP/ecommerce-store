const express = require("express");
const router = express.Router();

const { getOrders } = require("../controllers/orders");

router.route("/getOrders").post(getOrders);

module.exports = router;
