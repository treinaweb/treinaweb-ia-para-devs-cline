import { useState, useEffect } from 'react';
import { Todo, FiltroTodo } from '@/types/todo';

const STORAGE_KEY = 'todos';

/**
 * Hook customizado para gerenciar o estado e as operações das tarefas (Todos)
 * 
 * @returns {Object} Objeto contendo o estado e funções para manipular tarefas
 * @returns {Todo[]} todos - Array de todas as tarefas
 * @returns {Function} adicionarTodo - Função para adicionar uma nova tarefa
 * @returns {Function} excluirTodo - Função para excluir uma tarefa
 * @returns {Function} alternarConclusao - Função para marcar/desmarcar tarefa como concluída
 * @returns {Function} filtrarTodos - Função para filtrar tarefas por status
 */
export function useTodos() {
  const [todos, setTodos] = useState<Todo[]>([]);

  // Carregar tarefas do LocalStorage ao montar o componente
  useEffect(() => {
    const todosSalvos = localStorage.getItem(STORAGE_KEY);
    if (todosSalvos) {
      try {
        setTodos(JSON.parse(todosSalvos));
      } catch (error) {
        console.error('Erro ao carregar tarefas do LocalStorage:', error);
      }
    }
  }, []);

  // Salvar tarefas no LocalStorage sempre que houver mudanças
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  /**
   * Adiciona uma nova tarefa à lista
   * 
   * @param {string} titulo - Título da tarefa
   * @param {string} data - Data da tarefa no formato ISO
   */
  const adicionarTodo = (titulo: string, data: string) => {
    const novoTodo: Todo = {
      id: crypto.randomUUID(),
      titulo,
      data,
      concluida: false
    };
    setTodos(prev => [...prev, novoTodo]);
  };

  /**
   * Remove uma tarefa da lista
   * 
   * @param {string} id - ID da tarefa a ser removida
   */
  const excluirTodo = (id: string) => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  };

  /**
   * Alterna o status de conclusão de uma tarefa
   * 
   * @param {string} id - ID da tarefa
   */
  const alternarConclusao = (id: string) => {
    setTodos(prev => prev.map(todo =>
      todo.id === id ? { ...todo, concluida: !todo.concluida } : todo
    ));
  };

  /**
   * Filtra as tarefas com base no tipo de filtro
   * 
   * @param {FiltroTodo} filtro - Tipo de filtro a ser aplicado
   * @returns {Todo[]} Array de tarefas filtradas
   */
  const filtrarTodos = (filtro: FiltroTodo): Todo[] => {
    switch (filtro) {
      case FiltroTodo.PENDENTES:
        return todos.filter(todo => !todo.concluida);
      case FiltroTodo.CONCLUIDAS:
        return todos.filter(todo => todo.concluida);
      default:
        return todos;
    }
  };

  /**
   * Verifica se uma tarefa está atrasada
   * 
   * @param {Todo} todo - Tarefa a ser verificada
   * @returns {boolean} true se a tarefa está atrasada, false caso contrário
   */
  const estaAtrasada = (todo: Todo): boolean => {
    if (todo.concluida) return false;
    const hoje = new Date();
    hoje.setHours(0, 0, 0, 0);
    const dataTodo = new Date(todo.data);
    dataTodo.setHours(0, 0, 0, 0);
    return dataTodo < hoje;
  };

  /**
   * Ordena tarefas por data (ascendente)
   * 
   * @param {Todo[]} tarefas - Array de tarefas a ser ordenado
   * @returns {Todo[]} Array de tarefas ordenadas
   */
  const ordenarPorData = (tarefas: Todo[]): Todo[] => {
    return [...tarefas].sort((a, b) => 
      new Date(a.data).getTime() - new Date(b.data).getTime()
    );
  };

  return {
    todos,
    adicionarTodo,
    excluirTodo,
    alternarConclusao,
    filtrarTodos,
    estaAtrasada,
    ordenarPorData
  };
}
