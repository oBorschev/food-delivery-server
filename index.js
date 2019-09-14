const startServer = require("./src/server");
const connetctToDb = require("./src/modules/db/connect-db");
const { port, dataBaseUrl } = require("./config");

startServer(port);
connetctToDb(dataBaseUrl);
