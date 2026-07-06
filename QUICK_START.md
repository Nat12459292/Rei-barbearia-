# 👑 Rei Barbearia - Guia de Início Rápido

Sistema completo de gerenciamento para barbearias. Desenvolvido com React, Express.js, PostgreSQL e Sequelize.

## 📋 Índice

- [Visão Geral](#visão-geral)
- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Configuração](#configuração)
- [Executando](#executando)
- [Estrutura](#estrutura)
- [Documentação](#documentação)

## 🎯 Visão Geral

A **Rei Barbearia** é uma plataforma digital completa para gerenciar:

- ✂️ **Serviços** - Catálogo de serviços oferecidos
- 👥 **Clientes** - Base de dados de clientes
- 📅 **Agendamentos** - Sistema de agendamentos online
- 💰 **Pagamentos** - Registro de transações
- 📊 **Relatórios** - Estatísticas e análises

## 🔧 Pré-requisitos

Você precisará ter instalado:

- **Node.js** v16 ou superior
- **PostgreSQL** v12 ou superior
- **Git** para clonar o repositório

### Verificar instalação

```bash
node --version      # v16.0.0 ou superior
npm --version       # 8.0.0 ou superior
psql --version      # 12 ou superior
```

## 📥 Instalação

### 1. Clonar o Repositório

```bash
git clone https://github.com/Nat12459292/Rei-barbearia-.git
cd Rei-barbearia
```

### 2. Instalar Frontend

```bash
cd frontend
npm install
```

### 3. Instalar Backend

```bash
cd ../backend
npm install
```

## ⚙️ Configuração

### 1. Criar Banco de Dados

```bash
# Conectar ao PostgreSQL
psql -U postgres

# Criar banco de dados
CREATE DATABASE rei_barbearia;
CREATE USER barbearia_user WITH PASSWORD 'sua_senha';
ALTER ROLE barbearia_user SET client_encoding TO 'utf8';
ALTER ROLE barbearia_user SET default_transaction_isolation TO 'read committed';
ALTER ROLE barbearia_user SET default_transaction_deferrable TO on;
ALTER ROLE barbearia_user SET timezone TO 'UTC';
GRANT ALL PRIVILEGES ON DATABASE rei_barbearia TO barbearia_user;
\q
```

### 2. Configurar Backend

```bash
cd backend

# Copiar arquivo de exemplo
cp .env.example .env

# Editar o arquivo .env
nano .env
```

**Configurar as variáveis:**

```env
NODE_ENV=development
PORT=3000
DATABASE_URL=postgresql://barbearia_user:sua_senha@localhost:5432/rei_barbearia
JWT_SECRET=sua_chave_secreta_super_segura_aqui_12345
JWT_EXPIRE=7d
BCRYPT_ROUNDS=10
CORS_ORIGIN=http://localhost:3001
```

### 3. Configurar Frontend

```bash
cd ../frontend

# Copiar arquivo de exemplo
cp .env.example .env

# Editar o arquivo .env (se necessário)
nano .env
```

**Variáveis padrão (geralmente OK):**

```env
REACT_APP_API_URL=http://localhost:3000/api
REACT_APP_ENV=development
```

## 🚀 Executando

### Terminal 1 - Backend

```bash
cd backend
npm run dev
```

Você deverá ver:
```
✅ Conexão com banco de dados estabelecida com sucesso!
✅ Banco de dados sincronizado!
🚀 Servidor rodando na porta 3000
```

### Terminal 2 - Frontend

```bash
cd frontend
npm start
```

Abrirá automaticamente em: `http://localhost:3001`

## 📁 Estrutura

```
Rei-barbearia/
├── README.md                 # Este arquivo
├── LICENSE                   # Licença MIT
│
├── docs/                     # Documentação
│   ├── CONTRIBUTING.md       # Guia de contribuição
│   ├── ARCHITECTURE.md       # Arquitetura do projeto
│   └── API.md                # Documentação da API
│
├── database/                 # Scripts de banco de dados
│   └── schema.sql            # Schema SQL
│
├── frontend/                 # Aplicação React
│   ├── public/
│   │   └── index.html        # HTML principal
│   ├── src/
│   │   ├── pages/            # Páginas
│   │   ├── services/         # Serviços de API
│   │   ├── App.jsx           # Componente principal
│   │   └── index.js          # Ponto de entrada
│   ├── package.json          # Dependências
│   ├── tailwind.config.js    # Tailwind CSS
│   └── README.md             # README do frontend
│
└── backend/                  # API Express
    ├── src/
    │   ├── models/           # Modelos Sequelize
    │   ├── controllers/       # Lógica de negócio
    │   ├── routes/           # Rotas da API
    │   ├── middleware/        # Middlewares
    │   ├── utils/            # Utilidades
    │   ├── config.js         # Configuração
    │   ├── database.js       # Conexão DB
    │   └── server.js         # Servidor
    ├── package.json          # Dependências
    └── README.md             # README do backend
```

## 📚 Documentação

- [README do Frontend](./frontend/README.md) - Instruções específicas do React
- [README do Backend](./backend/README.md) - Instruções específicas do Express
- [Arquitetura](./docs/ARCHITECTURE.md) - Visão geral da arquitetura
- [API Documentation](./docs/API.md) - Endpoints e exemplos
- [Contributing](./docs/CONTRIBUTING.md) - Guia de contribuição

## 🔗 URLs Importantes

| Serviço | URL |
|---------|-----|
| Frontend | http://localhost:3001 |
| Backend | http://localhost:3000 |
| API | http://localhost:3000/api |
| Health Check | http://localhost:3000/api/health |

## 🧪 Testando a API

### Com cURL

```bash
# Health check
curl http://localhost:3000/api/health

# Registro
curl -X POST http://localhost:3000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "name": "João Silva",
    "email": "joao@example.com",
    "password": "senha123",
    "phone": "11999999999"
  }'

# Login
curl -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "joao@example.com",
    "password": "senha123"
  }'
```

### Com Postman

1. Importe a coleção (ou crie manualmente)
2. Configure as variáveis de ambiente:
   - `base_url`: http://localhost:3000/api
   - `token`: (será preenchido após login)
3. Teste os endpoints

## 🐛 Troubleshooting

### Erro: "Cannot connect to database"

```bash
# Verifique se PostgreSQL está rodando
sudo service postgresql status

# Ou inicie PostgreSQL
sudo service postgresql start

# Verifique a conexão
psql -U barbearia_user -d rei_barbearia -c "SELECT 1;"
```

### Erro: "Port 3000 already in use"

```bash
# Encontre o processo
lsof -i :3000

# Mate o processo (macOS/Linux)
kill -9 <PID>

# Ou use outra porta
PORT=3001 npm run dev
```

### Erro: "Cannot find module"

```bash
# Limpe node_modules e reinstale
rm -rf node_modules package-lock.json
npm install
```

## 📝 Scripts Úteis

### Backend

```bash
npm run dev      # Inicia em desenvolvimento
npm start        # Inicia em produção
npm test         # Executa testes
```

### Frontend

```bash
npm start        # Inicia servidor de desenvolvimento
npm build        # Build para produção
npm test         # Executa testes
npm eject        # Ejetar configuração (não recomendado)
```

## 🤝 Contribuindo

Veja [CONTRIBUTING.md](./docs/CONTRIBUTING.md) para instruções.

## 📄 Licença

Este projeto está sob a licença MIT. Veja [LICENSE](./LICENSE) para detalhes.

## 👨‍💻 Autor

**Nat12459292**

- GitHub: [@Nat12459292](https://github.com/Nat12459292)
- Repositório: [Rei-barbearia-](https://github.com/Nat12459292/Rei-barbearia-)

## 🎯 Roadmap

- [ ] Adicionar sistema de promoções
- [ ] Implementar notificações por email/SMS
- [ ] Adicionar dashboard com gráficos
- [ ] Integração com sistemas de pagamento
- [ ] Aplicativo mobile
- [ ] Sistema de avaliações

## ⭐ Suporte

Se você gostou do projeto, deixe uma ⭐ no GitHub!

---

**Desenvolvido com ❤️ para barbearias**
