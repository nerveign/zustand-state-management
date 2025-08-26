import { create } from 'zustand';
import { createJSONStorage } from 'zustand/middleware';
import { persist } from 'zustand/middleware';

export type Todo = {
  id: string;
  text: string;
  completed: boolean;
};

export type TodoState = {
  todo: Todo[];
  editingTodo: Todo | null;
};

export const useTodoStore = create<TodoState>()(
  persist(
    (set) => ({
      todo: [],
      editingTodo: null,
    }),
    {
      name: 'my-todo-app',
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export const addTodo = (text: string) => {
  const newTodo: Todo = {
    id: Date.now().toString(),
    text,
    completed: false,
  };

  useTodoStore.setState((state) => ({
    todo: [...state.todo, newTodo],
  }));
};

export const toggleTodo = (id: string) => {
  useTodoStore.setState((state) => {
    return {
      todo: state.todo.map((todo) => ({
        ...todo,
        completed: todo.id === id ? !todo.completed : todo.completed,
      })),
    };
  });
};

export const removeTodo = (id: string) => {
  useTodoStore.setState((state) => ({
    todo: state.todo.filter((todo) => todo.id !== id),
  }));
};

export const editTodo = (todo: Todo) => {
  useTodoStore.setState(() => ({
    editingTodo: todo,
  }));
};

export const updateTodo = (id: string, text: string) => {
  useTodoStore.setState((state) => ({
    todo: state.todo.map((todo) => ({
      ...todo,
      text: todo.id === id ? text : todo.text,
    })),
    editingTodo: null,
  }));
};
