"use client";
import { useTodoStore } from "@/stores/useTodoStore";
import { type Todo } from "@/types/todo";
import { Delete, Edit } from "@mui/icons-material";
import { Checkbox, IconButton, Typography } from "@mui/material";
import clsx from "clsx";
import { useState } from "react";
import { useUpdateTodo } from "./forms/todo/hooks";
import UpdateTodo from "./forms/todo/update";

export default function TodoItem({ data }: { data: Todo }) {
  const toggleTodo = useTodoStore((state) => state.toggleTodoCompletion);
  const [editing, setEditing] = useState(false);
  const { form, onSubmit: formSubmit } = useUpdateTodo();

  function onEdit() {
    form.reset(data);
    setEditing(true);
  }

  function onSubmit(data: Todo) {
    formSubmit(data);
    setEditing(false);
  }
  return (
    <div className="flex items-center justify-between border-b last-of-type:border-b-0 py-2">
      {editing ? (
        <UpdateTodo form={form} onSubmit={(data) => onSubmit(data)} />
      ) : (
        <div className="flex items-center">
          <Checkbox
            checked={data.isCompleted}
            onChange={() => toggleTodo(data.id)}
          />
          <Typography
            variant="h6"
            className={clsx({ "line-through": data.isCompleted })}
            color={clsx({ textDisabled: data.isCompleted })}
          >
            {data.title}
          </Typography>
        </div>
      )}
      {editing ? null : (
        <div className="flex items-center gap-2">
          <IconButton onClick={onEdit}>
            <Edit />
          </IconButton>
          <IconButton color="error">
            <Delete />
          </IconButton>
        </div>
      )}
    </div>
  );
}
