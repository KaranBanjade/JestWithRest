const { DataTypes } = require('sequelize');

const BlogModel = {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
    },
    author:{
        type: DataTypes.STRING,
        allowNull: false
    },
    topic: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    tags: {
        type: DataTypes.STRING,
        allowNull: false,
    }
};

module.exports = {BlogModel};