import domain from "../../../domain";

export async function loginAPI(setIsLoading, login, email, pass) {
  setIsLoading(true);
  // TODO: error handle the log out function.
  // TODO: add the logut api to something else man.

  let response = await fetch(`${domain}/api/user/token/`, {
    method: "POST",
    body: JSON.stringify({ email: email, password: pass }),
    headers: { "Content-type": "application/json" },
  });
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
