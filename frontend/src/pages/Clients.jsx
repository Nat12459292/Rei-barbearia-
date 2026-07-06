import React, { useState } from 'react';

function Clients() {
  const [clients, setClients] = useState([
    { id: 1, name: 'João Silva', phone: '11999999999', email: 'joao@example.com' },
    { id: 2, name: 'Maria Santos', phone: '11988888888', email: 'maria@example.com' },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [newClient, setNewClient] = useState({ name: '', phone: '', email: '' });

  const handleAddClient = (e) => {
    e.preventDefault();
    setClients([...clients, { id: clients.length + 1, ...newClient }]);
    setNewClient({ name: '', phone: '', email: '' });
    setShowForm(false);
  };

  return (
    <div className="page">
      <div className="container">
        <div className="flex justify-between items-center mb-6">
          <h1 className="page-title">Clientes</h1>
          <button 
            onClick={() => setShowForm(!showForm)} 
            className="btn btn-primary"
          >
            + Novo Cliente
          </button>
        </div>

        {showForm && (
          <div className="bg-white p-6 rounded-lg shadow-md mb-6">
            <form onSubmit={handleAddClient}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="form-group">
                  <label>Nome:</label>
                  <input
                    type="text"
                    value={newClient.name}
                    onChange={(e) => setNewClient({ ...newClient, name: e.target.value })}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Telefone:</label>
                  <input
                    type="tel"
                    value={newClient.phone}
                    onChange={(e) => setNewClient({ ...newClient, phone: e.target.value })}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Email:</label>
                  <input
                    type="email"
                    value={newClient.email}
                    onChange={(e) => setNewClient({ ...newClient, email: e.target.value })}
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
                <th>Telefone</th>
                <th>Email</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {clients.map(client => (
                <tr key={client.id}>
                  <td>{client.id}</td>
                  <td>{client.name}</td>
                  <td>{client.phone}</td>
                  <td>{client.email}</td>
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

export default Clients;
