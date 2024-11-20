import { Todo } from "./todo";

export type TodoStore = {
    todos: Todo[];
    addTodo: (todo: Omit<Todo, "id" | "createdAt">) => void;
    deleteTodoById: (id: string) => void;
    updateTodoById: (id: string, todo: Partial<Todo>) => void;
    toggleTodoCompletion: (id: string) => void;
  };