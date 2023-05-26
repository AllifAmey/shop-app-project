import FooterDesktop from "./FooterDesktop";
import FooterMobile from "./FooterMobile";
import FooterTablet from "./FooterTablet";

function Footer(props) {
  return (
    <>
      {props.isDesktop && <FooterDesktop />}
      {props.isTablet && <FooterTablet />}
      {props.isMobile && <FooterMobile />}
    </>
  );
}

export default Footer;
