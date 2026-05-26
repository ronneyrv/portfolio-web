# 🚀 Portfolio Web

Aplicação frontend do meu portfólio pessoal desenvolvida com React, TypeScript e Tailwind CSS, consumindo uma API própria construída em Spring Boot.

O projeto apresenta informações profissionais, habilidades, experiência e projetos desenvolvidos, com integração dinâmica ao backend e armazenamento de imagens em Cloudinary.

## 🔗 Demo

Acesse a aplicação:

[Portfolio Web](SEU_LINK_VERCEL)

API:

[Portfolio API](https://portfolio-api-5kec.onrender.com/projects)

---

## 📸 Preview

<img width="100%" src="./src/assets/preview.png"/>

---

## ✨ Funcionalidades

- Navegação entre páginas
- Layout responsivo
- Menu mobile responsivo
- Página Home
- Página About
- Carrossel de projetos
- Consumo de API REST
- Integração com Cloudinary
- Ordenação personalizada dos projetos
- Cards interativos
- Links para GitHub e Demo
- Testes unitários

---

## 🛠️ Tecnologias

### Frontend

- React
- TypeScript
- Tailwind CSS
- React Router DOM
- Axios
- Swiper
- React Icons

### Testes

- Vitest
- Testing Library

### Backend

- Spring Boot
- Java
- PostgreSQL
- Cloudinary

---

## 📂 Estrutura do Projeto

```bash
src
├── assets
├── components
│   ├── Footer
│   ├── Navbar
│   ├── ProfileCard
│   ├── ProjectCard
│   └── ProjectCarousel
│
├── pages
│   ├── Home
│   ├── About
│   └── Projects
│
├── services
│   └── api.ts
│
├── tests
│
├── types
│
└── routes
```

---

## ⚙️ Instalação

Clone o projeto:

```bash
git clone https://github.com/ronneyrv/portfolio-web.git
```

Entrar na pasta:

```bash
cd portfolio-web
```

Instalar dependências:

```bash
npm install
```

Criar arquivo:

```bash
.env
```

Adicionar:

```env
VITE_API_URL=https://portfolio-api-5kec.onrender.com
```

Rodar projeto:

```bash
npm run dev
```

---

## 🧪 Executando testes

```bash
npm run test
```

---

## 🌐 Deploy

Frontend:

- Vercel

Backend:

- Render

Banco:

- PostgreSQL (Render)

Imagens:

- Cloudinary

---

## 👨‍💻 Autor

Ronney Rocha

GitHub:
https://github.com/ronneyrv

LinkedIn:
https://www.linkedin.com/in/ronney-rocha