import React from "react";
import { render, waitForElement, fireEvent } from "react-testing-library";
import Hello from "./Hello";


it("Renders correctly", async () => {
  // Render new instance in every test to prevent leaking state
  const { getByText } = render(<Hello name="Gary" />);
  expect(getByText(/Hello Gary/)).toBeInTheDocument();
});

it("Document event listeners work", async () => {
  // Render new instance in every test to prevent leaking state
  const { getByText } = render(<Hello name="Gary" />);

  fireEvent.click(getByText(/Hello Gary/i));
  const textNode = await waitForElement(() => getByText(/Hola Gary/i));
  // expect(textNode.textContent).toBe("Hola Gary");

  expect(textNode).toHaveTextContent('Hola Gary');
});
