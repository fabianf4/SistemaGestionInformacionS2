import { DataTypes } from 'sequelize'
import sequalize from '../config/mysqlConfig.js'

// Create model to baptismal certificate
const baptismalCeritificateModel = sequalize.define(
  'baptismalCertificate',
  {
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
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    birthdate: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    baptismDate: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    fatherName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    motherName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    maternalGrandfather: {
      type: DataTypes.STRING,
      allowNull: false
    },
    maternalGrandmother: {
      type: DataTypes.STRING,
      allowNull: false
    },
    paternalGrandfather: {
      type: DataTypes.STRING,
      allowNull: false
    },
    paternalGrandmother: {
      type: DataTypes.STRING,
      allowNull: false
    },
    godfather: {
      type: DataTypes.STRING,
      allowNull: false
    },
    godmother: {
      type: DataTypes.STRING,
      allowNull: false
    },
    minister: {
      type: DataTypes.STRING,
      allowNull: false
    },
    parson: {
      type: DataTypes.STRING,
      allowNull: false
    },
    annotations: {
      type: DataTypes.STRING,
      allowNull: true
    }
  },
  {
    alter: false
  }
)
sequalize.sync()

export default baptismalCeritificateModel
