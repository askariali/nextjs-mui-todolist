"use client";

import { TextField, TextFieldProps } from "@mui/material";
import { Controller, FieldValues, Path, type Control } from "react-hook-form";

type InputProps<T extends FieldValues> = {
  control: Control<T>;
  name: Path<T>;
} & Omit<TextFieldProps, "name" | "onChange" | "value">;

export default function Input<T extends FieldValues>(props: InputProps<T>) {
  const { control, name, ...rest } = props;
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => <TextField {...rest} {...field} />}
    />
  );
}
