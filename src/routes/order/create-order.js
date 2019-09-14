const Order = require("../../modules/db/schema/order");

const createOrder = (request, response) => {
  const order = request.body;
  const newOrder = new Order(order);

  const sendResponse = order => {
    console.log(order);

    response.json({
      status: "success",
      order
    });
  };

  const sendError = () => {
    response.status(400);
    response.json({
      error: "order was not saved"
    });
  };

  newOrder
    .save()
    .then(sendResponse)
    .catch(sendError);
};

module.exports = createOrder;
