const Product = require("../../modules/db/schema/product");

const getProduct = (request, response) => {
  const id = request.params.id;

  const sendResponse = user => {
    response.status(200);
    response.json(user);
  };

  const findProduct = Product.findById(id);

  findProduct.then(sendResponse).catch(err => {
    console.error(err);
  });
};

module.exports = getProduct;
