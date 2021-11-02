"use strict";

//schcema model to clothes
//sequelize مكتبه باخد منها تدوات بعمللها استدعاء بال index inside model

const Clothes = (sequelize, DataTypes) =>
  sequelize.define("clothes", {
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    color: {
      type: DataTypes.STRING,
    },
  });

module.exports = Clothes;
