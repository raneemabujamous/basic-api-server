"use strict";
const express = require("express");
require("dotenv").config();
const app = express();
const handle404Eror = require("./error-handlers/404");
const handle500Eroro = require("./error-handlers/500");
const logger = require("./middlware/logger");
const foodRouter = require("./routes/food");
const clothesRouter = require("./routes/clothes");

app.use(express.json());
const PORT = process.env.PORT;
function start() {
  app.listen(PORT, () => {
    console.log(`SERVER LISTEN ${PORT}`);
  });
}
app.use(clothesRouter);
app.use(foodRouter);

app.use(logger);
app.use("*", handle404Eror);
app.use(handle500Eroro);
module.exports = {
  start: start,
  server: app,
};
