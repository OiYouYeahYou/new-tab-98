import { useState } from 'react';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export function useTodos() {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: 'Review project documentation', completed: false },
    { id: 2, text: 'Team meeting at 2 PM', completed: true },
    { id: 3, text: 'Update dependencies', completed: false }
  ]);

  const addTodo = (text: string) => {
    if (!text.trim()) return;
    setTodos([...todos, { id: Date.now(), text, completed: false }]);
  };

  const toggleTodo = (id: number) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const removeTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return { todos, addTodo, toggleTodo, removeTodo };
}