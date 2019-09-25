const mongoose = require("mongoose");
const { Schema } = mongoose;
const timestamp = require("../middleware/timestamp");

const userSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  telephone: Number,
  password: String,
  email: String,
  favoriteProducts: {
    type: Schema.Types.ObjectId,
    ref: "Products"
  },
  viewedProducts: {
    type: Schema.Types.ObjectId,
    ref: "Products"
  },
  orders: {
    type: Schema.Types.ObjectId,
    ref: "Orders"
  }
});
userSchema.plugin(timestamp);

const User = mongoose.model("User", userSchema);

module.exports = User;
