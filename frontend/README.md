# Frontend - Rei Barbearia

Interface React para sistema de gerenciamento de barbearia.

## 📋 Requisitos

- Node.js v16+
- npm ou yarn

## 🚀 Instalação

```bash
# Instalar dependências
npm install

# Configurar variáveis de ambiente
cp .env.example .env

# Executar em desenvolvimento
npm start

# Build para produção
npm build

# Executar testes
npm test
```

## 📁 Estrutura

```
src/
├── pages/             # Páginas da aplicação
│   ├── Home.jsx
│   ├── Login.jsx
│   ├── Dashboard.jsx
│   ├── Clients.jsx
│   ├── Services.jsx
│   └── Appointments.jsx
├── services/          # Serviços de API
│   └── api.js
├── App.jsx           # Componente principal
├── App.css           # Estilos
└── index.js          # Ponto de entrada
```

## 🎨 Tecnologias

- **React 18** - Framework UI
- **React Router** - Navegação
- **Axios** - Cliente HTTP
- **Tailwind CSS** - Estilos
- **PostCSS** - Processamento CSS

## 🔐 Autenticação

A autenticação é feita via JWT. O token é armazenado em `localStorage` e enviado no header:

```javascript
Authorization: Bearer <token>
```

## 📚 Páginas

### Home
Página inicial com informações sobre o sistema e links para login e dashboard.

### Login
Formulário para autenticação de usuários.

### Dashboard
Painel com estatísticas e acesso rápido às funcionalidades principais.

### Clientes
Gerenciamento de clientes (criar, editar, deletar, listar).

### Serviços
Gerenciamento de serviços oferecidos (criar, editar, deletar, listar).

### Agendamentos
Gerenciamento de agendamentos (criar, editar, deletar, listar).

## 🔌 API

O frontend conecta com a API backend em:

```
http://localhost:3000/api
```

Configurável via variável de ambiente `REACT_APP_API_URL`.

## 📝 Variáveis de Ambiente

```
REACT_APP_API_URL=http://localhost:3000/api
REACT_APP_ENV=development
```

## 🧪 Testes

```bash
npm test
```

## 📦 Build

```bash
npm build
```

Gera pasta `build/` pronta para deploy.

## 🌐 Deploy

### Vercel
```bash
vercel
```

### Netlify
```bash
netlify deploy --prod --dir=build
```

### GitHub Pages
```bash
npm run build
git add build/
git commit -m "Deploy"
git push
```

## 🤝 Contribuindo

Veja [CONTRIBUTING.md](../docs/CONTRIBUTING.md)

## 📄 Licença

MIT
