import { useOutletContext } from "react-router-dom";
import ContactPageDesktop from "./ContactPageDesktop";
import ContactPageTablet from "./ContactPageTablet";
import ContactPageMobile from "./ContactPageMobile";

function ContactPage() {
  /**
   *https://i.ytimg.com/vi/ZafzM_z9PLs/maxresdefault.jpg
   Contact page with picture under the phone number.
   https://viclafouch.github.io/mui-tel-input/docs/getting-started/ phone number. 
   */

  /*
   docs - 
    Logic for layout-
      The way it works is simple. It's flexboxes on top of flexboxes to give the layout from the link above.
      The idea is to have a main flexbox and then to have a flexbox on top of that using absolute to move on top,
      and shift to the left to give this sort of feel that it is on top.
      The main reason for this design is due to intuition. I feel it looks good .
    
    future - 

    Perhaps the look of the layout needs to change but not much else.
    For scaling, perhaps turn the current backend into something that can handle emails which is possible.
    The emailjs usage is quite minimal but that is anticipating audience. 


   */
  const context = useOutletContext();
  return (
    <>
      {context.isDesktop && <ContactPageDesktop />}
      {context.isTablet && <ContactPageTablet />}
      {context.isMobile && <ContactPageMobile />}
    </>
  );
}

export default ContactPage;
