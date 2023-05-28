import { useOutletContext } from "react-router-dom";
import CheckOutPageDesktop from "./CheckOutPageDesktop";
import CheckOutPageTablet from "./CheckOutPageTablet";
import CheckOutPageMobile from "./CheckOutPageMobile";

function CheckOutPage() {
  /*
    https://boltfinancial.wpengine.com/wp-content/uploads/2019/10/made-checkout-example-progress-indicator-1.png

    

    */
  const context = useOutletContext();
  return (
    <>
      {context.isDesktop && <CheckOutPageDesktop />}
      {context.isTablet && <CheckOutPageTablet />}
      {context.isMobile && <CheckOutPageMobile />}
    </>
  );
}

export default CheckOutPage;
