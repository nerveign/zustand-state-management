import { TodoForm } from './todo-form';
import { TodoList } from './todo-list';
import './App.css';

function App() {
  return (
    <div className="flex justify-center h-screen items-center bg-bg-primary">
      <div className="w-96">
        <TodoForm />
        <TodoList />
      </div>
    </div>
  );
}

export default App;
