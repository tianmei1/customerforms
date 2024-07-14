import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CustomerForm from "../CustomerForm";

describe("CustomerForm", () => {
  it("renders the form", () => {
    render(<CustomerForm />);
    expect(screen.getByLabelText(/first name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/last name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
  });

  it("submits the form", () => {
    render(<CustomerForm />);
    fireEvent.change(screen.getByLabelText(/first name/i), {
      target: { value: "John" },
    });
    fireEvent.change(screen.getByLabelText(/last name/i), {
      target: { value: "Doe" },
    });
    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: "john.doe@example.com" },
    });

    fireEvent.click(screen.getByText(/submit/i));

    expect(
      screen.getByText(/form submitted successfully!/i)
    ).toBeInTheDocument();
  });
});
