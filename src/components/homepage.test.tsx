import React from "react";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../state/store";
import HomePage from "./HomePage";

describe("Testing all pages", () => {
  test("Home Component renders all elements correctly", () => {
    render(
      <Provider store={store}>
        <HomePage />
      </Provider>
    );
    const headerEl = screen.getByText(/Query Asteroids App/i);
    const randBtn = screen.getByRole("button", {
      name: "Find a Random One!",
    });
    expect(randBtn).toBeInTheDocument();
    expect(headerEl).toBeInTheDocument();
    const idBtn = screen.getByText(/Search By ID/i);
    expect(idBtn).toBeDisabled();
    const impEl = screen.getByPlaceholderText("Enter Asteroid ID");
    userEvent.type(impEl, "12345");
    expect(idBtn).toBeEnabled();
  });
});
