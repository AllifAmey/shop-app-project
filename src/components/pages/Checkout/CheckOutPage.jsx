import { useOutletContext } from "react-router-dom";
import CheckOutPageDesktop from "./CheckOutPageDesktop";
import CheckOutPageTablet from "./CheckOutPageTablet";
import CheckOutPageMobile from "./CheckOutPageMobile";

import { Helmet } from "react-helmet-async";

function CheckOutPage() {
  /*
    https://boltfinancial.wpengine.com/wp-content/uploads/2019/10/made-checkout-example-progress-indicator-1.png
  docs:
    step1_part1
      The follow information is asked 
      First Name, Last Name, Email and Phone.
      Phone uses MuiTelInput to both validate and make it easier to,
      input phone.
    step1_part2
      The follow information is asked 
      Address Line 1, Addresss Line 2,
      City and Post Code.
      Phone uses MuiTelInput to both validate and make it easier to,
      input phone.
    step2
      User can pick premium or standard delivery
      They also have delivery message to send.
    step3
      User have orders displayed submit order button and payment button.
      This is very unpolished and work will only really be done ,
      once products have been finalised - I foresee that once the mobile app is completed.
      
    */
  const context = useOutletContext();
  return (
    <>
      <Helmet>
        <title>Checkout</title>
        <meta
          name="description"
          content="Checkout page , the last step to purchase our items at UniqueShopGB."
        />
        <link rel="canonical" href="/checkout" />
      </Helmet>
      {context.isDesktop && <CheckOutPageDesktop />}
      {context.isTablet && <CheckOutPageTablet />}
      {context.isMobile && <CheckOutPageMobile />}
    </>
  );
}

export default CheckOutPage;
