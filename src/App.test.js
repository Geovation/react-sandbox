import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Geovation text", () => {
  render(<App />);
  const textElement = screen.getByText(/Geovation/i);
  expect(textElement).toBeInTheDocument();
});
