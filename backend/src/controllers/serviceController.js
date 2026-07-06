import { Service } from '../models/Service.js';

export const getAllServices = async (req, res) => {
  try {
    const services = await Service.findAll({
      where: { active: true },
      order: [['createdAt', 'DESC']],
    });
    res.json({ services });
  } catch (error) {
    console.error('Erro ao listar serviços:', error);
    res.status(500).json({ error: 'Erro ao listar serviços' });
  }
};

export const getServiceById = async (req, res) => {
  try {
    const { id } = req.params;
    const service = await Service.findByPk(id);

    if (!service) {
      return res.status(404).json({ error: 'Serviço não encontrado' });
    }

    res.json({ service });
  } catch (error) {
    console.error('Erro ao buscar serviço:', error);
    res.status(500).json({ error: 'Erro ao buscar serviço' });
  }
};

export const createService = async (req, res) => {
  try {
    const { name, description, price, duration } = req.body;

    if (!name || !price || !duration) {
      return res.status(400).json({ error: 'Nome, preço e duração são obrigatórios' });
    }

    const service = await Service.create({
      name,
      description,
      price,
      duration,
    });

    res.status(201).json({ message: 'Serviço criado com sucesso', service });
  } catch (error) {
    console.error('Erro ao criar serviço:', error);
    res.status(500).json({ error: 'Erro ao criar serviço' });
  }
};

export const updateService = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, price, duration, active } = req.body;

    const service = await Service.findByPk(id);
    if (!service) {
      return res.status(404).json({ error: 'Serviço não encontrado' });
    }

    await service.update({
      name,
      description,
      price,
      duration,
      active,
    });

    res.json({ message: 'Serviço atualizado com sucesso', service });
  } catch (error) {
    console.error('Erro ao atualizar serviço:', error);
    res.status(500).json({ error: 'Erro ao atualizar serviço' });
  }
};

export const deleteService = async (req, res) => {
  try {
    const { id } = req.params;
    const service = await Service.findByPk(id);

    if (!service) {
      return res.status(404).json({ error: 'Serviço não encontrado' });
    }

    await service.destroy();
    res.json({ message: 'Serviço deletado com sucesso' });
  } catch (error) {
    console.error('Erro ao deletar serviço:', error);
    res.status(500).json({ error: 'Erro ao deletar serviço' });
  }
};
