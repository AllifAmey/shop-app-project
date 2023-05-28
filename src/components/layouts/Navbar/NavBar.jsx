import NavBarDesktop from "./NavBarDesktop";
import NavBarMobile from "./NavBarMobile";
import NavBarTablet from "./NavBarTablet";

function NavBar(props) {
  return (
    <>
      {props.isDesktop && (
        <NavBarDesktop
          isDesktop={props.isDesktop}
          isTablet={props.isTablet}
          isMobile={props.isMobile}
        />
      )}
      {props.isTablet && (
        <NavBarTablet
          isDesktop={props.isDesktop}
          isTablet={props.isTablet}
          isMobile={props.isMobile}
        />
      )}
      {props.isMobile && (
        <NavBarMobile
          isDesktop={props.isDesktop}
          isTablet={props.isTablet}
          isMobile={props.isMobile}
        />
      )}
    </>
  );
}

export default NavBar;
