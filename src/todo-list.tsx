import { editTodo, removeTodo, useTodoStore } from './store/todo-store';
import { Button } from './components/ui/button';

export function TodoList() {
  const todos = useTodoStore((state) => state.todo);

  return (
    <>
      <div className="mt-6">
        <ul>
          {todos.map((todo) => (
            <li className="flex justify-between my-4" key={todo.id}>
              <span className="text-sm text-gray-100 font-medium">{todo.text}</span>
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
