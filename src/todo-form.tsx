import { useEffect, useState } from 'react';
import { addTodo, updateTodo, useTodoStore } from './store/todo-store';
import './App.css';

export function TodoForm() {
  const [text, setText] = useState('');
  const editingTodo = useTodoStore((state) => state.editingTodo);

  useEffect(() => {
    if (editingTodo) {
      setText(editingTodo.text);
    }
  }, [editingTodo]);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setText(event.target.value);
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (editingTodo) {
      updateTodo(editingTodo.id, text);
    } else {
      addTodo(text);
    }

    setText('');
  }

  return (
    <>
      <form className="todo-form" onSubmit={handleSubmit}>
        <input type="text" value={text} placeholder="Add acticity" className="todo-input" onChange={handleChange} required />
        <button type="submit">{editingTodo ? 'Update' : 'Add'}</button>
      </form>
    </>
  );
}
