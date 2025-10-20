# 📋 Todo List

Uma aplicação moderna de gerenciamento de tarefas desenvolvida com Next.js, TypeScript e Tailwind CSS.

## ✨ Funcionalidades

- ✅ **Criar tarefas** - Adicione novas tarefas com título e data
- 🗑️ **Excluir tarefas** - Remova tarefas desnecessárias
- ✓ **Marcar como concluída** - Acompanhe o progresso das suas tarefas
- 🔍 **Filtros** - Visualize tarefas por status (Todas, Pendentes, Concluídas)
- 📅 **Organização por data** - Tarefas ordenadas automaticamente
- ⚠️ **Marcadores de atraso** - Destaque visual para tarefas atrasadas
- 💾 **LocalStorage** - Dados salvos localmente no navegador

## 🚀 Tecnologias

- [Next.js 15](https://nextjs.org/) - Framework React
- [TypeScript](https://www.typescriptlang.org/) - Tipagem estática
- [Tailwind CSS](https://tailwindcss.com/) - Estilização utilitária
- [React Hooks](https://react.dev/reference/react) - Gerenciamento de estado

## 📁 Estrutura do Projeto

```
src/
├── app/
│   ├── layout.tsx          # Layout principal e metadados
│   ├── page.tsx            # Página principal da aplicação
│   └── globals.css         # Estilos globais
├── components/
│   ├── TodoForm.tsx        # Formulário de criação de tarefas
│   ├── TodoItem.tsx        # Item individual de tarefa
│   ├── TodoList.tsx        # Lista de tarefas
│   └── FilterTabs.tsx      # Abas de filtro
├── hooks/
│   └── useTodos.ts         # Hook customizado para gerenciar tarefas
└── types/
    └── todo.ts             # Interfaces e tipos TypeScript
```

## 🛠️ Instalação e Uso

### Pré-requisitos

- Node.js 18+ instalado
- npm, yarn, pnpm ou bun

### Instalação

```bash
# Instalar dependências
npm install
# ou
yarn install
# ou
pnpm install
```

### Executar em Desenvolvimento

```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador para visualizar a aplicação.

### Build para Produção

```bash
npm run build
npm run start
```

## 🎨 Recursos de Design

- **Responsivo** - Interface adaptável para diferentes dispositivos
- **Dark Mode** - Suporte a tema escuro
- **Acessibilidade** - Labels, ARIA attributes e foco visível
- **Animações** - Transições suaves entre estados
- **Feedback Visual** - Cores e ícones indicativos de status

## 📝 Documentação do Código

Todos os componentes, funções e hooks estão documentados com JSDoc, incluindo:

- Descrição da funcionalidade
- Parâmetros e tipos
- Valores de retorno
- Exemplos de uso quando aplicável

## 🔒 Persistência de Dados

Os dados são salvos automaticamente no `localStorage` do navegador:

- Sincronização em tempo real
- Persistência entre sessões
- Não requer backend ou banco de dados

## 🧪 Boas Práticas Implementadas

### Next.js
- Uso do App Router
- Componentes Client e Server apropriados
- Otimização de metadados para SEO

### TypeScript
- Interfaces bem definidas
- Tipagem estrita
- Documentação com JSDoc

### Tailwind CSS
- Classes utilitárias
- Design responsivo
- Suporte a dark mode
- Componentização eficiente

### Acessibilidade
- Labels semânticos
- ARIA attributes
- Navegação por teclado
- Foco visível

## 📄 Licença

Este projeto é de código aberto e está disponível sob a licença MIT.

## 🤝 Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou pull requests.

---

Desenvolvido com ❤️ usando Next.js, TypeScript e Tailwind CSS
