# Regras de Boas Práticas para Desenvolvimento com React e Next.js

## Estrutura de Projeto
- Organize os arquivos em pastas por domínio ou funcionalidade (ex: `components`, `pages`, `hooks`, `utils`).
- Utilize convenções de nomes consistentes (ex: PascalCase para componentes, camelCase para funções e variáveis).
- Separe componentes reutilizáveis em uma pasta dedicada (`components`).

## Componentes
- Prefira componentes funcionais e hooks ao invés de classes.
- Mantenha componentes pequenos e com responsabilidade única.
- Evite lógica complexa diretamente nos componentes; extraia para hooks ou funções utilitárias.
- Utilize `PropTypes` ou TypeScript para tipagem de props.

## Hooks
- Crie hooks personalizados para lógica compartilhada.
- Use hooks do React e Next.js conforme a documentação oficial (`useState`, `useEffect`, `useRouter`, etc).
- Evite hooks dentro de loops, condições ou funções aninhadas.

## Estilização
- Prefira CSS Modules, styled-components ou Tailwind CSS para escopo local e organização.
- Evite estilos globais desnecessários.
- Nomeie classes CSS de forma clara e sem ambiguidade.

## Páginas e Rotas
- Utilize a pasta `pages` para rotas em Next.js.
- Prefira rotas dinâmicas e segmentação de páginas para melhor organização.
- Utilize `getStaticProps` e `getServerSideProps` para carregamento de dados conforme necessidade.

## Boas Práticas Gerais
- Escreva código limpo, legível e comentado quando necessário.
- Utilize ESLint e Prettier para padronização e qualidade do código.
- Implemente testes unitários e de integração (Jest, React Testing Library).
- Evite duplicação de código; reutilize componentes e funções.
- Documente componentes e funções complexas.
- Faça commits frequentes e com mensagens claras.

## Performance
- Utilize lazy loading e code splitting para otimizar carregamento.
- Prefira imagens otimizadas e o componente `next/image`.
- Evite renderizações desnecessárias e otimize listas com `key`.

## Segurança
- Valide e sanitize dados recebidos de APIs.
- Proteja rotas sensíveis com autenticação e autorização.
- Evite expor informações sensíveis no frontend.

## Acessibilidade
- Utilize tags semânticas e atributos ARIA.
- Garanta navegação por teclado e leitores de tela.
- Teste acessibilidade com ferramentas como Lighthouse.

---
Siga estas regras para garantir um projeto React/Next.js escalável, seguro e de alta qualidade.
