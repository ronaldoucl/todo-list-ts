import React, { useState } from 'react';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

interface TodoItemProps {
  todo: Todo;
  toggleComplete: (id: number) => void;
  deleteTodo: (id: number) => void;
  editTodo: (id: number, title: string) => void; // Añade esto
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, toggleComplete, deleteTodo, editTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(todo.title);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditTitle(todo.title); // Restablece el título al valor original si el usuario cancela
  };

  const handleSave = () => {
    editTodo(todo.id, editTitle);
    setIsEditing(false);
  };
  // <li style={{ textDecoration: todo.completed ? 'line-through' : 'none' }} className=''>
  return (
    <li style={{ textDecoration: todo.completed ? 'line-through' : 'none' }} className='lista'>

      {isEditing ? (
        <>
          <input type="text" value={editTitle} onChange={(e) => setEditTitle(e.target.value)} />
          <button onClick={handleSave} className='boton'>Guardar</button>
          <button onClick={handleCancel} className='boton boton-cancelar'>Cancelar</button>
        </>
      ) : (
        <>
          {todo.title}
          <button onClick={handleEdit} className='boton'>Editar</button>
          <button onClick={() => deleteTodo(todo.id)} className='boton boton-eliminar'>Eliminar</button>
        </>
      )}
    </li>
  );
};

export default TodoItem;
