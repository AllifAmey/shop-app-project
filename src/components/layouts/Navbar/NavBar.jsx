import NavBarDesktop from "./NavBarDesktop";
import NavBarMobile from "./NavBarMobile";
import NavBarTablet from "./NavBarTablet";

function NavBar(props) {
  /*
  docs:
    Logic for layout- 
    The layout is based on flexbox.
    For Mobile and tablet a hamburger is used to display the links
    

   */
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
