'use client';

import { FiltroTodo } from '@/types/todo';

interface FilterTabsProps {
  filtroAtivo: FiltroTodo;
  onFilterChange: (filtro: FiltroTodo) => void;
  contadores: {
    todas: number;
    pendentes: number;
    concluidas: number;
  };
}

/**
 * Componente de abas para filtrar tarefas por status
 * 
 * @param {FilterTabsProps} props - Propriedades do componente
 * @param {FiltroTodo} props.filtroAtivo - Filtro atualmente ativo
 * @param {Function} props.onFilterChange - Callback para alterar o filtro
 * @param {Object} props.contadores - Contadores de tarefas por categoria
 * @returns {JSX.Element} Componente de filtros
 */
export default function FilterTabs({ filtroAtivo, onFilterChange, contadores }: FilterTabsProps) {
  const tabs = [
    { id: FiltroTodo.TODAS, label: 'Todas', count: contadores.todas },
    { id: FiltroTodo.PENDENTES, label: 'Pendentes', count: contadores.pendentes },
    { id: FiltroTodo.CONCLUIDAS, label: 'Concluídas', count: contadores.concluidas }
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-1 mb-6">
      <div className="flex gap-1">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onFilterChange(tab.id)}
            className={`
              flex-1 py-3 px-4 rounded-md font-semibold transition-all
              focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
              ${filtroAtivo === tab.id
                ? 'bg-blue-600 text-white shadow-md'
                : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }
            `}
            aria-label={`Filtrar por tarefas ${tab.label.toLowerCase()}`}
            aria-pressed={filtroAtivo === tab.id}
          >
            <span className="block text-sm sm:text-base">{tab.label}</span>
            <span 
              className={`
                block text-xs mt-1
                ${filtroAtivo === tab.id ? 'text-blue-100' : 'text-gray-500 dark:text-gray-400'}
              `}
            >
              {tab.count} {tab.count === 1 ? 'tarefa' : 'tarefas'}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
