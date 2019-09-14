const express = require("express");
const mainRoute = require("./main/main");
const getUser = require("./user/get-user");
const deleteUser = require("./user/delete-user");
const getAllUsers = require("./user/get-all-users");
const createUser = require("./user/create-user");
const updateUser = require("./user/update-user");
const createOrder = require("./order/create-order");
const getOrder = require("./order/get-order");
const createProduct = require("./product/create-product");
const getProduct = require("./product/get-product");
const updateProduct = require("./product/update-product");
const getAllProducts = require("./product/get-all-products");
const getAllOrders = require("./order/get-all-orders");

const apiRoutes = express.Router();

apiRoutes
  .get("/", mainRoute)
  .get("/users", getAllUsers)
  .get("/users/:id", getUser)
  .delete("/users/:id", deleteUser)
  .put("/users/:id", updateUser)
  .post("/users", createUser)
  .get("/orders", getAllOrders)
  .post("/orders", createOrder)
  .get("/orders/:id", getOrder)
  .post("/products", createProduct)
  .get("/products/:id", getProduct)
  .put("/products/:id", updateProduct)
  .get("/products", getAllProducts);

module.exports = apiRoutes;
