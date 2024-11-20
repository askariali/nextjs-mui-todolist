import { type Todo } from "@/types/todo";
import { Delete } from "@mui/icons-material";
import { Checkbox, IconButton, Typography } from "@mui/material";
import clsx from "clsx";

export default function TodoItem({ data }: { data: Todo }) {
  return (
    <div className="flex items-center justify-between border-b last-of-type:border-b-0 py-2">
      <div className="flex items-center">
        <Checkbox />
        <Typography
          variant="h6"
          className={clsx({ "line-through": data.isCompleted })}
          color={clsx({ textDisabled: data.isCompleted })}
        >
          {data.title}
        </Typography>
      </div>
      <IconButton color="error">
        <Delete />
      </IconButton>
    </div>
  );
}
