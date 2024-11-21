"use client";

import { useTodoStore } from "@/stores/useTodoStore";
import { Paper, Stack, Typography } from "@mui/material";
import TodoItem from "./todo-item";
import React from "react";

export default function TodoList() {
  const todoList = useTodoStore((state) => state.todos);
  const toggleTodo = useTodoStore((state) => state.toggleTodoCompletion);
  const deleteTodo = useTodoStore((state) => state.deleteTodoById);
  return (
    <Paper className="p-4">
      {todoList.length ? (
        <Stack>
          {todoList.map((todo) => (
            <TodoItem
              key={todo.id}
              data={todo}
              onDelete={() => deleteTodo(todo.id)}
              onToggle={() => toggleTodo(todo.id)}
            />
          ))}
        </Stack>
      ) : (
        <Typography align="center" variant="body2" color="textDisabled">
          No To-Do yet
        </Typography>
      )}
    </Paper>
  );
}
