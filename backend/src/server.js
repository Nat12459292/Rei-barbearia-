import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { config } from './config.js';
import { testConnection, syncDatabase } from './database.js';
import { errorHandler, notFoundHandler } from './middleware/errorHandler.js';

// Importar rotas
import authRoutes from './routes/auth.js';
import clientRoutes from './routes/clients.js';
import serviceRoutes from './routes/services.js';
import appointmentRoutes from './routes/appointments.js';

const app = express();

// Middleware
app.use(cors(config.cors));
app.use(morgan('combined'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rotas
app.use('/api/auth', authRoutes);
app.use('/api/clients', clientRoutes);
app.use('/api/services', serviceRoutes);
app.use('/api/appointments', appointmentRoutes);

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// 404 handler
app.use(notFoundHandler);

// Error handler
app.use(errorHandler);

// Iniciar servidor
const startServer = async () => {
  try {
    // Testar conexão com banco de dados
    await testConnection();

    // Sincronizar banco de dados
    await syncDatabase();

    app.listen(config.port, () => {
      console.log(`🚀 Servidor rodando na porta ${config.port}`);
      console.log(`📑 Ambiente: ${config.env}`);
      console.log(`🔗 URL: http://localhost:${config.port}`);
    });
  } catch (error) {
    console.error('❌ Erro ao iniciar servidor:', error);
    process.exit(1);
  }
};

startServer();

export default app;
