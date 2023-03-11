import React, { useState, useEffect } from "react";
import AccessAccountPage from "./AccessAccountPage";
import CustomerAccount from "./CustomerAccount";
import AdminAccount from "./AdminAccount";
import { useParams } from "react-router-dom";

function AccountPageRouting() {
  /*
  This component redirects the user to the correct account page.
  */

  // states
  const [isLogged, setisLogged] = useState(false);

  const params = useParams();
  const current_url = params.accessType;
  const legimate_urls = ["login", "recover", "sign_up"];

  useEffect(() => {
    let logged = localStorage.getItem("isLogged");
    if (logged === "LOGGED_IN") {
      setisLogged(true);
    }
  }, []);

  if (isLogged && localStorage.getItem("user_status") == "member") {
    return <CustomerAccount logOut={setisLogged}></CustomerAccount>;
  } else if (isLogged && localStorage.getItem("user_status") == "staff") {
    return <AdminAccount logOut={setisLogged}></AdminAccount>;
  }

  if (legimate_urls.includes(current_url)) {
    return (
      <>
        <AccessAccountPage login={setisLogged}></AccessAccountPage>
      </>
    );
  } else {
    return (
      <>
        <div>Error</div>
      </>
    );
  }
}

export default AccountPageRouting;
