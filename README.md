# 🧑‍💻 Ceccoff Angular Portfólio

Este é o repositório do meu portfólio profissional desenvolvido com **Angular 19**, aplicando **boas práticas modernas de desenvolvimento front-end**, incluindo arquitetura atômica, testes automatizados, linting, CI/CD e deploy automatizado via **Vercel**.

## 🚀 Tecnologias e Ferramentas

- **Angular 19** — Framework principal
- **TypeScript** — Tipagem segura e moderna
- **Atomic Design** — Organização por átomos, moléculas e organismos
- **Jest** — Testes unitários com cobertura
- **ESLint + Prettier** — Padronização e qualidade de código
- **Commitlint + Husky** — Commits semânticos e hooks de validação
- **GitHub Actions** — Pipeline de build e deploy
- **Vercel** — Deploy contínuo com ambientes personalizados

## 📁 Estrutura do Projeto

```bash
src/
├── app/
│   ├── core/              # Serviços, guards, interceptors
│   ├── layout/            # Componentes de layout como header e footer
│   ├── shared/
│   │   ├── components/
│   │   │   ├── atoms/
│   │   │   ├── molecules/
│   │   │   └── organisms/
│   └── modules/
│       └── pages/         # Páginas e rotas standalone
├── assets/                # Imagens e recursos estáticos
└── environments/          # Configurações por ambiente
```
