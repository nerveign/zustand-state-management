import { editTodo, removeTodo, toggleTodo, useTodoStore } from './store/todo-store';
import { Button } from './components/ui/button';
import { Checkbox } from './components/ui/checkbox';

export function TodoList() {
  const todos = useTodoStore((state) => state.todo);
  console.log('Render bang');

  return (
    <>
      <div className="mt-6">
        <ul>
          {todos.map((todo) => (
            <li className="flex justify-between my-4" key={todo.id}>
              <div className="flex gap-2 items-center">
                <Checkbox checked={todo.completed} onCheckedChange={() => toggleTodo(todo.id)} />
                <span className="text-sm text-gray-100 font-medium block">{todo.text}</span>
              </div>
              <div className="flex gap-2">
                <Button size={'sm'} variant={'outline'} onClick={() => editTodo(todo)}>
                  Edit
                </Button>
                <Button size={'sm'} variant={'outline'} onClick={() => removeTodo(todo.id)}>
                  Remove
                </Button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
