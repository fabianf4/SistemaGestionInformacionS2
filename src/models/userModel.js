import { DataTypes } from 'sequelize'
import sequalize from '../config/mysqlConfig.js'
import requestCertificateModel from './requestCertificateModel.js'

// Create model from user
const userModel = sequalize.define(
  'User',
  {
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
      type: DataTypes.ENUM('ADMIN', 'USER'),
      allowNull: false,
      defaultValue: 'USER'
    }
  },
  {
    alter: false // update table if exists
  }
)

userModel.hasMany(requestCertificateModel, {
  foreignKey: 'uuid',
  onDelete: 'CASCADE'
})
requestCertificateModel.belongsTo(userModel, { foreignKey: 'uuid' })

// create table if not exists
sequalize.sync()

export default userModel
