"use client";

import { IconButton, InputAdornment, Paper } from "@mui/material";
import { useNewTodo } from "./hooks";
import ControlledTextField from "@/components/controlled/controlled-textfield";
import AddIcon from "@mui/icons-material/Add";

export default function CreateNewTodo() {
  const { form, onSubmit } = useNewTodo();
  return (
    <Paper className="p-4">
      <form onSubmit={form.handleSubmit(onSubmit)}>
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
    </Paper>
  );
}
