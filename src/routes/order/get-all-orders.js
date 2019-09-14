const Order = require("../../modules/db/schema/order");

const getAllOrders = (request, response) => {
  const sendResponse = order => {
    response.status(200);
    response.json(order);
  };

  Order.find()
    .then(sendResponse)
    .catch(err => {
      console.error(err);
    });
};

module.exports = getAllOrders;
