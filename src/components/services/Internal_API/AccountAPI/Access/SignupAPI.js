import domain from "../../../domain";

export async function SignUp(setIsLoading, name, email, pass) {
  setIsLoading(true);

  const response = await fetch(`${domain}/api/user/create/`, {
    method: "POST",
    body: JSON.stringify({ name: name, email: email, password: pass }),
    headers: { "Content-type": "application/json" },
  });
  const data = await response.json();
  console.log(data);

  setIsLoading(false);
}
