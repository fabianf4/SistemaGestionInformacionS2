import { Op } from 'sequelize'
import eventModel from '../models/eventModel.js'
import userModel from '../models/userModel.js'

export async function createEvent(req, res) {
  const { title, description, numberOfPeople, dateStart, dateEnd } = req.body
  try {
    const event = await eventModel.create({
      title,
      description0: description,
      numberOfPeople,
      dateStart,
      dateEnd
    })

    return res.status(200).json({
      success: true,
      data: {
        event
      },
      message: 'Creacion evento exitoso'
    })
  } catch (error) {
    return res.status(200).json({
      success: false,
      message: 'Error creando el evento'
    })
  }
}

export async function requestEvent(req, res) {
  const { id, description, uuid } = req.body
  try {
    const event = await eventModel.findOne({
      where: id
    })

    if (!event) {
      return res.status(200).json({
        success: false,
        message: 'Error al asignar el evento, no existe el evento'
      })
    }

    if (event.dateStart < Date.now()) {
      return res.status(200).json({
        success: false,
        message:
          'Error al asignar el evento, no se puede asignar un evento que ya paso'
      })
    }

    const usersReq = await event.countUsers()

    if (event.numberOfPeople === usersReq) {
      return res.status(200).json({
        success: false,
        message: 'Error al asignar el evento, sin cupos'
      })
    }

    const user = await userModel.findOne({
      where: {
        uuid
      }
    })

    if (!user) {
      return res.status(200).json({
        success: false,
        message: 'Error, no existe el usuario'
      })
    }

    if (usersReq > 0) {
      if (event.hasUsers(user.uuid)) {
        return res.status(200).json({
          success: false,
          message: 'Error, el usuario ya esta registrado en el evento'
        })
      }
    }

    if (event.numberOfPeople <= 1) {
      await event.update({
        description1: description
      })
    }

    await event.addUsers(user.uuid)

    event.save()

    return res.status(200).json({
      success: true,
      data: event,
      message: 'Se a registrado en el evento'
    })
  } catch (error) {
    console.log(error)
    return res.status(200).json({
      success: false,
      message: 'Error registrando el usuario'
    })
  }
}

export async function getEvents(req, res) {
  const { date } = req.params
  try {
    let events = await eventModel.findAll({
      where: {
        dateStart: {
          [Op.eq]: date
        }
      },
      include: {
        model: userModel
      }
    })

    events = events.map((event) => {
      const register = event.Users.some(
        (user) => user.dataValues.uuid === req.body.uuid
      )

      return {
        ...event.toJSON(),
        Users: event.Users.length,
        registered: register
      }
    })

    if (!events || events.length === 0) {
      return res.status(200).json({
        success: false,
        message: 'No hay eventos para esta fecha'
      })
    }

    return res.status(200).json({
      success: true,
      data: events,
      message: 'Consulta exitosa'
    })
  } catch (error) {
    console.log(error)
    return res.status(200).json({
      success: false,
      message: 'Error consultando los eventos'
    })
  }
}

export async function getEventsWithUsers(req, res) {
  const { date } = req.params
  try {
    const events = await eventModel.findAll({
      where: {
        dateStart: {
          [Op.eq]: date
        }
      },
      include: {
        model: userModel
      }
    })

    if (!events || events.length === 0) {
      return res.status(200).json({
        success: false,
        message: 'No hay eventos para esta fecha'
      })
    }

    return res.status(200).json({
      success: true,
      data: events,
      message: 'Consulta exitosa'
    })
  } catch (error) {
    console.log(error)
    return res.status(200).json({
      success: false,
      message: 'Error consultando los eventos'
    })
  }
}

export async function cancelRequest(req, res) {
  const { uuid, id } = req.body
  try {
    const event = await eventModel.findByPk(id)

    await event.removeUsers(uuid)

    return res.status(200).json({
      success: false,
      message: 'Se ha eliminado el evento'
    })
  } catch (error) {
    console.log(error)
    return res.status(200).json({
      success: false,
      message: 'Error eliminando el evento'
    })
  }
}

export async function cancelRequestFromUser(req, res) {
  const { uuidUser, id } = req.body
  try {
    const event = eventModel.findByPk(id)

    event.removeUsers(uuidUser)

    return res.status(200).json({
      success: false,
      message: 'Se ha eliminado el evento'
    })
  } catch (error) {
    return res.status(200).json({
      success: false,
      message: 'Error eliminando el usuario'
    })
  }
}
