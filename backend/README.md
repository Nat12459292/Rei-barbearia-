# Backend - Rei Barbearia

API REST para gerenciamento de barbearia.

## 📋 Requisitos

- Node.js v16+
- PostgreSQL v12+

## 🚀 Instalação

```bash
# Instalar dependências
npm install

# Configurar variáveis de ambiente
cp .env.example .env

# Executar servidor em desenvolvimento
npm run dev

# Executar em produção
npm start
```

## 📁 Estrutura

```
src/
├── config.js           # Configurações da aplicação
├── database.js         # Conexão Sequelize
├── server.js           # Servidor Express
├── controllers/        # Lógica de negócio
├── models/            # Modelos Sequelize
├── routes/            # Definição de rotas
├── middleware/        # Middlewares
└── utils/             # Utilitários
```

## 🔑 Autenticação

Usar JWT no header:
```
Authorization: Bearer <token>
```

## 📚 Endpoints

### Autenticação
- `POST /api/auth/login` - Login
- `POST /api/auth/register` - Registro

### Clientes
- `GET /api/clients` - Listar todos
- `GET /api/clients/:id` - Buscar por ID
- `POST /api/clients` - Criar
- `PUT /api/clients/:id` - Atualizar
- `DELETE /api/clients/:id` - Deletar

### Serviços
- `GET /api/services` - Listar todos
- `GET /api/services/:id` - Buscar por ID
- `POST /api/services` - Criar
- `PUT /api/services/:id` - Atualizar
- `DELETE /api/services/:id` - Deletar

### Agendamentos
- `GET /api/appointments` - Listar todos
- `GET /api/appointments/:id` - Buscar por ID
- `POST /api/appointments` - Criar
- `PUT /api/appointments/:id` - Atualizar
- `DELETE /api/appointments/:id` - Deletar

## 🧪 Testes

```bash
npm test
```

## 📝 Variáveis de Ambiente

```
NODE_ENV=development
PORT=3000
DATABASE_URL=postgresql://user:password@localhost:5432/rei_barbearia
JWT_SECRET=seu_secret_jwt
JWT_EXPIRE=7d
BCRYPT_ROUNDS=10
CORS_ORIGIN=http://localhost:3001
```

## 🤝 Contribuindo

Veja [CONTRIBUTING.md](../docs/CONTRIBUTING.md)

## 📄 Licença

MIT
