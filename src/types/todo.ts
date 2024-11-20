import { z } from "zod";
import { todoDto } from "./dto/todo";

export type Todo = z.infer<typeof todoDto>;
export type NewTodo = Omit<Todo, "id" | "createdAt">;
