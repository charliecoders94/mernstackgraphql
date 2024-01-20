const express = require("express");
require("dotenv").config({ path: __dirname + "/config/Appconfig.env" });
const colors=require('colors')
const { graphqlHTTP } = require("express-graphql");
const Schema = require("./schema/Schema");
const ConnectDb = require("./config/DbConfig");
const app = express();
app.use(express.json());
colors.enable()
app.use(
  "/graphql",
  graphqlHTTP({
    schema: Schema,
    graphiql: process.env.Node_ENV === "development",
  })
);
ConnectDb();
app.listen(process.env.Port, () => {
  console.log(`server is started ${process.env.Port}`);
});
