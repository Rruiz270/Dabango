# DABANGO - Ecommerce de Esportes para Crianças e Adolescentes

## Sobre o Projeto

DABANGO é uma plataforma de ecommerce especializada em artigos esportivos para crianças e adolescentes, oferecendo produtos das principais marcas como Nike, Adidas, Puma, Under Armour, New Balance e Reebok.

## Características Principais

- 🌐 **Bilíngue**: Suporte completo para Português e Inglês
- 💳 **Pagamento Seguro**: Integração com Stripe (cartão e boleto)
- 📱 **Responsivo**: Design otimizado para todos os dispositivos
- 🎨 **Cores da Marca**: Branco suave, azul marinho e verde limão
- 👶 **Foco no Público**: Seções dedicadas para crianças (5-12) e adolescentes (13-18)
- 🛒 **Carrinho Persistente**: Dados salvos localmente
- ❤️ **Lista de Desejos**: Salve produtos favoritos
- 🔐 **Autenticação Segura**: JWT com bcrypt

## Tecnologias Utilizadas

- **Frontend**: Next.js 15, React 19, TypeScript
- **Estilização**: Tailwind CSS
- **Banco de Dados**: PostgreSQL com Prisma ORM
- **Pagamento**: Stripe
- **Internacionalização**: i18next
- **Ícones**: Lucide React

## Instalação

1. Clone o repositório
2. Instale as dependências:
```bash
npm install
```

3. Configure as variáveis de ambiente:
```bash
cp .env.example .env
```

4. Configure o banco de dados:
```bash
npx prisma generate
npx prisma migrate dev
```

5. Execute o projeto:
```bash
npm run dev
```

## Estrutura do Projeto

```
dabango-ecommerce/
├── src/
│   ├── app/           # Rotas e páginas
│   ├── components/    # Componentes React
│   ├── contexts/      # Contextos globais
│   ├── lib/          # Utilitários e configurações
│   └── types/        # Tipos TypeScript
├── prisma/           # Schema do banco de dados
├── locales/          # Traduções (pt/en)
└── public/           # Arquivos estáticos
```

## Funcionalidades Implementadas

✅ Estrutura base do projeto
✅ Sistema de autenticação
✅ Carrinho de compras
✅ Lista de desejos
✅ Integração com Stripe
✅ Internacionalização (PT/EN)
✅ Design responsivo com cores da marca
✅ Schema do banco de dados

## Próximos Passos

- [ ] Implementar catálogo completo de produtos
- [ ] Sistema de busca e filtros avançados
- [ ] Painel administrativo
- [ ] Sistema de avaliações
- [ ] Programa de fidelidade
- [ ] Chat ao vivo

## Licença

Todos os direitos reservados - DABANGO © 2024