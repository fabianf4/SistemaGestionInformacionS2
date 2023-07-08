import { DataTypes } from 'sequelize'
import sequalize from '../config/mysqlConfig.js'

const requestCertificateModel = sequalize.define(
  'RequestCertificate',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    uuid: {
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
      allowNull: false,
      defaultValue: sequalize.literal('CURRENT_TIMESTAMP')
    },
    type: {
      type: DataTypes.ENUM('CONFIRMACION', 'BAUTISMO', 'MATRIMONIO'),
      allowNull: false
    },
    status: {
      type: DataTypes.ENUM('PENDING', 'DELIVERED'),
      defaultValue: 'PENDING',
      allowNull: false
    }
  },
  {
    alter: false // update table if exists
  }
)

sequalize.sync()

export default requestCertificateModel
