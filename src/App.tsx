import React, { useState, useEffect } from 'react';
import './App.css';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}



const App: React.FC = () => {
  /*const [todos, setTodos] = useState<Todo[]>([
    { id: 1, title: 'Aprender React', completed: false },
    { id: 2, title: 'Aprender TypeScript', completed: false },
  ]);*/
  const [todos, setTodos] = useState<Todo[]>(() => {
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : [];
  });


  const addTodo = (title: string) => {
    const newTodo: Todo = { id: Date.now(), title, completed: false };
    setTodos([...todos, newTodo]);
  };

  const toggleComplete = (id: number) => {
    setTodos(
      todos.map(todo => 
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const editTodo = (id: number, title: string) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, title } : todo));
  };

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);
  
  

  return (
    <div className="App">
      <h1>Lista de Tareas</h1>
      <AddTodo addTodo={addTodo} />
      <TodoList todos={todos} toggleComplete={toggleComplete} deleteTodo={deleteTodo} editTodo={editTodo} />
    </div>
  );
}

export default App;


