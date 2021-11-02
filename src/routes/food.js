"use strict";
const express = require("express");
const { Food } = require("../models/index"); //name of function
const foodRouter = express.Router(); //method in express to create end point
foodRouter.get("/food", getAllFood);
foodRouter.get("/food/:id", getOneFood);
foodRouter.post("/food", createNewFood);
foodRouter.put("/food/:id", updateFood);
foodRouter.delete("/food/:id", deleteFood);

async function getAllFood(req, res) {
  const allItem = await Food.findAll(); //this to take all data from model but we take it from index
  res.status(200).json(allItem);
}

async function getOneFood(req, res) {
  const id = parseInt(req.params.id);
  const oneFood = await Food.findOne({
    where: {
      id: id,
    },
  });
  res.status(200).json(oneFood);
}

async function createNewFood(req, res) {
  const obj = req.body;
  let newItem = await Food.create(obj);
  res.status(201).json(newItem);
}

async function updateFood(req, res) {
  const id = parseInt(req.params.id);
  const obj = req.body;
  let findItem = await Food.findOne({ where: { id: id } });
  let updateItem = await findItem.update(obj);
  res.status(201).json(updateItem);
}

async function deleteFood(req, res) {
  const id = parseInt(req.params.id);
  let deleteItem = await Food.destroy({ where: { id } });
  res.status(204).json(deleteItem);
}
module.exports = foodRouter;
