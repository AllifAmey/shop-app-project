import domain from "../../../domain";

export async function loginAPI(setIsLoading, login, email, pass) {
  setIsLoading(true);

  let response = await fetch(`${domain}/api/user/token/`, {
    method: "POST",
    body: JSON.stringify({ email: email, password: pass }),
    headers: { "Content-type": "application/json" },
  });

  if (response.status == 400) {
    // quick fix to bug issue
    /*
    Bug is part of a larger problem to be dealt with soon - lack of error handling and validation.
    Explanation of bug - 
    When user first tries to log in with wrong credentials and then tries to,
    log in with the correct credentials the second time they are not directed to the ,
    account page. 
    */
    setIsLoading(false);
    return;
  }
  let data = await response.json();
  // user data is then set in localStorage

  localStorage.setItem("Token", data.token);
  localStorage.setItem("isLogged", "LOGGED_IN");

  response = await fetch(`${domain}/api/user/me/`, {
    method: "GET",
    headers: {
      "Content-type": "application/json",
      Authorization: `Token ${data.token}`,
    },
  });
  data = await response.json();

  if (data.user_status == "member") {
    localStorage.setItem("username", data.name);
  } else if (data.user_status == "staff") {
    localStorage.setItem("username", data.email);
  }
  localStorage.setItem("user_id", data.user_id);
  localStorage.setItem("user_status", data.user_status);

  setIsLoading(false);

  login(true);
}
