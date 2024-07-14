import React from "react";
import { rankWith, isEnumControl } from "@jsonforms/core";
import { withJsonFormsControlProps } from "@jsonforms/react";
import { Autocomplete, TextField } from "@mui/material";

const countries = [
  "Afghanistan",
  "Aland Islands",
  "Albania",
  "Algeria", // Add all countries here
  // ...
];

const CustomCountryRenderer = ({
  data,
  handleChange,
  path,
  label,
  required,
}) => (
  <Autocomplete
    options={countries}
    value={data || ""}
    onChange={(event, value) => handleChange(path, value)}
    renderInput={(params) => (
      <TextField
        {...params}
        label={label}
        variant="outlined"
        required={required}
        fullWidth
        margin="normal"
      />
    )}
  />
);

export const customCountryControlTester = rankWith(
  3, // Adjust rank as necessary
  isEnumControl
);

export default withJsonFormsControlProps(CustomCountryRenderer);
