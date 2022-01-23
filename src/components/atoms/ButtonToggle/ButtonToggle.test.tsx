import React from "react";
import ButtonToggle from "./ButtonToggle";
import { render } from "@testing-library/react";

describe("Button", () => {
  test("renders the Button component", () => {
    render(<ButtonToggle label="Lorem ipsum" />);
  });
});
