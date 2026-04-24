# 🍽️ FOOD TODAY — Livro de Receitas

Aplicação web de receitas culinárias desenvolvida como Checkpoint 5 da disciplina **Responsive Web Development** — FIAP, Tecnologia em Análise e Desenvolvimento de Sistemas.

---

## 🎯 Objetivo

Exibir e navegar por receitas culinárias organizadas por categorias, com dados carregados dinamicamente a partir de um arquivo JSON local. A aplicação permite filtrar receitas por tags, visualizar detalhes completos de cada prato e entrar em contato com a equipe via formulário validado.

---

## 🛠️ Tecnologias utilizadas

| Tecnologia | Versão | Finalidade |
|---|---|---|
| [Vite.js](https://vitejs.dev/) | 6.x | Bundler e servidor de desenvolvimento |
| [React](https://react.dev/) | 19.x | Biblioteca de UI |
| [TypeScript](https://www.typescriptlang.org/) | 6.x | Tipagem estática |
| [Tailwind CSS](https://tailwindcss.com/) | 4.x | Estilização utilitária |
| [React Router DOM](https://reactrouter.com/) | 7.x | Roteamento (simples, dinâmico e aninhado) |
| [React Hook Form](https://react-hook-form.com/) | 7.x | Formulários com validação |

---

## 🚀 Como executar o projeto

### Pré-requisitos

- [Node.js](https://nodejs.org/) v18 ou superior
- npm v9 ou superior

### Instalação e execução

```bash
# 1. Clone o repositório ou extraia o .zip
cd FOOD-TODAY-master

# 2. Instale as dependências
npm install

# 3. Inicie o servidor de desenvolvimento
npm run dev
```

A aplicação ficará disponível em **http://localhost:5173**

### Build para produção

```bash
npm run build
npm run preview
```

---

## 📁 Estrutura do projeto

```
src/
├── assets/          # Imagens e ícones SVG
├── components/
│   ├── layout/      # Header e Footer
│   ├── ui/          # Componentes reutilizáveis (Button, Input, RecipeCard, CategoryCard)
│   └── utils/       # Utilitários (ScrollToTop)
├── contexts/        # RecipeContext, RecipeProvider e hook useRecipes
├── data/
│   └── services/    # recipeService — lógica de filtragem e transformação
├── domain/
│   └── types/       # Tipagens TypeScript (Recipe, Contact)
├── hooks/           # useFetch — hook genérico de requisição
├── layouts/         # RootLayout com Outlet
├── pages/           # Home, Menu, RecipeDetails, Contact
└── styles/          # index.css

public/
└── data/
    └── recipe.json  # 60 receitas (20 pratos principais, 20 sobremesas, 10 saladas, 10 bebidas)
```

---

## 📄 Funcionalidades

- **Listagem de receitas** com cards responsivos
- **Filtro por tags** (Raízes do Brasil, Churrasco & Brasa, Plant Based, Mar & Rio, Express, Explorar o Mundo)
- **Detalhes da receita** com ingredientes, modo de preparo, tempo, dificuldade e dica do chef
- **Formulário de contato** com validação completa via React Hook Form
- **Navegação responsiva** com menu hambúrguer no mobile
- **Scroll automático** ao topo em cada troca de rota

---

## 👥 Equipe

| Nome | RM |
|---|---|
| Murilo Ayabe Severino | RM567479 |
| Paulo Cavalcante Caroba | RM566667 |
| Renan da Silva Paulino | RM566610 |

---

**FIAP — Checkpoint 5 | Prof. Adriano Milanez**