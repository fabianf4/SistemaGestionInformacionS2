import { DataTypes } from "sequelize"
import sequalize from "../config/mysqlConfig.js"

//Create model from user
const userModel = sequalize.define("User", {
    uuid: {
        primaryKey: true,
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    document: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    role: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "USER"
    }
},{
    alter: false //update table if exists
})

//create table if not exists
userModel.sync()

export default userModel
