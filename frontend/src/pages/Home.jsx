import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="page">
      <div className="container">
        <div className="text-center py-20">
          <h1 className="text-5xl font-bold mb-6">👑 Rei Barbearia</h1>
          <p className="text-xl text-gray-600 mb-8">
            Sistema completo de gerenciamento para sua barbearia
          </p>
          
          <div className="flex gap-4 justify-center mb-12">
            <Link to="/login" className="btn btn-primary text-lg px-8 py-3">
              Login
            </Link>
            <Link to="/dashboard" className="btn btn-secondary text-lg px-8 py-3">
              Dashboard
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="p-8 bg-white rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4">✂️ Serviços</h3>
              <p className="text-gray-600">
                Gerencie todos os serviços oferecidos em sua barbearia
              </p>
            </div>

            <div className="p-8 bg-white rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4">📅 Agendamentos</h3>
              <p className="text-gray-600">
                Sistema completo de agendamentos online
              </p>
            </div>

            <div className="p-8 bg-white rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4">👥 Clientes</h3>
              <p className="text-gray-600">
                Base de dados completa de seus clientes
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
