import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Lógica de login será implementada
      console.log('Login:', { email, password });
      navigate('/dashboard');
    } catch (err) {
      setError('Erro ao fazer login');
    }
  };

  return (
    <div className="page flex items-center justify-center">
      <div className="container max-w-md">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-4xl font-bold text-center mb-8">👑</h1>
          <h2 className="text-2xl font-bold text-center mb-6">Rei Barbearia</h2>

          {error && <div className="alert alert-error mb-4">{error}</div>}

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Senha:</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="btn btn-primary w-full">
              Entrar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
