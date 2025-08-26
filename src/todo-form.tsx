import { useEffect, useState } from 'react';
import { addTodo, updateTodo, useTodoStore } from './store/todo-store';

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
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleChange} value={text} placeholder="Activity name" />
      <button type="submit">{editingTodo ? 'Update' : 'Add'}</button>
    </form>
  );
}
