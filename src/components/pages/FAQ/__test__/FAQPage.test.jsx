import {
  render,
  screen,
} from "../../../../../test-utils/testing-library-utils";

import FAQPage from "../FAQPage";

describe("FAQPage component", () => {
  test("check if correct text is rendered", () => {
    render(<FAQPage />);
    // grab the text
    const deliveryQuestion1 = screen.getByText(
      "How do I know my item has been dispatched?"
    );
    const deliveryAnswer1 = screen.getByText(
      "If you signed up to the shop, you can log in and find out if your orders have been dispatched on the order section. If not then a email should be sent upon dispatch."
    );
    const deliveryQuestion2 = screen.getByText(
      "When can I expect to have my product delivered?"
    );
    const deliveryAnswer2 = screen.getByText(
      "Unfortunately, once dispatched, how and when your product is delivered out of our control. We try to dispatch the product as soon as possible."
    );
    const paymentQuestion1 = screen.getByText("How do I get a refund?");
    const paymentAnswer1 = screen.getByText(
      "You can email the owner via the contact page to request a refund."
    );
    const paymentQuestion2 = screen.getByText(
      "What type of payments do you accept?"
    );
    const paymentAnswer2 = screen.getByText(
      "We only accept Paypal at the moment but are looking to implement more down the line."
    );

    // verify
    expect(deliveryQuestion1).toBeInTheDocument();
    expect(deliveryAnswer1).toBeInTheDocument();
    expect(deliveryQuestion2).toBeInTheDocument();
    expect(deliveryAnswer2).toBeInTheDocument();
    expect(paymentQuestion1).toBeInTheDocument();
    expect(paymentAnswer1).toBeInTheDocument();
    expect(paymentQuestion2).toBeInTheDocument();
    expect(paymentAnswer2).toBeInTheDocument();
  });
});
