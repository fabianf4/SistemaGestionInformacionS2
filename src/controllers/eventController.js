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

    const usersReq = await event.getUsers()

    if (event.numberOfPeople === usersReq.length) {
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

    if (usersReq.length > 0) {
      usersReq.forEach((user) => {
        if (user.uuid === uuid) {
          return res.status(200).json({
            success: false,
            message: 'Error, el usuario ya esta registrado en el evento'
          })
        }
      })
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
