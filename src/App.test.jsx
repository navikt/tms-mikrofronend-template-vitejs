import React from "react";
import { describe, expect, it } from "vitest";
import { fireEvent, render, screen } from "./utils/test-utils";
import App from "./App";

describe("Simple working test", () => {
  it("has a heading", () => {
    render(<App />);
    expect(screen.getByText(/Heading/)).toBeDefined();
  });

  it("has an alert", () => {
    render(<App />);
    expect(screen.getByText(/Alert/)).toBeDefined();
  });
});
