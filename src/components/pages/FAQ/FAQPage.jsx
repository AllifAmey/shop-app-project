import { useOutletContext } from "react-router-dom";
import FAQPageDesktop from "./FAQPageDesktop";
import FAQPageTablet from "./FAQPageTablet";
import FAQPageMobile from "./FAQPageMobile";

function FAQPage() {
  /*
   
    docs - 
      logic for layout - 
        Accordians are used extensively to both showcase the question and the answer.
        There are sections in bold and questions in accordions.
        Upon clicking accordion with the question, the accordion expands to show,
        the answer.
        On Desktop/Tablet a flexbox row is used to showcase the sections
        On Mobile a flexbox column is used instead.

    future:
      To scale:
        Create search bar.
        Store questions and answers in backend.
        Create APIs that allow the usage of FAQ
      backend structure:
        faq_catagory model
        model field above
        individual_catagory model attached to the above
        question ( with answer) attached to the model above
        model field above - charfield for question and charfield for answer

    */

  // I believe this will be the future structure for a backend :
  // faq_catagory model
  // model field above -
  // individual_catagory model attached to the above
  // model field above - charfield for catagory
  // question ( with answer) attached to the model above
  // model field above - charfield for question and charfield for answer
  const context = useOutletContext();

  return (
    <>
      {context.isDesktop && <FAQPageDesktop />}
      {context.isTablet && <FAQPageTablet />}
      {context.isMobile && <FAQPageMobile />}
    </>
  );
}

export default FAQPage;
