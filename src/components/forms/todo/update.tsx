"use client";

import { IconButton, InputAdornment } from "@mui/material";
import ControlledTextField from "@/components/controlled/controlled-textfield";
import AddIcon from "@mui/icons-material/Add";
import { UseFormReturn } from "react-hook-form";
import { Todo } from "@/types/todo";

export default function UpdateTodo({
  form,
  onSubmit,
}: {
  form: UseFormReturn<Todo>;
  onSubmit: (data: Todo) => void;
}) {
  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
      <ControlledTextField
        name="title"
        control={form.control}
        placeholder="Write your todo..."
        fullWidth
        slotProps={{
          input: {
            endAdornment: (
              <InputAdornment position="end">
                <IconButton type="submit">
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
