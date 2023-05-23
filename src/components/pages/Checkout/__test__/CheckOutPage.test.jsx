// just verify the right side is rendered correctly
// verify
import {
  screen,
  render,
} from "../../../../../test-utils/testing-library-utils";

import CheckOutPage from "../CheckOutPage";
describe("Testing CheckOutPage component", () => {
  test("The order summary section renders correctly.", () => {
    // empty orders are allowed currently
    // I see no harm at the moment.
    render(<CheckOutPage />);

    const orderSummaryTitle = screen.getByText("Order Summary");
    const orderSummarySubtotal = screen.getByText("Subtotal");
    const orderSummaryDeliveryfee = screen.getByText("Delivery fee");
    const orderSummaryTotal = screen.getByText("Total to pay");

    expect(orderSummaryTitle).toBeInTheDocument();
    expect(orderSummarySubtotal).toBeInTheDocument();
    expect(orderSummaryDeliveryfee).toBeInTheDocument();
    expect(orderSummaryTotal).toBeInTheDocument();
  });
  test("The stepper text renders correctly.", () => {
    render(<CheckOutPage />);
    // grab stepper text
    const orderSummaryTitle = screen.getByText("Address");
    const orderSummarySubtotal = screen.getByText("Delivery");
    const orderSummaryDeliveryfee = screen.getByText("Payments");
    // verify
    expect(orderSummaryTitle).toBeInTheDocument();
    expect(orderSummarySubtotal).toBeInTheDocument();
    expect(orderSummaryDeliveryfee).toBeInTheDocument();
  });
});
