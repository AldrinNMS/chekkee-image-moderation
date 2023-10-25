import { Input } from "@material-tailwind/react";
import { TextField } from "@mui/material";
import React from "react";

export const InputComponent = (props) => {
  const {
    size = "lg",
    label = "Please enter the picture URL",
    type = "text",
    variant = "standard",
    value,
    onChange,
  } = props;
  return (
    <Input
      size={size}
      label={label}
      type={type}
      variant={variant}
      value={value}
      onChange={onChange}
      labelProps={{ className: "font-body text-input" }}
    />
  );
};

export const TextFieldComponent = (props) => {
  const {
    label = "Please enter the picture URL",
    type = "text",
    variant = "outlined",
    value,
    onChange,
  } = props;
  return (
    <TextField
      label={label}
      variant={variant}
      type={type}
      value={value}
      onChange={onChange}
      color="warning"
      fullWidth
      sx={{
        ".MuiOutlinedInput-root": {
          borderRadius: "100px",
          fontFamily: 'DM Sans, sans-serif',
          fontWeight: 300,
        },
        ".MuiInputLabel-root": {
          fontFamily: 'DM Sans, sans-serif',
          color: "#A4A4A4",
          fontWeight: 300,
        }
      }}
    />
  );
};
