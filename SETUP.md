# Instalação e Setup

Guia passo a passo para colocar o projeto em funcionamento.

## 📋 Índice

1. [Pré-requisitos](#pré-requisitos)
2. [Clonando o Repositório](#clonando-o-repositório)
3. [Setup do Banco de Dados](#setup-do-banco-de-dados)
4. [Setup do Backend](#setup-do-backend)
5. [Setup do Frontend](#setup-do-frontend)
6. [Executando o Projeto](#executando-o-projeto)
7. [Verificando a Instalação](#verificando-a-instalação)

## 🔧 Pré-requisitos

Certifique-se de ter os seguintes softwares instalados:

### Node.js e npm

```bash
# Verificar versão
node --version  # Deve ser v16 ou superior
npm --version   # Deve ser 8.0.0 ou superior

# Instalar (se necessário)
# Visite: https://nodejs.org/
```

### PostgreSQL

```bash
# Verificar versão
psql --version  # Deve ser 12 ou superior

# Instalar (se necessário)
# Visite: https://www.postgresql.org/download/
```

### Git (opcional, mas recomendado)

```bash
# Verificar versão
git --version

# Instalar (se necessário)
# Visite: https://git-scm.com/
```

## 📥 Clonando o Repositório

### Com Git

```bash
git clone https://github.com/Nat12459292/Rei-barbearia-.git
cd Rei-barbearia
```

### Sem Git

1. Visite: https://github.com/Nat12459292/Rei-barbearia-
2. Clique em **"Code"** → **"Download ZIP"**
3. Extraia o arquivo

## 🗄️ Setup do Banco de Dados

### 1. Iniciar PostgreSQL

**Windows:**
```bash
# O PostgreSQL geralmente inicia automaticamente
# Se não, abra Services e procure por "postgresql"
```

**macOS:**
```bash
brew services start postgresql
```

**Linux:**
```bash
sudo service postgresql start
```

### 2. Criar Banco de Dados

```bash
# Conectar ao PostgreSQL
psql -U postgres

# Na prompt do PostgreSQL, execute:
CREATE DATABASE rei_barbearia;

CREATE USER barbearia_user WITH PASSWORD 'sua_senha_segura';

ALTER ROLE barbearia_user SET client_encoding TO 'utf8';
ALTER ROLE barbearia_user SET default_transaction_isolation TO 'read committed';
ALTER ROLE barbearia_user SET default_transaction_deferrable TO on;
ALTER ROLE barbearia_user SET timezone TO 'UTC';

GRANT ALL PRIVILEGES ON DATABASE rei_barbearia TO barbearia_user;

# Sair
\q
```

### 3. Testar Conexão

```bash
# Conectar com o novo usuário
psql -U barbearia_user -d rei_barbearia

# Deve conectar sem erro
# Para sair, digite: \q
```

## 🖥️ Setup do Backend

### 1. Navegar para Backend

```bash
cd backend
```

### 2. Instalar Dependências

```bash
npm install
```

Vai levar alguns minutos...

### 3. Configurar Variáveis de Ambiente

```bash
# Copiar arquivo de exemplo
cp .env.example .env

# Editar o arquivo
# Windows
notepad .env

# macOS/Linux
nano .env
```

### 4. Configurar .env

Abra o arquivo `.env` e configure:

```env
NODE_ENV=development
PORT=3000
DATABASE_URL=postgresql://barbearia_user:sua_senha_segura@localhost:5432/rei_barbearia
JWT_SECRET=sua_chave_super_secreta_e_unica_12345_abcde
JWT_EXPIRE=7d
BCRYPT_ROUNDS=10
CORS_ORIGIN=http://localhost:3001
```

**⚠️ Importante:**
- Substitua `sua_senha_segura` pela senha que você criou
- Use uma `JWT_SECRET` realmente segura (use um gerador de senhas)
- Não compartilhe o `.env`!

## 🎨 Setup do Frontend

### 1. Navegar para Frontend

```bash
cd ../frontend
```

### 2. Instalar Dependências

```bash
npm install
```

Vai levar alguns minutos...

### 3. Configurar Variáveis de Ambiente (Opcional)

```bash
# Copiar arquivo de exemplo
cp .env.example .env

# Editar se necessário
nano .env
```

A configuração padrão deve funcionar. Se o backend estiver em outra porta, altere:

```env
REACT_APP_API_URL=http://localhost:3000/api
REACT_APP_ENV=development
```

## 🚀 Executando o Projeto

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
📍 Ambiente: development
🔗 URL: http://localhost:3000
```

**Deixe este terminal aberto!**

### Terminal 2 - Frontend

Abra um **novo terminal** e execute:

```bash
cd frontend
npm start
```

Isso abrirá automaticamente no navegador em:
```
http://localhost:3001
```

Se não abrir, visite manualmente a URL acima.

## ✅ Verificando a Instalação

### 1. Testar Backend

```bash
# Em outro terminal, execute:
curl http://localhost:3000/api/health
```

Deve retornar:
```json
{"status":"OK","timestamp":"2024-01-15T10:30:00.000Z"}
```

### 2. Testar Frontend

Visite `http://localhost:3001` no navegador.

Você deverá ver a página inicial com opções de Login e Dashboard.

### 3. Testar Autenticação

1. Clique em "Login"
2. Ou clique em um dos botões de ação
3. Tente registrar um novo usuário
4. Faça login com as credenciais criadas

## 🐛 Resolvendo Problemas Comuns

### Erro: "Cannot connect to database"

```bash
# 1. Verifique se PostgreSQL está rodando
psql -U postgres -c "SELECT 1;"

# 2. Verifique as credenciais no .env
cat backend/.env | grep DATABASE_URL

# 3. Teste a conexão
psql -U barbearia_user -d rei_barbearia -c "SELECT 1;"
```

### Erro: "Port 3000 already in use"

```bash
# 1. Encontre o processo usando a porta
# Windows
netstat -ano | findstr :3000

# macOS/Linux
lsof -i :3000

# 2. Termine o processo
# Windows (cmd como admin)
taskkill /PID <PID> /F

# macOS/Linux
kill -9 <PID>
```

### Erro: "Cannot find module 'express'"

```bash
# Reinstale as dependências
rm -rf node_modules package-lock.json
npm install
```

### Frontend mostra erro de conexão

1. Certifique-se de que o backend está rodando
2. Verifique a URL em `frontend/.env`
3. Abra o DevTools do navegador (F12)
4. Verifique a aba Network para ver a requisição

## 📊 Estrutura de Dados

O backend cria automaticamente as seguintes tabelas:

- **Users** - Usuários/Barbeiros
- **Clients** - Clientes
- **Services** - Serviços
- **Appointments** - Agendamentos
- **Payments** - Pagamentos

Você pode visualizar no pgAdmin ou psql:

```bash
psql -U barbearia_user -d rei_barbearia

# Listar tabelas
\dt

# Ver estrutura de uma tabela
\d users
```

## 🔐 Segurança

Para produção, sempre:

1. Use senhas fortes
2. Use JWT_SECRET realmente seguro
3. Configure CORS corretamente
4. Use HTTPS
5. Mantenha as dependências atualizadas
6. Nunca commit o arquivo `.env`

## 📚 Próximos Passos

1. Leia a [Documentação da API](./docs/API.md)
2. Entenda a [Arquitetura](./docs/ARCHITECTURE.md)
3. Veja o [Frontend README](./frontend/README.md)
4. Veja o [Backend README](./backend/README.md)

## 💡 Dicas

- Use o DevTools do navegador (F12) para debug
- Leia os logs do terminal para erros
- Consulte a documentação das dependências
- Mantenha o Node.js e npm atualizados

## ❓ Precisa de Ajuda?

1. Verifique este guia novamente
2. Leia os READMEs do [frontend](./frontend/README.md) e [backend](./backend/README.md)
3. Abra uma [Issue](https://github.com/Nat12459292/Rei-barbearia-/issues)

---

**Tudo pronto! Bora barbearia! 💈**
