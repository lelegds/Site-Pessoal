# Portfólio Pessoal — Helena Duarte

Portfólio web pessoal desenvolvido para apresentar habilidades, projetos e experiências profissionais. A aplicação conta com frontend em React + Vite e backend em Django REST Framework, com banco de dados PostgreSQL hospedado em nuvem via Render.

---

## Links

| Recurso | URL |
|---|---|
| Aplicação em Produção | [site-pessoal-web-helenaduarte.onrender.com](https://site-pessoal-web-helenaduarte.onrender.com/) |
| Repositório GitHub | [github.com/lelegds/Site-Pessoal](https://github.com/lelegds/Site-Pessoal) |

---

## Tecnologias Utilizadas

### Frontend
| Tecnologia | Versão | Finalidade |
|---|---|---|
| React | 18+ | Biblioteca de UI |
| Vite | 5+ | Bundler e servidor de desenvolvimento |
| JavaScript (ES6+) | — | Linguagem principal |
| CSS | — | Estilização dos componentes |

### Backend
| Tecnologia | Versão | Finalidade |
|---|---|---|
| Python | 3.11+ | Linguagem principal |
| Django | 4+ | Framework web |
| Django REST Framework | 3+ | Construção da API REST |
| PostgreSQL | 15+ | Banco de dados relacional |
| psycopg2 | — | Driver de conexão com PostgreSQL |
| Gunicorn | — | Servidor WSGI para produção |
| django-cors-headers | — | Controle de CORS |

### Infraestrutura / Deploy
| Serviço | Uso |
|---|---|
| Render | Hospedagem do frontend (Static Site), backend (Web Service) e banco de dados PostgreSQL |

---

##  Estrutura do Projeto

```
Site-Pessoal/
├── backend/                  # API Django
│   ├── manage.py
│   ├── requirements.txt
│   ├── portfolio/            # App principal
│   │   ├── models.py         # Modelos de dados (Project, Skill, etc.)
│   │   ├── serializers.py    # Serializadores DRF
│   │   ├── views.py          # Views/Endpoints da API
│   │   ├── urls.py           # Rotas da API
│   │   └── admin.py          # Painel administrativo
│   └── core/                 # Configurações do projeto
│       ├── settings.py
│       ├── urls.py
│       └── wsgi.py
├── src/                      # Frontend React
│   ├── components/           # Componentes reutilizáveis
│   ├── pages/                # Páginas da aplicação
│   ├── App.jsx
│   └── main.jsx
├── public/                   # Assets estáticos
├── index.html
├── vite.config.js
├── package.json
└── README.md
```

---

## Guia de Execução Local

### Pré-requisitos

- Node.js 18+
- Python 3.11+
- PostgreSQL 15+
- Git

---

### 1. Clonar o repositório

```bash
git clone https://github.com/lelegds/Site-Pessoal.git
cd Site-Pessoal
```

---

### 2. Configurar o Backend (Django)

```bash
cd backend

# Criar e ativar ambiente virtual
python -m venv venv
source venv/bin/activate        # Linux/Mac
venv\Scripts\activate           # Windows

# Instalar dependências
pip install -r requirements.txt
```

Criar o arquivo `.env` na pasta `backend/` com as variáveis de ambiente:

```env
SECRET_KEY=sua_secret_key_django
DEBUG=True
DATABASE_URL=postgres://usuario:senha@localhost:5432/nome_do_banco
ALLOWED_HOSTS=localhost,127.0.0.1
```

Aplicar as migrações e iniciar o servidor:

```bash
python manage.py migrate
python manage.py createsuperuser   # opcional: criar admin
python manage.py runserver
```

O backend estará disponível em: `http://localhost:8000`

---

### 3. Configurar o Frontend (React + Vite)

Em outro terminal, a partir da raiz do projeto:

```bash
# Instalar dependências
npm install

# Criar arquivo .env com a URL da API
echo "VITE_API_URL=http://localhost:8000/api" > .env

# Iniciar servidor de desenvolvimento
npm run dev
```

O frontend estará disponível em: `http://localhost:5173`

---

### 4. Build de Produção (Frontend)

```bash
npm run build
```

Os arquivos gerados ficam em `dist/` e podem ser servidos como site estático.

---

### Serviços no Render

| Serviço | Tipo | Descrição |
|---|---|---|
| `site-pessoal-web` | Static Site | Serve o build do React (arquivos estáticos) |
| `site-pessoal-api` | Web Service | Backend Django com Gunicorn |
| `site-pessoal-db` | PostgreSQL | Banco de dados gerenciado |

---

##  Variáveis de Ambiente (Produção)

Configuradas no painel do Render para o Web Service:

| Variável | Descrição |
|---|---|
| `SECRET_KEY` | Chave secreta Django |
| `DEBUG` | Deve ser `False` em produção |
| `DATABASE_URL` | URL de conexão com o PostgreSQL (fornecida pelo Render) |
| `ALLOWED_HOSTS` | Domínio da aplicação em produção |
| `CORS_ALLOWED_ORIGINS` | URL do frontend para liberação do CORS |

---



