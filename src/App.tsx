import { ModeToggle } from './components/ui/mode-toggle';
import { TodoForm } from './todo-form';
import { TodoList } from './todo-list';

function App() {
  return (
    <div className="flex justify-center items-center h-screen ">
      <div className="w-96">
        <div className="absolute top-4 right-4">
          <ModeToggle />
        </div>
        <TodoForm />
        <TodoList />
      </div>
    </div>
  );
}

export default App;
