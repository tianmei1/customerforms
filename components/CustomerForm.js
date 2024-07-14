"use client";

import React, { useEffect, useState } from "react";
import { JsonForms } from "@jsonforms/react";
import {
  materialRenderers,
  materialCells,
} from "@jsonforms/material-renderers";
import { formSchema, uiSchema } from "./formSchema";
import { useDispatch } from "react-redux";
import { submitForm } from "../redux/actions";
import CustomTextRenderer, {
  customTextControlTester,
} from "./CustomTextRenderer";
// import CustomCheckboxRenderer, {
//   customCheckboxControlTester,
// } from "./CustomCheckboxRenderer";
import CustomCountryRenderer, {
  customCountryControlTester,
} from "./CustomCountryRenderer";

const renderers = [
  ...materialRenderers,
  { tester: customTextControlTester, renderer: CustomTextRenderer },
  // { tester: customCheckboxControlTester, renderer: CustomCheckboxRenderer },
  { tester: customCountryControlTester, renderer: CustomCountryRenderer },
];

const CustomerForm = () => {
  const dispatch = useDispatch();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleSubmit = (data) => {
    dispatch(submitForm(data));
  };

  if (!isClient) {
    return null; // Render nothing on the server side
  }

  return (
    <JsonForms
      schema={formSchema}
      uischema={uiSchema}
      data={{}}
      renderers={renderers}
      cells={materialCells}
      onChange={({ data }) => handleSubmit(data)}
    />
  );
};

export default CustomerForm;
