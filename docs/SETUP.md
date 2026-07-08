# 🚀 Guia de Configuração - Way Fome

## Pré-requisitos

- Node.js 16+ instalado
- PostgreSQL 12+ instalado
- Git configurado
- Conta do GitHub

## Instalação

### 1. Clone o Repositório

```bash
git clone https://github.com/leilaluanale13-jpg/Way-fome-.git
cd Way-fome-
```

### 2. Instale as Dependências Raiz

```bash
npm install
```

### 3. Configurar Backend

```bash
cd backend
npm install

# Copie o arquivo .env.example e configure
cp .env.example .env
```

Edite o arquivo `.env` com suas configurações:

```env
PORT=3000
NODE_ENV=development
DB_HOST=localhost
DB_PORT=5432
DB_NAME=way_fome
DB_USER=postgres
DB_PASSWORD=sua_senha
```

### 4. Configurar Frontend

```bash
cd ../frontend
npm install
```

## Execução

### Desenvolvimento (Ambos Backend e Frontend)

Da raiz do projeto:

```bash
npm run dev
```

Ou separadamente:

```bash
# Terminal 1 - Backend
npm run dev:backend

# Terminal 2 - Frontend
npm run dev:frontend
```

### Build para Produção

```bash
npm run build
```

### Testes

```bash
npm run test
```

## URLs de Acesso

- **Frontend**: http://localhost:5173
- **Backend API**: http://localhost:3000
- **API Health**: http://localhost:3000/api/health

## Troubleshooting

### Erro de porta já em uso

```bash
# Linux/Mac
lsof -i :3000
kill -9 <PID>

# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

### Erro de conexão com banco de dados

- Verifique se PostgreSQL está rodando
- Verifique credenciais no `.env`
- Crie o banco de dados: `createdb way_fome`

---

Para mais informações, consulte a [documentação completa](../README.md).