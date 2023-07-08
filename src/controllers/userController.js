import jsonwebtoken from 'jsonwebtoken'
import bcryptjs from 'bcryptjs'
import { v4 as uuidv4 } from 'uuid'
import userModel from '../models/userModel.js'

const JWT_SECRET = process.env.JWT_SECRET
const JWT_EXPIRES_IN_SECONDS = parseInt(process.env.JWT_EXPIRES_IN_SECONDS)
const ENCRYPT_SALT = parseInt(process.env.ENCRYPT_SALT)

const errors = {
  loginError: (res) => {
    return res.status(200).json({
      success: false,
      message: 'Usuario y/o contraseña incorrectos'
    })
  },
  internalServerError: (res) => {
    return res.status(500).json({
      success: false,
      message: 'Algo a salido mal'
    })
  }
}

export async function register(req, res) {
  // Encrypt password
  req.body.password = await bcryptjs.hash(req.body.password, ENCRYPT_SALT)
  const { name, lastname, document, email, password } = req.body
  const uuid = uuidv4()

  try {
    const user = await userModel.create({
      uuid,
      name,
      lastname,
      document,
      email,
      password
    })

    return res.status(200).json({
      success: true,
      data: {
        user
      },
      message: 'Registro exitoso'
    })
  } catch (err) {
    return res.status(200).json({
      success: false,
      message: 'Error creando el usuario'
    })
  }
}

export async function login(req, res) {
  const { email, password } = req.body

  try {
    const user = await userModel.findOne({ where: { email } })
    if (!user) {
      return errors.loginError(res)
    }

    const isPasswordCorrect = await bcryptjs.compare(
      password,
      user.password
    )

    if (!isPasswordCorrect) {
      return errors.loginError(res)
    }

    const token = jsonwebtoken.sign(
      { uuid: user.uuid, role: user.role },
      JWT_SECRET,
      {
        expiresIn: JWT_EXPIRES_IN_SECONDS
      }
    )

    return res.status(200).json({
      success: true,
      data: {
        token
      },
      message: 'Ingreso exitoso'
    })
  } catch (err) {
    return errors.internalServerError(res)
  }
}

export async function getUser(req, res) {
  const uuid = req.body.uuid

  try {
    const user = await userModel.findOne({ where: { uuid } })

    if (!user) {
      return res.status(200).json({
        success: false,
        message: 'No se encontro el usuario'
      })
    }

    return res.status(200).json({
      success: true,
      data: {
        user
      },
      message: 'Usuario encontrado'
    })
  } catch (error) {
    return error.internalServerError(res)
  }
}
