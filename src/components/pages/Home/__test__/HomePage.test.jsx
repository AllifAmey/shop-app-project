import { render, screen } from "@testing-library/react";
import MainContentHomePage from "../MainContentHomePage";

import { BrowserRouter } from "react-router-dom";

describe("HomePage component", () => {
  test("check if correct text is rendered", () => {
    //arrange
    render(
      <BrowserRouter>
        <MainContentHomePage />
      </BrowserRouter>
    );
    const contactPageText = screen.getByText("AmeyShopUK");
    console.log(contactPageText);
    expect(contactPageText).toBeDefined();
  });
});
