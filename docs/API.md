# Documentação da API

## Base URL

```
Development: http://localhost:3000/api
Production: https://api.rei-barbearia.com/api
```

## Autenticação

Todas as requisições requerem um token JWT no header:

```
Authorization: Bearer <seu_token_jwt>
```

## Endpoints Principais

### 🔐 Autenticação

#### Login
```
POST /auth/login
Content-Type: application/json

{
  "email": "usuario@example.com",
  "password": "senha123"
}

Response: 200 OK
{
  "token": "eyJhbGciOiJIUzI1NiIs...",
  "user": {
    "id": "123",
    "name": "João",
    "email": "usuario@example.com"
  }
}
```

#### Registro
```
POST /auth/register
Content-Type: application/json

{
  "name": "João Silva",
  "email": "joao@example.com",
  "password": "senha123"
}

Response: 201 Created
{
  "message": "Usuário criado com sucesso",
  "user": { ... }
}
```

---

### 👥 Clientes

#### Listar Clientes
```
GET /clients
Response: 200 OK
{
  "clients": [
    {
      "id": "1",
      "name": "João Silva",
      "phone": "11999999999",
      "email": "joao@example.com"
    }
  ]
}
```

#### Criar Cliente
```
POST /clients
Content-Type: application/json

{
  "name": "Maria Santos",
  "phone": "11988888888",
  "email": "maria@example.com"
}

Response: 201 Created
```

#### Atualizar Cliente
```
PUT /clients/:id
Content-Type: application/json

{
  "name": "Maria Silva",
  "phone": "11977777777"
}

Response: 200 OK
```

#### Deletar Cliente
```
DELETE /clients/:id
Response: 204 No Content
```

---

### ✂️ Serviços

#### Listar Serviços
```
GET /services
Response: 200 OK
{
  "services": [
    {
      "id": "1",
      "name": "Corte de Cabelo",
      "price": 50.00,
      "duration": 30
    }
  ]
}
```

#### Criar Serviço
```
POST /services
Content-Type: application/json

{
  "name": "Barba Completa",
  "price": 40.00,
  "duration": 45,
  "description": "Limpeza e aparação de barba"
}

Response: 201 Created
```

---

### 📅 Agendamentos

#### Listar Agendamentos
```
GET /appointments?date=2024-01-15
Response: 200 OK
{
  "appointments": [
    {
      "id": "1",
      "clientId": "1",
      "serviceId": "1",
      "date": "2024-01-15",
      "time": "14:30",
      "status": "confirmed"
    }
  ]
}
```

#### Criar Agendamento
```
POST /appointments
Content-Type: application/json

{
  "clientId": "1",
  "serviceId": "1",
  "date": "2024-01-15",
  "time": "14:30"
}

Response: 201 Created
```

#### Atualizar Agendamento
```
PUT /appointments/:id
Content-Type: application/json

{
  "status": "completed"
}

Response: 200 OK
```

#### Cancelar Agendamento
```
DELETE /appointments/:id
Response: 204 No Content
```

---

### 💰 Pagamentos

#### Registrar Pagamento
```
POST /payments
Content-Type: application/json

{
  "appointmentId": "1",
  "amount": 50.00,
  "method": "credit_card",
  "status": "paid"
}

Response: 201 Created
```

#### Listar Pagamentos
```
GET /payments?month=2024-01
Response: 200 OK
{
  "payments": [ ... ],
  "total": 1500.00
}
```

---

## Códigos de Status HTTP

| Código | Significado |
|--------|-------------|
| 200 | OK - Requisição bem sucedida |
| 201 | Created - Recurso criado com sucesso |
| 204 | No Content - Sucesso sem conteúdo |
| 400 | Bad Request - Dados inválidos |
| 401 | Unauthorized - Token inválido/expirado |
| 403 | Forbidden - Acesso não permitido |
| 404 | Not Found - Recurso não encontrado |
| 500 | Internal Server Error - Erro do servidor |

---

## Tratamento de Erros

```json
{
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Email já cadastrado",
    "details": [
      {
        "field": "email",
        "message": "Email já existe no sistema"
      }
    ]
  }
}
```

---

## Rate Limiting

- **Limite:** 100 requisições por hora
- **Header:** `X-RateLimit-Remaining`

---

Para exemplos completos, veja os testes em `/tests/api`.