import { DataTypes } from 'sequelize'
import sequalize from '../config/mysqlConfig.js'

const marriageCertificateModel = sequalize.define(
  'marriageCertificate',
  {
    // libro
    book: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    // folio
    invoice: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    // numero
    number: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    // fecha de matrimonio
    marrierdate: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    // nombre del esposo
    namehusband: {
      type: DataTypes.STRING,
      allowNull: false
    },
    // apellido del esposo
    lastnamehusband: {
      type: DataTypes.STRING,
      allowNull: false
    },
    // padre esposo
    fatherhusband: {
      type: DataTypes.STRING,
      allowNull: false
    },
    // madre del esposo
    motherhusband: {
      type: DataTypes.STRING,
      allowNull: false
    },
    // lugar bautimso el esposo
    placebatptismhusband: {
      type: DataTypes.STRING,
      allowNull: false
    },
    // fecha bautismo del espos
    datebatptismhusband: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    // nombre de la esposa
    namewife: {
      type: DataTypes.STRING,
      allowNull: false
    },
    // apelliso de la esposa
    lastnamewife: {
      type: DataTypes.STRING,
      allowNull: false
    },
    // padre de la esposa
    fatherwife: {
      type: DataTypes.STRING,
      allowNull: false
    },
    // madre de la esposa
    motherwife: {
      type: DataTypes.STRING,
      allowNull: false
    },
    // lugar bautismo de la esposa
    placebatptismwife: {
      type: DataTypes.STRING,
      allowNull: false
    },
    // fecha de bautismo de la esposa
    datebatptismwife: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    // nombre del testigo(S)
    namewitness: {
      type: DataTypes.STRING,
      allowNull: false
    },
    // ministro
    minister: {
      type: DataTypes.STRING,
      allowNull: false
    },
    // parroco
    parson: {
      type: DataTypes.STRING,
      allowNull: false
    },
    // anotaciones
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

export default marriageCertificateModel
