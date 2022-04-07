const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


class Cellar extends Model{}

Cellar.init(
    {
       id: {
           type: DataTypes.INTEGER,
           allowNull: false,
           primaryKey: true,
        },
        size: {
            type: DataTypes.STRING,
            allowNull: true,

        },
    },
    {
        sequelize,
        timestamps: true,
        freezeTableName: false,
        underscored: false,
        modelName: 'cellar',
    });

module.exports = Cellar;