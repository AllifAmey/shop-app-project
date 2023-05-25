import * as React from "react";
import { useOutletContext } from "react-router-dom";
import FAQPageDesktop from "./FAQPageDesktop";
import FAQPageTablet from "./FAQPageTablet";
import FAQPageMobile from "./FAQPageMobile";

function FAQPage() {
  /*
    https://whatfix.com/blog/wp-content/uploads/2021/12/Screen-Shot-2021-12-13-at-12.21.26.png

    https://mui.com/material-ui/react-accordion/ 
    

    Accordion component is the one I am looking for.

    https://www.leadquizzes.com/wp-content/uploads/2020/07/screencapture-leadquizzes-pricing-2020-07-16-00_05_59.png - inspiration 
    
    docs - 
      logic for layout - 
        Accordians are used extensively to both showcase the question and the answer.
        This layout for the FAQ was chosen due to the lack of questions I can think of.
        scaling potential - 
        I have seperated the questions on a seperate widget and layed out the formatting for a ,
        future backend feature of the FAQ.
        Catagory was not seperated due to layout for catagories being unstable.
        What is stable are the questions and answers, they should look like this in the future.


      If there are more and as the ecommerce, or if, the ecommerce expands then consider using,
      a search bar type of layout. 
      In the search bar type of layout perhaps the backend, has to be used to better handle the 
      increasing amount of questions that would be posed . 


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
