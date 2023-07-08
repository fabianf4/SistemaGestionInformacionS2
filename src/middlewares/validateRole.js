const validateRole = (arrayRole) => (req, res, next) => {
  const { role } = req.body

  const existRole = arrayRole.find((rol) => rol === role)

  if (!existRole) {
    return res.status(401).json({
      success: false,
      message: 'No tienes permisos suficientes'
    })
  }

  next()
}

export default validateRole
