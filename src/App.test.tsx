import React from "react";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";

import App from "../src/App";
import { act } from "react-dom/test-utils";

describe("Testing all pages", () => {
  test("sending req to server and rendering loading", () => {
    render(<App />);
    const idBtn = screen.getByText(/Search By ID/i);
    const impEl = screen.getByPlaceholderText("Enter Asteroid ID");
    userEvent.type(impEl, "12345");
    userEvent.click(idBtn);
    const loadEl = screen.getByTestId("loader");
    expect(loadEl).toBeInTheDocument();
    userEvent.clear(impEl);
  });
  test("if the asteroid page is desplayed", () => {
    render(<App />);
    const asteroiEl = screen.getByTestId("asteroidpage");
    expect(asteroiEl).toBeInTheDocument();
  });
  test("random asteroid fetching", () => {});
});
