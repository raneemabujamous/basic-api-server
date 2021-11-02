"use strict";
const express = require("express");
const { Clothes } = require("../models/index"); //name of function
const clothesRouter = express.Router(); //method in express to create end point

clothesRouter.get("/clothes", getAllClothes);
clothesRouter.get("/clothes/:id", getPiceOfClothes);
clothesRouter.post("/clothes", createNewPice);
clothesRouter.put("/clothes/:id", updateClothes);
clothesRouter.delete("/clothes/:id", deleteClothes);

async function getAllClothes(req, res) {
  const allItem = await Clothes.findAll(); //this to take all data from model but we take it from index
  res.status(200).json(allItem);
}

async function getPiceOfClothes(req, res) {
  const id = parseInt(req.params.id);
  const piceOfClothes = await Clothes.findOne({
    where: {
      id: id,
    },
  });
  res.status(200).json(piceOfClothes);
}

async function createNewPice(req, res) {
  const obj = req.body;
  let newItem = await Clothes.create(obj);
  res.status(201).json(newItem);
}

async function updateClothes(req, res) {
  const id = parseInt(req.params.id);
  const obj = req.body;
  let findItem = await Clothes.findOne({ where: { id: id } });
  let updateItem = await findItem.update(obj);
  res.status(201).json(updateItem);
}

async function deleteClothes(req, res) {
  const id = parseInt(req.params.id);
  let deleteItem = await Clothes.destroy({ where: { id } });
  res.status(204).json(deleteItem);
}
module.exports = clothesRouter;
