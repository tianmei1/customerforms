# Customer Information Form

This project is a customer information form built using Next.js, Material-UI, and JSONForms. It includes functionality for submitting customer information, viewing submitted leads, and managing lead statuses. Additionally, it has a basic authentication mechanism to restrict access to the leads list.

## Features

- Customer Information Form
- Leads Management
- Authentication
- Local Storage for Persistence
- Responsive Design

## Install dependencies:

```bash
npm install --legacy-peer-deps
```

### Run server with the following command

```bash
npm run dev
```

Open http://localhost:3000 with your browser to see the result.

### Authentication

The application includes a basic authentication mechanism:

```bash
Username: admin
Password: password
```

### Test:

```bash
npm Test
```

### Design

#### Components

CustomerForm: Handles the customer information form using JSONForms.

LeadsTable: Displays the list of leads in a table format with options to search and update lead statuses.

LoginModal: A modal dialog for user login.

### Pages

index.js: The homepage with the customer information form and a button to view leads.

leads.js: The leads management page, accessible only after successful login.

login.js: A login page for authentication.

### API

[...nextauth].js: Handles authentication using NextAuth.js.
Styling
The project uses Material-UI for UI components and styling.
