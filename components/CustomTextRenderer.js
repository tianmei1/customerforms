import React from "react";
import { rankWith, isStringControl } from "@jsonforms/core";
import { withJsonFormsControlProps } from "@jsonforms/react";
import { TextField } from "@mui/material";

const CustomTextRenderer = ({
  data,
  handleChange,
  path,
  label,
  required,
  description,
  errors,
}) => (
  <TextField
    label={label}
    value={data || ""}
    onChange={(event) => handleChange(path, event.target.value)}
    variant="outlined"
    required={required}
    fullWidth
    margin="normal"
    helperText={description}
    error={!!errors}
  />
);

export const customTextControlTester = rankWith(
  2, // Adjust rank as necessary
  isStringControl
);

export default withJsonFormsControlProps(CustomTextRenderer);
