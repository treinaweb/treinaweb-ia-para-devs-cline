'use client';

import { Todo } from '@/types/todo';

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  isOverdue: boolean;
}

/**
 * Componente que representa um item individual de tarefa
 * 
 * @param {TodoItemProps} props - Propriedades do componente
 * @param {Todo} props.todo - Objeto da tarefa
 * @param {Function} props.onToggle - Callback para alternar status de conclusão
 * @param {Function} props.onDelete - Callback para excluir a tarefa
 * @param {boolean} props.isOverdue - Indica se a tarefa está atrasada
 * @returns {JSX.Element} Componente de item de tarefa
 */
export default function TodoItem({ todo, onToggle, onDelete, isOverdue }: TodoItemProps) {
  /**
   * Formata a data para exibição em português
   * 
   * @param {string} dateString - Data em formato ISO
   * @returns {string} Data formatada
   */
  const formatarData = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
  };

  return (
    <div 
      className={`
        bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border-l-4 
        ${isOverdue ? 'border-red-500 bg-red-50 dark:bg-red-900/20' : 'border-gray-300 dark:border-gray-600'}
        ${todo.concluida ? 'opacity-75' : ''}
        transition-all
      `}
    >
      <div className="flex items-start gap-3">
        <div className="shrink-0 pt-1">
          <input
            type="checkbox"
            checked={todo.concluida}
            onChange={() => onToggle(todo.id)}
            className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2 cursor-pointer"
            aria-label={`Marcar "${todo.titulo}" como ${todo.concluida ? 'pendente' : 'concluída'}`}
          />
        </div>

        <div className="grow min-w-0">
          <h3 
            className={`
              text-lg font-medium text-gray-900 dark:text-white
              ${todo.concluida ? 'line-through text-gray-500 dark:text-gray-400' : ''}
            `}
          >
            {todo.titulo}
          </h3>
          
          <div className="flex items-center gap-2 mt-1">
            <span className="text-sm text-gray-600 dark:text-gray-400">
              📅 {formatarData(todo.data)}
            </span>
            
            {isOverdue && (
              <span className="text-xs font-semibold text-red-600 dark:text-red-400 bg-red-100 dark:bg-red-900/50 px-2 py-1 rounded">
                ⚠️ Atrasada
              </span>
            )}
            
            {todo.concluida && (
              <span className="text-xs font-semibold text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900/50 px-2 py-1 rounded">
                ✓ Concluída
              </span>
            )}
          </div>
        </div>

        <button
          onClick={() => onDelete(todo.id)}
          className="shrink-0 text-red-600 hover:text-red-800 dark:text-red-400 dark:hover:text-red-300 focus:outline-none focus:ring-2 focus:ring-red-500 rounded p-1 transition-colors"
          aria-label={`Excluir tarefa "${todo.titulo}"`}
        >
          <svg 
            className="w-5 h-5" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" 
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
