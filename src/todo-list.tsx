import { editTodo, removeTodo, useTodoStore } from './store/todo-store';

export function TodoList() {
  const todos = useTodoStore((state) => state.todo);

  return (
    <>
      <div>
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              {todo.text} <button onClick={() => removeTodo(todo.id)}>Remove</button>
              <button onClick={() => editTodo(todo)}>Edit</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
