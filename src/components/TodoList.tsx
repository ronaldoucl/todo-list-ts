import React from 'react';
import TodoItem from './TodoItem';



interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

interface TodoListProps {
  todos: Todo[];
  toggleComplete: (id: number) => void;
  deleteTodo: (id: number) => void;
  editTodo: (id: number, title: string) => void; // Asegúrate de incluir esto
}

const TodoList: React.FC<TodoListProps> = ({ todos, toggleComplete, deleteTodo, editTodo }) => {
  return (
    <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleComplete={toggleComplete}
          deleteTodo={deleteTodo}
          editTodo={editTodo} // Asegúrate de pasar editTodo aquí
        />
      ))}
    </ul>
  );
}

export default TodoList;

