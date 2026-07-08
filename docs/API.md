# 📚 Documentação da API - Way Fome

## Base URL

```
http://localhost:3000/api
```

## Autenticação

Todas as requisições autenticadas devem incluir o token JWT no header:

```
Authorization: Bearer <seu_token_jwt>
```

## Endpoints

### Health Check

```http
GET /health
```

Resposta:
```json
{
  "status": "OK",
  "message": "Way Fome API está rodando"
}
```

### Autenticação

#### Login

```http
POST /auth/login
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "senha123"
}
```

#### Registro

```http
POST /auth/register
Content-Type: application/json

{
  "name": "João Silva",
  "email": "joao@example.com",
  "password": "senha123",
  "userType": "customer" // customer, restaurant, delivery
}
```

### Usuários

#### Obter Perfil

```http
GET /users/profile
Authorization: Bearer <token>
```

#### Atualizar Perfil

```http
PUT /users/profile
Authorization: Bearer <token>
Content-Type: application/json

{
  "name": "Novo Nome",
  "phone": "11999999999"
}
```

### Restaurantes

#### Listar Restaurantes

```http
GET /restaurants?page=1&limit=10
```

#### Obter Detalhes do Restaurante

```http
GET /restaurants/:id
```

#### Criar Restaurante (Restaurador)

```http
POST /restaurants
Authorization: Bearer <token>
Content-Type: application/json

{
  "name": "Pizzaria Delícia",
  "description": "Melhor pizzaria da região",
  "phone": "1133333333",
  "address": "Rua Principal, 123"
}
```

### Produtos

#### Listar Produtos do Restaurante

```http
GET /restaurants/:restaurantId/products
```

#### Criar Produto

```http
POST /restaurants/:restaurantId/products
Authorization: Bearer <token>
Content-Type: application/json

{
  "name": "Pizza Margherita",
  "description": "Clássica com tomate e mozzarela",
  "price": 35.90,
  "image": "url_da_imagem"
}
```

### Pedidos

#### Criar Pedido

```http
POST /orders
Authorization: Bearer <token>
Content-Type: application/json

{
  "restaurantId": "123",
  "items": [
    {
      "productId": "456",
      "quantity": 2,
      "price": 35.90
    }
  ],
  "deliveryAddress": "Rua X, 789",
  "total": 71.80
}
```

#### Listar Meus Pedidos

```http
GET /orders
Authorization: Bearer <token>
```

#### Obter Detalhes do Pedido

```http
GET /orders/:id
Authorization: Bearer <token>
```

## Status de Erros

- `200` - Sucesso
- `201` - Criado com sucesso
- `400` - Requisição inválida
- `401` - Não autenticado
- `403` - Não autorizado
- `404` - Não encontrado
- `500` - Erro do servidor

---

Para mais detalhes, consulte a [documentação técnica](./TECHNICAL.md).