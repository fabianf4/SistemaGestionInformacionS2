import { DataTypes } from "sequelize"
import sequalize from "../config/mysqlConfig.js"

const requestCertificateModel = sequalize.define("RequestCertificate", {
    userUuid: {
        type: DataTypes.STRING,
        allowNull: false
    },
    book: {
        type: DataTypes.TINYINT,
        allowNull: false
    },
    invoice: {
        type: DataTypes.SMALLINT,
        allowNull: false
    },
    number: {
        type: DataTypes.SMALLINT,
        allowNull: false
    },
    orderDate: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    type:{
        type: DataTypes.STRING,
        allowNull: false
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false
    }

},{
    alter: false //update table if exists
})

userModel.sync()

export default requestCertificateModel