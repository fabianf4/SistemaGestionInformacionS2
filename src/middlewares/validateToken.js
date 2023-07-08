import jwt from 'jsonwebtoken'

const JWT_SECRET = process.env.JWT_SECRET

const validateToken = (req, res, next) => {
  const token = req.headers.authorization

  if (!token) {
    return res.status(401).json({
      success: false,
      message: 'No se ha proporcionado un token'
    })
  }

  jwt.verify(token.split(' ')[1], JWT_SECRET, (error, decodedToken) => {
    if (error) {
      return res.status(401).json({
        success: false,
        message: 'Token inválido'
      })
    }

    req.body.uuid = decodedToken.uuid
    req.body.role = decodedToken.role
    next()
  })
}

export default validateToken
