import { editTodo, removeTodo, useTodoStore } from './store/todo-store';
import './App.css';

export function TodoList() {
  const todos = useTodoStore((state) => state.todo);

  return (
    <>
      <div>
        <ul className="todo-ul">
          {todos.map((todo) => (
            <li className="todo-li" key={todo.id}>
              {todo.text}
              <div className="btn-action-wrapper">
                <button onClick={() => editTodo(todo)}>Edit</button>
                <button onClick={() => removeTodo(todo.id)}>Remove</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
