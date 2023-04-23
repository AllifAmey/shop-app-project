import { Outlet } from "react-router-dom";
import NavBar from "./components/layouts/Navbar/NavBar";
import Footer from "./components/layouts/Footer/Footer";

function RootLayout() {
  return (
    <>
      <nav>
        <NavBar />
      </nav>
      <main>
        <Outlet />
      </main>
      <footer style={{ marginTop: "auto" }}>
        <Footer />
      </footer>
    </>
  );
}

export default RootLayout;
