import { NewTodo, Todo } from "@/types/todo";
import { create } from "zustand";
import { v4 as uuidv4 } from "uuid";
import { TodoStore } from "@/types/stores";

// Helpers
const createNewTodo = (todo: NewTodo): Todo => {
  return {
    ...todo,
    id: uuidv4(),
    createdAt: new Date().toISOString(),
  };
};

const updateTodoInList = (
  todos: Todo[],
  id: string,
  updates: Partial<Todo>
): Todo[] => {
  return todos.map((todo) => (todo.id === id ? { ...todo, ...updates } : todo));
};

const toggleTodoCompletion = (todos: Todo[], id: string) => {
  return todos.map((todo) =>
    todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
  );
};

// Store
export const useTodoStore = create<TodoStore>((set) => ({
  todos: [],
  addTodo: (todo) =>
    set((state) => ({
      todos: [...state.todos, createNewTodo(todo)],
    })),
  deleteTodo: (id) =>
    set((state) => ({ todos: state.todos.filter((todo) => todo.id !== id) })),
  updateTodo: (id, updates) =>
    set((state) => ({
      todos: updateTodoInList(state.todos, id, updates),
    })),
  toggleTodoCompletion: (id) =>
    set((state) => ({
      todos: toggleTodoCompletion(state.todos, id),
    })),
}));
