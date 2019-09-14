const Product = require("../../modules/db/schema/product");

const updateProduct = (request, response) => {
  const product = request.body;
  const id = request.params.id;

  const sendError = () => {
    response.status(400);
    response.json({
      status: "error",
      text: "there is no such user"
    });
  };

  const sendResponse = newProduct => {
    if (!newProduct) {
      return sendError();
    }

    response.json({
      status: "success",
      product: newProduct
    });
  };

  Product.findOneAndUpdate(
    { _id: id },
    product,
    { new: true } // вернуть обновленный документ
  )
    .then(sendResponse)
    .catch(sendError);
};

module.exports = updateProduct;
