import React, { useState } from 'react';
import { Calendar, Check, Plus, X } from 'lucide-react';
import { TiltCard } from './TiltCard';
import { useTodos } from '../hooks/useTodos';

export function TodoList() {
  const { todos, addTodo, toggleTodo, removeTodo } = useTodos();
  const [newTodo, setNewTodo] = useState('');

  const handleAddTodo = () => {
    addTodo(newTodo);
    setNewTodo('');
  };

  return (
    <TiltCard title="Todo List" icon={<Calendar />}>
      <div className="space-y-2">
        <div className="flex gap-2">
          <input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleAddTodo()}
            placeholder="Add new todo..."
            className="win98-input flex-1"
          />
          <button onClick={handleAddTodo} className="win98-action-button">
            <Plus className="w-4 h-4" />
          </button>
        </div>
        {todos.map(todo => (
          <div key={todo.id} className="win98-list-item flex items-center gap-2">
            <button
              onClick={() => toggleTodo(todo.id)}
              className={`win98-action-button w-5 h-5 p-0 flex items-center justify-center`}
            >
              {todo.completed && <Check className="w-3 h-3" />}
            </button>
            <span className={todo.completed ? 'line-through text-gray-600' : ''}>
              {todo.text}
            </span>
            <button
              onClick={() => removeTodo(todo.id)}
              className="win98-action-button ml-auto p-1"
            >
              <X className="w-3 h-3" />
            </button>
          </div>
        ))}
      </div>
    </TiltCard>
  );
}