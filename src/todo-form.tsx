import { useEffect, useState } from 'react';
import { addTodo, updateTodo, useTodoStore } from './store/todo-store';
import { Button } from './components/ui/button';
import { Input } from './components/ui/input';

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
    <div>
      <h2 className="text-center my-4 font-medium text-xl text-white">Todo List</h2>
      <form className="flex gap-3" onSubmit={handleSubmit}>
        <Input className="text-white bg-bg-secondary" type="text" value={text} placeholder="Type acticity" onChange={handleChange} required />
        <Button type="submit">{editingTodo ? 'Update' : 'Add'}</Button>
      </form>
    </div>
  );
}
