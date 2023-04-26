import { useRouteError } from "react-router-dom";
import NavBar from "../../layouts/Navbar/NavBar";

function ErrorPage() {
  const error = useRouteError();
  let title = "Something went wrong!";
  let message = "";

  if (error.status === 404) {
    title = "Not found!";
    message = "Could not find resource or page.";
  }
  return (
    <>
      <NavBar />
      <div style={{ textAlign: "center" }}>
        <h1>{title}</h1>
        {message !== "" && <p>{message}</p>}
      </div>
    </>
  );
}

export default ErrorPage;
