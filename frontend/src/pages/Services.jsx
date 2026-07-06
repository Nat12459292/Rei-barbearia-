import React, { useState } from 'react';

function Services() {
  const [services, setServices] = useState([
    { id: 1, name: 'Corte de Cabelo', price: 50.00, duration: 30 },
    { id: 2, name: 'Barba Completa', price: 40.00, duration: 45 },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [newService, setNewService] = useState({ name: '', price: '', duration: '' });

  const handleAddService = (e) => {
    e.preventDefault();
    setServices([...services, { id: services.length + 1, ...newService }]);
    setNewService({ name: '', price: '', duration: '' });
    setShowForm(false);
  };

  return (
    <div className="page">
      <div className="container">
        <div className="flex justify-between items-center mb-6">
          <h1 className="page-title">Serviços</h1>
          <button 
            onClick={() => setShowForm(!showForm)} 
            className="btn btn-primary"
          >
            + Novo Serviço
          </button>
        </div>

        {showForm && (
          <div className="bg-white p-6 rounded-lg shadow-md mb-6">
            <form onSubmit={handleAddService}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="form-group">
                  <label>Nome:</label>
                  <input
                    type="text"
                    value={newService.name}
                    onChange={(e) => setNewService({ ...newService, name: e.target.value })}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Preço:</label>
                  <input
                    type="number"
                    step="0.01"
                    value={newService.price}
                    onChange={(e) => setNewService({ ...newService, price: e.target.value })}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Duração (min):</label>
                  <input
                    type="number"
                    value={newService.duration}
                    onChange={(e) => setNewService({ ...newService, duration: e.target.value })}
                    required
                  />
                </div>
              </div>
              <button type="submit" className="btn btn-primary">Salvar</button>
            </form>
          </div>
        )}

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Nome</th>
                <th>Preço</th>
                <th>Duração (min)</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {services.map(service => (
                <tr key={service.id}>
                  <td>{service.id}</td>
                  <td>{service.name}</td>
                  <td>R$ {parseFloat(service.price).toFixed(2)}</td>
                  <td>{service.duration}</td>
                  <td>
                    <button className="btn btn-secondary mr-2">Editar</button>
                    <button className="btn btn-secondary">Deletar</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Services;
