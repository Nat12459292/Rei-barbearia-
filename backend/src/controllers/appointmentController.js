import { Appointment } from '../models/Appointment.js';
import { Client } from '../models/Client.js';
import { Service } from '../models/Service.js';
import { User } from '../models/User.js';

export const getAllAppointments = async (req, res) => {
  try {
    const { date, status } = req.query;
    const where = {};

    if (date) {
      where.appointmentDate = {
        [Op.gte]: new Date(date),
        [Op.lt]: new Date(new Date(date).getTime() + 24 * 60 * 60 * 1000),
      };
    }

    if (status) {
      where.status = status;
    }

    const appointments = await Appointment.findAll({
      where,
      include: [
        { model: Client, as: 'client' },
        { model: Service, as: 'service' },
        { model: User, as: 'barber' },
      ],
      order: [['appointmentDate', 'ASC']],
    });

    res.json({ appointments });
  } catch (error) {
    console.error('Erro ao listar agendamentos:', error);
    res.status(500).json({ error: 'Erro ao listar agendamentos' });
  }
};

export const getAppointmentById = async (req, res) => {
  try {
    const { id } = req.params;
    const appointment = await Appointment.findByPk(id, {
      include: [
        { model: Client, as: 'client' },
        { model: Service, as: 'service' },
        { model: User, as: 'barber' },
      ],
    });

    if (!appointment) {
      return res.status(404).json({ error: 'Agendamento não encontrado' });
    }

    res.json({ appointment });
  } catch (error) {
    console.error('Erro ao buscar agendamento:', error);
    res.status(500).json({ error: 'Erro ao buscar agendamento' });
  }
};

export const createAppointment = async (req, res) => {
  try {
    const { clientId, serviceId, barberId, appointmentDate } = req.body;

    if (!clientId || !serviceId || !barberId || !appointmentDate) {
      return res.status(400).json({ error: 'Todos os campos são obrigatórios' });
    }

    const appointment = await Appointment.create({
      clientId,
      serviceId,
      barberId,
      appointmentDate,
    });

    res.status(201).json({ message: 'Agendamento criado com sucesso', appointment });
  } catch (error) {
    console.error('Erro ao criar agendamento:', error);
    res.status(500).json({ error: 'Erro ao criar agendamento' });
  }
};

export const updateAppointment = async (req, res) => {
  try {
    const { id } = req.params;
    const { status, notes } = req.body;

    const appointment = await Appointment.findByPk(id);
    if (!appointment) {
      return res.status(404).json({ error: 'Agendamento não encontrado' });
    }

    await appointment.update({ status, notes });

    res.json({ message: 'Agendamento atualizado com sucesso', appointment });
  } catch (error) {
    console.error('Erro ao atualizar agendamento:', error);
    res.status(500).json({ error: 'Erro ao atualizar agendamento' });
  }
};

export const deleteAppointment = async (req, res) => {
  try {
    const { id } = req.params;
    const appointment = await Appointment.findByPk(id);

    if (!appointment) {
      return res.status(404).json({ error: 'Agendamento não encontrado' });
    }

    await appointment.destroy();
    res.json({ message: 'Agendamento deletado com sucesso' });
  } catch (error) {
    console.error('Erro ao deletar agendamento:', error);
    res.status(500).json({ error: 'Erro ao deletar agendamento' });
  }
};
