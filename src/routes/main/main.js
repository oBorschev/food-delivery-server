const mainRoute = (req, res) => {
  res.set("Content-type", "text/html");
  res.send("<h1>Main page</h1>");
};

module.exports = mainRoute;
