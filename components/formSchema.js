export const formSchema = {
  type: "object",
  properties: {
    firstName: { type: "string", title: "First Name" },
    lastName: { type: "string", title: "Last Name" },
    email: { type: "string", format: "email", title: "Email" },
    country: { type: "string", title: "Country of Citizenship" },
    linkedin: {
      type: "string",
      format: "uri",
      title: "LinkedIn / Personal Website URL",
    },
    visaCategory: {
      type: "array",
      title: "Visa categories of interest?",
      items: {
        type: "string",
        enum: ["O-1", "EB-1A", "EB-2 NIW", "I don't know"],
      },
      uniqueItems: true,
    },
    helpText: { type: "string", title: "How can we help you?" },
  },
  required: ["firstName", "lastName", "email", "country"],
};

export const uiSchema = {
  type: "VerticalLayout",
  elements: [
    { type: "Control", scope: "#/properties/firstName" },
    { type: "Control", scope: "#/properties/lastName" },
    { type: "Control", scope: "#/properties/email" },
    { type: "Control", scope: "#/properties/country" },
    { type: "Control", scope: "#/properties/linkedin" },
    {
      type: "Control",
      scope: "#/properties/visaCategory",
      options: {
        format: "checkbox",
      },
    },
    {
      type: "Control",
      scope: "#/properties/helpText",
      options: {
        multi: true,
      },
    },
  ],
};
