'use client';

import { useState, FormEvent } from 'react';

interface TodoFormProps {
  onSubmit: (titulo: string, data: string) => void;
}

/**
 * Componente de formulário para adicionar novas tarefas
 * 
 * @param {TodoFormProps} props - Propriedades do componente
 * @param {Function} props.onSubmit - Callback executado ao submeter o formulário
 * @returns {JSX.Element} Componente de formulário
 */
export default function TodoForm({ onSubmit }: TodoFormProps) {
  const [titulo, setTitulo] = useState('');
  const [data, setData] = useState('');

  /**
   * Manipula o envio do formulário
   * 
   * @param {FormEvent<HTMLFormElement>} e - Evento de submit do formulário
   */
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (titulo.trim() && data) {
      onSubmit(titulo.trim(), data);
      setTitulo('');
      setData('');
    }
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mb-6"
    >
      <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
        Nova Tarefa
      </h2>
      
      <div className="space-y-4">
        <div>
          <label 
            htmlFor="titulo" 
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
          >
            Título da Tarefa
          </label>
          <input
            type="text"
            id="titulo"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            placeholder="Digite o título da tarefa"
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
            required
          />
        </div>

        <div>
          <label 
            htmlFor="data" 
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
          >
            Data
          </label>
          <input
            type="date"
            id="data"
            value={data}
            onChange={(e) => setData(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Adicionar Tarefa
        </button>
      </div>
    </form>
  );
}
