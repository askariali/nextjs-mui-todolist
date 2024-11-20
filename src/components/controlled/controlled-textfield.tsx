"use client";

import { TextField, TextFieldProps } from "@mui/material";
import { Controller, FieldValues, Path, type Control } from "react-hook-form";

type ControlledTextFieldProps<T extends FieldValues> = {
  control: Control<T>;
  name: Path<T>;
} & Omit<TextFieldProps, "name" | "onChange" | "value">;

export default function ControlledTextField<T extends FieldValues>({
  control,
  name,
  ...rest
}: ControlledTextFieldProps<T>) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => <TextField {...rest} {...field} />}
    />
  );
}
