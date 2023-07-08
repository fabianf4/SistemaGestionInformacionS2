import { DataTypes } from 'sequelize'
import sequalize from '../config/mysqlConfig.js'

// Create model to Confirmation certificate
const confirmationCertificateModel = sequalize.define(
  'confirmationCertificate',
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
    confirmationDate: {
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
    placeBaptism: {
      type: DataTypes.STRING,
      allowNull: false
    },
    godfather: {
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
  }
)

sequalize.sync()

export default confirmationCertificateModel
