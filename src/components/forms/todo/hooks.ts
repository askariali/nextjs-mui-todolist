"use client";
import { useTodoStore } from "@/stores/useTodoStore";
import { NewTodo, Todo } from "@/types/todo";
import { useForm } from "react-hook-form";

export function useNewTodo() {
  const addTodo = useTodoStore((state) => state.addTodo);
  const form = useForm<NewTodo>({
    defaultValues: {
      title: "",
      isCompleted: false,
    },
  });

  const onSubmit = (data: NewTodo) => {
    addTodo(data);
    form.reset()
  };

  return { form, onSubmit };
}

export function useUpdateTodo() {
  const updateTodo = useTodoStore((state) => state.updateTodoById);
  const form = useForm<Todo>({
    defaultValues: {
      title: "",
      isCompleted: false,
      createdAt: "",
      id: "",
    },
  });

  const onSubmit = (data: Todo) => {
    updateTodo(data.id, data);
  };

  return { form, onSubmit };
}

export function useDeleteTodo() {
  const deleteTodo = useTodoStore((state) => state.deleteTodoById);

  const onDelete = (id: string) => {
    deleteTodo(id);
  };

  return { onDelete };
}

export function useToggleTodo() {
  const toggleTodo = useTodoStore((state) => state.toggleTodoCompletion);

  const onToggle = (id: string) => {
    toggleTodo(id);
  };

  return { onToggle };
}
