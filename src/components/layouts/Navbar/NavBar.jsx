import NavBarDesktop from "./NavBarDesktop";
import NavBarMobile from "./NavBarMobile";
import NavBarTablet from "./NavBarTablet";

function NavBar(props) {
  return (
    <>
      {props.isDesktop && <NavBarDesktop isDesktop={props.isDesktop} />}
      {props.isTablet && <NavBarTablet />}
      {props.isMobile && <NavBarMobile />}
    </>
  );
}

export default NavBar;
