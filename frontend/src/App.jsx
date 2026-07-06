import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Páginas
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Clients from './pages/Clients';
import Services from './pages/Services';
import Appointments from './pages/Appointments';
import Login from './pages/Login';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/clientes" element={<Clients />} />
          <Route path="/servicos" element={<Services />} />
          <Route path="/agendamentos" element={<Appointments />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
