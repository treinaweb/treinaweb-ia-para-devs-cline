/**
 * Interface que define a estrutura de uma tarefa (Todo)
 * 
 * @property {string} id - Identificador único da tarefa
 * @property {string} titulo - Título/descrição da tarefa
 * @property {string} data - Data da tarefa no formato ISO string
 * @property {boolean} concluida - Status de conclusão da tarefa
 */
export interface Todo {
  id: string;
  titulo: string;
  data: string;
  concluida: boolean;
}

/**
 * Enum que define os tipos de filtro disponíveis para visualização das tarefas
 */
export enum FiltroTodo {
  TODAS = 'todas',
  PENDENTES = 'pendentes',
  CONCLUIDAS = 'concluidas'
}
