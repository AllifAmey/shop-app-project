import { render, screen } from "@testing-library/react";
import HomePage from "../HomePage";

describe("HomePage component", () => {
  test("check if correct text is rendered", () => {
    //arrange
    render(<HomePage />);
    const contactPageText = screen.getByText("AmeyShopUK");
    expect(contactPageText.toBeInTheDocument());
  });
});
