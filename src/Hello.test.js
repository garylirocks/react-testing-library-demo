import React from "react";
import { render, waitForElement, fireEvent, cleanup } from "react-testing-library";
import Hello from "./Hello";

afterEach(cleanup);

it("Renders correctly", async () => {
  // Render new instance in every test to prevent leaking state
  const { getByText } = render(<Hello name="Gary" />);
  expect(getByText(/Hello Gary/)).toBeTruthy();
});


it("Document event listeners work", async () => {
  // Render new instance in every test to prevent leaking state
  const { getByText } = render(<Hello name="Gary" />);

  fireEvent.click(getByText(/Hello Gary/i));
  const textNode = await waitForElement(() => getByText(/Hola Gary/i));
  expect(textNode.textContent).toBe("Hola Gary");
});
