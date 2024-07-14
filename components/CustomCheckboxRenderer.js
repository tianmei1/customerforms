import React from "react";
import { rankWith, isArrayControl } from "@jsonforms/core";
import { withJsonFormsControlProps } from "@jsonforms/react";
import {
  FormControl,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@mui/material";

const CustomCheckboxRenderer = ({
  data,
  handleChange,
  path,
  label,
  options = { enum: [] },
}) => (
  <FormControl component="fieldset" margin="normal">
    <label>{label}</label>
    <FormGroup>
      {options.enum.map((option, index) => (
        <FormControlLabel
          control={
            <Checkbox
              checked={data.includes(option)}
              onChange={(event) => {
                const newData = event.target.checked
                  ? [...data, option]
                  : data.filter((item) => item !== option);
                handleChange(path, newData);
              }}
            />
          }
          label={option}
          key={index}
        />
      ))}
    </FormGroup>
  </FormControl>
);

export const customCheckboxControlTester = rankWith(
  3, // Adjust rank as necessary
  isArrayControl
);

export default withJsonFormsControlProps(CustomCheckboxRenderer);
