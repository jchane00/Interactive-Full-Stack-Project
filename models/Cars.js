const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Cars extends Model {}

Cars.init(
  {
<<<<<<< HEAD
=======
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    car_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true
    },
    filename: {
      type: DataTypes.STRING,
      allowNull: false,
    },
>>>>>>> 3f0b5f8b3ef3a8a341daaf34b654f2d6b6c63076
    make: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    model: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    year: {
<<<<<<< HEAD
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    milage: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    condition: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    vin_number: {
      type: DataTypes.STRING,
      allowNull: false,
    },
=======
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    mileage: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    condition: {
      type: DataTypes.STRING,
      allowNull: false
    }
>>>>>>> 3f0b5f8b3ef3a8a341daaf34b654f2d6b6c63076
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'Cars',
  }
);

module.exports = Cars;
