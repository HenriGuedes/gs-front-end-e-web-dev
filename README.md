# GS-Front-end-e-Web-Dev

Projeto front-end desenvolvido como atividade acadêmica, focado em exibir perfis profissionais de forma interativa e responsiva.

## Descrição

Esta aplicação React utiliza Vite para build e Tailwind CSS para estilização. Os perfis são carregados de um arquivo JSON e exibidos em cards, com busca por cidade e visualização detalhada em modal.

## Integrantes

- **Eduardo Duran Del Ciel** — RM: 562017
- **Henrique Guedes Silvestre** — RM: 562474

## Funcionalidades

- Listagem de perfis profissionais (`src/data/profissionais.json`)
- Busca dinâmica por cidade
- Modal com detalhes do perfil (foto, cargo, localização, habilidades, soft skills)
- Recomendar profissional e enviar mensagem (simulado)
- Layout responsivo e moderno

## Diferenciais

- Filtragem inteligente (ignora acentos e maiúsculas/minúsculas)
- Componentização clara (componentes reutilizáveis)
- Uso de Tailwind para estilização rápida e responsiva

## Tecnologias utilizadas

- React
- Vite
- Tailwind CSS
- ESLint

## Estrutura do projeto

```
global/
├── public/
├── src/
│   ├── assets/           # Imagens e arquivos estáticos
│   ├── components/       # Componentes reutilizáveis (Chatbot, NavBar)
│   ├── data/             # profissionais.json (dados dos perfis)
│   ├── pages/            # Home.jsx, PerfisProfissionais.jsx
│   ├── App.jsx           # Componente principal
│   └── main.jsx          # Ponto de entrada
├── package.json
├── vite.config.js
└── index.html
```

## Como rodar o projeto

Pré-requisitos:

- Node.js v16 ou superior
- npm (ou yarn)

No PowerShell, execute:

```powershell
cd 'c:\Users\perul\Downloads\web\GS-Front-end-e-Web-Dev\global'
npm install
npm run dev
```

Acesse `http://localhost:5173` no navegador.

## Scripts úteis

- `npm run dev` — inicia o servidor de desenvolvimento
- `npm run build` — gera a build de produção
- `npm run preview` — pré-visualiza a build gerada
- `npm run lint` — executa o ESLint

## Observações

- O filtro busca apenas por cidade (`localizacao` no JSON)
- Para buscar por área ou tecnologia, altere a lógica em `PerfisProfissionais.jsx`
- Recomendações e envio de mensagem são simulados (alert)

---
