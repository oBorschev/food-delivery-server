const mongoose = require("mongoose");
const { Schema } = mongoose;
const timestamp = require("../middleware/timestamp");

const orderSchema = new Schema({
  creator: mongoose.Schema.Types.ObjectId,
  productsList: [
    {
      product: mongoose.Schema.Types.ObjectId,
      type: {
        type: String,
        validate: function(params) {
          return params === "M" || "XL" || "XXL";
        }
      },
      itemsCount: Number
    }
  ],
  deliveryType: {
    type: String,
    validate: function(params) {
      return params === "delivery" || "office";
    }
  },
  deliveryAdress: String,
  sumToPay: Number,
  status: {
    type: String,
    validate: function(params) {
      return params === "inProgress" || "declined" || "finished" || "failed";
    }
  }
});
orderSchema.plugin(timestamp);

const Order = mongoose.model("Orders", orderSchema);

console.log(Order);

module.exports = Order;
