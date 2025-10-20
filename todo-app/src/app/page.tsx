'use client';

import { useState } from 'react';
import { FiltroTodo } from '@/types/todo';
import { useTodos } from '@/hooks/useTodos';
import TodoForm from '@/components/TodoForm';
import FilterTabs from '@/components/FilterTabs';
import TodoList from '@/components/TodoList';

/**
 * Página principal da aplicação Todo List
 * 
 * Esta página integra todos os componentes e gerencia o estado global da aplicação,
 * incluindo a criação, exclusão, marcação de tarefas e filtragem por status.
 * 
 * @returns {JSX.Element} Página principal
 */
export default function Home() {
  const {
    todos,
    adicionarTodo,
    excluirTodo,
    alternarConclusao,
    filtrarTodos,
    estaAtrasada,
    ordenarPorData
  } = useTodos();

  const [filtroAtivo, setFiltroAtivo] = useState<FiltroTodo>(FiltroTodo.TODAS);

  // Obter tarefas filtradas e ordenadas
  const tarefasFiltradas = ordenarPorData(filtrarTodos(filtroAtivo));

  // Calcular contadores para os filtros
  const contadores = {
    todas: todos.length,
    pendentes: todos.filter(t => !t.concluida).length,
    concluidas: todos.filter(t => t.concluida).length
  };

  return (
    <main className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Cabeçalho */}
        <header className="text-center mb-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-2">
            📋 Todo List
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Organize suas tarefas de forma simples e eficiente
          </p>
        </header>

        {/* Formulário de Nova Tarefa */}
        <TodoForm onSubmit={adicionarTodo} />

        {/* Filtros */}
        <FilterTabs
          filtroAtivo={filtroAtivo}
          onFilterChange={setFiltroAtivo}
          contadores={contadores}
        />

        {/* Lista de Tarefas */}
        <TodoList
          todos={tarefasFiltradas}
          onToggle={alternarConclusao}
          onDelete={excluirTodo}
          estaAtrasada={estaAtrasada}
        />

        {/* Rodapé */}
        <footer className="mt-12 text-center text-sm text-gray-500 dark:text-gray-400">
          <p>
            Desenvolvido com ❤️ usando Next.js, TypeScript e Tailwind CSS
          </p>
        </footer>
      </div>
    </main>
  );
}
