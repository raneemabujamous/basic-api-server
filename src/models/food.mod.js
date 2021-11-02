"use strict";

//schcema model to clothes
//sequelize مكتبه باخد منها تدوات بعمللها استدعاء بال index inside model

const Food = (sequelize, DataTypes) =>
  sequelize.define("food", {
    kind: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    healthy: {
      type: DataTypes.STRING,
    },
  });

module.exports = Food;
