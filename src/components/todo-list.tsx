"use client";

import { useTodoStore } from "@/stores/useTodoStore";
import { Paper } from "@mui/material";

export default function TodoList() {
  const todoList = useTodoStore(state => state.todos)
  return (
    <Paper className="p-4">
      <div>{JSON.stringify(todoList)}</div>
    </Paper>
  );
}
