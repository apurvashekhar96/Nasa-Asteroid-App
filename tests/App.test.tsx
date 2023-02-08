import React from "react";
import { render, screen } from "@testing-library/react";
import HomePage from "../src/components/HomePage";

describe("Testing all pages", () => {
  test("Home Component renders all elements correctly", () => {
    render(<HomePage />);
    const headerEl = screen.getByText(/Query Asteroids App/i);
    expect(headerEl).toBeInTheDocument();
  });
});
