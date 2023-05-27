import { useOutletContext } from "react-router-dom";

import AccessAccountDesktop from "./AccessAccountDesktop";
import AccessAccountTablet from "./AccessAccountTablet";
import AccessAccountMobile from "./AccessAccountMobile";

function AccessAccountPage(props) {
  /*
  Page to login or sign up.
  */
  const context = useOutletContext();
  return (
    <>
      {context.isDesktop && <AccessAccountDesktop />}
      {context.isTablet && <AccessAccountTablet />}
      {context.isMobile && <AccessAccountMobile />}
    </>
  );
}

export default AccessAccountPage;
