import { useOutletContext } from "react-router-dom";
import ContactPageDesktop from "./ContactPageDesktop";
import ContactPageTablet from "./ContactPageTablet";
import ContactPageMobile from "./ContactPageMobile";

function ContactPage() {
  /*
   docs - 
    Logic for layout-
      Overall the layout is flexboxes on top of flexboxes that use absolute positioning.
      On desktop/tablet the contact form section uses the grid system.
      On Mobile, the layout is more simple with contact information top and ,
      contact us section simplified and easier to use on Mobile. 
    
    future - 

    For scaling maybe attempt to use some Django email server.
    For now emails are sent from the backend using EmailJS.
    The emailjs usage should be quite small as I anticipate. 


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
