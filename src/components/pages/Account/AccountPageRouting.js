import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import AccessAccountPage from "./AccessAccountPage";
import CustomerAccount from "./CustomerAccount";
import AdminAccount from "./AdminAccount";

function AccountPageRouting() {
  /*
  This component redirects the user to the correct account page.
  */

  // states
  const [isLogged, setisLogged] = useState(false);
  // formType
  const params = useParams();

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

  if (params.accessType == "login") {
    const accessType = "Login";
    return (
      <>
        <AccessAccountPage
          accessType={accessType}
          login={setisLogged}
        ></AccessAccountPage>
      </>
    );
  }

  if (params.accessType == "signup") {
    const accessType = "Sign Up";
    return (
      <>
        <AccessAccountPage
          accessType={accessType}
          login={setisLogged}
        ></AccessAccountPage>
      </>
    );
  }
  if (params.accessType == "recover") {
    const accessType = "Recover";
    return (
      <>
        <AccessAccountPage accessType={accessType}></AccessAccountPage>
      </>
    );
  }

  return <>Hello</>;
}

export default AccountPageRouting;
