import React from 'react';
import { Link } from 'react-router-dom';

function Dashboard() {
  return (
    <div className="page">
      <div className="container">
        <h1 className="page-title">Dashboard</h1>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-gray-500 text-sm font-semibold mb-2">CLIENTES</h3>
            <p className="text-3xl font-bold">45</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-gray-500 text-sm font-semibold mb-2">AGENDAMENTOS HOJE</h3>
            <p className="text-3xl font-bold">8</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-gray-500 text-sm font-semibold mb-2">RECEITA MÊS</h3>
            <p className="text-3xl font-bold">R$ 2.450</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-gray-500 text-sm font-semibold mb-2">SERVIÇOS</h3>
            <p className="text-3xl font-bold">12</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link to="/agendamentos" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg">
            <h3 className="text-xl font-bold mb-2">📅 Agendamentos</h3>
            <p className="text-gray-600">Gerenciar agendamentos</p>
          </Link>

          <Link to="/clientes" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg">
            <h3 className="text-xl font-bold mb-2">👥 Clientes</h3>
            <p className="text-gray-600">Gerenciar clientes</p>
          </Link>

          <Link to="/servicos" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg">
            <h3 className="text-xl font-bold mb-2">✂️ Serviços</h3>
            <p className="text-gray-600">Gerenciar serviços</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
