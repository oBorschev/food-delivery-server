const dbUser = "oleg";
const dbPAssword = "oleg";

const config = {
  port: 8080,
  dbUser,
  dbPAssword,
  dataBaseUrl: `mongodb+srv://${dbUser}:${dbPAssword}@products-77ppg.gcp.mongodb.net/delivery?retryWrites=true&w=majority
  `
};
module.exports = config;
