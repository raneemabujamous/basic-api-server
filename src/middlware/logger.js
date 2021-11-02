"use strict";
function logger(req, res, next) {
  console.log("request :", req.method, req.path);
  next();
}
module.exports = logger;
