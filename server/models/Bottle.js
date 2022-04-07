const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


class Bottle extends Model{}

Bottle.init(
    {
       id: {
           type: DataTypes.INTEGER,
           allowNull: false,
           autoIncrement: true,
           primaryKey: true,
        },
       cellarId: {
           type: DataTypes.INTEGER,
           allowNull: false,
        },
       userId: {
           type: DataTypes.STRING,
           allowNull: false,
        },
       position: {
           type: DataTypes.INTEGER,
           allowNull: false,
        },
       type: {
           type: DataTypes.STRING,
           allowNull: true,
        },
       vintage: {
           type: DataTypes.STRING,
           allowNull: true,
        },
       locale: {
           type: DataTypes.STRING,
           allowNull: true,
        },
       body: {
           type: DataTypes.STRING,
           allowNull: true,
        },
       notes: {
           type: DataTypes.STRING,
           allowNull: true,
        },
    },
    {
        sequelize,
        timestamps: true,
        freezeTableName: false,
        underscored: false,
        modelName: 'bottle',
    });

module.exports = Bottle;