"use strict";
require("dotenv").config();

// Connects to our database depending on the URI as an environmental variable
const POSTGRES_URI =
  process.env.NODE_ENV === "test" ? "sqlite:memory:" : process.env.DATABASE_URL;

// require both the Sequelize and Datatype  constructor from the sequelize package
const { Sequelize, DataTypes } = require("sequelize");

// We will configure our connection options for production

let sequelizeOptions =
  process.env.NODE_ENV === "production" //if it in huroko put this is
    ? {
        dialectOptions: {
          ssl: {
            require: true,
            rejectUnauthorized: false,
          },
        },
      }
    : //else locally so empty setting
      {};

// our connection object
// we are going to use this to connect to Postgres
let sequelize = new Sequelize(POSTGRES_URI, sequelizeOptions);

const clothes = require("./clothes.mod");
const food = require("./food.mod");

module.exports = {
  db: sequelize,
  Clothes: clothes(sequelize, DataTypes), // this step is used to create a new table
  Food: food(sequelize, DataTypes), // this step is used to create a new table
};
