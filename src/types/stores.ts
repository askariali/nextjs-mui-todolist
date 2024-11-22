import { Todo } from "./todo";

export type TodoStore = {
    todos: Todo[];
    addTodo: (todo: Omit<Todo, "id" | "createdAt">) => void;
    deleteTodo: (id: string) => void;
    updateTodo: (id: string, todo: Partial<Todo>) => void;
    toggleTodoCompletion: (id: string) => void;
  };