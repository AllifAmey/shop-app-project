import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./components/layouts/Navbar/NavBar";
import Footer from "./components/layouts/Footer/Footer";
import { useMediaQuery } from "react-responsive";

function RootLayout() {
  const isDesktop = useMediaQuery({ minWidth: 992 });
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });

  useEffect(() => {
    window.onpopstate = () => {
      // if browser back buttton is clicked
      // go back 2 times so that users can actually get out of site.
      if (window.location.pathname === "/") {
        window.history.go(-2);
      }
    };
  });
  return (
    <>
      <nav>
        <NavBar isDesktop={isDesktop} isMobile={isMobile} isTablet={isTablet} />
      </nav>
      <main>
        <Outlet
          context={{
            isDesktop: isDesktop,
            isMobile: isMobile,
            isTablet: isTablet,
          }}
        />
      </main>
      <footer style={{ marginTop: "auto" }}>
        <Footer isDesktop={isDesktop} isMobile={isMobile} isTablet={isTablet} />
      </footer>
    </>
  );
}

export default RootLayout;
