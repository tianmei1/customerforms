"use client";

import React, { useEffect, useState } from "react";
import { JsonForms } from "@jsonforms/react";
import {
  materialRenderers,
  materialCells,
} from "@jsonforms/material-renderers";
import { formSchema, uiSchema } from "./formSchema";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import CustomTextRenderer, {
  customTextControlTester,
} from "./CustomTextRenderer";
import CustomCountryRenderer, {
  customCountryControlTester,
} from "./CustomCountryRenderer";
import { Alert } from "@mui/material";

const renderers = [
  ...materialRenderers,
  { tester: customTextControlTester, renderer: CustomTextRenderer },
  { tester: customCountryControlTester, renderer: CustomCountryRenderer },
];

const CustomerForm = () => {
  const [isClient, setIsClient] = useState(false);
  const [formData, setFormData] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleSubmit = () => {
    const storedLeads = JSON.parse(localStorage.getItem("leads")) || [];
    const newLead = {
      ...formData,
      visaCategory: formData.visaCategory || [], // Ensure visaCategory is an array
      status: "PENDING",
      submitted: new Date().toLocaleString(),
    };
    storedLeads.push(newLead);
    localStorage.setItem("leads", JSON.stringify(storedLeads));
    console.log("Form Submitted", newLead);

    // Clear form and show success message
    setFormData({});
    setSuccessMessage("Form submitted successfully!");
    setTimeout(() => setSuccessMessage(""), 3000); // Hide message after 3 seconds
  };

  return (
    isClient && (
      <Box component="form" noValidate autoComplete="off">
        {successMessage && (
          <Alert severity="success" style={{ marginBottom: "20px" }}>
            {successMessage}
          </Alert>
        )}
        <JsonForms
          schema={formSchema}
          uischema={uiSchema}
          data={formData}
          renderers={renderers}
          cells={materialCells}
          onChange={({ data }) => setFormData(data)}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          style={{ marginTop: "20px" }}
        >
          Submit
        </Button>
      </Box>
    )
  );
};

export default CustomerForm;
