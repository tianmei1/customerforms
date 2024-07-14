export const formSchema = {
  type: "object",
  properties: {
    firstName: { type: "string" },
    lastName: { type: "string" },
    email: { type: "string", format: "email" },
    country: { type: "string" },
    linkedin: { type: "string", format: "uri" },
    visaCategory: { type: "string", enum: ["O-1", "EB-1", "EB-2 NIW"] },
    helpText: { type: "string" },
    resume: { type: "string", format: "data-url" },
  },
  // required: ['firstName', 'lastName', 'email', 'country']
};

export const uiSchema = {
  type: "VerticalLayout",
  elements: [
    { type: "Control", scope: "#/properties/firstName" },
    { type: "Control", scope: "#/properties/lastName" },
    { type: "Control", scope: "#/properties/email" },
    { type: "Control", scope: "#/properties/country" },
    { type: "Control", scope: "#/properties/linkedin" },
    { type: "Control", scope: "#/properties/visaCategory" },
    { type: "Control", scope: "#/properties/helpText" },
    { type: "Control", scope: "#/properties/resume" },
  ],
};
