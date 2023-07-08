import { DataTypes } from 'sequelize'
import sequalize from '../config/mysqlConfig.js'
import userModel from './userModel.js'

const eventModel = sequalize.define(
  'Event',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description0: {
      type: DataTypes.STRING(1000),
      allowNull: false
    },
    description1: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    numberOfPeople: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    dateStart: {
      type: DataTypes.DATE,
      allowNull: false
    },
    dateEnd: {
      type: DataTypes.DATE,
      allowNull: false
    },
    state: {
      type: DataTypes.ENUM('ACTIVE', 'INACTIVE'),
      allowNull: false,
      defaultValue: 'ACTIVE'
    }
  },
  {
    alter: false
  }
)

eventModel.belongsToMany(userModel, { through: 'EventUser' })
userModel.belongsToMany(eventModel, { through: 'EventUser' })

sequalize.sync()
export default eventModel
