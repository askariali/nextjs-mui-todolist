"use client";

import { IconButton, InputAdornment } from "@mui/material";
import Input from "@/components/input";
import AddIcon from "@mui/icons-material/Add";
import { UseFormReturn } from "react-hook-form";
import { Todo } from "@/types/todo";

type UpdateTodoProps = {
  form: UseFormReturn<Todo>;
  onSubmit: (data: Todo) => void;
};

export default function UpdateTodo({ form, onSubmit }: UpdateTodoProps) {
  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
      <Input
        name="title"
        control={form.control}
        placeholder="Write your todo..."
        fullWidth
        slotProps={{
          input: {
            endAdornment: (
              <InputAdornment position="end">
                <IconButton type="submit" data-testid="submit-todo-button">
                  <AddIcon />
                </IconButton>
              </InputAdornment>
            ),
          },
        }}
      />
    </form>
  );
}
