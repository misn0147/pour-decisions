const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our Winery model
class Winery extends Model {}
Winery.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        location: {
            type: DataTypes.STRING,
            allowNull: false
        },
        website: {
            type: DataTypes.STRING,
            validate: {
                isUrl: true,
            }
        },
        phone: {
            type: DataTypes.STRING,
        },
        image: {
            type: DataTypes.STRING,
            validate: {
                isUrl: true,
            }
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            }
        }
    }
)





module.exports = Winery;