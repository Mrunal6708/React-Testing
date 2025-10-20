import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Counter from "./Counter";

describe("Counter Component", () => {
  test("renders with default count (0)", () => {
    render(<Counter />);
    const counterText = screen.getByText(/Counter:/i);
    expect(counterText).toHaveTextContent("Counter: 0");
  });

  test("increments the counter when + Increment button is clicked", () => {
    render(<Counter />);
    const incrementButton = screen.getByText("+ Increment");

    fireEvent.click(incrementButton);
    fireEvent.click(incrementButton); // click twice

    expect(screen.getByText(/Counter:/i)).toHaveTextContent("Counter: 2");
  });

  test("decrements the counter when - Decrement button is clicked", () => {
    render(<Counter />);
    const decrementButton = screen.getByText("- Decrement");

    fireEvent.click(decrementButton);
    expect(screen.getByText(/Counter:/i)).toHaveTextContent("Counter: -1");
  });

  test("handles edge cases like negative numbers correctly", () => {
    render(<Counter />);
    const decrementButton = screen.getByText("- Decrement");

    fireEvent.click(decrementButton);
    fireEvent.click(decrementButton);

    expect(screen.getByText(/Counter:/i)).toHaveTextContent("Counter: -2");
  });
});
