import { DataTypes } from "sequelize"
import sequalize from "../config/mysqlConfig.js"



const marriageCertificateModel = sequalize.define("marriageCertificateModel",{
    book:{
        type: DataTypes.TINYINT,
        allowNull:false
    },
    invoice:{
        type: DataTypes.SMALLINT,
        allowNull:false
    },
    number:{
       type : DataTypes.SMALLINT,
       allowNull: false
    },
    marrierdate:{
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    namehusband:{
        type: DataTypes.STRING,
        allowNull: false
    }, 
    lastnamehusband:{
        type: DataTypes.STRING,
        allowNull: false
    },
    fatherhusband:{
        type: DataTypes.STRING,
        allowNull: false
    },
    motherhusband:{
        type: DataTypes.STRING,
        allowNull: false
    },
    placebatptismhusband:{
        type: DataTypes.STRING,
        allowNull: false
    },
    datebatptismhusband:{
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    namewife:{
        type: DataTypes.STRING,
        allowNull: false
    },
    lastnamewife:{
        type: DataTypes.STRING,
        allowNull: false
    },
    fatherwife:{
        type: DataTypes.STRING,
        allowNull: false
    },
    motherwife:{
        type: DataTypes.STRING,
        allowNull: false
    },
    placebatptismwife:{
        type: DataTypes.STRING,
        allowNull: false
    },
    datebatptismwife:{
        type: DataTypes.DATEONLY,
        allowNull: false
    },

    namewitness:{
        type: DataTypes.STRING,
        allowNull: false
    },
    minister:{
        type: DataTypes.STRING,
        allowNull: false
    },
    parson: {
        type: DataTypes.STRING,
        allowNull: false
    },
    annotations:{
        type: DataTypes.STRING,
        allowNull: true
    }
},
{
    alter: false
})
marriageCertificateModel.sync()
export default marriageCertificateModel