const { getAllProducts } = require("../utils/supabase");

async function getProducts(req, res) {
  const data = await getAllProducts();

  return res.status(200).json(data);
}

module.exports = {
  getProducts,
};
