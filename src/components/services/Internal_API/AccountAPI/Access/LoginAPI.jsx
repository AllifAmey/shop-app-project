import domain from "../../../domain";

export async function loginAPI(setIsLoading, email, pass) {
  setIsLoading(true);
  let response = await fetch(`${domain}/api/user/token/`, {
    method: "POST",
    body: JSON.stringify({ email: email, password: pass }),
    headers: { "Content-type": "application/json" },
  });

  if (!response.ok) {
    setIsLoading(false);
    return "error";
  } else {
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
    if (!response.ok) {
      setIsLoading(false);
      return "error";
    } else {
      data = await response.json();

      setIsLoading(false);
      return data;
    }
  }
}
