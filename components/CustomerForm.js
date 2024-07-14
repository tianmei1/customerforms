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
    <div>
      <div id="header">
        <h5>Alma'</h5>
        <div className="header-title">
          <h1>Get An Assessment Of Your Immigration Case</h1>
        </div>
      </div>

      <div className="form-header">
        <h3>Want to understand your visa options? </h3>
        <h5>
          Submit the form below and our team of experienced attorneys will
          review your information and send a preliminary assessment of your case
          based on your goals.
        </h5>
      </div>
      <div id="Form">
        <JsonForms
          schema={formSchema}
          uischema={uiSchema}
          data={{}}
          renderers={materialRenderers}
          cells={materialCells}
          onChange={({ data }) => handleSubmit(data)}
        />
      </div>
    </div>
  );
};

export default CustomerForm;
