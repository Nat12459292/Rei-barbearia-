# Arquitetura do Projeto

## Visão Geral da Arquitetura

A **Rei Barbearia** segue uma arquitetura MVC (Model-View-Controller) com separação clara entre frontend e backend.

```
┌─────────────────────────────────────────────────────────┐
│                    Frontend (React/Vue)                  │
│                 (Interface do Usuário)                   │
└────────────────────┬────────────────────────────────────┘
                     │ HTTP/REST API
┌────────────────────▼────────────────────────────────────┐
│              Backend (Node.js/Python)                    │
│          (Lógica de Negócio e API)                       │
└────────────────────┬────────────────────────────────────┘
                     │ SQL
┌────────────────────▼────────────────────────────────────┐
│           Database (PostgreSQL/MongoDB)                  │
│               (Persistência de Dados)                    │
└─────────────────────────────────────────────────────────┘
```

## Componentes Principais

### 1. Frontend
- **Tecnologia:** React.js / Vue.js
- **Styling:** Tailwind CSS
- **HTTP Client:** Axios
- **State Management:** Redux / Vuex (opcional)

**Estrutura de pastas:**
```
frontend/
├── src/
│   ├── components/    # Componentes reutilizáveis
│   ├── pages/         # Páginas da aplicação
│   ├── services/      # Serviços de API
│   ├── styles/        # Estilos globais
│   └── App.jsx        # Componente raiz
├── public/
└── package.json
```

### 2. Backend
- **Tecnologia:** Node.js + Express ou Python + Flask
- **Autenticação:** JWT
- **Validação:** Joi / Marshmallow

**Estrutura de pastas:**
```
backend/
├── src/
│   ├── controllers/   # Lógica das rotas
│   ├── models/        # Modelos de dados
│   ├── routes/        # Definição de rotas
│   ├── middleware/    # Middlewares
│   ├── services/      # Lógica de negócio
│   └── config/        # Configurações
├── .env.example
└── package.json
```

### 3. Database
- **SGBD:** PostgreSQL (recomendado) ou MongoDB
- **Migrations:** Gerenciadas com Sequelize/Knex ou Alembic

**Tabelas principais:**
- `users` - Usuários/Barbeiros
- `clients` - Clientes
- `services` - Serviços oferecidos
- `appointments` - Agendamentos
- `payments` - Pagamentos

## Fluxo de Dados

1. **Usuário interage com UI** (Frontend)
2. **Frontend envia request HTTP** para Backend
3. **Backend processa e valida** dados
4. **Backend consulta Database** se necessário
5. **Backend retorna response** para Frontend
6. **Frontend atualiza UI** com dados

## Segurança

- ✅ JWT para autenticação
- ✅ CORS configurado
- ✅ Validação de entrada
- ✅ Senhas hasheadas (bcrypt)
- ✅ HTTPS em produção

## Performance

- 📦 Compressão de respostas
- 🔄 Cache implementado
- 🚀 Lazy loading de componentes
- 📊 Índices no database

## Deploy

- **Frontend:** Vercel, Netlify ou GitHub Pages
- **Backend:** Heroku, AWS, DigitalOcean
- **Database:** Cloud database providers

---

Para mais detalhes, consulte a [API Documentation](API.md).