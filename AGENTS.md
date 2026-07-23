# Dabango

E-commerce bilíngue (PT/EN) de artigos esportivos para crianças (5–12) e adolescentes (13–18), com catálogo por marcas (Nike, Adidas, Puma etc.), carrinho, wishlist e checkout via Stripe.

## Stack

- **Linguagem**: TypeScript 5
- **Framework**: Next.js 15 (App Router, `src/app/`) + React 19
- **Estilo**: Tailwind CSS 4
- **Banco**: PostgreSQL via Prisma ORM 6 (`prisma/schema.prisma`)
- **Auth**: JWT (`jsonwebtoken`) + `bcryptjs`
- **Pagamento**: Stripe (`stripe` + `@stripe/stripe-js`)
- **i18n**: i18next / next-i18next (`locales/`)
- **Deploy**: Vercel (`vercel.json`)
- **Package manager**: npm (`package-lock.json`)

## Comandos

```bash
npm install              # instala deps (roda postinstall: prisma generate)
npm run dev              # Next dev server (http://localhost:3000)
npm run build            # build de produção
npm run start            # serve o build
npm run lint             # ESLint (eslint-config-next)
npm run prisma:generate  # gera o Prisma Client
npm run prisma:migrate   # prisma migrate dev
npm run prisma:studio    # abre o Prisma Studio
npm run prisma:seed      # roda prisma/seed.js
```

Não há script de teste configurado (ver seção Testes).

## Estrutura

```
src/
├── app/          # rotas do App Router; app/api/ = route handlers (API)
├── components/   # home/, products/, layout/ e componentes gerais
├── contexts/     # contextos globais React (ex.: carrinho, auth, i18n)
├── lib/          # utilitários e config (prisma client, stripe, auth)
└── types/        # tipos TypeScript compartilhados
prisma/           # schema.prisma + migrations + seed.js
locales/          # traduções pt/ e en/
```

Modelo de dados (Prisma): `User`, `Address`, `Brand`, `Category`, `Product`, `ProductImage`, `ProductVariant` (size/color/price/stock), `Cart`/`CartItem`, `Wishlist`/`WishlistItem`, `Order`/`OrderItem`, `Review`. Enums: `Role`, `OrderStatus`, `AgeGroup`.

## Convenções de código

- TypeScript em todo o código de app; tipos de domínio em `src/types/`.
- ESLint via `eslint-config-next`; rode `npm run lint` antes de abrir PR.
- Preços em `Decimal(10,2)` no schema — nunca usar `float` para dinheiro.
- Campos bilíngues seguem o padrão `nameEn`/`namePt`, `descriptionEn`/`descriptionPt`. Textos visíveis ao usuário vão pelo i18next, não hardcoded.
- IDs são `cuid()`. Não mudar a estratégia sem migration.

## Variáveis de ambiente

Copie `.env.example` para `.env` (nomes, nunca valores):

- `DATABASE_URL` — PostgreSQL (Prisma)
- `JWT_SECRET` — assinatura dos tokens
- `NEXTAUTH_URL`, `NEXTAUTH_SECRET` — presentes no `.env.example`
- `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`, `STRIPE_SECRET_KEY`, `STRIPE_WEBHOOK_SECRET` — Stripe
- `NEXT_PUBLIC_API_URL`
- SMTP (opcional): `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASSWORD`

Em produção, configurar na Vercel (Project Settings → Environment Variables). O `vercel.json` mapeia `DATABASE_URL`, `JWT_SECRET`, `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`, `STRIPE_SECRET_KEY`, `STRIPE_WEBHOOK_SECRET` a secrets do projeto.

## CI/CD & Deploy

- Deploy contínuo na Vercel: `buildCommand: "prisma generate && next build"` (definido em `vercel.json`). Push na `main` → deploy de produção; PRs geram preview deploys.
- **Não há workflow de CI no GitHub Actions.** Recomendado adicionar um workflow mínimo em PRs: `npm ci` → `prisma generate` → `npm run lint` → `npx tsc --noEmit` → `npm run build`.

## Boas práticas de PR

- Branches: `feat/…`, `fix/…`, `chore/…`.
- Commits no padrão Conventional Commits (`feat:`, `fix:`, `docs:` …).
- PRs pequenos e focados. Checklist:
  - [ ] `npm run build` passa localmente
  - [ ] `npm run lint` sem erros
  - [ ] Nenhum segredo/`.env` commitado
  - [ ] Mudança de schema acompanhada de migration Prisma com plano de rollback
  - [ ] Screenshots para mudanças de UI
- ≥1 review antes do merge; squash merge; `main` sempre deployável.

## Testes

Não há suíte de testes nem runner configurado. Recomendação mínima proporcional: adicionar Vitest/Jest para a lógica de `src/lib` (auth, cálculo de carrinho/preços) e um teste de fumaça no route handler de webhook do Stripe. Priorizar o caminho de checkout.

## Segurança & dados

- Nunca commitar `.env`/segredos; chaves Stripe e `JWT_SECRET` só em env vars.
- Validar/verificar assinatura do webhook Stripe com `STRIPE_WEBHOOK_SECRET`.
- **LGPD**: o modelo `User` guarda dados pessoais (email, CPF, telefone, data de nascimento) e público infantojuvenil — tratar CPF/endereço como sensíveis, restringir acesso e evitar logar PII.
- Revisar dependências periodicamente (`npm audit`); manter Prisma/Next/Stripe atualizados.

## Gotchas

- `postinstall` roda `prisma generate` — se o `DATABASE_URL` não for necessário para gerar o client, o generate funciona, mas migrations exigem o banco acessível.
- Build da Vercel depende de `prisma generate` no `buildCommand`; ao mudar o schema, gere o client e rode a migration antes/deploy pode quebrar.
- Next 15 + React 19: cuidado com libs ainda não compatíveis; conferir peer deps.
- README lista funcionalidades como "próximos passos" (painel admin, busca avançada) — parte do catálogo pode não estar completa.
