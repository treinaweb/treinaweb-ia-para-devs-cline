'use client';

import { Todo } from '@/types/todo';
import TodoItem from './TodoItem';

interface TodoListProps {
  todos: Todo[];
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  estaAtrasada: (todo: Todo) => boolean;
}

/**
 * Componente que exibe a lista de tarefas
 * 
 * @param {TodoListProps} props - Propriedades do componente
 * @param {Todo[]} props.todos - Array de tarefas a serem exibidas
 * @param {Function} props.onToggle - Callback para alternar status de conclusão
 * @param {Function} props.onDelete - Callback para excluir tarefa
 * @param {Function} props.estaAtrasada - Função para verificar se tarefa está atrasada
 * @returns {JSX.Element} Componente de lista
 */
export default function TodoList({ todos, onToggle, onDelete, estaAtrasada }: TodoListProps) {
  if (todos.length === 0) {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-12 text-center">
        <div className="text-6xl mb-4">📝</div>
        <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-2">
          Nenhuma tarefa encontrada
        </h3>
        <p className="text-gray-500 dark:text-gray-400">
          Adicione uma nova tarefa para começar!
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
          isOverdue={estaAtrasada(todo)}
        />
      ))}
    </div>
  );
}
