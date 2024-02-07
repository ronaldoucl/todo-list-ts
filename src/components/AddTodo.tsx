import React, { useState } from 'react';

interface AddTodoProps {
  addTodo: (title: string) => void;
}

const AddTodo: React.FC<AddTodoProps> = ({ addTodo }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return; // Evita añadir tareas vacías
    addTodo(title);
    setTitle(''); // Limpia el campo después de añadir la tarea
  };

  return (
    <form onSubmit={handleSubmit} className="add-todo-form">
      <input
        type="text"
        placeholder="Añadir nueva tarea"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit" className="add-todo-button">Añadir</button>
    </form>
  );
}

export default AddTodo;
