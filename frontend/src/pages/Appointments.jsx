import React, { useState } from 'react';

function Appointments() {
  const [appointments, setAppointments] = useState([
    { id: 1, client: 'João Silva', service: 'Corte de Cabelo', date: '2024-01-15', time: '14:30', status: 'Confirmado' },
    { id: 2, client: 'Maria Santos', service: 'Barba Completa', date: '2024-01-15', time: '15:30', status: 'Pendente' },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [newAppointment, setNewAppointment] = useState({ 
    client: '', 
    service: '', 
    date: '', 
    time: '' 
  });

  const handleAddAppointment = (e) => {
    e.preventDefault();
    setAppointments([...appointments, { 
      id: appointments.length + 1, 
      ...newAppointment, 
      status: 'Pendente' 
    }]);
    setNewAppointment({ client: '', service: '', date: '', time: '' });
    setShowForm(false);
  };

  return (
    <div className="page">
      <div className="container">
        <div className="flex justify-between items-center mb-6">
          <h1 className="page-title">Agendamentos</h1>
          <button 
            onClick={() => setShowForm(!showForm)} 
            className="btn btn-primary"
          >
            + Novo Agendamento
          </button>
        </div>

        {showForm && (
          <div className="bg-white p-6 rounded-lg shadow-md mb-6">
            <form onSubmit={handleAddAppointment}>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="form-group">
                  <label>Cliente:</label>
                  <input
                    type="text"
                    value={newAppointment.client}
                    onChange={(e) => setNewAppointment({ ...newAppointment, client: e.target.value })}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Serviço:</label>
                  <select
                    value={newAppointment.service}
                    onChange={(e) => setNewAppointment({ ...newAppointment, service: e.target.value })}
                    required
                  >
                    <option value="">Selecione um serviço</option>
                    <option value="Corte de Cabelo">Corte de Cabelo</option>
                    <option value="Barba Completa">Barba Completa</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Data:</label>
                  <input
                    type="date"
                    value={newAppointment.date}
                    onChange={(e) => setNewAppointment({ ...newAppointment, date: e.target.value })}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Hora:</label>
                  <input
                    type="time"
                    value={newAppointment.time}
                    onChange={(e) => setNewAppointment({ ...newAppointment, time: e.target.value })}
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
                <th>Cliente</th>
                <th>Serviço</th>
                <th>Data</th>
                <th>Hora</th>
                <th>Status</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {appointments.map(appointment => (
                <tr key={appointment.id}>
                  <td>{appointment.id}</td>
                  <td>{appointment.client}</td>
                  <td>{appointment.service}</td>
                  <td>{appointment.date}</td>
                  <td>{appointment.time}</td>
                  <td>
                    <span className={`px-3 py-1 rounded text-white ${
                      appointment.status === 'Confirmado' ? 'bg-green-500' : 'bg-yellow-500'
                    }`}>
                      {appointment.status}
                    </span>
                  </td>
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

export default Appointments;
