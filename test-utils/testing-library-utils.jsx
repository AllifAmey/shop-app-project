import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

const renderWithContext = (ui, options) =>
  render(ui, { wrapper: BrowserRouter, ...options });

// re-export everything
export * from "@testing-library/react";

// override render method
export { renderWithContext as render };
